import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
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
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Release review data grid"}
      </h1>
      <Card className="gap-0 p-0 w-full" size="default">
        <CardHeader className="border-b gap-1 px-5 py-3.5">
          <CardTitle>
            {"Release Reviews"}
          </CardTitle>
          <CardDescription className="leading-4 text-xs">
            {"Upcoming windows, blockers, and checks."}
          </CardDescription>
          <CardAction className="self-center">
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"New review"}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="p-0">
          <div className="px-5 py-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <InputGroup className="min-w-64 sm:w-72" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search releases..." aria-label="Search releases" value="" />
                </InputGroup>
                <Select>
                <SelectTrigger className="w-[160px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    {"All services"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="All services" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[170px]" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                  <SelectValue>
                    {"All statuses"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="All statuses" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  {"View Settings"}
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <DataGrid>
            <div className="relative">
              <DataGridProvider>
              <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_a_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div role="presentation" style={{minWidth: "fit-content"}}>
                    <DataGridProvider>
                    <DataGridTableViewport style={{width: "calc(1216px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                      <DataGridProvider>
                      <DataGridTable style={{"--header-request-size": "440", "--col-request-size": "440", "--header-owner-size": "168", "--col-owner-size": "168", "--header-status-size": "150", "--col-status-size": "150", "--header-risk-size": "116", "--col-risk-size": "116", "--header-approvals-size": "136", "--col-approvals-size": "136", "--header-readiness-size": "150", "--col-readiness-size": "150", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1216px + var(--data-grid-fill-size, 0px))"}}>
                        <colgroup>
                          <col style={{width: "calc(var(--col-request-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-approvals-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-readiness-size) * 1px)"}} />
                          <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                          <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                        </colgroup>
                        <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                          <tr className="[&>th]:border-b bg-transparent">
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-5! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="request" data-header-id="request" data-header-depth="0" style={{width: "calc(var(--header-request-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                  {"Request"}
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                  {"Owner"}
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                  {"Status"}
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="risk" data-header-id="risk" data-header-depth="0" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                                  {"Risk"}
                                  <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="m19 12-7 7-7-7"></path>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="approvals" data-header-id="approvals" data-header-depth="0" style={{width: "calc(var(--header-approvals-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                                  {"Approvals"}
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="readiness" data-header-id="readiness" data-header-depth="0" style={{width: "calc(var(--header-readiness-size) * 1px)"}}>
                              <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                  {"Readiness"}
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </div>
                              <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-5! pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                              <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                            </th>
                            <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                          </tr>
                        </thead>
                        <DataGridProvider>
                        <DataGridTableBody>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                            <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-request-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse rollout checks">
                                  <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium leading-5 text-foreground text-sm truncate">
                                    {"Split EU checkout traffic"}
                                  </span>
                                  <div className="flex flex-wrap gap-2 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"REL-8421"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Checkout"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0">
                                      {"Production"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Maya Patel" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Maya Patel"}
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    {"Release lead"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Needs approval"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Critical"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-approvals-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"3/5"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"2 pending"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-readiness-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="33.929200658769766" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"40%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for REL-8421" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b">
                            <td colSpan="8">
                              <div>
                                <div className="flex flex-wrap gap-2 items-center pb-2 pt-3 px-5">
                                  <span className="font-medium text-foreground text-xs">
                                    {"Checklist"}
                                  </span>
                                  <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-muted-foreground text-xs">
                                    {"3 of 5 items"}
                                  </span>
                                  <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="text-muted-foreground text-xs">
                                    {"3 open"}
                                  </span>
                                  <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <Popover>
                                  <PopoverTrigger className="focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground outline-none rounded-sm tabular-nums text-muted-foreground text-xs" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1f_" aria-haspopup="dialog" aria-expanded="false" aria-label="2 more: Fraud rule approval, Cache bypass drill">
                                    {"+2 more"}
                                  </PopoverTrigger>
                                  </Popover>
                                </div>
                                <div className="flex flex-wrap gap-3 max-w-[70rem] pb-4 pt-1 px-5 w-full">
                                  <Card className="gap-0 h-full min-w-0 p-0 shadow-none! sm:w-[22rem] w-full" size="default">
                                    <CardContent className="flex flex-col gap-2.5 p-3">
                                      <div className="flex gap-3 items-start">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                          {"Flagged"}
                                        </Badge>
                                      </div>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <h4 className="font-medium leading-5 line-clamp-2 text-foreground text-sm">
                                          {"Replica lag watch"}
                                        </h4>
                                        <div className="flex flex-col gap-1 min-w-0 sm:flex-row sm:gap-2 sm:items-center text-muted-foreground text-xs">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-6" size="default">
                                              <AvatarImage alt="Jonah Lee" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate">
                                              {"Jonah Lee"}
                                            </span>
                                          </div>
                                          <span className="hidden sm:inline-flex">
                                            <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          </span>
                                          <span className="shrink-0">
                                            {"Due Apr 18"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex gap-3 items-center justify-between pt-3.5">
                                        <div className="flex gap-1.5 items-center">
                                          <Rating>
                                            <div className="flex items-center">
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "40%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </Rating>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"2.4"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-center ml-auto">
                                          <svg className="shrink-0 size-4.5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle className="stroke-border" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5"></circle>
                                            <circle className="stroke-current" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50.26548245743669" strokeDashoffset="29.153979825313282" transform="rotate(-90 12 12)"></circle>
                                          </svg>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"42%"}
                                          </span>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card className="gap-0 h-full min-w-0 p-0 shadow-none! sm:w-[22rem] w-full" size="default">
                                    <CardContent className="flex flex-col gap-2.5 p-3">
                                      <div className="flex gap-3 items-start">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                          <span className="bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                          {"Open"}
                                        </Badge>
                                      </div>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <h4 className="font-medium leading-5 line-clamp-2 text-foreground text-sm">
                                          {"PSP fallback ready"}
                                        </h4>
                                        <div className="flex flex-col gap-1 min-w-0 sm:flex-row sm:gap-2 sm:items-center text-muted-foreground text-xs">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-6" size="default">
                                              <AvatarImage alt="Nina Santos" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate">
                                              {"Nina Santos"}
                                            </span>
                                          </div>
                                          <span className="hidden sm:inline-flex">
                                            <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          </span>
                                          <span className="shrink-0">
                                            {"Due Apr 18"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex gap-3 items-center justify-between pt-3.5">
                                        <div className="flex gap-1.5 items-center">
                                          <Rating>
                                            <div className="flex items-center">
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "10%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </Rating>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"3.1"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-center ml-auto">
                                          <svg className="shrink-0 size-4.5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle className="stroke-border" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5"></circle>
                                            <circle className="stroke-current" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50.26548245743669" strokeDashoffset="21.11150263212341" transform="rotate(-90 12 12)"></circle>
                                          </svg>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"58%"}
                                          </span>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card className="gap-0 h-full min-w-0 p-0 shadow-none! sm:w-[22rem] w-full" size="default">
                                    <CardContent className="flex flex-col gap-2.5 p-3">
                                      <div className="flex gap-3 items-start">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                          <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                          {"Done"}
                                        </Badge>
                                      </div>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <h4 className="font-medium leading-5 line-clamp-2 text-foreground text-sm">
                                          {"Rollback sign-off"}
                                        </h4>
                                        <div className="flex flex-col gap-1 min-w-0 sm:flex-row sm:gap-2 sm:items-center text-muted-foreground text-xs">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-6" size="default">
                                              <AvatarImage alt="Maya Patel" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="truncate">
                                              {"Maya Patel"}
                                            </span>
                                          </div>
                                          <span className="hidden sm:inline-flex">
                                            <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          </span>
                                          <span className="shrink-0">
                                            {"Done Apr 17"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex gap-3 items-center justify-between pt-3.5">
                                        <div className="flex gap-1.5 items-center">
                                          <Rating>
                                            <div className="flex items-center">
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="relative">
                                                <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                </svg>
                                                <div className="absolute inset-0 overflow-hidden" style={{width: "80%"}}>
                                                  <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </Rating>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"4.8"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1.5 items-center ml-auto">
                                          <svg className="shrink-0 size-4.5 text-emerald-500" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle className="stroke-border" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5"></circle>
                                            <circle className="stroke-current" cx="12" cy="12" r="8" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50.26548245743669" strokeDashoffset="2.0106192982974704" transform="rotate(-90 12 12)"></circle>
                                          </svg>
                                          <span className="tabular-nums text-muted-foreground text-xs">
                                            {"96%"}
                                          </span>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="8">
                            <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-request-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand rollout checks">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium leading-5 text-foreground text-sm truncate">
                                    {"Roll out regional webhook retries"}
                                  </span>
                                  <div className="flex flex-wrap gap-2 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"REL-8362"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Webhooks"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0">
                                      {"Production"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Omar Haddad"}
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    {"Integrations owner"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                <span className="bg-rose-500 dark:bg-rose-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Blocked"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Critical"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-approvals-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"2/5"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"3 pending"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-readiness-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="33.929200658769766" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"40%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for REL-8362" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                            <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-request-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand rollout checks">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium leading-5 text-foreground text-sm truncate">
                                    {"Rotate auth signing keys"}
                                  </span>
                                  <div className="flex flex-wrap gap-2 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"REL-8416"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Authentication"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0">
                                      {"Production"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Jonah Lee" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Jonah Lee"}
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    {"Platform reviewer"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                <span className="bg-rose-500 dark:bg-rose-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Blocked"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"High"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-approvals-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"2/4"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"2 pending"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-readiness-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="28.274333882308138" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"50%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for REL-8416" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="5">
                            <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-request-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand rollout checks">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium leading-5 text-foreground text-sm truncate">
                                    {"Activate instant refunds"}
                                  </span>
                                  <div className="flex flex-wrap gap-2 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"REL-8387"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Checkout"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0">
                                      {"Production"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Nina Santos" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Nina Santos"}
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    {"Billing reviewer"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Needs approval"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"High"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-approvals-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"1/4"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"3 pending"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-readiness-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="42.411500823462205" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"25%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for REL-8387" aria-haspopup="menu" id="base-ui-_r_1t_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                          <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="11">
                            <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-request-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Button className="hover:text-foreground p-0 rounded-md shadow-none size-6 text-muted-foreground" type="button" tabIndex="0" aria-label="Expand rollout checks">
                                  <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                                <div className="flex flex-col gap-1.5 min-w-0">
                                  <span className="font-medium leading-5 text-foreground text-sm truncate">
                                    {"Gate partner retries by tenant policy"}
                                  </span>
                                  <div className="flex flex-wrap gap-2 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                    <span className="font-mono shrink-0 tracking-wide uppercase">
                                      {"REL-8341"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="truncate">
                                      {"Webhooks"}
                                    </span>
                                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="shrink-0">
                                      {"Production"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                              <div className="flex gap-2.5 items-center min-w-0">
                                <Avatar className="size-7" size="default">
                                  <AvatarImage alt="Omar Haddad" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Omar Haddad"}
                                  </span>
                                  <span className="text-muted-foreground text-xs truncate">
                                    {"Integrations owner"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                {"Needs approval"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"High"}
                              </Badge>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-approvals-size) * 1px)"}}>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"2/5"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs">
                                  {"3 pending"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-readiness-size) * 1px)"}}>
                              <div className="flex gap-2 items-center">
                                <svg className="shrink-0 size-5 text-rose-500" viewBox="0 0 24 24" aria-hidden="true">
                                  <circle className="stroke-border" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5"></circle>
                                  <circle className="stroke-current" cx="12" cy="12" r="9" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56.548667764616276" strokeDashoffset="33.929200658769766" transform="rotate(-90 12 12)"></circle>
                                </svg>
                                <span className="tabular-nums text-foreground text-sm">
                                  {"40%"}
                                </span>
                              </div>
                            </td>
                            <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for REL-8341" aria-haspopup="menu" id="base-ui-_r_22_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </td>
                            <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                          </tr>
                        </DataGridTableBody>
                        </DataGridProvider>
                      </DataGridTable>
                      </DataGridProvider>
                    </DataGridTableViewport>
                    </DataGridProvider>
                  </div>
                </div>
              </DataGridScrollArea>
              </DataGridProvider>
            </div>
          </DataGrid>
        </CardContent>
        <CardFooter className="border-t px-5 py-2.5">
          <div className="flex justify-end w-full">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_24_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_24_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 11"}
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                    <span className="sr-only">
                      {"Go to previous page"}
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                    {"1"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                    {"2"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                    {"3"}
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                    <span className="sr-only">
                      {"Go to next page"}
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
            </DataGridProvider>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
