import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Access cohort grouped data grid
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame>
          <header className="flex flex-col gap-3 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="font-semibold text-sm">
                Access Cohort
              </div>
              <div className="text-muted-foreground text-sm">
                AI intake for joint replacement consults
              </div>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Answers
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                  4,985
                </Badge>
              </div>
              <div className="flex gap-2 items-center min-w-0 sm:border-l sm:first:border-l-0 sm:first:pl-0 sm:pl-3">
                <span className="font-medium text-muted-foreground text-xs truncate">
                  Hold Risk
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  512
                </Badge>
              </div>
              <span className="hidden sm:border-l sm:inline-flex sm:items-center sm:pl-3 text-muted-foreground text-xs">
                Exported 24 Jun 2026
              </span>
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Export
              </Button>
            </div>
          </header>
          <FramePanel className="bg-card p-0! shadow-none!">
            <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
              <Tabs data-orientation="horizontal" activationDirection="none">
                <TabsList className="gap-5" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="pb-3 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                    Intake area
                  </TabsTrigger>
                  <TabsTrigger className="pb-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                    Booking strength
                  </TabsTrigger>
                  <TabsTrigger className="pb-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                    Hold risk
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-wrap gap-2 items-center">
                <Select>
                <SelectTrigger className="sm:w-44 w-full" type="button" tabIndex="0" id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    Orthopedic Recall
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="orthopedics" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="sm:w-40 w-full" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by hold risk">
                  <SelectValue>
                    All hold risk
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <InputGroup className="sm:w-52" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_a_" placeholder="Search signals" aria-label="Search cohort signals" value="" />
                </InputGroup>
              </div>
              <div className="flex flex-wrap gap-2 items-center justify-end">
                <Field className="gap-2 w-auto" role="group" data-orientation="horizontal">
                  <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm">
                    Notes
                  </FieldLabel>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" size="default" aria-label="Toggle signal notes">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Button type="button" tabIndex="0">
                  Expand
                </Button>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="relative">
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_e_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridTableViewport>
                      <DataGridTable>
                        <colgroup>
                          <col style={{width: "260px"}} />
                          <col style={{width: "112px"}} />
                          <col style={{width: "128px"}} />
                          <col style={{width: "128px"}} />
                          <col style={{width: "128px"}} />
                          <col style={{width: "128px"}} />
                          <col style={{width: "128px"}} />
                        </colgroup>
                        <thead>
                          <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="signal" data-header-id="signal" data-header-depth="0" style={{width: "260px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                  Intake Signal
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="sample" data-header-id="sample" data-header-depth="0" style={{width: "112px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2 w-full" type="button" tabIndex="0">
                                  Answers
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="verified" data-header-id="verified" data-header-depth="0" style={{width: "128px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2 w-full" type="button" tabIndex="0">
                                  Verified
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="booked" data-header-id="booked" data-header-depth="0" style={{width: "128px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2 w-full" type="button" tabIndex="0">
                                  Booked
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="arrived" data-header-id="arrived" data-header-depth="0" style={{width: "128px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2 w-full" type="button" tabIndex="0">
                                  Arrived
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="started" data-header-id="started" data-header-depth="0" style={{width: "128px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2 w-full" type="button" tabIndex="0">
                                  Started
                                  <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </Button>
                              </div>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" aria-sort="none" data-col-id="held" data-header-id="held" data-header-depth="0" style={{width: "128px"}}>
                              <div className="-ms-2 flex h-full items-center">
                                <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground justify-end lg:translate-x-3.5 px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-right text-secondary-foreground/80 translate-x-2.5 w-full" type="button" tabIndex="0">
                                  Hold
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
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="clinical">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-2 items-center min-w-0" data-cohort-row="group">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Clinical Fit" aria-expanded="true">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                                <span className="font-semibold shrink-0 text-foreground text-sm">
                                  Clinical Fit
                                </span>
                                <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                  Need, referral, and record readiness
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  2
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  1,281
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Clinical Fit, Verified: 1,060 of 1,281 answers, 83%" id="base-ui-_r_g_">
                                <span className="tabular-nums">
                                  1,060
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  83%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Clinical Fit, Booked: 768 of 1,281 answers, 60%" id="base-ui-_r_i_">
                                <span className="tabular-nums">
                                  768
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  60%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Clinical Fit, Arrived: 638 of 1,281 answers, 50%" id="base-ui-_r_k_">
                                <span className="tabular-nums">
                                  638
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  50%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Clinical Fit, Started: 552 of 1,281 answers, 43%" id="base-ui-_r_m_">
                                <span className="tabular-nums">
                                  552
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  43%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Clinical Fit, Hold: 95 of 1,281 answers, 7%" id="base-ui-_r_o_">
                                <span className="tabular-nums">
                                  95
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  7%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="ortho-urgency" data-depth="1">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-cohort-row="question">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  Q1
                                </Badge>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Needs care this week cohort signal">
                                    Needs care this week
                                  </a>
                                  <p className="leading-5 text-muted-foreground text-sm truncate">
                                    Acute pain and mobility limits
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  642
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Needs care this week, Verified: 548 of 642 answers, 85%" id="base-ui-_r_q_">
                                <span className="tabular-nums">
                                  548
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  85%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Needs care this week, Booked: 392 of 642 answers, 61%" id="base-ui-_r_s_">
                                <span className="tabular-nums">
                                  392
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  61%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Needs care this week, Arrived: 328 of 642 answers, 51%" id="base-ui-_r_u_">
                                <span className="tabular-nums">
                                  328
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  51%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Needs care this week, Started: 284 of 642 answers, 44%" id="base-ui-_r_10_">
                                <span className="tabular-nums">
                                  284
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  44%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Needs care this week, Hold: 39 of 642 answers, 6%" id="base-ui-_r_12_">
                                <span className="tabular-nums">
                                  39
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  6%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="ortho-imaging" data-depth="1">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-cohort-row="question">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  Q2
                                </Badge>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Imaging is ready cohort signal">
                                    Imaging is ready
                                  </a>
                                  <p className="leading-5 text-muted-foreground text-sm truncate">
                                    X-ray or MRI attached
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  639
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Imaging is ready, Verified: 512 of 639 answers, 80%" id="base-ui-_r_14_">
                                <span className="tabular-nums">
                                  512
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  80%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Imaging is ready, Booked: 376 of 639 answers, 59%" id="base-ui-_r_16_">
                                <span className="tabular-nums">
                                  376
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  59%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Imaging is ready, Arrived: 310 of 639 answers, 49%" id="base-ui-_r_18_">
                                <span className="tabular-nums">
                                  310
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  49%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Imaging is ready, Started: 268 of 639 answers, 42%" id="base-ui-_r_1a_">
                                <span className="tabular-nums">
                                  268
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  42%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-amber-100 cursor-help dark:bg-amber-900 dark:text-amber-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-800 text-xs w-full" aria-label="Imaging is ready, Hold: 56 of 639 answers, 9%" id="base-ui-_r_1c_">
                                <span className="tabular-nums">
                                  56
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  9%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="coverage">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-2 items-center min-w-0" data-cohort-row="group">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse Coverage Fit" aria-expanded="true">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                                <span className="font-semibold shrink-0 text-foreground text-sm">
                                  Coverage Fit
                                </span>
                                <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                  Plan match and prior authorization
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  2
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  1,271
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Coverage Fit, Verified: 978 of 1,271 answers, 77%" id="base-ui-_r_1e_">
                                <span className="tabular-nums">
                                  978
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  77%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Coverage Fit, Booked: 672 of 1,271 answers, 53%" id="base-ui-_r_1g_">
                                <span className="tabular-nums">
                                  672
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  53%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Coverage Fit, Arrived: 525 of 1,271 answers, 41%" id="base-ui-_r_1i_">
                                <span className="tabular-nums">
                                  525
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  41%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Coverage Fit, Started: 449 of 1,271 answers, 35%" id="base-ui-_r_1k_">
                                <span className="tabular-nums">
                                  449
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  35%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-red-100 cursor-help dark:bg-red-950 dark:text-red-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-700 text-xs w-full" aria-label="Coverage Fit, Hold: 160 of 1,271 answers, 13%" id="base-ui-_r_1m_">
                                <span className="tabular-nums">
                                  160
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  13%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="ortho-network" data-depth="1">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-cohort-row="question">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  Q4
                                </Badge>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Plan matches network cohort signal">
                                    Plan matches network
                                  </a>
                                  <p className="leading-5 text-muted-foreground text-sm truncate">
                                    Payer accepted at main campus
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  640
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Plan matches network, Verified: 502 of 640 answers, 78%" id="base-ui-_r_1o_">
                                <span className="tabular-nums">
                                  502
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  78%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Plan matches network, Booked: 354 of 640 answers, 55%" id="base-ui-_r_1q_">
                                <span className="tabular-nums">
                                  354
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  55%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Plan matches network, Arrived: 279 of 640 answers, 44%" id="base-ui-_r_1s_">
                                <span className="tabular-nums">
                                  279
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  44%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Plan matches network, Started: 240 of 640 answers, 38%" id="base-ui-_r_1u_">
                                <span className="tabular-nums">
                                  240
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  38%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-red-100 cursor-help dark:bg-red-950 dark:text-red-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-700 text-xs w-full" aria-label="Plan matches network, Hold: 68 of 640 answers, 11%" id="base-ui-_r_20_">
                                <span className="tabular-nums">
                                  68
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  11%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="ortho-auth" data-depth="1">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-3 items-center min-w-0 ps-8" data-cohort-row="question">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  Q3
                                </Badge>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors truncate underline-offset-2" href="#" aria-label="View Prior auth status cohort signal">
                                    Prior auth status
                                  </a>
                                  <p className="leading-5 text-muted-foreground text-sm truncate">
                                    Authorization known at intake
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  631
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Prior auth status, Verified: 476 of 631 answers, 75%" id="base-ui-_r_22_">
                                <span className="tabular-nums">
                                  476
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  75%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Prior auth status, Booked: 318 of 631 answers, 50%" id="base-ui-_r_24_">
                                <span className="tabular-nums">
                                  318
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  50%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Prior auth status, Arrived: 246 of 631 answers, 39%" id="base-ui-_r_26_">
                                <span className="tabular-nums">
                                  246
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  39%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Prior auth status, Started: 209 of 631 answers, 33%" id="base-ui-_r_28_">
                                <span className="tabular-nums">
                                  209
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  33%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-red-200 cursor-help dark:bg-red-900 dark:text-red-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-800 text-xs w-full" aria-label="Prior auth status, Hold: 92 of 631 answers, 15%" id="base-ui-_r_2a_">
                                <span className="tabular-nums">
                                  92
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  15%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                          <tr className="*:last:border-e-0 [&:has([data-cohort-row=group])>td]:h-11 [&:has([data-cohort-row=question])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 data-[state=selected]:bg-muted/50 group/cohort-row hover:bg-muted/40" data-row-id="visit-fit">
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                              <div className="flex gap-2 items-center min-w-0" data-cohort-row="group">
                                <Button className="hover:text-foreground p-0 shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand Visit Fit" aria-expanded="false">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                                <span className="font-semibold shrink-0 text-foreground text-sm">
                                  Visit Fit
                                </span>
                                <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                  Slot, travel, caregiver, and language fit
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  4
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle border-e px-2 py-1.5 text-right!">
                              <div className="flex justify-end w-full">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  2,433
                                </span>
                              </div>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Visit Fit, Verified: 1,722 of 2,433 answers, 71%" id="base-ui-_r_2c_">
                                <span className="tabular-nums">
                                  1,722
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  71%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Visit Fit, Booked: 1,202 of 2,433 answers, 49%" id="base-ui-_r_2e_">
                                <span className="tabular-nums">
                                  1,202
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  49%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Visit Fit, Arrived: 993 of 2,433 answers, 41%" id="base-ui-_r_2g_">
                                <span className="tabular-nums">
                                  993
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  41%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Visit Fit, Started: 848 of 2,433 answers, 35%" id="base-ui-_r_2i_">
                                <span className="tabular-nums">
                                  848
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  35%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                            <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                              <HoverCard>
                              <HoverCardTrigger className="bg-red-100 cursor-help dark:bg-red-950 dark:text-red-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-700 text-xs w-full" aria-label="Visit Fit, Hold: 257 of 2,433 answers, 11%" id="base-ui-_r_2k_">
                                <span className="tabular-nums">
                                  257
                                </span>
                                <span className="opacity-80 tabular-nums">
                                  11%
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                            </td>
                          </tr>
                        </DataGridTableBody>
                        <DataGridTableFoot>
                          <DataGridTableFootRow>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-secondary-foreground/80">
                              <div className="flex gap-2 items-center min-w-0">
                                <span className="font-semibold text-foreground text-sm">
                                  Visible Signals
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                  8
                                </Badge>
                              </div>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                4,985
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                3,760 / 75%
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                2,642 / 53%
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                2,156 / 43%
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                1,849 / 37%
                              </span>
                            </td>
                            <td className="align-middle bg-muted/40 border-e dark:bg-[color:var(--data-grid-surface,var(--data-grid-card-surface,var(--background)))] font-medium px-2 py-1.5 text-right! text-secondary-foreground/80">
                              <span className="font-semibold tabular-nums text-destructive text-sm">
                                512 / 10%
                              </span>
                            </td>
                          </DataGridTableFootRow>
                        </DataGridTableFoot>
                      </DataGridTable>
                    </DataGridTableViewport>
                  </div>
                </div>
              </DataGridScrollArea>
            </div>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
