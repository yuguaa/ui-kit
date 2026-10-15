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
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
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
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-4 pt-8 sm:p-8 sm:pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Reliability index data grid
      </h1>
      <Frame className="min-w-0 w-full" spacing="default">
        <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              Reliability Index
            </div>
            <div className="text-muted-foreground text-sm">
              <span className="flex-wrap gap-1.5 inline-flex items-center tabular-nums">
                <span>
                  18 SLOs
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  5 exhausted
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  1 paging
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More index actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New SLO
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList className="gap-5 justify-start max-w-full no-scrollbar overflow-x-auto scroll-fade-x" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="flex-none gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_7_" compositeItemActive="">
                  All
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                    18
                  </Badge>
                </TabsTrigger>
                <TabsTrigger className="flex-none gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                  Exhausted
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                    5
                  </Badge>
                </TabsTrigger>
                <TabsTrigger className="flex-none gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                  At Risk
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                    3
                  </Badge>
                </TabsTrigger>
                <TabsTrigger className="flex-none gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_a_">
                  Healthy
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                    10
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="px-(--frame-panel-header-px) py-2.5">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <InputGroup className="lg:w-64" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_b_" placeholder="Search SLOs..." aria-label="Search SLOs" value="" />
              </InputGroup>
              <div className="gap-2 grid grid-cols-[auto_minmax(0,1fr)] grid-flow-row-dense sm:flex sm:flex-wrap sm:items-center">
                <Select>
                <SelectTrigger className="min-w-0 sm:min-w-40 sm:w-auto w-full" type="button" tabIndex="0" id="base-ui-_r_c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Measure at objective">
                  <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                  <SelectValue>
                    Own objective
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="own" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ToggleGroup className="col-span-2 sm:w-auto w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Rolling window" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 sm:flex-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="0">
                    Own
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 sm:flex-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
                    7D
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 sm:flex-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
                    28D
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 sm:flex-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
                    30D
                  </ToggleGroupItem>
                </ToggleGroup>
                <Select>
                <SelectTrigger className="min-w-0 sm:min-w-32 sm:w-auto w-full" type="button" tabIndex="0" id="base-ui-_r_j_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Team">
                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserGroupIcon" phosphor="UsersIcon" remixicon="RiTeamLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <SelectValue>
                    All teams
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_j_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="divide-y grid grid-cols-1 lg:divide-x lg:divide-y-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:h-125 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <section className="flex flex-col h-110 lg:h-auto min-h-0 min-w-0" aria-label="SLOs">
              <div className="[&>div>div[aria-hidden=true]]:hidden [&>div]:flex [&>div]:flex-1 [&>div]:flex-col [&>div]:min-h-0 flex flex-1 flex-col min-h-0">
                <div className="relative">
                  <DataGridScrollArea className="[&_[data-slot=scroll-area-viewport]]:[--scroll-fade-mask:linear-gradient(to_bottom,#000_0,#000_2rem,transparent_2rem,#000_calc(2rem_+_var(--scroll-fade-t,0px)),#000_calc(100%_-_var(--scroll-fade-b,0px)),transparent_100%)] [&_[data-slot=scroll-area-viewport]]:[--scroll-fade-reveal:--spacing(8)] [&_[data-slot=scroll-area-viewport]]:no-scrollbar [&_[data-slot=scroll-area-viewport]]:scroll-fade-y flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="" overflowVertical="true">
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_n_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "468px"}} data-has-overflow-y="" data-overflow-y-end="">
                      <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-y="" data-overflow-y-end="">
                        <DataGridTableViewport>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "200px"}} />
                              <col style={{width: "64px"}} />
                              <col style={{width: "104px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "92px"}} />
                              <col style={{width: "88px"}} />
                            </colgroup>
                            <thead className="[&_tr]:bg-card sticky top-0 z-40">
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "200px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      SLO
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "64px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    Owner
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="trend" data-header-id="trend" data-header-depth="0" style={{width: "104px"}}>
                                  <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                    90 Days
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="budget" data-header-id="budget" data-header-depth="0" style={{width: "112px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      Budget Left
                                      <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="runsOut" data-header-id="runsOut" data-header-depth="0" style={{width: "92px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      Runs Out
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="alert" data-header-id="alert" data-header-depth="0" style={{width: "88px"}}>
                                  <div className="-ms-2 flex h-full items-center">
                                    <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                      Alert
                                      <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                        <path d="m7 15 5 5 5-5"></path>
                                        <path d="m7 9 5-5 5 5"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <DataGridTableBody>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-104">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Ledger write success
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          ledger-worker
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        30d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Ledger write success, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_q_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_q_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,6.28 L4.14,5.52 L8.28,5.43 L12.41,5.06 L16.55,5.47 L20.69,5.48 L24.83,5.34 L28.97,4.71 L33.10,5.50 L37.24,6.04 L41.38,5.25 L45.52,5.17 L49.66,6.41 L53.79,5.30 L57.93,6.31 L62.07,5.80 L66.21,4.40 L70.34,4.32 L74.48,5.93 L78.62,5.08 L82.76,5.19 L86.90,5.22 L91.03,4.59 L95.17,5.01 L99.31,6.35 L103.45,5.50 L107.59,5.06 L111.72,26.50 L115.86,26.50 L120.00,5.42 L120,14 L0,14 Z" clipPath="url(#_r_q_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,6.28 L4.14,5.52 L8.28,5.43 L12.41,5.06 L16.55,5.47 L20.69,5.48 L24.83,5.34 L28.97,4.71 L33.10,5.50 L37.24,6.04 L41.38,5.25 L45.52,5.17 L49.66,6.41 L53.79,5.30 L57.93,6.31 L62.07,5.80 L66.21,4.40 L70.34,4.32 L74.48,5.93 L78.62,5.08 L82.76,5.19 L86.90,5.22 L91.03,4.59 L95.17,5.01 L99.31,6.35 L103.45,5.50 L107.59,5.06 L111.72,26.50 L115.86,26.50 L120.00,5.42 L120,14 L0,14 Z" clipPath="url(#_r_q_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,6.28 L4.14,5.52 L8.28,5.43 L12.41,5.06 L16.55,5.47 L20.69,5.48 L24.83,5.34 L28.97,4.71 L33.10,5.50 L37.24,6.04 L41.38,5.25 L45.52,5.17 L49.66,6.41 L53.79,5.30 L57.93,6.31 L62.07,5.80 L66.21,4.40 L70.34,4.32 L74.48,5.93 L78.62,5.08 L82.76,5.19 L86.90,5.22 L91.03,4.59 L95.17,5.01 L99.31,6.35 L103.45,5.50 L107.59,5.06 L111.72,26.50 L115.86,26.50 L120.00,5.42" clipPath="url(#_r_q_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,6.28 L4.14,5.52 L8.28,5.43 L12.41,5.06 L16.55,5.47 L20.69,5.48 L24.83,5.34 L28.97,4.71 L33.10,5.50 L37.24,6.04 L41.38,5.25 L45.52,5.17 L49.66,6.41 L53.79,5.30 L57.93,6.31 L62.07,5.80 L66.21,4.40 L70.34,4.32 L74.48,5.93 L78.62,5.08 L82.76,5.19 L86.90,5.22 L91.03,4.59 L95.17,5.01 L99.31,6.35 L103.45,5.50 L107.59,5.06 L111.72,26.50 L115.86,26.50 L120.00,5.42" clipPath="url(#_r_q_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-destructive text-sm">
                                    -82.3%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-destructive text-sm">
                                    Spent
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-118">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      SMS provider availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          notifications
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.5%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="SMS provider availability, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_v_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_v_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,4.31 L4.14,4.43 L8.28,4.40 L12.41,4.39 L16.55,4.22 L20.69,3.83 L24.83,4.89 L28.97,4.68 L33.10,5.28 L37.24,4.35 L41.38,3.84 L45.52,4.58 L49.66,5.10 L53.79,4.39 L57.93,4.63 L62.07,4.13 L66.21,4.36 L70.34,4.82 L74.48,4.71 L78.62,4.05 L82.76,4.41 L86.90,4.74 L91.03,4.29 L95.17,5.23 L99.31,4.49 L103.45,4.41 L107.59,4.51 L111.72,26.50 L115.86,4.35 L120.00,4.33 L120,14 L0,14 Z" clipPath="url(#_r_v_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,4.31 L4.14,4.43 L8.28,4.40 L12.41,4.39 L16.55,4.22 L20.69,3.83 L24.83,4.89 L28.97,4.68 L33.10,5.28 L37.24,4.35 L41.38,3.84 L45.52,4.58 L49.66,5.10 L53.79,4.39 L57.93,4.63 L62.07,4.13 L66.21,4.36 L70.34,4.82 L74.48,4.71 L78.62,4.05 L82.76,4.41 L86.90,4.74 L91.03,4.29 L95.17,5.23 L99.31,4.49 L103.45,4.41 L107.59,4.51 L111.72,26.50 L115.86,4.35 L120.00,4.33 L120,14 L0,14 Z" clipPath="url(#_r_v_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,4.31 L4.14,4.43 L8.28,4.40 L12.41,4.39 L16.55,4.22 L20.69,3.83 L24.83,4.89 L28.97,4.68 L33.10,5.28 L37.24,4.35 L41.38,3.84 L45.52,4.58 L49.66,5.10 L53.79,4.39 L57.93,4.63 L62.07,4.13 L66.21,4.36 L70.34,4.82 L74.48,4.71 L78.62,4.05 L82.76,4.41 L86.90,4.74 L91.03,4.29 L95.17,5.23 L99.31,4.49 L103.45,4.41 L107.59,4.51 L111.72,26.50 L115.86,4.35 L120.00,4.33" clipPath="url(#_r_v_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,4.31 L4.14,4.43 L8.28,4.40 L12.41,4.39 L16.55,4.22 L20.69,3.83 L24.83,4.89 L28.97,4.68 L33.10,5.28 L37.24,4.35 L41.38,3.84 L45.52,4.58 L49.66,5.10 L53.79,4.39 L57.93,4.63 L62.07,4.13 L66.21,4.36 L70.34,4.82 L74.48,4.71 L78.62,4.05 L82.76,4.41 L86.90,4.74 L91.03,4.29 L95.17,5.23 L99.31,4.49 L103.45,4.41 L107.59,4.51 L111.72,26.50 L115.86,4.35 L120.00,4.33" clipPath="url(#_r_v_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-destructive text-sm">
                                    -56.6%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-destructive text-sm">
                                    Spent
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-115">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Index freshness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                            <path d="m21 21-4.34-4.34"></path>
                                            <circle cx="11" cy="11" r="8"></circle>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          search-indexer
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        7d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Index freshness, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_14_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_14_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,6.71 L4.14,6.42 L8.28,7.00 L12.41,6.71 L16.55,6.71 L20.69,6.13 L24.83,7.00 L28.97,6.71 L33.10,6.42 L37.24,7.00 L41.38,7.00 L45.52,5.55 L49.66,7.58 L53.79,6.71 L57.93,6.13 L62.07,8.16 L66.21,5.84 L70.34,6.71 L74.48,6.13 L78.62,5.26 L82.76,6.42 L86.90,7.29 L91.03,5.84 L95.17,6.42 L99.31,6.42 L103.45,7.29 L107.59,7.29 L111.72,7.00 L115.86,7.29 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_14_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,6.71 L4.14,6.42 L8.28,7.00 L12.41,6.71 L16.55,6.71 L20.69,6.13 L24.83,7.00 L28.97,6.71 L33.10,6.42 L37.24,7.00 L41.38,7.00 L45.52,5.55 L49.66,7.58 L53.79,6.71 L57.93,6.13 L62.07,8.16 L66.21,5.84 L70.34,6.71 L74.48,6.13 L78.62,5.26 L82.76,6.42 L86.90,7.29 L91.03,5.84 L95.17,6.42 L99.31,6.42 L103.45,7.29 L107.59,7.29 L111.72,7.00 L115.86,7.29 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_14_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,6.71 L4.14,6.42 L8.28,7.00 L12.41,6.71 L16.55,6.71 L20.69,6.13 L24.83,7.00 L28.97,6.71 L33.10,6.42 L37.24,7.00 L41.38,7.00 L45.52,5.55 L49.66,7.58 L53.79,6.71 L57.93,6.13 L62.07,8.16 L66.21,5.84 L70.34,6.71 L74.48,6.13 L78.62,5.26 L82.76,6.42 L86.90,7.29 L91.03,5.84 L95.17,6.42 L99.31,6.42 L103.45,7.29 L107.59,7.29 L111.72,7.00 L115.86,7.29 L120.00,26.50" clipPath="url(#_r_14_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,6.71 L4.14,6.42 L8.28,7.00 L12.41,6.71 L16.55,6.71 L20.69,6.13 L24.83,7.00 L28.97,6.71 L33.10,6.42 L37.24,7.00 L41.38,7.00 L45.52,5.55 L49.66,7.58 L53.79,6.71 L57.93,6.13 L62.07,8.16 L66.21,5.84 L70.34,6.71 L74.48,6.13 L78.62,5.26 L82.76,6.42 L86.90,7.29 L91.03,5.84 L95.17,6.42 L99.31,6.42 L103.45,7.29 L107.59,7.29 L111.72,7.00 L115.86,7.29 L120.00,26.50" clipPath="url(#_r_14_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-destructive text-sm">
                                    -36.8%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-destructive text-sm">
                                    Spent
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-110">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Payout batch on time
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          payouts-scheduler
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.5%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        30d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Payout batch on time, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_19_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_19_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,7.29 L4.14,7.29 L8.28,7.29 L12.41,7.29 L16.55,7.29 L20.69,6.71 L24.83,6.71 L28.97,6.71 L33.10,6.71 L37.24,6.13 L41.38,7.29 L45.52,7.87 L49.66,7.87 L53.79,6.71 L57.93,6.71 L62.07,7.87 L66.21,7.29 L70.34,7.29 L74.48,7.29 L78.62,7.29 L82.76,8.44 L86.90,7.29 L91.03,7.29 L95.17,26.50 L99.31,6.13 L103.45,7.29 L107.59,7.87 L111.72,5.55 L115.86,8.44 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_19_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,7.29 L4.14,7.29 L8.28,7.29 L12.41,7.29 L16.55,7.29 L20.69,6.71 L24.83,6.71 L28.97,6.71 L33.10,6.71 L37.24,6.13 L41.38,7.29 L45.52,7.87 L49.66,7.87 L53.79,6.71 L57.93,6.71 L62.07,7.87 L66.21,7.29 L70.34,7.29 L74.48,7.29 L78.62,7.29 L82.76,8.44 L86.90,7.29 L91.03,7.29 L95.17,26.50 L99.31,6.13 L103.45,7.29 L107.59,7.87 L111.72,5.55 L115.86,8.44 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_19_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,7.29 L4.14,7.29 L8.28,7.29 L12.41,7.29 L16.55,7.29 L20.69,6.71 L24.83,6.71 L28.97,6.71 L33.10,6.71 L37.24,6.13 L41.38,7.29 L45.52,7.87 L49.66,7.87 L53.79,6.71 L57.93,6.71 L62.07,7.87 L66.21,7.29 L70.34,7.29 L74.48,7.29 L78.62,7.29 L82.76,8.44 L86.90,7.29 L91.03,7.29 L95.17,26.50 L99.31,6.13 L103.45,7.29 L107.59,7.87 L111.72,5.55 L115.86,8.44 L120.00,26.50" clipPath="url(#_r_19_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,7.29 L4.14,7.29 L8.28,7.29 L12.41,7.29 L16.55,7.29 L20.69,6.71 L24.83,6.71 L28.97,6.71 L33.10,6.71 L37.24,6.13 L41.38,7.29 L45.52,7.87 L49.66,7.87 L53.79,6.71 L57.93,6.71 L62.07,7.87 L66.21,7.29 L70.34,7.29 L74.48,7.29 L78.62,7.29 L82.76,8.44 L86.90,7.29 L91.03,7.29 L95.17,26.50 L99.31,6.13 L103.45,7.29 L107.59,7.87 L111.72,5.55 L115.86,8.44 L120.00,26.50" clipPath="url(#_r_19_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-destructive text-sm">
                                    -16.4%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-destructive text-sm">
                                    Spent
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-108">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Fraud score latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          fraud-scorer
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.9%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Fraud score latency, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_1e_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_1e_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,6.02 L4.14,5.11 L8.28,6.24 L12.41,5.84 L16.55,6.68 L20.69,5.66 L24.83,5.88 L28.97,6.09 L33.10,4.75 L37.24,5.26 L41.38,6.28 L45.52,5.62 L49.66,5.65 L53.79,5.52 L57.93,5.34 L62.07,5.87 L66.21,5.58 L70.34,5.21 L74.48,5.47 L78.62,6.23 L82.76,4.87 L86.90,5.55 L91.03,5.18 L95.17,6.17 L99.31,5.51 L103.45,26.50 L107.59,6.16 L111.72,4.84 L115.86,5.74 L120.00,6.52 L120,14 L0,14 Z" clipPath="url(#_r_1e_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,6.02 L4.14,5.11 L8.28,6.24 L12.41,5.84 L16.55,6.68 L20.69,5.66 L24.83,5.88 L28.97,6.09 L33.10,4.75 L37.24,5.26 L41.38,6.28 L45.52,5.62 L49.66,5.65 L53.79,5.52 L57.93,5.34 L62.07,5.87 L66.21,5.58 L70.34,5.21 L74.48,5.47 L78.62,6.23 L82.76,4.87 L86.90,5.55 L91.03,5.18 L95.17,6.17 L99.31,5.51 L103.45,26.50 L107.59,6.16 L111.72,4.84 L115.86,5.74 L120.00,6.52 L120,14 L0,14 Z" clipPath="url(#_r_1e_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,6.02 L4.14,5.11 L8.28,6.24 L12.41,5.84 L16.55,6.68 L20.69,5.66 L24.83,5.88 L28.97,6.09 L33.10,4.75 L37.24,5.26 L41.38,6.28 L45.52,5.62 L49.66,5.65 L53.79,5.52 L57.93,5.34 L62.07,5.87 L66.21,5.58 L70.34,5.21 L74.48,5.47 L78.62,6.23 L82.76,4.87 L86.90,5.55 L91.03,5.18 L95.17,6.17 L99.31,5.51 L103.45,26.50 L107.59,6.16 L111.72,4.84 L115.86,5.74 L120.00,6.52" clipPath="url(#_r_1e_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,6.02 L4.14,5.11 L8.28,6.24 L12.41,5.84 L16.55,6.68 L20.69,5.66 L24.83,5.88 L28.97,6.09 L33.10,4.75 L37.24,5.26 L41.38,6.28 L45.52,5.62 L49.66,5.65 L53.79,5.52 L57.93,5.34 L62.07,5.87 L66.21,5.58 L70.34,5.21 L74.48,5.47 L78.62,6.23 L82.76,4.87 L86.90,5.55 L91.03,5.18 L95.17,6.17 L99.31,5.51 L103.45,26.50 L107.59,6.16 L111.72,4.84 L115.86,5.74 L120.00,6.52" clipPath="url(#_r_1e_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-destructive text-sm">
                                    -8.8%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-destructive text-sm">
                                    Spent
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-105">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Ledger posting freshness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          ledger-worker
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.5%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Ledger posting freshness, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_1j_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_1j_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.81 L4.14,3.81 L8.28,3.81 L12.41,3.81 L16.55,4.39 L20.69,3.81 L24.83,3.81 L28.97,4.39 L33.10,3.24 L37.24,3.81 L41.38,3.81 L45.52,3.81 L49.66,3.24 L53.79,3.81 L57.93,3.24 L62.07,3.24 L66.21,3.24 L70.34,4.39 L74.48,3.81 L78.62,4.39 L82.76,3.24 L86.90,3.81 L91.03,4.39 L95.17,4.39 L99.31,3.81 L103.45,3.81 L107.59,3.81 L111.72,26.50 L115.86,3.24 L120.00,4.17 L120,14 L0,14 Z" clipPath="url(#_r_1j_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.81 L4.14,3.81 L8.28,3.81 L12.41,3.81 L16.55,4.39 L20.69,3.81 L24.83,3.81 L28.97,4.39 L33.10,3.24 L37.24,3.81 L41.38,3.81 L45.52,3.81 L49.66,3.24 L53.79,3.81 L57.93,3.24 L62.07,3.24 L66.21,3.24 L70.34,4.39 L74.48,3.81 L78.62,4.39 L82.76,3.24 L86.90,3.81 L91.03,4.39 L95.17,4.39 L99.31,3.81 L103.45,3.81 L107.59,3.81 L111.72,26.50 L115.86,3.24 L120.00,4.17 L120,14 L0,14 Z" clipPath="url(#_r_1j_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.81 L4.14,3.81 L8.28,3.81 L12.41,3.81 L16.55,4.39 L20.69,3.81 L24.83,3.81 L28.97,4.39 L33.10,3.24 L37.24,3.81 L41.38,3.81 L45.52,3.81 L49.66,3.24 L53.79,3.81 L57.93,3.24 L62.07,3.24 L66.21,3.24 L70.34,4.39 L74.48,3.81 L78.62,4.39 L82.76,3.24 L86.90,3.81 L91.03,4.39 L95.17,4.39 L99.31,3.81 L103.45,3.81 L107.59,3.81 L111.72,26.50 L115.86,3.24 L120.00,4.17" clipPath="url(#_r_1j_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.81 L4.14,3.81 L8.28,3.81 L12.41,3.81 L16.55,4.39 L20.69,3.81 L24.83,3.81 L28.97,4.39 L33.10,3.24 L37.24,3.81 L41.38,3.81 L45.52,3.81 L49.66,3.24 L53.79,3.81 L57.93,3.24 L62.07,3.24 L66.21,3.24 L70.34,4.39 L74.48,3.81 L78.62,4.39 L82.76,3.24 L86.90,3.81 L91.03,4.39 L95.17,4.39 L99.31,3.81 L103.45,3.81 L107.59,3.81 L111.72,26.50 L115.86,3.24 L120.00,4.17" clipPath="url(#_r_1j_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +7.9%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    12 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_1l_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-111">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Payout API availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          payouts-scheduler
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.9%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Payout API availability, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_1o_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_1o_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.14 L4.14,3.61 L8.28,2.90 L12.41,3.54 L16.55,3.24 L20.69,3.71 L24.83,3.48 L28.97,3.61 L33.10,3.71 L37.24,3.77 L41.38,3.60 L45.52,3.69 L49.66,3.63 L53.79,3.20 L57.93,3.13 L62.07,3.32 L66.21,3.36 L70.34,3.14 L74.48,3.35 L78.62,3.80 L82.76,3.78 L86.90,3.43 L91.03,3.21 L95.17,3.81 L99.31,3.42 L103.45,3.10 L107.59,3.07 L111.72,3.31 L115.86,2.95 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_1o_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.14 L4.14,3.61 L8.28,2.90 L12.41,3.54 L16.55,3.24 L20.69,3.71 L24.83,3.48 L28.97,3.61 L33.10,3.71 L37.24,3.77 L41.38,3.60 L45.52,3.69 L49.66,3.63 L53.79,3.20 L57.93,3.13 L62.07,3.32 L66.21,3.36 L70.34,3.14 L74.48,3.35 L78.62,3.80 L82.76,3.78 L86.90,3.43 L91.03,3.21 L95.17,3.81 L99.31,3.42 L103.45,3.10 L107.59,3.07 L111.72,3.31 L115.86,2.95 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_1o_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.14 L4.14,3.61 L8.28,2.90 L12.41,3.54 L16.55,3.24 L20.69,3.71 L24.83,3.48 L28.97,3.61 L33.10,3.71 L37.24,3.77 L41.38,3.60 L45.52,3.69 L49.66,3.63 L53.79,3.20 L57.93,3.13 L62.07,3.32 L66.21,3.36 L70.34,3.14 L74.48,3.35 L78.62,3.80 L82.76,3.78 L86.90,3.43 L91.03,3.21 L95.17,3.81 L99.31,3.42 L103.45,3.10 L107.59,3.07 L111.72,3.31 L115.86,2.95 L120.00,26.50" clipPath="url(#_r_1o_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.14 L4.14,3.61 L8.28,2.90 L12.41,3.54 L16.55,3.24 L20.69,3.71 L24.83,3.48 L28.97,3.61 L33.10,3.71 L37.24,3.77 L41.38,3.60 L45.52,3.69 L49.66,3.63 L53.79,3.20 L57.93,3.13 L62.07,3.32 L66.21,3.36 L70.34,3.14 L74.48,3.35 L78.62,3.80 L82.76,3.78 L86.90,3.43 L91.03,3.21 L95.17,3.81 L99.31,3.42 L103.45,3.10 L107.59,3.07 L111.72,3.31 L115.86,2.95 L120.00,26.50" clipPath="url(#_r_1o_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +17.5%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    1 day
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_1q_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-102">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Charge API latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <path d="M6 12h.01M18 12h.01"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          payments-api
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Charge API latency, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_1t_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_1t_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,4.90 L4.14,5.16 L8.28,4.69 L12.41,4.76 L16.55,5.15 L20.69,4.71 L24.83,3.87 L28.97,5.00 L33.10,4.55 L37.24,4.46 L41.38,5.13 L45.52,4.21 L49.66,4.33 L53.79,5.15 L57.93,3.97 L62.07,4.89 L66.21,4.61 L70.34,4.60 L74.48,4.90 L78.62,4.84 L82.76,4.63 L86.90,5.11 L91.03,4.97 L95.17,4.25 L99.31,26.50 L103.45,4.55 L107.59,5.37 L111.72,4.65 L115.86,4.13 L120.00,4.79 L120,14 L0,14 Z" clipPath="url(#_r_1t_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,4.90 L4.14,5.16 L8.28,4.69 L12.41,4.76 L16.55,5.15 L20.69,4.71 L24.83,3.87 L28.97,5.00 L33.10,4.55 L37.24,4.46 L41.38,5.13 L45.52,4.21 L49.66,4.33 L53.79,5.15 L57.93,3.97 L62.07,4.89 L66.21,4.61 L70.34,4.60 L74.48,4.90 L78.62,4.84 L82.76,4.63 L86.90,5.11 L91.03,4.97 L95.17,4.25 L99.31,26.50 L103.45,4.55 L107.59,5.37 L111.72,4.65 L115.86,4.13 L120.00,4.79 L120,14 L0,14 Z" clipPath="url(#_r_1t_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,4.90 L4.14,5.16 L8.28,4.69 L12.41,4.76 L16.55,5.15 L20.69,4.71 L24.83,3.87 L28.97,5.00 L33.10,4.55 L37.24,4.46 L41.38,5.13 L45.52,4.21 L49.66,4.33 L53.79,5.15 L57.93,3.97 L62.07,4.89 L66.21,4.61 L70.34,4.60 L74.48,4.90 L78.62,4.84 L82.76,4.63 L86.90,5.11 L91.03,4.97 L95.17,4.25 L99.31,26.50 L103.45,4.55 L107.59,5.37 L111.72,4.65 L115.86,4.13 L120.00,4.79" clipPath="url(#_r_1t_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,4.90 L4.14,5.16 L8.28,4.69 L12.41,4.76 L16.55,5.15 L20.69,4.71 L24.83,3.87 L28.97,5.00 L33.10,4.55 L37.24,4.46 L41.38,5.13 L45.52,4.21 L49.66,4.33 L53.79,5.15 L57.93,3.97 L62.07,4.89 L66.21,4.61 L70.34,4.60 L74.48,4.90 L78.62,4.84 L82.76,4.63 L86.90,5.11 L91.03,4.97 L95.17,4.25 L99.31,26.50 L103.45,4.55 L107.59,5.37 L111.72,4.65 L115.86,4.13 L120.00,4.79" clipPath="url(#_r_1t_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +20.6%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    25 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_1v_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-106">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Webhook delivery success
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          webhook-dispatcher
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.9%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_21_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Webhook delivery success, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_22_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_22_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.74 L4.14,4.30 L8.28,4.50 L12.41,4.33 L16.55,3.38 L20.69,4.14 L24.83,3.79 L28.97,4.04 L33.10,3.76 L37.24,4.11 L41.38,4.47 L45.52,3.97 L49.66,4.45 L53.79,4.27 L57.93,4.37 L62.07,3.62 L66.21,3.73 L70.34,3.70 L74.48,3.46 L78.62,4.12 L82.76,3.66 L86.90,4.35 L91.03,26.50 L95.17,4.14 L99.31,4.19 L103.45,3.94 L107.59,3.72 L111.72,3.59 L115.86,4.64 L120.00,8.28 L120,14 L0,14 Z" clipPath="url(#_r_22_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.74 L4.14,4.30 L8.28,4.50 L12.41,4.33 L16.55,3.38 L20.69,4.14 L24.83,3.79 L28.97,4.04 L33.10,3.76 L37.24,4.11 L41.38,4.47 L45.52,3.97 L49.66,4.45 L53.79,4.27 L57.93,4.37 L62.07,3.62 L66.21,3.73 L70.34,3.70 L74.48,3.46 L78.62,4.12 L82.76,3.66 L86.90,4.35 L91.03,26.50 L95.17,4.14 L99.31,4.19 L103.45,3.94 L107.59,3.72 L111.72,3.59 L115.86,4.64 L120.00,8.28 L120,14 L0,14 Z" clipPath="url(#_r_22_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.74 L4.14,4.30 L8.28,4.50 L12.41,4.33 L16.55,3.38 L20.69,4.14 L24.83,3.79 L28.97,4.04 L33.10,3.76 L37.24,4.11 L41.38,4.47 L45.52,3.97 L49.66,4.45 L53.79,4.27 L57.93,4.37 L62.07,3.62 L66.21,3.73 L70.34,3.70 L74.48,3.46 L78.62,4.12 L82.76,3.66 L86.90,4.35 L91.03,26.50 L95.17,4.14 L99.31,4.19 L103.45,3.94 L107.59,3.72 L111.72,3.59 L115.86,4.64 L120.00,8.28" clipPath="url(#_r_22_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.74 L4.14,4.30 L8.28,4.50 L12.41,4.33 L16.55,3.38 L20.69,4.14 L24.83,3.79 L28.97,4.04 L33.10,3.76 L37.24,4.11 L41.38,4.47 L45.52,3.97 L49.66,4.45 L53.79,4.27 L57.93,4.37 L62.07,3.62 L66.21,3.73 L70.34,3.70 L74.48,3.46 L78.62,4.12 L82.76,3.66 L86.90,4.35 L91.03,26.50 L95.17,4.14 L99.31,4.19 L103.45,3.94 L107.59,3.72 L111.72,3.59 L115.86,4.64 L120.00,8.28" clipPath="url(#_r_22_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +36.3%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    30 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    Paging
                                  </Badge>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-112">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Reconciliation completeness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          reconciliation
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.9%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        30d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_24_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Reconciliation completeness, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_25_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_25_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.63 L4.14,4.49 L8.28,3.31 L12.41,4.71 L16.55,4.30 L20.69,4.30 L24.83,3.98 L28.97,4.60 L33.10,4.36 L37.24,4.00 L41.38,4.06 L45.52,3.87 L49.66,4.47 L53.79,4.37 L57.93,4.26 L62.07,3.88 L66.21,4.16 L70.34,3.97 L74.48,3.91 L78.62,4.47 L82.76,3.86 L86.90,3.59 L91.03,3.90 L95.17,4.02 L99.31,4.26 L103.45,3.64 L107.59,4.23 L111.72,3.85 L115.86,3.32 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_25_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.63 L4.14,4.49 L8.28,3.31 L12.41,4.71 L16.55,4.30 L20.69,4.30 L24.83,3.98 L28.97,4.60 L33.10,4.36 L37.24,4.00 L41.38,4.06 L45.52,3.87 L49.66,4.47 L53.79,4.37 L57.93,4.26 L62.07,3.88 L66.21,4.16 L70.34,3.97 L74.48,3.91 L78.62,4.47 L82.76,3.86 L86.90,3.59 L91.03,3.90 L95.17,4.02 L99.31,4.26 L103.45,3.64 L107.59,4.23 L111.72,3.85 L115.86,3.32 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_25_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.63 L4.14,4.49 L8.28,3.31 L12.41,4.71 L16.55,4.30 L20.69,4.30 L24.83,3.98 L28.97,4.60 L33.10,4.36 L37.24,4.00 L41.38,4.06 L45.52,3.87 L49.66,4.47 L53.79,4.37 L57.93,4.26 L62.07,3.88 L66.21,4.16 L70.34,3.97 L74.48,3.91 L78.62,4.47 L82.76,3.86 L86.90,3.59 L91.03,3.90 L95.17,4.02 L99.31,4.26 L103.45,3.64 L107.59,4.23 L111.72,3.85 L115.86,3.32 L120.00,26.50" clipPath="url(#_r_25_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.63 L4.14,4.49 L8.28,3.31 L12.41,4.71 L16.55,4.30 L20.69,4.30 L24.83,3.98 L28.97,4.60 L33.10,4.36 L37.24,4.00 L41.38,4.06 L45.52,3.87 L49.66,4.47 L53.79,4.37 L57.93,4.26 L62.07,3.88 L66.21,4.16 L70.34,3.97 L74.48,3.91 L78.62,4.47 L82.76,3.86 L86.90,3.59 L91.03,3.90 L95.17,4.02 L99.31,4.26 L103.45,3.64 L107.59,4.23 L111.72,3.85 L115.86,3.32 L120.00,26.50" clipPath="url(#_r_25_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +51.1%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    10 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    Ticket
                                  </Badge>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-114">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Search query latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                            <path d="m21 21-4.34-4.34"></path>
                                            <circle cx="11" cy="11" r="8"></circle>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          search-indexer
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.5%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Search query latency, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_28_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_28_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,4.46 L4.14,4.28 L8.28,4.83 L12.41,4.92 L16.55,5.13 L20.69,4.25 L24.83,4.76 L28.97,4.43 L33.10,4.79 L37.24,4.45 L41.38,4.85 L45.52,3.89 L49.66,5.52 L53.79,4.66 L57.93,4.94 L62.07,3.88 L66.21,5.03 L70.34,4.80 L74.48,4.87 L78.62,3.97 L82.76,4.21 L86.90,5.04 L91.03,4.00 L95.17,3.88 L99.31,4.09 L103.45,4.82 L107.59,5.34 L111.72,5.32 L115.86,4.30 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_28_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,4.46 L4.14,4.28 L8.28,4.83 L12.41,4.92 L16.55,5.13 L20.69,4.25 L24.83,4.76 L28.97,4.43 L33.10,4.79 L37.24,4.45 L41.38,4.85 L45.52,3.89 L49.66,5.52 L53.79,4.66 L57.93,4.94 L62.07,3.88 L66.21,5.03 L70.34,4.80 L74.48,4.87 L78.62,3.97 L82.76,4.21 L86.90,5.04 L91.03,4.00 L95.17,3.88 L99.31,4.09 L103.45,4.82 L107.59,5.34 L111.72,5.32 L115.86,4.30 L120.00,26.50 L120,14 L0,14 Z" clipPath="url(#_r_28_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,4.46 L4.14,4.28 L8.28,4.83 L12.41,4.92 L16.55,5.13 L20.69,4.25 L24.83,4.76 L28.97,4.43 L33.10,4.79 L37.24,4.45 L41.38,4.85 L45.52,3.89 L49.66,5.52 L53.79,4.66 L57.93,4.94 L62.07,3.88 L66.21,5.03 L70.34,4.80 L74.48,4.87 L78.62,3.97 L82.76,4.21 L86.90,5.04 L91.03,4.00 L95.17,3.88 L99.31,4.09 L103.45,4.82 L107.59,5.34 L111.72,5.32 L115.86,4.30 L120.00,26.50" clipPath="url(#_r_28_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,4.46 L4.14,4.28 L8.28,4.83 L12.41,4.92 L16.55,5.13 L20.69,4.25 L24.83,4.76 L28.97,4.43 L33.10,4.79 L37.24,4.45 L41.38,4.85 L45.52,3.89 L49.66,5.52 L53.79,4.66 L57.93,4.94 L62.07,3.88 L66.21,5.03 L70.34,4.80 L74.48,4.87 L78.62,3.97 L82.76,4.21 L86.90,5.04 L91.03,4.00 L95.17,3.88 L99.31,4.09 L103.45,4.82 L107.59,5.34 L111.72,5.32 L115.86,4.30 L120.00,26.50" clipPath="url(#_r_28_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +55.1%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    14 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-101">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Charge API availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <path d="M6 12h.01M18 12h.01"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          payments-api
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.95%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Charge API availability, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_2d_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_2d_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.86 L4.14,4.13 L8.28,3.99 L12.41,3.45 L16.55,3.44 L20.69,4.23 L24.83,4.26 L28.97,4.42 L33.10,3.98 L37.24,3.73 L41.38,4.36 L45.52,3.89 L49.66,4.19 L53.79,3.94 L57.93,3.76 L62.07,4.09 L66.21,3.81 L70.34,3.84 L74.48,4.22 L78.62,3.78 L82.76,4.01 L86.90,4.49 L91.03,3.62 L95.17,4.18 L99.31,4.29 L103.45,4.03 L107.59,4.29 L111.72,4.15 L115.86,26.50 L120.00,3.63 L120,14 L0,14 Z" clipPath="url(#_r_2d_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.86 L4.14,4.13 L8.28,3.99 L12.41,3.45 L16.55,3.44 L20.69,4.23 L24.83,4.26 L28.97,4.42 L33.10,3.98 L37.24,3.73 L41.38,4.36 L45.52,3.89 L49.66,4.19 L53.79,3.94 L57.93,3.76 L62.07,4.09 L66.21,3.81 L70.34,3.84 L74.48,4.22 L78.62,3.78 L82.76,4.01 L86.90,4.49 L91.03,3.62 L95.17,4.18 L99.31,4.29 L103.45,4.03 L107.59,4.29 L111.72,4.15 L115.86,26.50 L120.00,3.63 L120,14 L0,14 Z" clipPath="url(#_r_2d_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.86 L4.14,4.13 L8.28,3.99 L12.41,3.45 L16.55,3.44 L20.69,4.23 L24.83,4.26 L28.97,4.42 L33.10,3.98 L37.24,3.73 L41.38,4.36 L45.52,3.89 L49.66,4.19 L53.79,3.94 L57.93,3.76 L62.07,4.09 L66.21,3.81 L70.34,3.84 L74.48,4.22 L78.62,3.78 L82.76,4.01 L86.90,4.49 L91.03,3.62 L95.17,4.18 L99.31,4.29 L103.45,4.03 L107.59,4.29 L111.72,4.15 L115.86,26.50 L120.00,3.63" clipPath="url(#_r_2d_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.86 L4.14,4.13 L8.28,3.99 L12.41,3.45 L16.55,3.44 L20.69,4.23 L24.83,4.26 L28.97,4.42 L33.10,3.98 L37.24,3.73 L41.38,4.36 L45.52,3.89 L49.66,4.19 L53.79,3.94 L57.93,3.76 L62.07,4.09 L66.21,3.81 L70.34,3.84 L74.48,4.22 L78.62,3.78 L82.76,4.01 L86.90,4.49 L91.03,3.62 L95.17,4.18 L99.31,4.29 L103.45,4.03 L107.59,4.29 L111.72,4.15 L115.86,26.50 L120.00,3.63" clipPath="url(#_r_2d_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +58.5%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    16 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_2f_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-107">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Webhook delivery latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          webhook-dispatcher
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        7d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_2h_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Webhook delivery latency, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_2i_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_2i_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,4.65 L4.14,4.52 L8.28,4.77 L12.41,5.25 L16.55,4.63 L20.69,5.05 L24.83,4.91 L28.97,4.85 L33.10,5.97 L37.24,6.26 L41.38,5.53 L45.52,5.42 L49.66,5.66 L53.79,5.16 L57.93,4.82 L62.07,4.95 L66.21,5.09 L70.34,6.02 L74.48,5.54 L78.62,5.07 L82.76,4.79 L86.90,5.99 L91.03,4.27 L95.17,5.60 L99.31,5.39 L103.45,4.52 L107.59,5.46 L111.72,4.87 L115.86,5.14 L120.00,6.58 L120,14 L0,14 Z" clipPath="url(#_r_2i_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,4.65 L4.14,4.52 L8.28,4.77 L12.41,5.25 L16.55,4.63 L20.69,5.05 L24.83,4.91 L28.97,4.85 L33.10,5.97 L37.24,6.26 L41.38,5.53 L45.52,5.42 L49.66,5.66 L53.79,5.16 L57.93,4.82 L62.07,4.95 L66.21,5.09 L70.34,6.02 L74.48,5.54 L78.62,5.07 L82.76,4.79 L86.90,5.99 L91.03,4.27 L95.17,5.60 L99.31,5.39 L103.45,4.52 L107.59,5.46 L111.72,4.87 L115.86,5.14 L120.00,6.58 L120,14 L0,14 Z" clipPath="url(#_r_2i_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,4.65 L4.14,4.52 L8.28,4.77 L12.41,5.25 L16.55,4.63 L20.69,5.05 L24.83,4.91 L28.97,4.85 L33.10,5.97 L37.24,6.26 L41.38,5.53 L45.52,5.42 L49.66,5.66 L53.79,5.16 L57.93,4.82 L62.07,4.95 L66.21,5.09 L70.34,6.02 L74.48,5.54 L78.62,5.07 L82.76,4.79 L86.90,5.99 L91.03,4.27 L95.17,5.60 L99.31,5.39 L103.45,4.52 L107.59,5.46 L111.72,4.87 L115.86,5.14 L120.00,6.58" clipPath="url(#_r_2i_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,4.65 L4.14,4.52 L8.28,4.77 L12.41,5.25 L16.55,4.63 L20.69,5.05 L24.83,4.91 L28.97,4.85 L33.10,5.97 L37.24,6.26 L41.38,5.53 L45.52,5.42 L49.66,5.66 L53.79,5.16 L57.93,4.82 L62.07,4.95 L66.21,5.09 L70.34,6.02 L74.48,5.54 L78.62,5.07 L82.76,4.79 L86.90,5.99 L91.03,4.27 L95.17,5.60 L99.31,5.39 L103.45,4.52 L107.59,5.46 L111.72,4.87 L115.86,5.14 L120.00,6.58" clipPath="url(#_r_2i_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +68.4%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    15 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-117">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Push delivery latency
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          notifications
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        7d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Push delivery latency, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_2n_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_2n_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,5.26 L4.14,5.47 L8.28,5.69 L12.41,6.10 L16.55,5.49 L20.69,6.16 L24.83,4.97 L28.97,5.31 L33.10,5.47 L37.24,5.60 L41.38,4.84 L45.52,5.46 L49.66,5.76 L53.79,5.42 L57.93,5.72 L62.07,4.50 L66.21,5.80 L70.34,5.49 L74.48,5.03 L78.62,5.25 L82.76,4.67 L86.90,5.41 L91.03,4.38 L95.17,4.62 L99.31,5.21 L103.45,5.12 L107.59,5.81 L111.72,5.79 L115.86,4.77 L120.00,5.56 L120,14 L0,14 Z" clipPath="url(#_r_2n_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,5.26 L4.14,5.47 L8.28,5.69 L12.41,6.10 L16.55,5.49 L20.69,6.16 L24.83,4.97 L28.97,5.31 L33.10,5.47 L37.24,5.60 L41.38,4.84 L45.52,5.46 L49.66,5.76 L53.79,5.42 L57.93,5.72 L62.07,4.50 L66.21,5.80 L70.34,5.49 L74.48,5.03 L78.62,5.25 L82.76,4.67 L86.90,5.41 L91.03,4.38 L95.17,4.62 L99.31,5.21 L103.45,5.12 L107.59,5.81 L111.72,5.79 L115.86,4.77 L120.00,5.56 L120,14 L0,14 Z" clipPath="url(#_r_2n_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,5.26 L4.14,5.47 L8.28,5.69 L12.41,6.10 L16.55,5.49 L20.69,6.16 L24.83,4.97 L28.97,5.31 L33.10,5.47 L37.24,5.60 L41.38,4.84 L45.52,5.46 L49.66,5.76 L53.79,5.42 L57.93,5.72 L62.07,4.50 L66.21,5.80 L70.34,5.49 L74.48,5.03 L78.62,5.25 L82.76,4.67 L86.90,5.41 L91.03,4.38 L95.17,4.62 L99.31,5.21 L103.45,5.12 L107.59,5.81 L111.72,5.79 L115.86,4.77 L120.00,5.56" clipPath="url(#_r_2n_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,5.26 L4.14,5.47 L8.28,5.69 L12.41,6.10 L16.55,5.49 L20.69,6.16 L24.83,4.97 L28.97,5.31 L33.10,5.47 L37.24,5.60 L41.38,4.84 L45.52,5.46 L49.66,5.76 L53.79,5.42 L57.93,5.72 L62.07,4.50 L66.21,5.80 L70.34,5.49 L74.48,5.03 L78.62,5.25 L82.76,4.67 L86.90,5.41 L91.03,4.38 L95.17,4.62 L99.31,5.21 L103.45,5.12 L107.59,5.81 L111.72,5.79 L115.86,4.77 L120.00,5.56" clipPath="url(#_r_2n_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +70.3%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    16 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-bell-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellOffIcon" tabler="IconBellOff" hugeicons="NotificationOff03Icon" phosphor="BellSlashIcon" remixicon="RiNotificationOffLine" aria-hidden="true">
                                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"></path>
                                      <path d="m2 2 20 20"></path>
                                      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"></path>
                                    </svg>
                                    Muted
                                  </Badge>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-113">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Recon report freshness
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          reconciliation
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        7d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_2p_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Recon report freshness, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_2q_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_2q_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,4.97 L4.14,4.68 L8.28,4.68 L12.41,4.68 L16.55,4.68 L20.69,4.10 L24.83,3.81 L28.97,4.68 L33.10,4.39 L37.24,3.81 L41.38,3.81 L45.52,4.10 L49.66,4.39 L53.79,3.81 L57.93,3.53 L62.07,4.10 L66.21,4.97 L70.34,4.68 L74.48,3.53 L78.62,4.10 L82.76,4.10 L86.90,4.39 L91.03,4.68 L95.17,4.10 L99.31,4.68 L103.45,4.68 L107.59,4.10 L111.72,4.10 L115.86,4.10 L120.00,5.18 L120,14 L0,14 Z" clipPath="url(#_r_2q_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,4.97 L4.14,4.68 L8.28,4.68 L12.41,4.68 L16.55,4.68 L20.69,4.10 L24.83,3.81 L28.97,4.68 L33.10,4.39 L37.24,3.81 L41.38,3.81 L45.52,4.10 L49.66,4.39 L53.79,3.81 L57.93,3.53 L62.07,4.10 L66.21,4.97 L70.34,4.68 L74.48,3.53 L78.62,4.10 L82.76,4.10 L86.90,4.39 L91.03,4.68 L95.17,4.10 L99.31,4.68 L103.45,4.68 L107.59,4.10 L111.72,4.10 L115.86,4.10 L120.00,5.18 L120,14 L0,14 Z" clipPath="url(#_r_2q_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,4.97 L4.14,4.68 L8.28,4.68 L12.41,4.68 L16.55,4.68 L20.69,4.10 L24.83,3.81 L28.97,4.68 L33.10,4.39 L37.24,3.81 L41.38,3.81 L45.52,4.10 L49.66,4.39 L53.79,3.81 L57.93,3.53 L62.07,4.10 L66.21,4.97 L70.34,4.68 L74.48,3.53 L78.62,4.10 L82.76,4.10 L86.90,4.39 L91.03,4.68 L95.17,4.10 L99.31,4.68 L103.45,4.68 L107.59,4.10 L111.72,4.10 L115.86,4.10 L120.00,5.18" clipPath="url(#_r_2q_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,4.97 L4.14,4.68 L8.28,4.68 L12.41,4.68 L16.55,4.68 L20.69,4.10 L24.83,3.81 L28.97,4.68 L33.10,4.39 L37.24,3.81 L41.38,3.81 L45.52,4.10 L49.66,4.39 L53.79,3.81 L57.93,3.53 L62.07,4.10 L66.21,4.97 L70.34,4.68 L74.48,3.53 L78.62,4.10 L82.76,4.10 L86.90,4.39 L91.03,4.68 L95.17,4.10 L99.31,4.68 L103.45,4.68 L107.59,4.10 L111.72,4.10 L115.86,4.10 L120.00,5.18" clipPath="url(#_r_2q_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +74.7%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    20 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    <svg className="lucide lucide-bell-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellOffIcon" tabler="IconBellOff" hugeicons="NotificationOff03Icon" phosphor="BellSlashIcon" remixicon="RiNotificationOffLine" aria-hidden="true">
                                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"></path>
                                      <path d="m2 2 20 20"></path>
                                      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"></path>
                                    </svg>
                                    Muted
                                  </Badge>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-116">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Email send success
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          notifications
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.5%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_2s_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Email send success, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_2t_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_2t_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.99 L4.14,3.60 L8.28,3.43 L12.41,3.63 L16.55,3.07 L20.69,3.59 L24.83,3.42 L28.97,2.89 L33.10,3.52 L37.24,3.90 L41.38,4.05 L45.52,4.02 L49.66,3.68 L53.79,3.74 L57.93,3.75 L62.07,3.50 L66.21,3.34 L70.34,3.91 L74.48,3.52 L78.62,3.39 L82.76,3.17 L86.90,3.63 L91.03,3.45 L95.17,3.07 L99.31,3.93 L103.45,3.58 L107.59,3.26 L111.72,3.36 L115.86,3.96 L120.00,3.30 L120,14 L0,14 Z" clipPath="url(#_r_2t_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.99 L4.14,3.60 L8.28,3.43 L12.41,3.63 L16.55,3.07 L20.69,3.59 L24.83,3.42 L28.97,2.89 L33.10,3.52 L37.24,3.90 L41.38,4.05 L45.52,4.02 L49.66,3.68 L53.79,3.74 L57.93,3.75 L62.07,3.50 L66.21,3.34 L70.34,3.91 L74.48,3.52 L78.62,3.39 L82.76,3.17 L86.90,3.63 L91.03,3.45 L95.17,3.07 L99.31,3.93 L103.45,3.58 L107.59,3.26 L111.72,3.36 L115.86,3.96 L120.00,3.30 L120,14 L0,14 Z" clipPath="url(#_r_2t_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.99 L4.14,3.60 L8.28,3.43 L12.41,3.63 L16.55,3.07 L20.69,3.59 L24.83,3.42 L28.97,2.89 L33.10,3.52 L37.24,3.90 L41.38,4.05 L45.52,4.02 L49.66,3.68 L53.79,3.74 L57.93,3.75 L62.07,3.50 L66.21,3.34 L70.34,3.91 L74.48,3.52 L78.62,3.39 L82.76,3.17 L86.90,3.63 L91.03,3.45 L95.17,3.07 L99.31,3.93 L103.45,3.58 L107.59,3.26 L111.72,3.36 L115.86,3.96 L120.00,3.30" clipPath="url(#_r_2t_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.99 L4.14,3.60 L8.28,3.43 L12.41,3.63 L16.55,3.07 L20.69,3.59 L24.83,3.42 L28.97,2.89 L33.10,3.52 L37.24,3.90 L41.38,4.05 L45.52,4.02 L49.66,3.68 L53.79,3.74 L57.93,3.75 L62.07,3.50 L66.21,3.34 L70.34,3.91 L74.48,3.52 L78.62,3.39 L82.76,3.17 L86.90,3.63 L91.03,3.45 L95.17,3.07 L99.31,3.93 L103.45,3.58 L107.59,3.26 L111.72,3.36 L115.86,3.96 L120.00,3.30" clipPath="url(#_r_2t_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +83.9%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    144 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-103">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Refund API availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <path d="M6 12h.01M18 12h.01"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          payments-api
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.9%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_31_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Refund API availability, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_32_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_32_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,3.02 L4.14,3.03 L8.28,2.95 L12.41,3.03 L16.55,2.78 L20.69,3.16 L24.83,3.14 L28.97,3.16 L33.10,3.15 L37.24,3.01 L41.38,3.02 L45.52,2.87 L49.66,2.83 L53.79,3.33 L57.93,3.19 L62.07,2.80 L66.21,2.82 L70.34,3.37 L74.48,3.10 L78.62,2.94 L82.76,3.03 L86.90,2.73 L91.03,2.87 L95.17,3.10 L99.31,2.96 L103.45,2.84 L107.59,2.72 L111.72,3.03 L115.86,3.07 L120.00,3.18 L120,14 L0,14 Z" clipPath="url(#_r_32_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,3.02 L4.14,3.03 L8.28,2.95 L12.41,3.03 L16.55,2.78 L20.69,3.16 L24.83,3.14 L28.97,3.16 L33.10,3.15 L37.24,3.01 L41.38,3.02 L45.52,2.87 L49.66,2.83 L53.79,3.33 L57.93,3.19 L62.07,2.80 L66.21,2.82 L70.34,3.37 L74.48,3.10 L78.62,2.94 L82.76,3.03 L86.90,2.73 L91.03,2.87 L95.17,3.10 L99.31,2.96 L103.45,2.84 L107.59,2.72 L111.72,3.03 L115.86,3.07 L120.00,3.18 L120,14 L0,14 Z" clipPath="url(#_r_32_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,3.02 L4.14,3.03 L8.28,2.95 L12.41,3.03 L16.55,2.78 L20.69,3.16 L24.83,3.14 L28.97,3.16 L33.10,3.15 L37.24,3.01 L41.38,3.02 L45.52,2.87 L49.66,2.83 L53.79,3.33 L57.93,3.19 L62.07,2.80 L66.21,2.82 L70.34,3.37 L74.48,3.10 L78.62,2.94 L82.76,3.03 L86.90,2.73 L91.03,2.87 L95.17,3.10 L99.31,2.96 L103.45,2.84 L107.59,2.72 L111.72,3.03 L115.86,3.07 L120.00,3.18" clipPath="url(#_r_32_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,3.02 L4.14,3.03 L8.28,2.95 L12.41,3.03 L16.55,2.78 L20.69,3.16 L24.83,3.14 L28.97,3.16 L33.10,3.15 L37.24,3.01 L41.38,3.02 L45.52,2.87 L49.66,2.83 L53.79,3.33 L57.93,3.19 L62.07,2.80 L66.21,2.82 L70.34,3.37 L74.48,3.10 L78.62,2.94 L82.76,3.03 L86.90,2.73 L91.03,2.87 L95.17,3.10 L99.31,2.96 L103.45,2.84 L107.59,2.72 L111.72,3.03 L115.86,3.07 L120.00,3.18" clipPath="url(#_r_32_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +88.3%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    206 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_34_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-13 data-[state=selected]:bg-muted/50 data-linked:bg-muted/50 hover:bg-muted/50" data-row-id="SLO-109">
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors truncate underline-offset-2" aria-haspopup="dialog" type="button">
                                      Fraud model availability
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="[&_svg:not([class*=size-])]:size-3.5 flex gap-1.5 items-center min-w-0">
                                        <span className="flex shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="truncate">
                                          fraud-scorer
                                        </span>
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        99.95%
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="shrink-0 tabular-nums">
                                        28d
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="inline-flex" id="base-ui-_r_36_" baseUiTooltipTrigger="">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <svg className="h-7 overflow-visible w-full" role="img" aria-label="Fraud model availability, budget left per 3 days over 90 days" viewBox="0 0 120 28" preserveAspectRatio="none">
                                    <defs>
                                      <clippath id="_r_37_-above">
                                        <rect x="0" y="0" width="120" height="14"></rect>
                                      </clippath>
                                      <clippath id="_r_37_-below">
                                        <rect x="0" y="14" width="120" height="14"></rect>
                                      </clippath>
                                    </defs>
                                    <path d="M0.00,2.35 L4.14,2.83 L8.28,2.59 L12.41,2.69 L16.55,2.71 L20.69,2.86 L24.83,2.69 L28.97,2.82 L33.10,2.67 L37.24,2.67 L41.38,2.52 L45.52,2.46 L49.66,2.62 L53.79,2.46 L57.93,2.67 L62.07,2.61 L66.21,2.74 L70.34,2.69 L74.48,2.71 L78.62,2.57 L82.76,2.57 L86.90,2.69 L91.03,2.72 L95.17,2.53 L99.31,2.64 L103.45,2.63 L107.59,2.46 L111.72,2.54 L115.86,2.85 L120.00,2.65 L120,14 L0,14 Z" clipPath="url(#_r_37_-above)" fill="var(--success)" fillOpacity="0.16"></path>
                                    <path d="M0.00,2.35 L4.14,2.83 L8.28,2.59 L12.41,2.69 L16.55,2.71 L20.69,2.86 L24.83,2.69 L28.97,2.82 L33.10,2.67 L37.24,2.67 L41.38,2.52 L45.52,2.46 L49.66,2.62 L53.79,2.46 L57.93,2.67 L62.07,2.61 L66.21,2.74 L70.34,2.69 L74.48,2.71 L78.62,2.57 L82.76,2.57 L86.90,2.69 L91.03,2.72 L95.17,2.53 L99.31,2.64 L103.45,2.63 L107.59,2.46 L111.72,2.54 L115.86,2.85 L120.00,2.65 L120,14 L0,14 Z" clipPath="url(#_r_37_-below)" fill="var(--destructive)" fillOpacity="0.2"></path>
                                    <path d="M0.00,2.35 L4.14,2.83 L8.28,2.59 L12.41,2.69 L16.55,2.71 L20.69,2.86 L24.83,2.69 L28.97,2.82 L33.10,2.67 L37.24,2.67 L41.38,2.52 L45.52,2.46 L49.66,2.62 L53.79,2.46 L57.93,2.67 L62.07,2.61 L66.21,2.74 L70.34,2.69 L74.48,2.71 L78.62,2.57 L82.76,2.57 L86.90,2.69 L91.03,2.72 L95.17,2.53 L99.31,2.64 L103.45,2.63 L107.59,2.46 L111.72,2.54 L115.86,2.85 L120.00,2.65" clipPath="url(#_r_37_-above)" fill="none" stroke="var(--success)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <path d="M0.00,2.35 L4.14,2.83 L8.28,2.59 L12.41,2.69 L16.55,2.71 L20.69,2.86 L24.83,2.69 L28.97,2.82 L33.10,2.67 L37.24,2.67 L41.38,2.52 L45.52,2.46 L49.66,2.62 L53.79,2.46 L57.93,2.67 L62.07,2.61 L66.21,2.74 L70.34,2.69 L74.48,2.71 L78.62,2.57 L82.76,2.57 L86.90,2.69 L91.03,2.72 L95.17,2.53 L99.31,2.64 L103.45,2.63 L107.59,2.46 L111.72,2.54 L115.86,2.85 L120.00,2.65" clipPath="url(#_r_37_-below)" fill="none" stroke="var(--destructive)" strokeWidth="1.25" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    <line x1="0" x2="120" y1="14" y2="14" stroke="var(--border)" strokeWidth="1" vector-effect="non-scaling-stroke"></line>
                                  </svg>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block font-medium tabular-nums text-sm text-success">
                                    +90.8%
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="block tabular-nums text-foreground text-sm">
                                    275 days
                                  </span>
                                </td>
                                <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                  <Tooltip>
                                  <TooltipTrigger className="cursor-default text-muted-foreground text-sm" id="base-ui-_r_39_" baseUiTooltipTrigger="">
                                    Quiet
                                  </TooltipTrigger>
                                  </Tooltip>
                                </td>
                              </tr>
                            </DataGridTableBody>
                          </DataGridTable>
                        </DataGridTableViewport>
                      </div>
                    </div>
                  </DataGridScrollArea>
                  <div className="absolute h-(--data-grid-scrollbar-track-height) inset-e-px pointer-events-none top-(--data-grid-scrollbar-header-height) z-20" aria-hidden="true" style={{"--data-grid-scrollbar-header-height": "32px", "--data-grid-scrollbar-thumb-height": "234px", "--data-grid-scrollbar-thumb-top": "0px", "--data-grid-scrollbar-track-height": "468px"}}>
                    <div className="h-full p-px pointer-events-auto relative touch-none w-[var(--data-grid-scrollbar-size,0.625rem)]">
                      <div className="absolute before:-inset-0.5 before:absolute bg-border end-px h-(--data-grid-scrollbar-thumb-height) rounded-full top-(--data-grid-scrollbar-thumb-top) w-[calc(var(--data-grid-scrollbar-size,0.625rem)-0.1875rem)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4 lg:min-h-0 min-h-110 min-w-0 p-4" aria-label="Budget index">
              <div className="flex gap-3 items-start justify-between min-w-0">
                <div className="flex flex-col gap-1 min-w-0">
                  <h2 className="font-semibold text-sm">
                    Budget Index
                  </h2>
                  <p className="flex gap-1.5 h-4 items-center min-w-0 text-muted-foreground text-xs" aria-live="polite">
                    <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                      Ledger write success
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="[text-box:trim-both_cap_alphabetic] font-medium shrink-0 tabular-nums text-destructive">
                      -82.3%
                    </span>
                    <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="[text-box:trim-both_cap_alphabetic] max-sm:hidden shrink-0 tabular-nums">
                      99.99% over 30d
                    </span>
                  </p>
                </div>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M15 3v18"></path>
                  </svg>
                  Details
                </Button>
              </div>
              <div className="flex-1 min-h-64 relative">
                <div className="flex flex-col h-full min-h-72 min-w-0 relative">
                  <div className="absolute bg-linear-to-b bottom-0 from-foreground/2 left-0 pointer-events-none to-foreground/8 top-3.5" aria-hidden="true" style={{width: "22px", borderRadius: "11px", transform: "translateX(45.3333px)"}}></div>
                  <div className="h-8 shrink-0" aria-hidden="true"></div>
                  <div className="flex-1 min-h-0 relative">
                    <div className="[&_.recharts-cartesian-axis-tick-value]:fill-muted-foreground [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden absolute aspect-auto cn-chart flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid h-auto inset-0 justify-center min-w-0 outline-hidden text-xs" data-chart="chart-_r_3a_" role="group" aria-label="Budget left for 18 SLOs, from Ledger write success at -82.3% to Fraud model availability at +90.8%; 5 overspent. Arrow keys move between SLOs, Enter selects." tabIndex="0">
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="cursor-pointer recharts-wrapper" width="496" height="348" style={{position: "relative", cursor: "default", width: "496px", height: "348px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" width="496" height="348" viewBox="0 0 496 348" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="322.2142857142857" x2="488" y2="322.2142857142857"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="248.10714285714286" x2="488" y2="248.10714285714286"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="174" x2="488" y2="174"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="99.89285714285715" x2="488" y2="99.89285714285715"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="25.7857142857143" x2="488" y2="25.7857142857143"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="8" x2="488" y2="8"></line>
                                    <line strokeDasharray="3 4" stroke="#ccc" fill="none" x="44" y="8" width="444" height="332" x1="44" y1="340" x2="488" y2="340"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts1-clip">
                                  <rect x="44" y="8" height="332" width="444"></rect>
                                </clippath>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_3f_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="55.96666666666667" x2="55.96666666666667" y1="174" y2="287.9894118435204" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="55.96666666666667" cy="295.9894118435204" r="10" fill="var(--destructive)" fillOpacity="0.18"></circle>
                                            <circle cx="55.96666666666667" cy="295.9894118435204" r="7" fill="var(--card)"></circle>
                                            <circle cx="55.96666666666667" cy="295.9894118435204" r="5" fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="80.63333333333334" x2="80.63333333333334" y1="174" y2="250.90336074899432" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="80.63333333333334" cy="257.9033607489943" r="4" fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="105.30000000000001" x2="105.30000000000001" y1="174" y2="221.6052631578945" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="105.30000000000001" cy="228.6052631578945" r="4" fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="129.96666666666667" x2="129.96666666666667" y1="174" y2="191.27347992223622" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="129.96666666666667" cy="198.27347992223622" r="4" fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="154.63333333333335" x2="154.63333333333335" y1="174" y2="180.10277949473644" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="154.63333333333335" cy="187.10277949473644" r="4" fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="179.3" x2="179.3" y1="174" y2="169.2890574448198" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="179.3" cy="162.2890574448198" r="4" fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="203.96666666666667" x2="203.96666666666667" y1="174" y2="155.038987987931" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="203.96666666666667" cy="148.038987987931" r="4" fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="228.63333333333335" x2="228.63333333333335" y1="174" y2="150.465471617426" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="228.63333333333335" cy="143.465471617426" r="4" fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="253.3" x2="253.3" y1="174" y2="127.17857458720651" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="253.3" cy="120.17857458720651" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="277.96666666666664" x2="277.96666666666664" y1="174" y2="105.25064578630872" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="277.96666666666664" cy="98.25064578630872" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="302.6333333333333" x2="302.6333333333333" y1="174" y2="99.2874160532592" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="302.6333333333333" cy="92.2874160532592" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="327.3" x2="327.3" y1="174" y2="94.30587622349344" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="327.3" cy="87.30587622349344" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="351.96666666666664" x2="351.96666666666664" y1="174" y2="79.68831351905101" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="351.96666666666664" cy="72.68831351905101" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="376.6333333333333" x2="376.6333333333333" y1="174" y2="76.75447084960885" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="376.6333333333333" cy="69.75447084960885" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="401.3" x2="401.3" y1="174" y2="70.22932330827066" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="401.3" cy="63.229323308270665" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="425.96666666666664" x2="425.96666666666664" y1="174" y2="56.63948965365248" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="425.96666666666664" cy="49.63948965365248" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="450.6333333333333" x2="450.6333333333333" y1="174" y2="50.08219556027181" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="450.6333333333333" cy="43.08219556027181" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1="475.3" x2="475.3" y1="174" y2="46.36193296020036" stroke="var(--muted-foreground)" strokeOpacity="0.32" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"></line>
                                            <circle cx="475.3" cy="39.36193296020036" r="4" fill="var(--success)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                <g className="recharts-layer recharts-reference-line">
                                  <line className="recharts-reference-line-line" y="0" stroke="var(--foreground)" strokeOpacity="0.3" fill="none" fillOpacity="1" strokeWidth="1" x1="44" y1="174" x2="488" y2="174"></line>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1">
                                <g className="recharts-cartesian-axis recharts-layer recharts-yAxis yAxis">
                                  <g className="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
                                    <g className="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines">
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="332" stroke="none" x="32" y="322.2142857142857" textAnchor="end" fill="#666">
                                      <tspan x="32" dy="0.355em">
                                        -100%
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="332" stroke="none" x="32" y="248.10714285714286" textAnchor="end" fill="#666">
                                      <tspan x="32" dy="0.355em">
                                        -50%
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="332" stroke="none" x="32" y="174" textAnchor="end" fill="#666">
                                      <tspan x="32" dy="0.355em">
                                        0%
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="332" stroke="none" x="32" y="99.89285714285715" textAnchor="end" fill="#666">
                                      <tspan x="32" dy="0.355em">
                                        +50%
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" width="44" orientation="left" height="332" stroke="none" x="32" y="25.7857142857143" textAnchor="end" fill="#666">
                                      <tspan x="32" dy="0.355em">
                                        +100%
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="@container absolute h-7 inset-x-0 pointer-events-none top-1" aria-hidden="true">
                    <div className="absolute flex left-0 top-0" style={{transform: "translateX(clamp(0px, -50% + 15.3333px, -100% + 100cqw))"}}>
                      <span className="bg-foreground font-semibold gap-1.5 h-7 inline-flex items-center px-3 rounded-full tabular-nums text-background text-xs whitespace-nowrap" aria-hidden="true">
                        -82.3%
                        <span className="bg-background/40 rounded-full size-1"></span>
                        <span className="font-medium text-background/65">
                          Ledger write success
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 items-center text-muted-foreground text-xs">
                <li className="flex gap-1.5 items-center">
                  <span className="bg-success rounded-full size-2" aria-hidden="true"></span>
                  Healthy
                  <span className="font-medium tabular-nums text-foreground">
                    10
                  </span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <span className="bg-warning rounded-full size-2" aria-hidden="true"></span>
                  At Risk
                  <span className="font-medium tabular-nums text-foreground">
                    3
                  </span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <span className="bg-destructive rounded-full size-2" aria-hidden="true"></span>
                  Exhausted
                  <span className="font-medium tabular-nums text-foreground">
                    5
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs whitespace-nowrap">
          <div className="flex gap-1.5 h-4 items-center">
            <span className="[text-box:trim-both_cap_alphabetic]">
              Showing
              <span className="font-medium text-foreground">
                18
              </span>
              of 18 SLOs
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              2 muted
            </span>
          </div>
          <div className="flex gap-1.5 h-4 items-center">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:size-3.5 cursor-default flex gap-1.5 items-center max-sm:hidden" id="base-ui-_r_3c_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <span className="[text-box:trim-both_cap_alphabetic]">
                Measured at own objective
              </span>
            </TooltipTrigger>
            </Tooltip>
            <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="[text-box:trim-both_cap_alphabetic]">
              Evaluated Sep 29, 14:20 UTC
            </span>
          </div>
        </footer>
      </Frame>
    </main>
  )
}
