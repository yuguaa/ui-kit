import { Frame } from "@/registry-neui/bases/base/neui/frame"
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
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
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
        {"Release readiness kanban board"}
      </h1>
      <section className="flex flex-col gap-4 max-w-[1280px] mx-auto w-full">
        <header className="px-1 py-1" aria-label="Release readiness toolbar">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="font-semibold leading-7 text-lg truncate">
                {"Release Readiness Board"}
              </h2>
              <p className="leading-5 line-clamp-1 max-w-[44ch] mt-0.5 text-muted-foreground text-sm">
                {"Readiness, risk, and launch checks."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full" role="group" aria-label="Release board actions">
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                {"Filters"}
              </Button>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 14v2.2l1.6 1"></path>
                  <path d="M16 2v4"></path>
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M3 10h5"></path>
                  <path d="M8 2v4"></path>
                  <circle cx={16} cy={16} r={6}></circle>
                </svg>
                {"Windows"}
              </Button>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New change"}
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="w-full" dragging="false">
          <ScrollArea className="min-w-0 pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "660px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="min-w-full w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="auto-cols-[19rem] gap-3 grid-cols-none grid-flow-col items-start min-w-max p-1">
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="intake" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Intake: New changes">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Intake">
                          {"Intake"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"3"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add intake change" title="Add intake change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Intake column" title="Move Intake column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8429" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8429"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Enable saved cards for guest checkout">
                                    {"Enable saved cards for guest checkout"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    {"Medium"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                        <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                        <line x1={2} x2={22} y1={10} y2={10}></line>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Checkout"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"Apr 30, 20:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Nina Santos"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"1/4 - 25%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-chart-2 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" aria-valuetext="25%" role="progressbar" aria-labelledby="base-ui-_r_1_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_1_" role="presentation">
                                      {"REL-8429 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "25%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8427" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8427"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Add resend controls to login recovery">
                                    {"Add resend controls to login recovery"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Identity"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 1, 16:30 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Jonah Lee"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"2/4 - 50%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/35 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-valuetext="50%" role="progressbar" aria-labelledby="base-ui-_r_2_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2_" role="presentation">
                                      {"REL-8427 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "50%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8425" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8425"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Log receipt resend events for admins">
                                    {"Log receipt resend events for admins"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-receipt size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptDollarIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                        <path d="M12 17V7"></path>
                                        <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                        <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Billing"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 1, 19:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Theo Vincent"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"1/3 - 33%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-muted-foreground/35 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" aria-valuetext="33%" role="progressbar" aria-labelledby="base-ui-_r_3_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_3_" role="presentation">
                                      {"REL-8425 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "33%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="review-needed" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Review Needed: Waiting on approvers">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-info rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Review Needed">
                          {"Review Needed"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"3"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add review change" title="Add review change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Review Needed column" title="Move Review Needed column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8421" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8421"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Split EU checkout traffic by processor">
                                    {"Split EU checkout traffic by processor"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"Critical"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                        <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                        <line x1={2} x2={22} y1={10} y2={10}></line>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Checkout"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"Apr 30, 22:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Maya Patel"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"2/5 - 40%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar" aria-labelledby="base-ui-_r_4_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_4_" role="presentation">
                                      {"REL-8421 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8418" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8418"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Raise webhook retry ceiling for partners">
                                    {"Raise webhook retry ceiling for partners"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-webhook size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Webhooks"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 1, 18:30 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Omar Haddad"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"3/5 - 60%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" aria-valuetext="60%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                                      {"REL-8418 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "60%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8417" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8417"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Confirm processor failover limits">
                                    {"Confirm processor failover limits"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                        <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                        <line x1={2} x2={22} y1={10} y2={10}></line>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Checkout"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 1, 21:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Priya Menon"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"2/5 - 40%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar" aria-labelledby="base-ui-_r_6_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_6_" role="presentation">
                                      {"REL-8417 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="blocked" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Blocked: Needs escalation">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-destructive rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Blocked">
                          {"Blocked"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"2"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add blocked change" title="Add blocked change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Blocked column" title="Move Blocked column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8416" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8416"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Rotate signing keys for session tokens">
                                    {"Rotate signing keys for session tokens"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"High"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Identity"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 2, 19:30 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Priya Menon"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"2/4 - 50%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-valuetext="50%" role="progressbar" aria-labelledby="base-ui-_r_7_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_7_" role="presentation">
                                      {"REL-8416 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "50%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8413" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8413"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Rebuild analytics partitions for exports">
                                    {"Rebuild analytics partitions for exports"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"Critical"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-chart-column size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                        <path d="M18 17V9"></path>
                                        <path d="M13 17V5"></path>
                                        <path d="M8 17v-3"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Analytics"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 2, 23:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Theo Vincent"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"1/5 - 20%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-destructive **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" aria-valuetext="20%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                                      {"REL-8413 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "20%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="scheduled" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Scheduled: Window assigned">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-chart-2 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Scheduled">
                          {"Scheduled"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"3"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add scheduled change" title="Add scheduled change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Scheduled column" title="Move Scheduled column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8408" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8408"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Move invoice workers to new queues">
                                    {"Move invoice workers to new queues"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    {"Medium"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-receipt size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptDollarIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                        <path d="M12 17V7"></path>
                                        <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                        <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Billing"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 3, 21:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Theo Vincent"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"4/5 - 80%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-chart-2 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" aria-valuetext="80%" role="progressbar" aria-labelledby="base-ui-_r_9_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_9_" role="presentation">
                                      {"REL-8408 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "80%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8405" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8405"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Expand partner delivery event schema">
                                    {"Expand partner delivery event schema"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    {"Medium"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-webhook size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Webhooks"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 4, 17:30 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Omar Haddad"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"3/4 - 75%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-info **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" aria-valuetext="75%" role="progressbar" aria-labelledby="base-ui-_r_a_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_a_" role="presentation">
                                      {"REL-8405 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "75%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8402" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8402"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Reshard billing export queue">
                                    {"Reshard billing export queue"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    {"Medium"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-receipt size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptDollarIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                        <path d="M12 17V7"></path>
                                        <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                        <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Billing"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 4, 23:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Nina Santos"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"3/5 - 60%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-chart-2 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" aria-valuetext="60%" role="progressbar" aria-labelledby="base-ui-_r_b_">
                                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_b_" role="presentation">
                                      {"REL-8402 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack progressing="">
                                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "60%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="ready" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Ready: Cleared to launch">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-success rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Ready">
                          {"Ready"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"2"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add ready change" title="Add ready change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Ready column" title="Move Ready column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8399" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8399"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Open LATAM webhook fanout">
                                    {"Open LATAM webhook fanout"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-webhook size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Webhooks"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 5, 18:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Omar Haddad"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"5/5 - 100%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_c_">
                                    <ProgressLabel className="sr-only" complete="" id="base-ui-_r_c_" role="presentation">
                                      {"REL-8399 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8394" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8394"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Ship invoice PDF branding controls">
                                    {"Ship invoice PDF branding controls"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-receipt size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptIcon" tabler="IconReceipt" hugeicons="ReceiptDollarIcon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                        <path d="M12 17V7"></path>
                                        <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                        <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Billing"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"May 5, 20:30 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Nina Santos"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"4/4 - 100%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_d_">
                                    <ProgressLabel className="sr-only" complete="" id="base-ui-_r_d_" role="presentation">
                                      {"REL-8394 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                  <KanbanColumn className="max-w-[19rem] shrink-0 sm:w-[19rem] w-[calc(100vw-3rem)]" value="shipped" dragging="false">
                    <Frame className="group/column" spacing="sm" aria-label="Shipped: Post-launch watch">
                      <header className="flex flex-row gap-2 items-center min-h-10 px-2 py-1.5">
                        <span className="bg-success/70 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <div className="font-semibold leading-5 text-sm truncate" title="Shipped">
                          {"Shipped"}
                        </div>
                        <span className="font-medium shrink-0 tabular-nums text-muted-foreground text-sm">
                          {"2"}
                        </span>
                        <div className="flex gap-1 group-focus-within/kanban-column:opacity-100 group-hover/kanban-column:opacity-100 items-center ml-auto opacity-0 shrink-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Add shipped change" title="Add shipped change">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Shipped column" title="Move Shipped column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx={9} cy={12} r={1}></circle>
                              <circle cx={9} cy={5} r={1}></circle>
                              <circle cx={9} cy={19} r={1}></circle>
                              <circle cx={15} cy={12} r={1}></circle>
                              <circle cx={15} cy={5} r={1}></circle>
                              <circle cx={15} cy={19} r={1}></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </div>
                      </header>
                      <KanbanColumnContent className="p-0.5">
                        <KanbanItem value="release-8379" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8379"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Reduce invite session TTL">
                                    {"Reduce invite session TTL"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Identity"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"Apr 29, 17:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Maya Patel"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"3/3 - 100%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_e_">
                                    <ProgressLabel className="sr-only" complete="" id="base-ui-_r_e_" role="presentation">
                                      {"REL-8379 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                        <KanbanItem value="release-8372" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                          <KanbanItemHandle className="block" dragging="false">
                            <Item className="bg-card gap-3 hover:bg-muted/20 items-stretch" variant="outline" size="sm">
                              <ItemHeader className="gap-2.5 items-start min-w-0">
                                <ItemContent className="gap-1 min-w-0">
                                  <ItemDescription className="font-medium leading-4 tabular-nums text-muted-foreground text-xs tracking-normal">
                                    {"REL-8372"}
                                  </ItemDescription>
                                  <ItemTitle className="font-medium leading-5 line-clamp-2 text-[0.9375rem]" title="Archive legacy checkout experiment flags">
                                    {"Archive legacy checkout experiment flags"}
                                  </ItemTitle>
                                </ItemContent>
                                <ItemActions className="shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    {"Low"}
                                  </Badge>
                                </ItemActions>
                              </ItemHeader>
                              <ItemContent className="gap-2.5 min-w-0">
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-credit-card size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                        <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                                        <line x1={2} x2={22} y1={10} y2={10}></line>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="font-medium truncate">
                                        {"Checkout"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                        <path d="M16 14v2.2l1.6 1"></path>
                                        <path d="M16 2v4"></path>
                                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                        <path d="M3 10h5"></path>
                                        <path d="M8 2v4"></path>
                                        <circle cx={16} cy={16} r={6}></circle>
                                      </svg>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <span className="tabular-nums truncate">
                                        {"Apr 28, 15:00 UTC"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="gap-2 grid grid-cols-[1.25rem_minmax(0,1fr)] items-center leading-5 min-w-0 text-sm">
                                  <Item className="border-0 p-0 size-5 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                    <ItemMedia className="size-auto" variant="icon">
                                      <Avatar className="size-5" size="default">
                                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </ItemMedia>
                                  </Item>
                                  <div className="min-w-0">
                                    <span className="font-medium truncate">
                                      {"Jonah Lee"}
                                    </span>
                                  </div>
                                </div>
                              </ItemContent>
                              <ItemFooter className="flex-col gap-2 items-stretch min-w-0">
                                <div className="flex flex-col gap-2">
                                  <div className="flex gap-2 items-center justify-between leading-5 text-sm">
                                    <span className="text-muted-foreground">
                                      {"Checklist"}
                                    </span>
                                    <span className="leading-4 tabular-nums text-foreground text-xs">
                                      {"4/4 - 100%"}
                                    </span>
                                  </div>
                                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_f_">
                                    <ProgressLabel className="sr-only" complete="" id="base-ui-_r_f_" role="presentation">
                                      {"REL-8372 checklist progress"}
                                    </ProgressLabel>
                                    <ProgressTrack complete="">
                                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </div>
                              </ItemFooter>
                            </Item>
                          </KanbanItemHandle>
                        </KanbanItem>
                      </KanbanColumnContent>
                    </Frame>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </div>
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "800.9302325581396px"}}>
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
