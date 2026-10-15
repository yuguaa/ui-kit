import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableRowExpand,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Shared drive tree data grid with drag-and-drop reordering"}
      </h1>
      <Frame className="bg-card! w-full" spacing="sm">
        <header className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) text-foreground">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="font-semibold text-sm">
              {"Shared Drive"}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center min-w-0">
              <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                <span className="truncate">
                  {"Northwind Workspace"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="shrink-0 whitespace-nowrap">
                  {"47 items"}
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  {"Used"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                  {"1.04 GB"}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center min-w-0">
            <Button type="button" tabIndex={0} extracted="1">
              <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" data-icon="inline-start" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="m21 3-7 7"></path>
                <path d="m3 21 7-7"></path>
                <path d="M9 21H3v-6"></path>
              </svg>
              {"Expand all"}
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Minimize2Icon" tabler="IconMinimize" hugeicons="Minimize01Icon" phosphor="CornersInIcon" remixicon="RiFullscreenExitLine" data-icon="inline-start" aria-hidden="true">
                <path d="m14 10 7-7"></path>
                <path d="M20 10h-6V4"></path>
                <path d="m3 21 7-7"></path>
                <path d="M4 14h6v6"></path>
              </svg>
              {"Collapse all"}
            </Button>
            <Button type="button" disabled="" tabIndex={0} disabled>
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" data-icon="inline-start" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              {"Reset"}
            </Button>
          </div>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea className="[&>[data-slot=scroll-area-viewport]]:max-h-140" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1206px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-drag-size": "44", "--col-drag-size": "44", "--header-select-size": "32", "--col-select-size": "32", "--header-name-size": "502", "--col-name-size": "502", "--header-type-size": "116", "--col-type-size": "116", "--header-size-size": "132", "--col-size-size": "132", "--header-owner-size": "176", "--col-owner-size": "176", "--header-modified-size": "148", "--col-modified-size": "148", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1206px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-drag-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-type-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-size-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-modified-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead className="[&_tr]:bg-card sticky top-0 z-10">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 pe-0 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="drag" data-header-id="drag" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{top: "0px", width: "calc(var(--header-drag-size) * 1px)"}}>
                            <span className="sr-only">
                              {"Reorder"}
                            </span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" style={{top: "0px", width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-hidden px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" data-pinned="start" data-last-col="start" style={{top: "0px", width: "calc(var(--header-name-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                                {"Name"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="absolute before:absolute before:bg-border before:end-0 before:inset-y-0 before:w-px cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="type" data-header-id="type" data-header-depth="0" style={{width: "calc(var(--header-type-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                {"Type"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 [&>div>div]:justify-end [&>div]:justify-end align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="size" data-header-id="size" data-header-depth="0" style={{width: "calc(var(--header-size-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                {"Size"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                {"Owner"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 overflow-visible px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="modified" data-header-id="modified" data-header-depth="0" style={{width: "calc(var(--header-modified-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                {"Modified"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                            <span className="sr-only">
                              {"Actions"}
                            </span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="product-design" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="true" aria-label="Collapse row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Product Design"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"200.1 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"13 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Mira Stone"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 24, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Yesterday"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Product Design" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="design-system" data-depth="1" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_17_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Design System"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"9.68 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"7 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Mira Stone"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 22, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"2 days ago"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Design System" aria-haspopup="menu" id="base-ui-_r_1d_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="marketing-site" data-depth="1" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1f_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Marketing Site"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"188.0 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"3 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Sana Qureshi"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 23, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Yesterday"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Marketing Site" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="design-review" data-depth="1" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1n_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "20px"}}>
                                  <span className="shrink-0 w-2" aria-hidden="true"></span>
                                </DataGridTableRowExpand>
                                <span className="shrink-0 w-5" aria-hidden="true"></span>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Design Review.pdf"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"PDF"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"2.35 MB"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Mira Stone"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 17, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Last week"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Design Review.pdf" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="engineering" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Engineering"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"7.37 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"10 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Elijah Morgan"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 24, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Yesterday"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Engineering" aria-haspopup="menu" id="base-ui-_r_25_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="brand-assets" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_27_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Brand Assets"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"763.2 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"7 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Sana Qureshi"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 14, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Last week"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Brand Assets" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="finance" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2f_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Finance"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"10.5 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"7 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Nora Vale"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 22, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"2 days ago"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Finance" aria-haspopup="menu" id="base-ui-_r_2l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="operations" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2n_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-expanded="false" aria-label="Expand row">
                                    <svg className="duration-200 in-aria-[expanded=false]:-rotate-90 rtl:in-aria-[expanded=false]:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                  </button>
                                </DataGridTableRowExpand>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-semibold hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Operations"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Folder"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"83.1 MB"}
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs">
                                {"4 items"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Priya Patel"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 23, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"Yesterday"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Operations" aria-haspopup="menu" id="base-ui-_r_2t_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="company-handbook" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle first:ps-4 last:pe-4 pe-0 px-3 py-2" data-pinned="start" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
                            <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_2_">
                              <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                <circle cx={12} cy={9} r={1}></circle>
                                <circle cx={19} cy={9} r={1}></circle>
                                <circle cx={5} cy={9} r={1}></circle>
                                <circle cx={12} cy={15} r={1}></circle>
                                <circle cx={19} cy={15} r={1}></circle>
                                <circle cx={5} cy={15} r={1}></circle>
                              </svg>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-2" data-pinned="start" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2v_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-3 py-2 truncate" data-pinned="start" data-last-col="start" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <span className="flex items-center shrink-0">
                                <DataGridTableRowExpand className="inline-flex items-center ps-(--data-grid-tree-padding) shrink-0" style={{"--data-grid-tree-padding": "0px"}}>
                                  <span className="shrink-0 w-2" aria-hidden="true"></span>
                                </DataGridTableRowExpand>
                                <span className="shrink-0 w-5" aria-hidden="true"></span>
                              </span>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </span>
                              <span className="cursor-pointer font-medium hover:text-primary min-w-0 text-foreground text-sm transition-colors truncate">
                                {"Company Handbook.pdf"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-type-size) * 1px)"}}>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"PDF"}
                            </Badge>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-size-size) * 1px)"}}>
                            <div className="flex flex-col gap-px items-end w-full">
                              <span className="tabular-nums text-foreground text-sm">
                                {"5.50 MB"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                            <div className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-6" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Leo Grant"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-3 py-2 truncate" style={{width: "calc(var(--col-modified-size) * 1px)"}}>
                            <div className="flex flex-col gap-px min-w-0">
                              <span className="text-foreground text-sm">
                                {"Jul 12, 2026"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"2 weeks ago"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle first:ps-4 last:pe-4 px-3 py-2" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Company Handbook.pdf" aria-haspopup="menu" id="base-ui-_r_35_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
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
      </Frame>
    </main>
  )
}
