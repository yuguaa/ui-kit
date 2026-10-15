import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Dispatch layout data grid with drag-and-drop column ordering"}
      </h1>
      <Frame className="bg-card! w-full" spacing="sm">
        <header className="flex flex-col gap-2 items-start px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:flex-wrap sm:items-center sm:justify-between text-foreground">
          <div className="flex flex-col gap-0.5 min-w-0 sm:flex-1">
            <div className="font-semibold text-sm">
              {"Dispatch Layout"}
            </div>
            <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
              {"Role review sequence"}
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="whitespace-nowrap">
                {"7 fields"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="whitespace-nowrap">
                {"8 waves"}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 items-center sm:justify-end sm:shrink-0" role="toolbar" aria-label="Review layout actions">
            <Button type="button" tabIndex="0" aria-pressed="true" extracted="1">
              {"Dispatch"}
            </Button>
            <Button type="button" tabIndex="0" aria-pressed="false">
              {"Dock"}
            </Button>
            <Button type="button" tabIndex="0" aria-pressed="false">
              {"Risk"}
            </Button>
            <Button type="button" disabled="" tabIndex="0" disabled>
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              {"Reset"}
            </Button>
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="bg-muted/20 border-b border-border flex flex-col gap-2 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium shrink-0 text-foreground text-xs">
              {"Review Order"}
            </span>
            <ol className="flex flex-wrap gap-1 min-w-0 sm:justify-end text-xs" aria-label="Current review order">
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"1"}
                </span>
                <span>
                  {"Wave"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"2"}
                </span>
                <span>
                  {"Status"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"3"}
                </span>
                <span>
                  {"Dock"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"4"}
                </span>
                <span>
                  {"Carrier"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"5"}
                </span>
                <span>
                  {"Orders"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"6"}
                </span>
                <span>
                  {"Capacity"}
                </span>
              </li>
              <li className="bg-card border border-border flex gap-1.5 h-6 items-center px-2 rounded-full text-muted-foreground">
                <span className="font-medium tabular-nums text-foreground">
                  {"7"}
                </span>
                <span>
                  {"Exceptions"}
                </span>
              </li>
            </ol>
          </div>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1204px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "10px", "--data-grid-fill": "10"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-wave-size": "172", "--col-wave-size": "172", "--header-status-size": "172", "--col-status-size": "172", "--header-dock-size": "172", "--col-dock-size": "172", "--header-carrier-size": "172", "--col-carrier-size": "172", "--header-orders-size": "172", "--col-orders-size": "172", "--header-capacity-size": "172", "--col-capacity-size": "172", "--header-exceptions-size": "172", "--col-exceptions-size": "172", width: "calc(1204px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-wave-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-dock-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-carrier-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-orders-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-capacity-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-exceptions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="wave" data-header-id="wave" data-header-depth="0" style={{width: "calc(var(--header-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Wave"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Status"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="dock" data-header-id="dock" data-header-depth="0" style={{width: "calc(var(--header-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Dock"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="carrier" data-header-id="carrier" data-header-depth="0" style={{width: "calc(var(--header-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Carrier"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="orders" data-header-id="orders" data-header-depth="0" style={{width: "calc(var(--header-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Orders"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="capacity" data-header-id="capacity" data-header-depth="0" style={{width: "calc(var(--header-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Capacity"}
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="exceptions" data-header-id="exceptions" data-header-depth="0" style={{width: "calc(var(--header-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0", whiteSpace: "nowrap"}}>
                            <div className="flex gap-0.5 items-center justify-start">
                              <Button className="-ms-2 active:cursor-grabbing cursor-grab size-6" type="button" tabIndex="0" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_" aria-label="Drag to reorder">
                                <svg className="hover:opacity-100 lucide lucide-grip-vertical opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle>
                                </svg>
                              </Button>
                              <div className="grow">
                                {"Exceptions"}
                              </div>
                              <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                            </div>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4821">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4821">
                                {"WAV-4821"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Priority retail replenishment"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"At Risk"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 4"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Carrier check-in pending"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"Ryder"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Same day"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"LTL"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"128"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"940 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"91%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-warning h-full rounded-full" style={{width: "91%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-warning-foreground">
                              <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              {"5 open"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4822">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4822">
                                {"WAV-4822"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Marketplace express"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 2"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Ready to release"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"Shippo"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"2 day"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Parcel"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"214"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"512 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"76%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-success h-full rounded-full" style={{width: "76%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-success-foreground">
                              <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              {"Clear"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4823">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4823">
                                {"WAV-4823"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Store transfer north"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              {"Locked"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 7"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Inventory locked"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-store size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"Fleet 12"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Milk run"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Store Transfer"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"56"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"1,240 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"84%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-success h-full rounded-full" style={{width: "84%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-warning-foreground">
                              <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              {"1 open"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4824">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4824">
                                {"WAV-4824"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Regional courier pickup"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 1"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Courier staged"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"Quickline"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Courier"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Courier"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"88"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"176 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"63%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-success h-full rounded-full" style={{width: "63%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-success-foreground">
                              <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              {"Clear"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4825">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4825">
                                {"WAV-4825"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Wholesale pallets"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              {"Hold"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 5"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Pallet audit open"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"ArcBest"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Freight"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"LTL"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"34"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"2,180 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"98%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-destructive h-full rounded-full" style={{width: "98%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-warning-foreground">
                              <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              {"8 open"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4826">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4826">
                                {"WAV-4826"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Subscription cartons"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 3"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Labels printed"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"DHL"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Ground"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Parcel"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"302"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"604 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"70%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-success h-full rounded-full" style={{width: "70%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-success-foreground">
                              <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              {"Clear"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4827">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4827">
                                {"WAV-4827"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Store transfer south"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              {"At Risk"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 6"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Short pick review"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-store size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"Fleet 18"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Milk run"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Store Transfer"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"62"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"1,348 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"89%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-warning h-full rounded-full" style={{width: "89%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-warning-foreground">
                              <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              {"3 open"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="WAV-4828">
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-wave-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View fulfillment wave WAV-4828">
                                {"WAV-4828"}
                              </a>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Late parcel recovery"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dock-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="text-foreground text-sm truncate">
                                {"Dock 2"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Recovery lane clear"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-carrier-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex-none p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-foreground text-sm truncate">
                                  {"UPS"}
                                </span>
                                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                  <span className="shrink-0 truncate">
                                    {"Air saver"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Parcel"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-orders-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"119"}
                                <span className="ms-1 text-muted-foreground text-xs">
                                  {"orders"}
                                </span>
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"238 units"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-capacity-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <div className="flex flex-col gap-1.5 min-w-0">
                              <span className="tabular-nums text-foreground text-sm">
                                {"58%"}
                              </span>
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full w-20" aria-hidden="true">
                                <div className="bg-success h-full rounded-full" style={{width: "58%"}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-exceptions-size) * 1px)", opacity: "1", position: "relative", zIndex: "0"}}>
                            <span className="gap-1.5 inline-flex items-center text-sm text-success-foreground">
                              <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              {"Clear"}
                            </span>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
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
        <footer className="flex flex-row flex-wrap gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) text-muted-foreground text-xs">
          <span role="status">
            {"3 waves need review, 17 exceptions open"}
          </span>
          <span className="flex gap-1.5 items-center">
            <svg className="lucide lucide-grip-vertical size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
              <circle cx="9" cy="12" r="1"></circle>
              <circle cx="9" cy="5" r="1"></circle>
              <circle cx="9" cy="19" r="1"></circle>
              <circle cx="15" cy="12" r="1"></circle>
              <circle cx="15" cy="5" r="1"></circle>
              <circle cx="15" cy="19" r="1"></circle>
            </svg>
            {"Column order drives handoff sequence"}
          </span>
        </footer>
      </Frame>
    </main>
  )
}
