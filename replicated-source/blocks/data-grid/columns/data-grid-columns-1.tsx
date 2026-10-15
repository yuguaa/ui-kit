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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Permissions data grid"}
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              {"Workspace Access Review"}
            </div>
            <div className="text-muted-foreground text-xs">
              <span className="flex-wrap gap-1.5 inline-flex items-center">
                <span>
                  {"10 members"}
                </span>
                <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"5 online"}
                </span>
                <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"5 with review access"}
                </span>
              </span>
            </div>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            {"Export review"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList className="gap-5" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                  <span>
                    {"General"}
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    {"5"}
                  </span>
                </TabsTrigger>
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                  <span>
                    {"Tags"}
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    {"6"}
                  </span>
                </TabsTrigger>
                <TabsTrigger className="gap-2 pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_3_" compositeItemActive="">
                  <span>
                    {"Permissions"}
                  </span>
                  <span className="bg-muted inline-flex items-center justify-center min-w-5 px-1.5 py-0.5 rounded-md tabular-nums text-muted-foreground text-xs">
                    {"5"}
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <div className="flex flex-wrap gap-2 items-center">
              <Select>
              <SelectTrigger className="w-[168px]" type="button" tabIndex={0} id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"All roles"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="everyone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <InputGroup className="min-w-52 sm:w-[240px]" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_7_" placeholder="Search members" aria-label="Search members" value="" />
              </InputGroup>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <ButtonGroup role="group">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-pin-off size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PinOffIcon" tabler="IconPinnedOff" hugeicons="PinOffIcon" phosphor="PushPinSlashIcon" remixicon="RiUnpinLine" aria-hidden="true">
                    <path d="M12 17v5"></path>
                    <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"></path>
                    <path d="m2 2 20 20"></path>
                    <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"></path>
                  </svg>
                  {"Unpin all"}
                </Button>
                <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center px-3 text-muted-foreground text-sm">
                  {"2 rows pinned"}
                </div>
              </ButtonGroup>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "40px"}} />
                        <col style={{width: "256px"}} />
                        <col style={{width: "148px"}} />
                        <col style={{width: "148px"}} />
                        <col style={{width: "148px"}} />
                        <col style={{width: "148px"}} />
                        <col style={{width: "148px"}} />
                        <col style={{width: "48px"}} />
                      </colgroup>
                      <thead>
                        <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="pin" data-header-id="pin" data-header-depth="0" style={{width: "40px"}}></th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-left!" scope="col" aria-sort="ascending" data-col-id="member" data-header-id="member" data-header-depth="0" style={{width: "256px"}}>
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
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" aria-sort="none" data-col-id="workspaceSettings" data-header-id="workspaceSettings" data-header-depth="0" style={{width: "148px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-medium h-6 hover:bg-secondary hover:text-foreground leading-4 max-w-[112px] mx-auto px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-balance text-center text-secondary-foreground/80 text-xs" type="button" tabIndex={0}>
                                {"Settings"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" aria-sort="none" data-col-id="workspaceBilling" data-header-id="workspaceBilling" data-header-depth="0" style={{width: "148px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-medium h-6 hover:bg-secondary hover:text-foreground leading-4 max-w-[112px] mx-auto px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-balance text-center text-secondary-foreground/80 text-xs" type="button" tabIndex={0}>
                                {"Billing"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" aria-sort="none" data-col-id="integrationSettings" data-header-id="integrationSettings" data-header-depth="0" style={{width: "148px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-medium h-6 hover:bg-secondary hover:text-foreground leading-4 max-w-[112px] mx-auto px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-balance text-center text-secondary-foreground/80 text-xs" type="button" tabIndex={0}>
                                {"Integrations"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" aria-sort="none" data-col-id="workspaceUsers" data-header-id="workspaceUsers" data-header-depth="0" style={{width: "148px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-medium h-6 hover:bg-secondary hover:text-foreground leading-4 max-w-[112px] mx-auto px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-balance text-center text-secondary-foreground/80 text-xs" type="button" tabIndex={0}>
                                {"Users"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" aria-sort="none" data-col-id="workspacePermissions" data-header-id="workspacePermissions" data-header-depth="0" style={{width: "148px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-medium h-6 hover:bg-secondary hover:text-foreground leading-4 max-w-[112px] mx-auto px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-balance text-center text-secondary-foreground/80 text-xs" type="button" tabIndex={0}>
                                {"Permissions"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "48px"}}></th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b bg-muted/30 data-[state=selected]:bg-muted/50 hover:bg-muted/50" data-row-id="leila-cole" data-row-pinned="top">
                          <td className="align-middle border-e px-2 py-1.5">
                            <button className="hover:text-primary/80 inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-primary transition-colors" type="button" aria-label="Unpin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M16 2l4.585 4.586-2.122 2.121L17.05 7.293l-3.535 3.536 1.413 5.658-2.12 2.121-4.244-4.243L4.322 18.6l-1.414-1.41 4.242-4.244-4.243-4.243 2.122-2.121 5.656 1.414 3.536-3.536-1.414-1.414z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Leila Cole" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Leila Cole"}
                                </div>
                                <div className="flex gap-1.5 items-center text-muted-foreground text-xs truncate">
                                  <span className="truncate">
                                    {"Workspace owner"}
                                  </span>
                                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Online"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" size="sm" aria-label="Manage workspace settings for Leila Cole">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_a_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_c_" aria-checked="true" size="sm" aria-label="Manage workspace billing for Leila Cole">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_d_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_f_" aria-checked="true" size="sm" aria-label="Manage integration settings for Leila Cole">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_g_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_i_" aria-checked="true" size="sm" aria-label="Manage workspace users for Leila Cole">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_j_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_l_" aria-checked="true" size="sm" aria-label="Manage workspace permissions for Leila Cole">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_m_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Leila Cole" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={12} cy={5} r={1}></circle>
                                <circle cx={12} cy={19} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [&>td]:shadow-[0_2px_0_rgba(0,0,0,0.03)] bg-muted/30 dark:[&>td]:shadow-[0_2px_0_rgba(255,255,255,0.06)] data-[state=selected]:bg-muted/50 hover:bg-muted/50" data-row-id="aiden-brooks" data-row-pinned="top" data-row-pinned-boundary="top">
                          <td className="align-middle border-e px-2 py-1.5">
                            <button className="hover:text-primary/80 inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-primary transition-colors" type="button" aria-label="Unpin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M16 2l4.585 4.586-2.122 2.121L17.05 7.293l-3.535 3.536 1.413 5.658-2.12 2.121-4.244-4.243L4.322 18.6l-1.414-1.41 4.242-4.244-4.243-4.243 2.122-2.121 5.656 1.414 3.536-3.536-1.414-1.414z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Aiden Brooks" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-gray-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Aiden Brooks"}
                                </div>
                                <div className="flex gap-1.5 items-center text-muted-foreground text-xs truncate">
                                  <span className="truncate">
                                    {"Platform admin"}
                                  </span>
                                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Last active 3m ago"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_t_" aria-checked="true" size="sm" aria-label="Manage workspace settings for Aiden Brooks">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_u_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_10_" aria-checked="true" size="sm" aria-label="Manage workspace billing for Aiden Brooks">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_11_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_13_" aria-checked="true" size="sm" aria-label="Manage integration settings for Aiden Brooks">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_14_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_16_" aria-checked="false" size="sm" aria-label="Manage workspace users for Aiden Brooks">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_17_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_19_" aria-checked="false" size="sm" aria-label="Manage workspace permissions for Aiden Brooks">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1a_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Aiden Brooks" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={12} cy={5} r={1}></circle>
                                <circle cx={12} cy={19} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="jonah-voss">
                          <td className="align-middle border-e px-2 py-1.5">
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={12} y1={17} x2={12} y2={22}></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Jonah Voss" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Jonah Voss"}
                                </div>
                                <div className="flex gap-1.5 items-center text-muted-foreground text-xs truncate">
                                  <span className="truncate">
                                    {"Integrations lead"}
                                  </span>
                                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Online"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_1h_" aria-checked="true" size="sm" aria-label="Manage workspace settings for Jonah Voss">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1i_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_1k_" aria-checked="true" size="sm" aria-label="Manage workspace billing for Jonah Voss">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1l_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-amber-400 data-checked:border-amber-400" checked="" role="switch" tabIndex={0} id="base-ui-_r_1n_" aria-checked="true" size="sm" aria-label="Manage integration settings for Jonah Voss">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1o_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1q_" aria-checked="false" size="sm" aria-label="Manage workspace users for Jonah Voss">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1r_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1t_" aria-checked="false" size="sm" aria-label="Manage workspace permissions for Jonah Voss">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1u_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Jonah Voss" aria-haspopup="menu" id="base-ui-_r_23_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={12} cy={5} r={1}></circle>
                                <circle cx={12} cy={19} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="kira-santos">
                          <td className="align-middle border-e px-2 py-1.5">
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={12} y1={17} x2={12} y2={22}></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarImage alt="Kira Santos" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <span className="absolute bg-emerald-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Kira Santos"}
                                </div>
                                <div className="flex gap-1.5 items-center text-muted-foreground text-xs truncate">
                                  <span className="truncate">
                                    {"Growth ops lead"}
                                  </span>
                                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Online"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_25_" aria-checked="true" size="sm" aria-label="Manage workspace settings for Kira Santos">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_26_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_28_" aria-checked="true" size="sm" aria-label="Manage workspace billing for Kira Santos">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_29_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_2b_" aria-checked="false" size="sm" aria-label="Manage integration settings for Kira Santos">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2c_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_2e_" aria-checked="true" size="sm" aria-label="Manage workspace users for Kira Santos">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2f_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_2h_" aria-checked="false" size="sm" aria-label="Manage workspace permissions for Kira Santos">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2i_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Kira Santos" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={12} cy={5} r={1}></circle>
                                <circle cx={12} cy={19} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="kris-owens">
                          <td className="align-middle border-e px-2 py-1.5">
                            <button className="hover:text-foreground inline-flex items-center justify-center size-7 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-muted-foreground transition-colors" type="button" aria-label="Pin row">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <line x1={12} y1={17} x2={12} y2={22}></line>
                                <path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"></path>
                              </svg>
                            </button>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5">
                            <div className="flex gap-2 items-center min-w-0">
                              <div className="relative shrink-0">
                                <Avatar className="size-8" size="default">
                                  <AvatarFallback>
                                    {"KO"}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="absolute bg-gray-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Kris Owens"}
                                </div>
                                <div className="flex gap-1.5 items-center text-muted-foreground text-xs truncate">
                                  <span className="truncate">
                                    {"Support lead"}
                                  </span>
                                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Last active 2d ago"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex={0} id="base-ui-_r_2p_" aria-checked="true" size="sm" aria-label="Manage workspace settings for Kris Owens">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2q_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_2s_" aria-checked="false" size="sm" aria-label="Manage workspace billing for Kris Owens">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2t_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_2v_" aria-checked="false" size="sm" aria-label="Manage integration settings for Kris Owens">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_30_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_32_" aria-checked="false" size="sm" aria-label="Manage workspace users for Kris Owens">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_33_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_35_" aria-checked="false" size="sm" aria-label="Manage workspace permissions for Kris Owens">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_36_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Kris Owens" aria-haspopup="menu" id="base-ui-_r_3b_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={12} cy={5} r={1}></circle>
                                <circle cx={12} cy={19} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
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
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_3d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3d_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 10"}
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
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
