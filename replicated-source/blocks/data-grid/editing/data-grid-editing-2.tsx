import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
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
        Inline editable product inventory data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-6xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-3 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-1 min-w-0">
              <div className="font-semibold text-sm">
                Product Inventory
              </div>
              <div className="text-muted-foreground text-sm">
                Edit pricing and stock inline.
              </div>
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add product
            </Button>
          </header>
          <FramePanel className="bg-card p-0! shadow-none!">
            <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:px-4 px-3 py-3">
              <InputGroup className="lg:max-w-xs" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search products..." aria-label="Search products" value="" />
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
              </div>
            </div>
            <DataGrid>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridTableViewport>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "240px"}} />
                            <col style={{width: "170px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "96px"}} />
                            <col style={{width: "56px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "240px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Product
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="category" data-header-id="category" data-header-depth="0" style={{width: "170px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Category
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="price" data-header-id="price" data-header-depth="0" style={{width: "130px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Price
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="stock" data-header-id="stock" data-header-depth="0" style={{width: "130px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Stock
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "130px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Status
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="visible" data-header-id="visible" data-header-depth="0" style={{width: "96px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                                  Visible
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-3 font-medium h-10 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prd-1042">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit name for Everyday Cotton Tee">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Everyday Cotton Tee
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        APP-1042
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit category for Everyday Cotton Tee">
                                  <span className="text-foreground text-sm truncate">
                                    Apparel
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit price for Everyday Cotton Tee">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $28.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit stock for Everyday Cotton Tee">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      320
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Everyday Cotton Tee">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_8_" aria-checked="true" size="sm" aria-label="Toggle storefront visibility for Everyday Cotton Tee">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_9_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Everyday Cotton Tee" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prd-3502">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit name for Suede Chelsea Boot">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Suede Chelsea Boot
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        FTW-3502
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit category for Suede Chelsea Boot">
                                  <span className="text-foreground text-sm truncate">
                                    Footwear
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit price for Suede Chelsea Boot">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $189.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit stock for Suede Chelsea Boot">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      14
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Suede Chelsea Boot">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    Draft
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" size="sm" aria-label="Toggle storefront visibility for Suede Chelsea Boot">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_i_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Suede Chelsea Boot" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prd-5260">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit name for Aviator Sunglasses">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Aviator Sunglasses
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        ACC-5260
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit category for Aviator Sunglasses">
                                  <span className="text-foreground text-sm truncate">
                                    Accessories
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit price for Aviator Sunglasses">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $120.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit stock for Aviator Sunglasses">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      64
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Aviator Sunglasses">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_q_" aria-checked="true" size="sm" aria-label="Toggle storefront visibility for Aviator Sunglasses">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_r_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Aviator Sunglasses" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prd-3381">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit name for Trail Runner GTX">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Trail Runner GTX
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        FTW-3381
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit category for Trail Runner GTX">
                                  <span className="text-foreground text-sm truncate">
                                    Footwear
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit price for Trail Runner GTX">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $145.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit stock for Trail Runner GTX, low stock">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <Tooltip>
                                    <TooltipTrigger className="inline-flex shrink-0 text-warning" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path>
                                      </svg>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="tabular-nums text-foreground text-sm">
                                      7
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Trail Runner GTX">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    Active
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_15_" aria-checked="true" size="sm" aria-label="Toggle storefront visibility for Trail Runner GTX">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_16_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Trail Runner GTX" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
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
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-12 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="prd-2380">
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex items-center min-w-0 relative">
                                  <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit name for Linen Camp Shirt">
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        Linen Camp Shirt
                                      </span>
                                      <span className="tabular-nums text-muted-foreground text-xs truncate">
                                        APP-2380
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit category for Linen Camp Shirt">
                                  <span className="text-foreground text-sm truncate">
                                    Apparel
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit price for Linen Camp Shirt">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $64.00
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-text flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center justify-end outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit stock for Linen Camp Shirt">
                                  <span className="flex gap-1.5 items-center justify-end">
                                    <span className="tabular-nums text-foreground text-sm">
                                      0
                                    </span>
                                  </span>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <button className="-mx-1.5 cursor-pointer flex focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60 h-8 hover:bg-muted/60 items-center outline-none px-1.5 text-left transition-colors w-[calc(100%+0.75rem)]" type="button" aria-label="Edit status for Linen Camp Shirt">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    Archived
                                  </Badge>
                                </button>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" size="sm" aria-label="Toggle storefront visibility for Linen Camp Shirt">
                                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_1f_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </td>
                              <td className="align-middle first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-3 py-2">
                                <div className="flex justify-end">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Linen Camp Shirt" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
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
          </FramePanel>
          <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              All changes saved
            </span>
            <div className="flex gap-2 items-center">
              <Button type="button" disabled="" tabIndex="0" disabled>
                Discard
              </Button>
              <Button type="button" disabled="" tabIndex="0" disabled>
                Save changes
              </Button>
            </div>
          </footer>
        </Frame>
      </section>
    </main>
  )
}
