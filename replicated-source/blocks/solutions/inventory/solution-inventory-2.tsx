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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex justify-center md:p-10 min-h-svh overflow-x-hidden p-6 w-full">
      <div className="@container flex flex-col gap-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          <section className="@4xl:grid-cols-4 @lg:grid-cols-2 gap-4 grid grid-cols-1" aria-label="Inventory Metrics">
            <Frame className="h-full overflow-hidden">
              <FramePanel className="flex flex-col gap-5 justify-between min-h-[7.25rem]">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold leading-4 text-foreground text-sm truncate">
                    Stock Value
                  </span>
                  <span className="leading-4 text-muted-foreground text-xs truncate">
                    On-hand cost
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-4 xl:items-end xl:justify-between">
                  <div className="min-w-0 space-y-2.5">
                    <div className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                      $847K
                    </div>
                    <div className="flex gap-2 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                        +4.2%
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        vs plan
                      </span>
                    </div>
                  </div>
                  <svg className="h-9 opacity-95 self-end shrink-0 w-24 xl:self-auto" viewBox="0 0 72 32" role="img" aria-label="Stock Value trend">
                    <polyline points="0.0,28.0 9.0,24.7 18.0,25.8 27.0,20.3 36.0,17.0 45.0,19.2 54.0,12.6 63.0,9.3 72.0,6.0" fill="none" stroke="var(--color-emerald-500)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"></polyline>
                  </svg>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full overflow-hidden">
              <FramePanel className="flex flex-col gap-5 justify-between min-h-[7.25rem]">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold leading-4 text-foreground text-sm truncate">
                    Reorder Risk
                  </span>
                  <span className="leading-4 text-muted-foreground text-xs truncate">
                    Below point
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-4 xl:items-end xl:justify-between">
                  <div className="min-w-0 space-y-2.5">
                    <div className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                      168
                    </div>
                    <div className="flex gap-2 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                        13.1%
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        SKUs
                      </span>
                    </div>
                  </div>
                  <svg className="h-9 opacity-95 self-end shrink-0 w-24 xl:self-auto" viewBox="0 0 72 32" role="img" aria-label="Reorder Risk trend">
                    <polyline points="0.0,22.9 9.0,28.0 18.0,19.5 27.0,14.5 36.0,17.8 45.0,6.0 54.0,11.1 63.0,16.2 72.0,21.2" fill="none" stroke="var(--color-amber-500)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"></polyline>
                  </svg>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full overflow-hidden">
              <FramePanel className="flex flex-col gap-5 justify-between min-h-[7.25rem]">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold leading-4 text-foreground text-sm truncate">
                    Fill Rate
                  </span>
                  <span className="leading-4 text-muted-foreground text-xs truncate">
                    Order ready
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-4 xl:items-end xl:justify-between">
                  <div className="min-w-0 space-y-2.5">
                    <div className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                      96.4%
                    </div>
                    <div className="flex gap-2 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                        +1.8%
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        7 days
                      </span>
                    </div>
                  </div>
                  <svg className="h-9 opacity-95 self-end shrink-0 w-24 xl:self-auto" viewBox="0 0 72 32" role="img" aria-label="Fill Rate trend">
                    <polyline points="0.0,25.6 9.0,23.1 18.0,28.0 27.0,20.7 36.0,15.8 45.0,18.2 54.0,10.9 63.0,6.0 72.0,8.4" fill="none" stroke="var(--color-emerald-500)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"></polyline>
                  </svg>
                </div>
              </FramePanel>
            </Frame>
            <Frame className="h-full overflow-hidden">
              <FramePanel className="flex flex-col gap-5 justify-between min-h-[7.25rem]">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold leading-4 text-foreground text-sm truncate">
                    Open POs
                  </span>
                  <span className="leading-4 text-muted-foreground text-xs truncate">
                    Inbound cover
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-start xl:flex-row xl:gap-4 xl:items-end xl:justify-between">
                  <div className="min-w-0 space-y-2.5">
                    <div className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                      24
                    </div>
                    <div className="flex gap-2 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                        7 due
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        this week
                      </span>
                    </div>
                  </div>
                  <svg className="h-9 opacity-95 self-end shrink-0 w-24 xl:self-auto" viewBox="0 0 72 32" role="img" aria-label="Open POs trend">
                    <polyline points="0.0,28.0 9.0,21.7 18.0,26.4 27.0,17.0 36.0,12.3 45.0,18.6 54.0,9.1 63.0,6.0 72.0,10.7" fill="none" stroke="var(--color-blue-500)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"></polyline>
                  </svg>
                </div>
              </FramePanel>
            </Frame>
          </section>
          <Frame className="w-full">
            <FramePanel>
              <div className="flex flex-col items-stretch sm:flex-row">
                <div className="flex flex-col justify-center shrink-0 sm:basis-1/3 sm:pe-6">
                  <span className="text-muted-foreground text-xs">
                    Total Stock Value
                  </span>
                  <span className="font-semibold mt-1 tabular-nums text-2xl text-foreground">
                    $847,300
                  </span>
                </div>
                <Separator className="hidden self-stretch sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex flex-1 flex-col gap-2 justify-center sm:ps-6">
                  <div>
                    <span className="font-semibold tabular-nums text-foreground text-xl">
                      1,284
                    </span>
                    <span className="text-muted-foreground text-xs">
                      SKUs
                    </span>
                  </div>
                  <div className="bg-muted flex gap-0.5 h-1.5 items-center overflow-hidden rounded-full w-full" role="img" aria-label="Stock health: 1043 in stock, 168 low stock, 73 out of stock">
                    <span className="bg-emerald-500 h-full" style={{width: "81.2305%"}}></span>
                    <span className="bg-amber-400 h-full" style={{width: "13.0841%"}}></span>
                    <span className="bg-destructive h-full" style={{width: "5.68536%"}}></span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center text-xs">
                    <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                      <span className="bg-emerald-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span>
                        In stock:
                        <span className="font-semibold tabular-nums text-foreground">
                          1,043
                        </span>
                      </span>
                    </div>
                    <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                      <span className="bg-amber-400 inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span>
                        Low stock:
                        <span className="font-semibold tabular-nums text-foreground">
                          168
                        </span>
                      </span>
                    </div>
                    <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                      <span className="bg-destructive inline-block rounded-full size-2" aria-hidden="true"></span>
                      <span>
                        Out of stock:
                        <span className="font-semibold tabular-nums text-foreground">
                          73
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FramePanel>
          </Frame>
        </div>
        <Frame className="w-full">
          <FramePanel className="p-0 shadow-none!">
            <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-52 sm:w-[220px]" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search SKUs..." aria-label="Search SKUs" value="" />
                </InputGroup>
                <Select>
                <SelectTrigger className="w-[140px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                  <SelectValue>
                    Category
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[160px]" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
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
                <Select>
                <SelectTrigger className="w-[150px]" type="button" tabIndex="0" id="base-ui-_r_8_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    Location
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[140px]" type="button" tabIndex="0" id="base-ui-_r_b_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    Status
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_b_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-receipt-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M13 16H8"></path>
                  <path d="M14 8H8"></path>
                  <path d="M16 12H8"></path>
                  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                </svg>
                Create PO
              </Button>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_e_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "36px"}} />
                          <col style={{width: "240px"}} />
                          <col style={{width: "180px"}} />
                          <col style={{width: "100px"}} />
                          <col style={{width: "110px"}} />
                          <col style={{width: "120px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "130px"}} />
                          <col style={{width: "50px"}} />
                        </colgroup>
                        <thead>
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-(--frame-panel-px) px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "36px"}}>
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-label="Select all"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="product" data-header-id="product" data-header-depth="0" style={{width: "240px"}}>
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
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="location" data-header-id="location" data-header-depth="0" style={{width: "180px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Location
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="onHand" data-header-id="onHand" data-header-depth="0" style={{width: "100px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  On hand
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="allocated" data-header-id="allocated" data-header-depth="0" style={{width: "110px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Allocated
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="available" data-header-id="available" data-header-depth="0" style={{width: "120px"}}>
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
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "130px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Status
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
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00482">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_i_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Auralite Studio Pro" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Auralite Studio Pro
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00482
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Main Warehouse
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  A-12-04-02-B
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                482
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                96
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-foreground text-sm">
                                386
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                150
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                In stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Auralite Studio Pro" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
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
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_q_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Countertop Wireless Max" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1693895592595-9171d91a0f22?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Countertop Wireless Max
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00518
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Main Warehouse
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  A-09-02-01-C
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                214
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                188
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-sm text-warning-foreground">
                                <svg className="lucide lucide-triangle-alert shrink-0 size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                26
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                120
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Low stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Countertop Wireless Max" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00533">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Signal Orange Edition" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1609788994700-73eda149ffb8?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Signal Orange Edition
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00533
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    East DC
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  B-04-07-03-A
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-sm text-warning-foreground">
                                <svg className="lucide lucide-triangle-alert shrink-0 size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                80
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Out of stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Signal Orange Edition" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00560">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1a_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Rose Cloud Wireless" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Rose Cloud Wireless
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00560
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Store-Brooklyn
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  C-01-03-02-D
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                138
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                41
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-foreground text-sm">
                                97
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                60
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                In stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Rose Cloud Wireless" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00574">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1i_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Tabletop Monitor One" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1677086813101-496781a0f327?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Tabletop Monitor One
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00574
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Main Warehouse
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  A-15-01-04-A
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                36
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                22
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-sm text-warning-foreground">
                                <svg className="lucide lucide-triangle-alert shrink-0 size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                14
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                90
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                Low stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Tabletop Monitor One" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00591">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1q_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Mono Black Desk Set" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1600086827875-a63b01f1335c?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Mono Black Desk Set
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00591
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    East DC
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  B-08-05-01-B
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                312
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                74
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-foreground text-sm">
                                238
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                100
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                In stock
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Mono Black Desk Set" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
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
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_22_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Whiteout Wireless" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1742783637429-2452a4caee8c?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Whiteout Wireless
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00604
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Main Warehouse
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  A-03-06-02-C
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                64
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-sm text-warning-foreground">
                                <svg className="lucide lucide-triangle-alert shrink-0 size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                110
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                Backordered
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Whiteout Wireless" aria-haspopup="menu" id="base-ui-_r_28_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sku-00622">
                            <td className="align-middle ps-(--frame-panel-px) px-3 py-2">
                              <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2a_" aria-checked="false" aria-label="Select row"></Checkbox>
                              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex gap-3 items-center min-w-0">
                                <div className="bg-muted flex items-center justify-center overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-10">
                                  <img className="h-10 object-cover w-10" alt="Noir Archive Headset" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&w=120&h=120&q=80" />
                                </div>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    Noir Archive Headset
                                  </span>
                                  <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                    <span>
                                      SKU
                                    </span>
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="font-mono truncate">
                                      SKU-00622
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="gap-1.5 inline-flex items-center min-w-0 text-foreground text-sm truncate">
                                  <svg className="lucide lucide-map-pin shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                  <span className="truncate">
                                    Store-Brooklyn
                                  </span>
                                </span>
                                <span className="font-mono text-muted-foreground text-xs truncate">
                                  C-02-01-03-A
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-foreground text-sm">
                                58
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium gap-1.5 inline-flex items-center tabular-nums text-foreground text-sm">
                                58
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <span className="font-medium tabular-nums text-muted-foreground text-sm">
                                0
                              </span>
                            </td>
                            <td className="align-middle px-3 py-2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                Discontinued
                              </Badge>
                            </td>
                            <td className="align-middle pr-(--frame-panel-px) px-3 py-2">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Noir Archive Headset" aria-haspopup="menu" id="base-ui-_r_2g_" aria-expanded="false">
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
                      8
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_2i_-hidden-input" tabIndex="-1" aria-hidden="true" value="8" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                  <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                    1 - 8 of 12
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
    </div>
  )
}
