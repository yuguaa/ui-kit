import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Routing rules data grid with drag-and-drop ordering"}
      </h1>
      <section className="flex flex-col gap-4 w-full">
        <div className="flex gap-3 items-start justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="font-semibold text-xl tracking-tight">
              {"Routing Rules"}
            </h2>
            <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm">
              <span className="hidden sm:inline">
                {"First match wins"}
              </span>
              <span className="gap-1.5 inline-flex items-center whitespace-nowrap">
                <span className="bg-muted-foreground/40 hidden rounded-full shrink-0 size-1 sm:block" aria-hidden="true"></span>
                {"5 active"}
              </span>
              <span className="gap-1.5 inline-flex items-center whitespace-nowrap">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="sm:hidden">
                  {"1.3k"}
                </span>
                <span className="hidden sm:inline">
                  {"1,280"}
                </span>
                {"matches"}
              </span>
            </p>
          </div>
          <Button type="button" disabled="" tabIndex="0" disabled extracted="1">
            <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
            {"Reset order"}
          </Button>
        </div>
        <Card className="overflow-hidden p-0" size="default">
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1216px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-drag-size": "44", "--col-drag-size": "44", "--header-order-size": "52", "--col-order-size": "52", "--header-rule-size": "358", "--col-rule-size": "358", "--header-scope-size": "120", "--col-scope-size": "120", "--header-when-size": "190", "--col-when-size": "190", "--header-then-size": "190", "--col-then-size": "190", "--header-matches-size": "110", "--col-matches-size": "110", "--header-enabled-size": "96", "--col-enabled-size": "96", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1216px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-drag-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-order-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-rule-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-scope-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-when-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-then-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-matches-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-enabled-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="drag" data-header-id="drag" data-header-depth="0" style={{width: "calc(var(--header-drag-size) * 1px)"}}>
                            <span className="sr-only">
                              {"Reorder"}
                            </span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-0! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="order" data-header-id="order" data-header-depth="0" style={{width: "calc(var(--header-order-size) * 1px)"}}>
                            {"#"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="rule" data-header-id="rule" data-header-depth="0" style={{width: "calc(var(--header-rule-size) * 1px)"}}>
                            {"Rule"}
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="scope" data-header-id="scope" data-header-depth="0" style={{width: "calc(var(--header-scope-size) * 1px)"}}>
                            {"Scope"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="when" data-header-id="when" data-header-depth="0" style={{width: "calc(var(--header-when-size) * 1px)"}}>
                            {"When"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="then" data-header-id="then" data-header-depth="0" style={{width: "calc(var(--header-then-size) * 1px)"}}>
                            {"Then"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="matches" data-header-id="matches" data-header-depth="0" style={{width: "calc(var(--header-matches-size) * 1px)"}}>
                            {"Matches"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="enabled" data-header-id="enabled" data-header-depth="0" style={{width: "calc(var(--header-enabled-size) * 1px)"}}>
                            {"Enabled"}
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                            <span className="sr-only">
                              {"Actions"}
                            </span>
                          </th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-urgent" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"1"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-triangle-alert shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Urgent escalation"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"High priority tickets"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Priority"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Priority is Urgent"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Assign to Tier 2"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"148"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="true" size="default" aria-label="Toggle Urgent escalation">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Urgent escalation" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-enterprise" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"2"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-users shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Enterprise VIP"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Top tier accounts"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                {"Account"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Plan is Enterprise"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Route to Success"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"92"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" size="default" aria-label="Toggle Enterprise VIP">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Enterprise VIP" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-billing" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"3"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Billing topics"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Payments and invoices"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Topic"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Topic is Billing"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Add label Billing"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"311"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_j_" aria-checked="true" size="default" aria-label="Toggle Billing topics">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_k_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Billing topics" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-after-hours" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"4"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"After hours"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Outside business hours"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Schedule"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Time is off hours"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Notify on-call"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"44"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="true" size="default" aria-label="Toggle After hours">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_s_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for After hours" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-bulk" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="opacity-55 tabular-nums text-muted-foreground text-sm">
                              {"5"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0 opacity-55">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-route shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                    <circle cx="6" cy="19" r="3"></circle>
                                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                    <circle cx="18" cy="5" r="3"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Bulk senders"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Automated mailers"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div className="opacity-55">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                {"Sender"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Domain is noreply"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Skip assignment"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"620"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_13_" aria-checked="false" size="default" aria-label="Toggle Bulk senders">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_14_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Bulk senders" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-low-signal" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="opacity-55 tabular-nums text-muted-foreground text-sm">
                              {"6"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0 opacity-55">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-triangle-alert shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Low signal"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Likely spam"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div className="opacity-55">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Risk"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Score below 20"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Move to spam"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0 opacity-55">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"38"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1b_" aria-checked="false" size="default" aria-label="Toggle Low signal">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1c_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Low signal" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="rule-refund" style={{zIndex: "0", position: "relative"}}>
                          <td className="align-middle pe-0! px-2 py-1.5" style={{width: "calc(var(--col-drag-size) * 1px)"}}>
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
                          <td className="align-middle ps-0! px-2 py-1.5" style={{width: "calc(var(--col-order-size) * 1px)"}}>
                            <span className="tabular-nums text-muted-foreground text-sm">
                              {"7"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-rule-size) * 1px)"}}>
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Item className="[&_svg]:size-3.5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Refund requests"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Money back asks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                            <div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Finance"}
                              </Badge>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-when-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-funnel shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Topic is Refund"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-then-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                              <span className="min-w-0 text-foreground text-sm truncate">
                                {"Escalate Finance"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-matches-size) * 1px)"}}>
                            <div className="flex gap-1.5 items-center min-w-0">
                              <svg className="lucide lucide-activity shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                              <span className="tabular-nums text-foreground text-sm">
                                {"27"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"7d"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1j_" aria-checked="true" size="default" aria-label="Toggle Refund requests">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1k_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <div className="flex justify-end">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Refund requests" aria-haspopup="menu" id="base-ui-_r_1p_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
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
        </Card>
      </section>
    </main>
  )
}
