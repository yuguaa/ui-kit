import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
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
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex justify-center md:p-10 min-h-svh overflow-x-hidden p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Low stock reorder queue
      </h1>
      <div className="@container flex flex-col gap-6 max-w-7xl mx-auto w-full">
        <Frame className="w-full">
          <FramePanel>
            <div className="flex flex-col items-stretch sm:flex-row">
              <div className="flex flex-col justify-center shrink-0 sm:basis-1/3 sm:pe-6">
                <span className="text-muted-foreground text-xs">
                  At-risk inventory value
                </span>
                <span className="font-semibold mt-1 tabular-nums text-2xl text-foreground">
                  $84,120
                </span>
              </div>
              <Separator className="hidden self-stretch sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex flex-1 flex-col gap-2 justify-center sm:ps-6">
                <div>
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    58
                  </span>
                  <span className="text-muted-foreground text-xs">
                    SKUs needing action
                  </span>
                </div>
                <div className="bg-muted flex gap-0.5 h-1.5 items-center overflow-hidden rounded-full w-full" role="img" aria-label="Reorder queue: 37 below reorder, 12 out of stock, 9 on order">
                  <span className="bg-amber-400 h-full" style={{width: "63.7931%"}}></span>
                  <span className="bg-destructive h-full" style={{width: "20.6897%"}}></span>
                  <span className="bg-emerald-500 h-full" style={{width: "15.5172%"}}></span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center text-xs">
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-amber-400 inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      Below reorder:
                      <span className="font-semibold tabular-nums text-foreground">
                        37
                      </span>
                    </span>
                  </div>
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-destructive inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      Out of stock:
                      <span className="font-semibold tabular-nums text-foreground">
                        12
                      </span>
                    </span>
                  </div>
                  <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span className="bg-emerald-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                    <span>
                      Open POs covering:
                      <span className="font-semibold tabular-nums text-foreground">
                        9
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
        <Frame className="w-full">
          <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-px">
              <div className="font-semibold text-balance text-sm">
                Reorder Queue
              </div>
              <div className="text-muted-foreground text-pretty text-xs">
                12 SKUs below reorder point
              </div>
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-file-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileDownIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownloadLine" aria-hidden="true">
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M12 18v-6"></path>
                <path d="m9 15 3 3 3-3"></path>
              </svg>
              Export
            </Button>
          </header>
          <FramePanel className="p-0 shadow-none!">
            <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-52 sm:w-[220px]" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search SKU or product..." aria-label="Search reorder queue" value="" />
                </InputGroup>
                <Select>
                <SelectTrigger className="w-[150px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    All urgency
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[180px]" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    Supplier
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-shopping-cart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" data-icon="inline-start" aria-hidden="true">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Create PO
              </Button>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "36px"}} />
                          <col style={{width: "260px"}} />
                          <col style={{width: "110px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "110px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "190px"}} />
                          <col style={{width: "140px"}} />
                          <col style={{width: "50px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "36px"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "260px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Product
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="available" data-header-id="available" data-header-depth="0" style={{width: "110px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Available
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="reorderPoint" data-header-id="reorderPoint" data-header-depth="0" style={{width: "130px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Reorder point
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="deficit" data-header-id="deficit" data-header-depth="0" style={{width: "110px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Deficit
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="suggestedPo" data-header-id="suggestedPo" data-header-depth="0" style={{width: "130px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Suggested PO
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="supplier" data-header-id="supplier" data-header-depth="0" style={{width: "190px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Supplier
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="daysOfCover" data-header-id="daysOfCover" data-header-depth="0" style={{width: "140px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Days of cover
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pr-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "50px"}}></th>
                          </tr>
                        </thead>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00533">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="Signal Orange Edition" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1609788994700-73eda149ffb8?auto=format&fit=crop&w=900&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-sku-00533">
                                    Signal Orange Edition
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      SKU-00533
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Out of stock
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                120
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 120 units below reorder point" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                120
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                240
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Apex Manufacturing
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  28d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Days of cover warning, 0 days remaining" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                0 days
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Signal Orange Edition" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="acc-cbl-usbc">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center ring-1 ring-border/60 rounded-md shrink-0 size-10 text-muted-foreground" aria-hidden="true">
                                  <svg className="lucide lucide-archive size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                    <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                    <path d="M10 12h4"></path>
                                  </svg>
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-acc-cbl-usbc">
                                    Charging Cable USB-C
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      ACC-CBL-USBC
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                      On order
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                120
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                200
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 80 units below reorder point" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                80
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                300
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Harbor Electronics
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  7d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-foreground text-sm">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                11 days
                              </span>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Charging Cable USB-C" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00482">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="Auralite Studio Pro" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-sku-00482">
                                    Auralite Studio Pro
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      SKU-00482
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Low stock
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                32
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                110
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 78 units below reorder point" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                78
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                200
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Acme Components
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  14d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Days of cover warning, 5 days remaining" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                5 days
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Auralite Studio Pro" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00518">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="Countertop Wireless Max" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1693895592595-9171d91a0f22?auto=format&fit=crop&w=900&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-sku-00518">
                                    Countertop Wireless Max
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      SKU-00518
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Low stock
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                14
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                90
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 76 units below reorder point" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                76
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                180
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Acme Components
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  12d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Days of cover warning, 3 days remaining" id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                3 days
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Countertop Wireless Max" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="acc-tip-mf">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1q_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center ring-1 ring-border/60 rounded-md shrink-0 size-10 text-muted-foreground" aria-hidden="true">
                                  <svg className="lucide lucide-archive size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                    <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                    <path d="M10 12h4"></path>
                                  </svg>
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-acc-tip-mf">
                                    Memory Foam Ear Tips
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      ACC-TIP-MF
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Low stock
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                8
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                80
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 72 units below reorder point" id="base-ui-_r_1u_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                72
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                150
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Cobalt Supply Co
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  9d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Days of cover warning, 2 days remaining" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                2 days
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Memory Foam Ear Tips" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00604">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                  <img className="h-10 object-cover w-10" alt="Whiteout Wireless" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1742783637429-2452a4caee8c?auto=format&fit=crop&w=900&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-4" href="#sku-sku-00604">
                                    Whiteout Wireless
                                  </a>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span className="font-mono truncate">
                                      SKU-00604
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Out of stock
                                    </Badge>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                70
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Deficit hint, 70 units below reorder point" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                70
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                  <path d="M12 22V12"></path>
                                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                  <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                                140
                              </Badge>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  Northwind Logistics
                                </span>
                                <span className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                                  <svg className="lucide lucide-truck size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                  </svg>
                                  21d lead
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 inline-flex items-center rounded-full tabular-nums text-destructive text-sm" type="button" aria-label="Days of cover warning, 0 days remaining" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                0 days
                              </TooltipTrigger>
                              </Tooltip>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Whiteout Wireless" aria-haspopup="menu" id="base-ui-_r_2g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                        </DataGridTableBody>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </div>
                </div>
              </DataGridScrollArea>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <DataGridPagination>
                <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                  <div className="text-muted-foreground text-sm">
                    Rows per page
                  </div>
                  <Select>
                  <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_2i_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                    <SelectValue>
                      6
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2i_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 6 of 12
                  </div>
                  <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                      <span className="sr-only">
                        Go to previous page
                      </span>
                      <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </Button>
                    <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                      1
                    </Button>
                    <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                      2
                    </Button>
                    <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                      <span className="sr-only">
                        Go to next page
                      </span>
                      <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </DataGridPagination>
            </footer>
          </FramePanel>
        </Frame>
      </div>
    </main>
  )
}
