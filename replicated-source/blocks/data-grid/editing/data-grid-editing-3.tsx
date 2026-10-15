import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Inline editable request intake data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Card className="gap-0 overflow-hidden py-0" size="default">
          <CardHeader className="border-b flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between px-5 py-3">
            <div className="flex flex-col gap-1 min-w-0">
              <CardTitle>
                Project Intake
              </CardTitle>
              <CardDescription>
                Edit priority, budget, and approval inline.
              </CardDescription>
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add request
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-5 py-3">
              <InputGroup className="lg:max-w-xs" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search requests..." aria-label="Search requests" value="" />
              </InputGroup>
              <div className="flex flex-wrap gap-1.5 items-center lg:justify-end min-w-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  Status
                </DropdownMenuTrigger>
                </DropdownMenu>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" data-icon="inline-start" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  Priority
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
            <DataGrid>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridTableViewport>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "220px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "110px"}} />
                            <col style={{width: "150px"}} />
                            <col style={{width: "116px"}} />
                            <col style={{width: "108px"}} />
                            <col style={{width: "96px"}} />
                            <col style={{width: "56px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 px-3 relative rtl:text-right sm:first:ps-5 sm:last:pe-5 text-foreground text-left" scope="col" data-col-id="request" data-header-id="request" data-header-depth="0" style={{width: "220px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Request
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="budget" data-header-id="budget" data-header-depth="0" style={{width: "130px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Budget
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="dueInDays" data-header-id="dueInDays" data-header-depth="0" style={{width: "110px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Due
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="confidence" data-header-id="confidence" data-header-depth="0" style={{width: "150px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Confidence
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "116px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Status
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="priority" data-header-id="priority" data-header-depth="0" style={{width: "108px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Priority
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="approved" data-header-id="approved" data-header-depth="0" style={{width: "96px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                                  Approved
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 px-3 relative rtl:text-right sm:first:ps-5 sm:last:pe-5 text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="req-2401">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit title for Website Refresh">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Website Refresh
                                      </span>
                                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REQ-2401
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Maya Chen
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit budget for Website Refresh">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $18,000.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit due timeline for Website Refresh">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      14d
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit confidence for Website Refresh, 78 percent">
                                  <span className="flex gap-2 items-center w-full">
                                    <span className="flex-1 gap-1 grid grid-cols-5 h-1.5 min-w-16" aria-hidden="true">
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-muted rounded-full"></span>
                                    </span>
                                    <span className="tabular-nums text-foreground text-right text-sm w-10">
                                      78%
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Website Refresh">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit priority for Website Refresh">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Medium
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_d_" aria-checked="true" size="sm" aria-label="Toggle approval for Website Refresh">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_e_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Website Refresh" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="req-2418">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit title for Checkout Audit">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Checkout Audit
                                      </span>
                                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REQ-2418
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Owen Brooks
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit budget for Checkout Audit">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $9,200.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit due timeline for Checkout Audit, due soon">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex shrink-0 text-warning" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="tabular-nums text-foreground text-sm">
                                      5d
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit confidence for Checkout Audit, 42 percent">
                                  <span className="flex gap-2 items-center w-full">
                                    <span className="flex-1 gap-1 grid grid-cols-5 h-1.5 min-w-16" aria-hidden="true">
                                      <span className="bg-rose-500 rounded-full"></span>
                                      <span className="bg-rose-500 rounded-full"></span>
                                      <span className="bg-rose-500 rounded-full"></span>
                                      <span className="bg-muted rounded-full"></span>
                                      <span className="bg-muted rounded-full"></span>
                                    </span>
                                    <span className="tabular-nums text-foreground text-right text-sm w-10">
                                      42%
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Checkout Audit">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    Blocked
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit priority for Checkout Audit">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    High
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" size="sm" aria-label="Toggle approval for Checkout Audit">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_p_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Checkout Audit" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="req-2430">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit title for Brand System">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Brand System
                                      </span>
                                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REQ-2430
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Nina Patel
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit budget for Brand System">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $12,500.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit due timeline for Brand System">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      21d
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit confidence for Brand System, 64 percent">
                                  <span className="flex gap-2 items-center w-full">
                                    <span className="flex-1 gap-1 grid grid-cols-5 h-1.5 min-w-16" aria-hidden="true">
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-muted rounded-full"></span>
                                    </span>
                                    <span className="tabular-nums text-foreground text-right text-sm w-10">
                                      64%
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Brand System">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    Draft
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit priority for Brand System">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                    <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Low
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_11_" aria-checked="false" size="sm" aria-label="Toggle approval for Brand System">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_12_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Brand System" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="req-2442">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit title for CRM Automation">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        CRM Automation
                                      </span>
                                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REQ-2442
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Leo Martin
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit budget for CRM Automation">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $24,000.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit due timeline for CRM Automation, due soon">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex shrink-0 text-warning" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="tabular-nums text-foreground text-sm">
                                      8d
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit confidence for CRM Automation, 86 percent">
                                  <span className="flex gap-2 items-center w-full">
                                    <span className="flex-1 gap-1 grid grid-cols-5 h-1.5 min-w-16" aria-hidden="true">
                                      <span className="bg-emerald-500 rounded-full"></span>
                                      <span className="bg-emerald-500 rounded-full"></span>
                                      <span className="bg-emerald-500 rounded-full"></span>
                                      <span className="bg-emerald-500 rounded-full"></span>
                                      <span className="bg-emerald-500 rounded-full"></span>
                                    </span>
                                    <span className="tabular-nums text-foreground text-right text-sm w-10">
                                      86%
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for CRM Automation">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit priority for CRM Automation">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    High
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1c_" aria-checked="true" size="sm" aria-label="Toggle approval for CRM Automation">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_1d_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for CRM Automation" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="req-2459">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit title for Data Dashboard">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Data Dashboard
                                      </span>
                                      <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REQ-2459
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Sara Klein
                                        </span>
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit budget for Data Dashboard">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $16,000.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit due timeline for Data Dashboard">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      30d
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit confidence for Data Dashboard, 71 percent">
                                  <span className="flex gap-2 items-center w-full">
                                    <span className="flex-1 gap-1 grid grid-cols-5 h-1.5 min-w-16" aria-hidden="true">
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-amber-500 rounded-full"></span>
                                      <span className="bg-muted rounded-full"></span>
                                    </span>
                                    <span className="tabular-nums text-foreground text-right text-sm w-10">
                                      71%
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Data Dashboard">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-9 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit priority for Data Dashboard">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    Medium
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1l_" aria-checked="true" size="sm" aria-label="Toggle approval for Data Dashboard">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_1m_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Data Dashboard" aria-haspopup="menu" id="base-ui-_r_1r_" aria-expanded="false">
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
                        </DataGridTable>
                      </DataGridTableViewport>
                    </div>
                  </div>
                </DataGridScrollArea>
              </div>
            </DataGrid>
          </CardContent>
          <CardFooter className="border-t flex-col gap-3 items-stretch justify-between px-5 py-3 sm:flex-row sm:items-center">
            <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              All changes saved
            </span>
            <div className="flex gap-2 items-center justify-end">
              <Button type="button" disabled="" tabIndex="0" disabled>
                Discard
              </Button>
              <Button type="button" disabled="" tabIndex="0" disabled>
                Save changes
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
