import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Sprint backlog data grid with drag-and-drop reordering"}
      </h1>
      <Frame className="bg-card! w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) text-foreground">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="font-semibold text-sm">
              {"Sprint Backlog"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              {"Drag to prioritize"}
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="whitespace-nowrap">
                {"8 items"}
              </span>
            </div>
          </div>
          <Button className="text-foreground" type="button" disabled="" tabIndex="0" disabled extracted="1">
            <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
            {"Reset order"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "44px"}} />
                        <col style={{width: "40px"}} />
                        <col style={{width: "260px"}} />
                        <col style={{width: "165px"}} />
                        <col style={{width: "130px"}} />
                        <col style={{width: "110px"}} />
                        <col style={{width: "90px"}} />
                        <col style={{width: "125px"}} />
                        <col style={{width: "80px"}} />
                        <col style={{width: "56px"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="drag" data-header-id="drag" data-header-depth="0" style={{width: "44px"}}>
                            <span className="sr-only">
                              {"Reorder"}
                            </span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-0! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="rank" data-header-id="rank" data-header-depth="0" style={{width: "40px"}}>
                            {"#"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="task" data-header-id="task" data-header-depth="0" style={{width: "260px"}}>
                            {"Task"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "165px"}}>
                            {"Owner"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="team" data-header-id="team" data-header-depth="0" style={{width: "130px"}}>
                            {"Team"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="cycle" data-header-id="cycle" data-header-depth="0" style={{width: "110px"}}>
                            {"Cycle"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="dueDate" data-header-id="dueDate" data-header-depth="0" style={{width: "90px"}}>
                            {"Due"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "125px"}}>
                            {"Status"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="effort" data-header-id="effort" data-header-depth="0" style={{width: "80px"}}>
                            {"Effort"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}>
                            <span className="sr-only">
                              {"Actions"}
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2041" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="font-semibold gap-1 inline-flex items-center tabular-nums text-primary text-sm">
                              <svg className="lucide lucide-flag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                              </svg>
                              {"1"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Realtime presence"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2041"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Feature"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Leo Grant"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Collaboration"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 18"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 08"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"8"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Realtime presence" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2042" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"2"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-shield-check shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"SSO enforcement"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2042"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Security"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Sana Qureshi"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Identity"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 18"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 10"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              {"In Review"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"5"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for SSO enforcement" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2043" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"3"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Webhook retries"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2043"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Improvement"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Alex Johnson"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Platform"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 18"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 09"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"2"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Webhook retries" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2044" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"4"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-wrench shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Audit log export"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2044"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Improvement"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"David Kim"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Compliance"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 19"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 12"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              {"Blocked"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"3"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Audit log export" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2045" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"5"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Billing usage meters"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2045"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Feature"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Mira Stone"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Revenue"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 19"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 16"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"13"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Billing usage meters" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2046" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"6"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-flask-conical shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                                    <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                                    <path d="M6.453 15h11.094"></path>
                                    <path d="M8.5 2h7"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Search relevance"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2046"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Research"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Nora Vale"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Search"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Discovery"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 18"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"8"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Search relevance" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2047" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"7"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-sparkles shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    <path d="M20 2v4"></path>
                                    <path d="M22 4h-4"></path>
                                    <circle cx="4" cy="20" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Mobile offline mode"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2047"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Feature"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Theo Park"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Mobile"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 20"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 22"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"13"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Mobile offline mode" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="PLT-2048" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5">
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex="0" aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx="12" cy="9" r="1"></circle>
                                <circle cx="19" cy="9" r="1"></circle>
                                <circle cx="5" cy="9" r="1"></circle>
                                <circle cx="12" cy="15" r="1"></circle>
                                <circle cx="19" cy="15" r="1"></circle>
                                <circle cx="5" cy="15" r="1"></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle ps-0! px-2 py-1.5">
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"8"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-shield-check shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Token rotation"}
                                </span>
                                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="tabular-nums">
                                    {"PLT-2048"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Security"}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarFallback className="text-[10px]">
                                  {"RM"}
                                </AvatarFallback>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Ravi Menon"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-foreground text-sm truncate">
                              {"Security"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="block min-w-0 text-muted-foreground text-sm truncate">
                              {"Sprint 20"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"Jul 24"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <span className="tabular-nums text-foreground text-sm">
                              {"5"}
                              <span className="ms-1 text-muted-foreground text-xs">
                                {"pts"}
                              </span>
                            </span>
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5">
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Token rotation" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                    </DataGridTable>
                    </DataGridProvider>
                  </DataGridTableViewport>
                  </DataGridProvider>
                  <div id="_r_2_" style={{display: "none"}}>
                    {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
                  </div>
                  <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                </div>
              </div>
            </DataGridScrollArea>
            </DataGridProvider>
          </div>
        </FramePanel>
      </Frame>
    </main>
  )
}
