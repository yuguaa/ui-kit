import { Rating } from "@/registry-neui/bases/base/neui/rating"
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
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center min-h-svh p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Access review board
      </h1>
      <section className="flex flex-col gap-4 max-w-[1280px] mx-auto w-full">
        <header className="px-1 py-1" aria-label="Access review toolbar">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2 items-center min-w-0">
                <h2 className="font-semibold text-base truncate">
                  Access Review
                </h2>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  10
                </Badge>
              </div>
              <p className="line-clamp-1 mt-0.5 text-muted-foreground text-sm">
                Review access changes, risk signals, and owner attestations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full">
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
                New review
              </Button>
            </div>
          </div>
        </header>
        <Kanban className="max-w-full w-full" dragging="false">
          <ScrollArea className="pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "664px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="min-w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                <KanbanBoard className="flex gap-5 items-start p-1 w-max">
                  <KanbanColumn className="self-start shrink-0 w-64" value="intake" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Intake">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-sky-500" aria-hidden="true">
                          <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Intake">
                            Intake
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            2
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add intake review">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Intake column">
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
                          <KanbanItem value="review-101" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-amber-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Stripe">
                                      Stripe
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Medium
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1021
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Billing admin">
                                            Billing admin
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Verify billing administrator grant">
                                            Verify billing administrator grant
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            18m ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Avery Stone" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Avery Stone">
                                            Avery Stone
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="3 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="3 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          3
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Today
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="review-102" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-emerald-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Support console">
                                      Support console
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Low
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1022
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Session replay">
                                            Session replay
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Confirm support console impersonation role">
                                            Confirm support console impersonation role
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            2h ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Talia Moss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Talia Moss">
                                            Talia Moss
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="2 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="1 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          1
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="1 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          1
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      2d
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add intake review">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add intake review
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="owner-review" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Owner Review">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-violet-500" aria-hidden="true">
                          <svg className="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" aria-hidden="true">
                            <path d="m16 11 2 2 4-4"></path>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Owner Review">
                            Owner Review
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            2
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add owner review">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Owner Review column">
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
                          <KanbanItem value="review-201" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-amber-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Snowflake">
                                      Snowflake
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Medium
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1104
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Schema owner">
                                            Schema owner
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Attest warehouse schema owner access">
                                            Attest warehouse schema owner access
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            41m ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Dev Iqbal" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Dev Iqbal">
                                            Dev Iqbal
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="3 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="3 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          3
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      1d
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="review-202" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-emerald-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Workspace admin">
                                      Workspace admin
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Low
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1107
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Org settings">
                                            Org settings
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Review workspace owner permissions">
                                            Review workspace owner permissions
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            Yesterday
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Camila Reed" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Camila Reed">
                                            Camila Reed
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="2 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="1 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          1
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="4 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          4
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      3d
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add owner review">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add owner review
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="risk-review" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Risk Review">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-red-500" aria-hidden="true">
                          <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Risk Review">
                            Risk Review
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            2
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add risk review">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Risk Review column">
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
                          <KanbanItem value="review-301" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-red-600 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="GitHub Enterprise">
                                      GitHub Enterprise
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                                      Critical
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1208
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Repository admin">
                                            Repository admin
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Remove dormant repository administrator">
                                            Remove dormant repository administrator
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            44d ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Jonas Hart" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Jonas Hart">
                                            Jonas Hart
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="5 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="4 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          4
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="7 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          7
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Overdue
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="review-302" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-red-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Workday">
                                      Workday
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      High
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1212
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Payroll export">
                                            Payroll export
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Validate payroll export permission">
                                            Validate payroll export permission
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            6d ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Freya Chen" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Freya Chen">
                                            Freya Chen
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="4 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="5 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          5
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Today
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add risk review">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add risk review
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="exception" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Exception">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-cyan-500" aria-hidden="true">
                          <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Exception">
                            Exception
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            1
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add exception">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Exception column">
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
                          <KanbanItem value="review-401" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-red-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Okta">
                                      Okta
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      High
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1301
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Break-glass admin">
                                            Break-glass admin
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Time-box break-glass identity access">
                                            Time-box break-glass identity access
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            12m ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Avery Stone" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Avery Stone">
                                            Avery Stone
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="4 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="3 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          3
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="4 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          4
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      12h
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add exception">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add exception
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="removal" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Removal">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-amber-500" aria-hidden="true">
                          <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Removal">
                            Removal
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            1
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add removal">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Removal column">
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
                          <KanbanItem value="review-501" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-amber-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="Customer data platform">
                                      Customer data platform
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Medium
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1416
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Audience export">
                                            Audience export
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Queue marketing contractor data export removal">
                                            Queue marketing contractor data export removal
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            19d ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Talia Moss" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Talia Moss">
                                            Talia Moss
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="3 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Queued
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add removal">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add removal
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <KanbanColumn className="self-start shrink-0 w-64" value="certified" dragging="false">
                    <Card className="bg-muted/40 gap-0 group/column overflow-hidden p-0 w-full" size="sm" aria-label="Certified">
                      <CardHeader className="flex flex-row gap-2 items-center min-h-9 px-2 py-2">
                        <span className="[&>svg]:block [&>svg]:size-4 flex items-center justify-center leading-none shrink-0 size-4 text-emerald-500" aria-hidden="true">
                          <svg className="lucide lucide-badge-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-hidden="true">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <div className="flex flex-1 gap-2 items-center min-w-0">
                          <span className="font-semibold leading-5 text-sm truncate" title="Certified">
                            Certified
                          </span>
                          <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                            2
                          </span>
                        </div>
                        <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                          <Button className="bg-transparent border border-transparent hover:bg-background! hover:border-border! hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Add certification">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                          <KanbanColumnHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing bg-transparent border border-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:border-border! hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Certified column">
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
                          <KanbanItem value="review-601" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-emerald-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="GRC workspace">
                                      GRC workspace
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Low
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1505
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Audit evidence">
                                            Audit evidence
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Certify audit evidence reader">
                                            Certify audit evidence reader
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            3h ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Mina Patel" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Mina Patel">
                                            Mina Patel
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="2 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="1 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          1
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="1 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          1
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Done
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                          <KanbanItem value="review-602" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                            <KanbanItemHandle className="block" dragging="false">
                              <Card className="bg-card gap-0 hover:border-foreground/20 hover:shadow-sm p-0 shadow-xs transition-[border-color,box-shadow]" size="sm">
                                <CardHeader className="gap-x-2 grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3">
                                  <span className="bg-emerald-500 ml-0.5 rounded-md size-2.5" aria-hidden="true"></span>
                                  <div className="flex gap-2 items-center justify-between min-w-0">
                                    <CardTitle className="leading-5 min-w-0 text-sm truncate" title="CI/CD platform">
                                      CI/CD platform
                                    </CardTitle>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      Low
                                    </Badge>
                                  </div>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3 min-h-[11.75rem] pb-3 pt-3 px-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-key-round size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="font-medium tabular-nums truncate">
                                            IAM-1511
                                          </span>
                                          <span className="text-muted-foreground text-xs truncate" title="Deploy approval">
                                            Deploy approval
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-sm">
                                      <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                        <ItemMedia className="size-auto" variant="icon">
                                          <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="min-w-0">
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="truncate" title="Certify production deploy approval">
                                            Certify production deploy approval
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            Today
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
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
                                            <AvatarImage alt="Rowan Kim" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate" title="Rowan Kim">
                                            Rowan Kim
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gap-x-2 grid grid-cols-[1rem_minmax(0,1fr)] items-center min-h-5 min-w-0 text-muted-foreground text-sm">
                                    <Item className="border-0 p-0 size-4 text-muted-foreground" variant="default" size="default">
                                      <ItemMedia className="size-auto" variant="icon">
                                        <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="min-w-0">
                                      <Rating aria-label="2 star access confidence">
                                        <div className="flex items-center">
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="relative">
                                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </Rating>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 items-center justify-between min-w-0 mt-auto pt-1 text-muted-foreground text-xs">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 evidence files">
                                        <svg className="lucide lucide-file size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="2 reviewers">
                                        <svg className="lucide lucide-square-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>
                                          2
                                        </span>
                                      </span>
                                      <span className="flex gap-1 items-center tabular-nums" aria-label="3 comments">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span>
                                          3
                                        </span>
                                      </span>
                                    </div>
                                    <span className="flex gap-1 items-center shrink-0 tabular-nums">
                                      <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                      </svg>
                                      Done
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </KanbanItemHandle>
                          </KanbanItem>
                        </KanbanColumnContent>
                        <Button className="bg-transparent border border-transparent font-normal h-8 hover:bg-background! hover:border-border! hover:text-foreground px-2 text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add certification">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add certification
                        </Button>
                      </CardContent>
                    </Card>
                  </KanbanColumn>
                  <div className="p-1 self-start shrink-0 w-64">
                    <Button className="h-9 hover:text-foreground px-2 text-muted-foreground" type="button" tabIndex="0" aria-label="Add access review stage">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Add Stage
                    </Button>
                  </div>
                </KanbanBoard>
              </div>
            </div>
            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "820.325px"}}>
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
