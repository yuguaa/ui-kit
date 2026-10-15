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
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-muted/35 flex h-svh items-stretch justify-center min-h-[42rem] p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Collapsible workflow kanban board
      </h1>
      <section className="flex flex-col gap-4 h-full max-w-[1180px] min-h-0 mx-auto w-full">
        <header className="px-1 py-1" aria-label="Workflow board toolbar">
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
                New card
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="flex-1 min-h-0" dragging="false">
          <ScrollArea className="flex flex-1 h-full min-h-0 min-w-0 pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 h-full outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "144px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="flex h-full min-w-full" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="flex gap-3 h-full items-stretch min-h-full min-w-full p-1">
                  <KanbanColumn className="h-full max-w-[21.5rem] min-h-full self-stretch shrink-0 sm:w-[21.5rem] w-[calc(100vw-5.5rem)]" value="backlog" dragging="false">
                    <Card className="gap-0 group/column h-full min-h-full p-0 w-full" size="sm" aria-label="Backlog: New ideas">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-10 px-3 py-2.5">
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-gray-500" aria-hidden="true">
                            <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="1"></circle>
                            </svg>
                          </span>
                          <CardTitle className="text-sm truncate" title="Backlog">
                            Backlog
                          </CardTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            2
                          </Badge>
                        </div>
                        <CardAction className="flex gap-1 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto items-center ml-auto opacity-0 pointer-events-none self-center transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Collapse Backlog">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Backlog column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </CardAction>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col min-h-0 p-2 pt-0">
                        <div className="flex-1 min-h-0 overflow-y-auto px-1 py-1">
                          <KanbanColumnContent className="gap-3 min-h-full">
                            <KanbanItem value="task-1" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Draft partner intake workflow for multi-region implementation teams">
                                      Draft partner intake workflow for multi-region implementation teams
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Elena Torres">
                                              Elena Torres
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$12,800.00">
                                            $12,800.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Define approval path...">
                                            Define approval path...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            1
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            3
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Nora Lee" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          24d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="task-2" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Map renewal risk signals">
                                      Map renewal risk signals
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Omar Haddad">
                                              Omar Haddad
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$32,500.00">
                                            $32,500.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Choose data sources...">
                                            Choose data sources...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            5
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            4
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          21d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <Button className="bg-background/85 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto h-7 hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity w-full" type="button" tabIndex="0" aria-label="Add card to Backlog">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                          </KanbanColumnContent>
                        </div>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full max-w-[21.5rem] min-h-full self-stretch shrink-0 sm:w-[21.5rem] w-[calc(100vw-5.5rem)]" value="todo" dragging="false">
                    <Card className="gap-0 group/column h-full min-h-full p-0 w-full" size="sm" aria-label="Todo: Ready to start">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-10 px-3 py-2.5">
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-sky-500" aria-hidden="true">
                            <svg className="lucide lucide-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                          </span>
                          <CardTitle className="text-sm truncate" title="Todo">
                            Todo
                          </CardTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            3
                          </Badge>
                        </div>
                        <CardAction className="flex gap-1 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto items-center ml-auto opacity-0 pointer-events-none self-center transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Collapse Todo">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Todo column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </CardAction>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col min-h-0 p-2 pt-0">
                        <div className="flex-1 min-h-0 overflow-y-auto px-1 py-1">
                          <KanbanColumnContent className="gap-3 min-h-full">
                            <KanbanItem value="task-3" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Prepare workspace launch checklist for enterprise tenant provisioning">
                                      Prepare workspace launch checklist for enterprise tenant provisioning
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Nora Lee" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Nora Lee">
                                              Nora Lee
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$24,000.00">
                                            $24,000.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Set adoption target...">
                                            Set adoption target...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            4
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            3
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Nora Lee" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          18d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="task-4" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Create account health scorecard with renewal risk weighting">
                                      Create account health scorecard with renewal risk weighting
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Priya Shah">
                                              Priya Shah
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$16,900.00">
                                            $16,900.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Confirm scoring weights...">
                                            Confirm scoring weights...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            3
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            6
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Liam Carter" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          14d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="task-5" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Review procurement handoff notes for multi-region vendor approval">
                                      Review procurement handoff notes for multi-region vendor approval
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Liam Carter" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Liam Carter">
                                              Liam Carter
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$9,600.00">
                                            $9,600.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Attach vendor terms...">
                                            Attach vendor terms...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            1
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Liam Carter" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          12d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <Button className="bg-background/85 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto h-7 hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity w-full" type="button" tabIndex="0" aria-label="Add card to Todo">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                          </KanbanColumnContent>
                        </div>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full max-w-[21.5rem] min-h-full self-stretch shrink-0 sm:w-[21.5rem] w-[calc(100vw-5.5rem)]" value="inProgress" dragging="false">
                    <Card className="gap-0 group/column h-full min-h-full p-0 w-full" size="sm" aria-label="In Progress: Active work">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-10 px-3 py-2.5">
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-amber-500" aria-hidden="true">
                            <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="1"></circle>
                            </svg>
                          </span>
                          <CardTitle className="text-sm truncate" title="In Progress">
                            In Progress
                          </CardTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            2
                          </Badge>
                        </div>
                        <CardAction className="flex gap-1 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto items-center ml-auto opacity-0 pointer-events-none self-center transition-opacity">
                          <Button type="button" tabIndex="0" aria-label="Collapse In Progress">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center opacity-100! outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move In Progress column">
                            <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <circle cx="9" cy="19" r="1"></circle>
                              <circle cx="15" cy="12" r="1"></circle>
                              <circle cx="15" cy="5" r="1"></circle>
                              <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                          </KanbanColumnHandle>
                        </CardAction>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col min-h-0 p-2 pt-0">
                        <div className="flex-1 min-h-0 overflow-y-auto px-1 py-1">
                          <KanbanColumnContent className="gap-3 min-h-full">
                            <KanbanItem value="task-6" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Automate invoice approval queue">
                                      Automate invoice approval queue
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Omar Haddad">
                                              Omar Haddad
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$41,200.00">
                                            $41,200.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Connect approval rules...">
                                            Connect approval rules...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            4
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            7
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            6
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Elena Torres" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          8d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="task-7" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="gap-0 p-0" size="sm">
                                  <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-w-0 pb-0 pt-3 px-3">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default" aria-hidden="true">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-pin size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Pin" tabler="IconPin" hugeicons="Pin02Icon" phosphor="PushPinIcon" remixicon="RiPushpinLine" aria-hidden="true">
                                          <path d="M12 17v5"></path>
                                          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Build segment sync audit trail">
                                      Build segment sync audit trail
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[8.75rem] pb-3 pt-3 px-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-user-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                              <circle cx="12" cy="8" r="5"></circle>
                                              <path d="M20 21a8 8 0 0 0-16 0"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="sm">
                                              <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate" title="Priya Shah">
                                              Priya Shah
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                              <path d="M12 18V6"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="font-medium tabular-nums truncate" title="$27,400.00">
                                            $27,400.00
                                          </span>
                                        </div>
                                      </div>
                                      <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                        <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                          <ItemMedia className="size-auto" variant="icon">
                                            <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <div className="min-w-0">
                                          <span className="truncate" title="Log sync failures...">
                                            Log sync failures...
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            2
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            5
                                          </span>
                                        </span>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          <span className="tabular-nums">
                                            4
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center shrink-0">
                                        <div className="flex" aria-label="Assignees">
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <Avatar className="-ml-1.5 first:ml-0 ring-2 ring-background size-5" size="sm">
                                            <AvatarImage alt="Marcus Chen" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <span className="flex gap-1 items-center tabular-nums">
                                          <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          5d
                                        </span>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <Button className="bg-background/85 group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto h-7 hover:text-foreground opacity-0 pointer-events-none text-muted-foreground transition-opacity w-full" type="button" tabIndex="0" aria-label="Add card to In Progress">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                          </KanbanColumnContent>
                        </div>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full min-h-full self-stretch shrink-0" value="blocked" dragging="false">
                    <Card className="bg-muted gap-0 h-full min-h-full p-0 w-10" size="sm">
                      <Button className="cursor-pointer flex-col gap-2 h-full justify-start px-0 py-2.5 rounded-lg w-full" type="button" tabIndex="0" aria-label="Expand Blocked: Needs help" aria-expanded="false">
                        <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-red-500" aria-hidden="true">
                          <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </span>
                        <span className="flex items-start justify-center min-h-0 pt-1">
                          <span className="[writing-mode:vertical-rl] font-medium rotate-180 text-foreground text-xs truncate">
                            Blocked
                          </span>
                        </span>
                        <span className="tabular-nums text-foreground text-xs">
                          2
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full min-h-full self-stretch shrink-0" value="reviewing" dragging="false">
                    <Card className="bg-muted gap-0 h-full min-h-full p-0 w-10" size="sm">
                      <Button className="cursor-pointer flex-col gap-2 h-full justify-start px-0 py-2.5 rounded-lg w-full" type="button" tabIndex="0" aria-label="Expand Reviewing: In review" aria-expanded="false">
                        <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-violet-500" aria-hidden="true">
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                        </span>
                        <span className="flex items-start justify-center min-h-0 pt-1">
                          <span className="[writing-mode:vertical-rl] font-medium rotate-180 text-foreground text-xs truncate">
                            Reviewing
                          </span>
                        </span>
                        <span className="tabular-nums text-foreground text-xs">
                          3
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full min-h-full self-stretch shrink-0" value="done" dragging="false">
                    <Card className="bg-muted gap-0 h-full min-h-full p-0 w-10" size="sm">
                      <Button className="cursor-pointer flex-col gap-2 h-full justify-start px-0 py-2.5 rounded-lg w-full" type="button" tabIndex="0" aria-label="Expand Done: Ready" aria-expanded="false">
                        <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-green-500" aria-hidden="true">
                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="flex items-start justify-center min-h-0 pt-1">
                          <span className="[writing-mode:vertical-rl] font-medium rotate-180 text-foreground text-xs truncate">
                            Done
                          </span>
                        </span>
                        <span className="tabular-nums text-foreground text-xs">
                          2
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full min-h-full self-stretch shrink-0" value="closed" dragging="false">
                    <Card className="bg-muted gap-0 h-full min-h-full p-0 w-10" size="sm">
                      <Button className="cursor-pointer flex-col gap-2 h-full justify-start px-0 py-2.5 rounded-lg w-full" type="button" tabIndex="0" aria-label="Expand Closed: Archived" aria-expanded="false">
                        <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-rose-500" aria-hidden="true">
                          <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </span>
                        <span className="flex items-start justify-center min-h-0 pt-1">
                          <span className="[writing-mode:vertical-rl] font-medium rotate-180 text-foreground text-xs truncate">
                            Closed
                          </span>
                        </span>
                        <span className="tabular-nums text-foreground text-xs">
                          0
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="h-full min-h-full self-stretch shrink-0" value="cancelled" dragging="false">
                    <Card className="bg-muted gap-0 h-full min-h-full p-0 w-10" size="sm">
                      <Button className="cursor-pointer flex-col gap-2 h-full justify-start px-0 py-2.5 rounded-lg w-full" type="button" tabIndex="0" aria-label="Expand Cancelled: Stopped" aria-expanded="false">
                        <span className="[&>svg]:size-4 flex items-center justify-center shrink-0 size-5 text-orange-500" aria-hidden="true">
                          <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="10" x2="10" y1="15" y2="9"></line>
                            <line x1="14" x2="14" y1="15" y2="9"></line>
                          </svg>
                        </span>
                        <span className="flex items-start justify-center min-h-0 pt-1">
                          <span className="[writing-mode:vertical-rl] font-medium rotate-180 text-foreground text-xs truncate">
                            Cancelled
                          </span>
                        </span>
                        <span className="tabular-nums text-foreground text-xs">
                          2
                        </span>
                      </Button>
                    </Card>
                  </KanbanColumn>
                </KanbanBoard>
              </div>
            </div>
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1049.8791540785498px"}}>
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
