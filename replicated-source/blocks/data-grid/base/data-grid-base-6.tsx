import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Members data grid"}
      </h1>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between py-4">
          <div className="flex gap-2.5 items-center min-w-0">
            <h2 className="font-semibold text-2xl tracking-tight truncate">
              {"Members"}
            </h2>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
              {"8"}
            </Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-nowrap lg:justify-end lg:ml-auto lg:w-auto sm:flex-row sm:flex-wrap sm:items-center w-full">
            <InputGroup className="sm:w-72" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx={11} cy={11} r={8}></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1_" placeholder="Search..." aria-label="Search members" value="" />
            </InputGroup>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter members" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false" extracted="1">
              {"Filters"}
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button type="button" tabIndex={0}>
              {"Import"}
            </Button>
            <Button type="button" tabIndex={0}>
              {"Add member"}
            </Button>
          </div>
        </div>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="relative">
          <DataGridProvider>
          <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div role="presentation" style={{minWidth: "fit-content"}}>
                <DataGridProvider>
                <DataGridTableViewport>
                  <DataGridProvider>
                  <DataGridTable>
                    <colgroup>
                      <col style={{width: "255px"}} />
                      <col style={{width: "220px"}} />
                      <col style={{width: "120px"}} />
                      <col style={{width: "150px"}} />
                      <col style={{width: "130px"}} />
                      <col style={{width: "130px"}} />
                    </colgroup>
                    <thead>
                      <tr className="[&>th]:border-b bg-transparent">
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="fullName" data-header-id="fullName" data-header-depth="0" style={{width: "255px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Member"}
                              <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="email" data-header-id="email" data-header-depth="0" style={{width: "220px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Email"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="role" data-header-id="role" data-header-depth="0" style={{width: "120px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Role"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="billingStatus" data-header-id="billingStatus" data-header-depth="0" style={{width: "150px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Billing status"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="authProvider" data-header-id="authProvider" data-header-depth="0" style={{width: "130px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Authentication"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="joinedAt" data-header-id="joinedAt" data-header-depth="0" style={{width: "130px"}}>
                          <div className="-ms-2 flex h-full items-center">
                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                              {"Joining date"}
                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </Button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <DataGridProvider>
                    <DataGridTableBody>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/member-row hover:bg-muted/40" data-row-id="avery-quinn">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Avery Quinn" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=80&h=80&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Avery Quinn"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"avery.quinn"}
                              </div>
                            </div>
                            <div className="flex gap-1 group-focus-within/member-row:opacity-100 group-focus-within/member-row:pointer-events-auto group-hover/member-row:opacity-100 group-hover/member-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                              <Button type="button" tabIndex={0} aria-label="View Avery Quinn">
                                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex={0} aria-label="Edit Avery Quinn">
                                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-destructive" type="button" tabIndex={0} aria-label="Delete Avery Quinn">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <a className="block hover:text-primary hover:underline text-sm transition-colors truncate" href="mailto:avery@northline.app" title="avery@northline.app">
                            {"avery@northline.app"}
                          </a>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Security"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-rose-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="text-sm truncate">
                              {"Past due"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Okta SSO"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-muted-foreground text-sm truncate">
                            {"Feb 10, 2026"}
                          </span>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/member-row hover:bg-muted/40" data-row-id="dev-rana">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Dev Rana" src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Dev Rana"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"dev.rana"}
                              </div>
                            </div>
                            <div className="flex gap-1 group-focus-within/member-row:opacity-100 group-focus-within/member-row:pointer-events-auto group-hover/member-row:opacity-100 group-hover/member-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                              <Button type="button" tabIndex={0} aria-label="View Dev Rana">
                                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex={0} aria-label="Edit Dev Rana">
                                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-destructive" type="button" tabIndex={0} aria-label="Delete Dev Rana">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <a className="block hover:text-primary hover:underline text-sm transition-colors truncate" href="mailto:dev@northline.app" title="dev@northline.app">
                            {"dev@northline.app"}
                          </a>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Growth"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="text-sm truncate">
                              {"Pending invoice"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"GitHub"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-muted-foreground text-sm truncate">
                            {"Jan 11, 2026"}
                          </span>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/member-row hover:bg-muted/40" data-row-id="imani-brooks">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Imani Brooks" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Imani Brooks"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"imani.brooks"}
                              </div>
                            </div>
                            <div className="flex gap-1 group-focus-within/member-row:opacity-100 group-focus-within/member-row:pointer-events-auto group-hover/member-row:opacity-100 group-hover/member-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                              <Button type="button" tabIndex={0} aria-label="View Imani Brooks">
                                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex={0} aria-label="Edit Imani Brooks">
                                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-destructive" type="button" tabIndex={0} aria-label="Delete Imani Brooks">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <a className="block hover:text-primary hover:underline text-sm transition-colors truncate" href="mailto:imani@northline.app" title="imani@northline.app">
                            {"imani@northline.app"}
                          </a>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Support"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="text-sm truncate">
                              {"Active"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Passwordless"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-muted-foreground text-sm truncate">
                            {"Mar 29, 2026"}
                          </span>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/member-row hover:bg-muted/40" data-row-id="lena-torres">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Lena Torres" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Lena Torres"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"lena.torres"}
                              </div>
                            </div>
                            <div className="flex gap-1 group-focus-within/member-row:opacity-100 group-focus-within/member-row:pointer-events-auto group-hover/member-row:opacity-100 group-hover/member-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                              <Button type="button" tabIndex={0} aria-label="View Lena Torres">
                                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex={0} aria-label="Edit Lena Torres">
                                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-destructive" type="button" tabIndex={0} aria-label="Delete Lena Torres">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <a className="block hover:text-primary hover:underline text-sm transition-colors truncate" href="mailto:lena@northline.app" title="lena@northline.app">
                            {"lena@northline.app"}
                          </a>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Admin"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="text-sm truncate">
                              {"Active"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Google"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-muted-foreground text-sm truncate">
                            {"Apr 17, 2026"}
                          </span>
                        </td>
                      </tr>
                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/member-row hover:bg-muted/40" data-row-id="marcus-hale">
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Marcus Hale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {"Marcus Hale"}
                              </div>
                              <div className="text-muted-foreground text-sm truncate">
                                {"marcus.hale"}
                              </div>
                            </div>
                            <div className="flex gap-1 group-focus-within/member-row:opacity-100 group-focus-within/member-row:pointer-events-auto group-hover/member-row:opacity-100 group-hover/member-row:pointer-events-auto items-center opacity-0 pointer-events-none shrink-0 transition-opacity">
                              <Button type="button" tabIndex={0} aria-label="View Marcus Hale">
                                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                  <circle cx={12} cy={12} r={3}></circle>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex={0} aria-label="Edit Marcus Hale">
                                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-destructive" type="button" tabIndex={0} aria-label="Delete Marcus Hale">
                                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <a className="block hover:text-primary hover:underline text-sm transition-colors truncate" href="mailto:marcus@northline.app" title="marcus@northline.app">
                            {"marcus@northline.app"}
                          </a>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Finance"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                            <span className="text-sm truncate">
                              {"Pending invoice"}
                            </span>
                          </div>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block text-sm truncate">
                            {"Okta SSO"}
                          </span>
                        </td>
                        <td className="align-middle px-2 py-1.5">
                          <span className="block tabular-nums text-muted-foreground text-sm truncate">
                            {"Apr 12, 2026"}
                          </span>
                        </td>
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
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="py-3">
          <DataGridProvider>
          <DataGridPagination className="py-0">
            <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
              <div className="text-muted-foreground text-sm">
                {"Rows per page"}
              </div>
              <Select>
              <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_8_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                <SelectValue>
                  {"5"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_8_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
              <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                {"1 - 5 of 8 members"}
              </div>
              <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                  <span className="sr-only">
                    {"Go to previous page"}
                  </span>
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                  {"1"}
                </Button>
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                  {"2"}
                </Button>
                <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                  <span className="sr-only">
                    {"Go to next page"}
                  </span>
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </DataGridPagination>
          </DataGridProvider>
        </div>
      </div>
    </main>
  )
}
