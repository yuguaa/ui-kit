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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Roles and permissions matrix"}
      </h1>
      <Frame className="w-full" spacing="sm">
        <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              {"Roles & Permissions"}
            </div>
            <div className="text-muted-foreground text-xs">
              <span className="flex-wrap gap-1.5 inline-flex items-center">
                <span>
                  {"6 roles"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"33 permissions"}
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-pencil size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
              {"Editing"}
            </Button>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"Create role"}
            </Button>
          </div>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="pt-(--frame-panel-header-py) px-(--frame-panel-header-px)">
            <div className="flex gap-5 h-10 items-center min-w-0 overflow-visible w-full">
              <Tabs className="flex-1 h-full min-w-0" data-orientation="horizontal" activationDirection="none">
                <TabsList className="gap-5 h-full justify-start p-0! self-start w-auto" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2_" compositeItemActive="">
                    <span>
                      {"Members"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-primary text-xs transition-shadow">
                      {"5"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                    <span>
                      {"Roles"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                    <span>
                      {"Billing"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                    <span>
                      {"Projects"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                    <span>
                      {"Settings"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                    <span>
                      {"Audit"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                    <span>
                      {"API keys"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger className="after:z-10 flex-none! gap-2 group-data-horizontal/tabs:after:-bottom-px! h-full! pb-(--frame-panel-header-py) pt-0 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                    <span>
                      {"SSO"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                      {"4"}
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
            <div className="flex-wrap gap-1.5 inline-flex items-center text-muted-foreground text-xs">
              <span>
                {"Admin grants 5 of 5"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"Members group"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow" aria-label="Owner: 5 of 5 scopes, 1 members">
                <span>
                  {"Owner"}
                </span>
                <span className="tabular-nums">
                  {"5/5"}
                </span>
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Admin: 5 of 5 scopes, 2 members">
                <span>
                  {"Admin"}
                </span>
                <span className="tabular-nums">
                  {"5/5"}
                </span>
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow" aria-label="Member: 2 of 5 scopes, 7 members">
                <span>
                  {"Member"}
                </span>
                <span className="tabular-nums">
                  {"2/5"}
                </span>
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Billing: 2 of 5 scopes, 1 members">
                <span>
                  {"Billing"}
                </span>
                <span className="tabular-nums">
                  {"2/5"}
                </span>
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" aria-label="Guest: 1 of 5 scopes, 1 members">
                <span>
                  {"Guest"}
                </span>
                <span className="tabular-nums">
                  {"1/5"}
                </span>
              </Badge>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Support: 1 of 5 scopes, 0 members">
                <span>
                  {"Support"}
                </span>
                <span className="tabular-nums">
                  {"1/5"}
                </span>
              </Badge>
            </div>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_a_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "280px"}} />
                        <col style={{width: "132px"}} />
                        <col style={{width: "132px"}} />
                        <col style={{width: "132px"}} />
                        <col style={{width: "132px"}} />
                        <col style={{width: "132px"}} />
                        <col style={{width: "132px"}} />
                      </colgroup>
                      <thead>
                        <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left text-left!" scope="col" data-col-id="permission" data-header-id="permission" data-header-depth="0" style={{width: "280px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              {"Permission"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle bg-muted/40 border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              <svg className="lucide lucide-lock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                              </svg>
                              {"Owner"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="admin" data-header-id="admin" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              {"Admin"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="member" data-header-id="member" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              {"Member"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="billing" data-header-id="billing" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              {"Billing"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="guest" data-header-id="guest" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              {"Guest"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="support" data-header-id="support" data-header-depth="0" style={{width: "132px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-medium gap-1.5 h-full inline-flex items-center justify-center leading-4 max-w-[112px] mx-auto text-balance text-center text-secondary-foreground/80 text-xs">
                              {"Support"}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="members-read">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex flex-col gap-px min-w-0 py-1">
                              <div className="font-medium text-foreground text-sm truncate">
                                {"Read members"}
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                {"View the directory of 12 active members"}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_b_" aria-checked="true" size="sm" aria-label="Owner access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                              </Switch>
                              <input disabled id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_e_" aria-checked="true" size="sm" aria-label="Admin access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_f_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_h_" aria-checked="true" size="sm" aria-label="Member access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_i_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_k_" aria-checked="true" size="sm" aria-label="Billing access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_l_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="true" size="sm" aria-label="Guest access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_o_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_q_" aria-checked="true" size="sm" aria-label="Support Agent access for Read members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_r_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="members-invite">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex flex-col gap-px min-w-0 py-1">
                              <div className="font-medium text-foreground text-sm truncate">
                                {"Invite members"}
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                {"Send invites that expire in 7 days"}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_t_" aria-checked="true" size="sm" aria-label="Owner access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                              </Switch>
                              <input disabled id="base-ui-_r_u_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_10_" aria-checked="true" size="sm" aria-label="Admin access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_11_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-amber-400 data-checked:border-amber-400" checked="" role="switch" tabIndex="0" id="base-ui-_r_13_" aria-checked="true" size="sm" aria-label="Member access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_14_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_16_" aria-checked="false" size="sm" aria-label="Billing access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_17_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_19_" aria-checked="false" size="sm" aria-label="Guest access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1a_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1c_" aria-checked="false" size="sm" aria-label="Support Agent access for Invite members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1d_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="members-remove">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex flex-col gap-px min-w-0 py-1">
                              <div className="font-medium text-foreground text-sm truncate">
                                {"Remove members"}
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                {"Deactivate or remove a member"}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1f_" aria-checked="true" size="sm" aria-label="Owner access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                              </Switch>
                              <input disabled id="base-ui-_r_1g_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_1i_" aria-checked="true" size="sm" aria-label="Admin access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1j_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1l_" aria-checked="false" size="sm" aria-label="Member access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1m_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1o_" aria-checked="false" size="sm" aria-label="Billing access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1p_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1r_" aria-checked="false" size="sm" aria-label="Guest access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1s_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1u_" aria-checked="false" size="sm" aria-label="Support Agent access for Remove members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_1v_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="members-export">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex flex-col gap-px min-w-0 py-1">
                              <div className="font-medium text-foreground text-sm truncate">
                                {"Export members"}
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                {"Download seat and role CSV"}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_21_" aria-checked="true" size="sm" aria-label="Owner access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                              </Switch>
                              <input disabled id="base-ui-_r_22_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" checked="" role="switch" tabIndex="0" id="base-ui-_r_24_" aria-checked="true" size="sm" aria-label="Admin access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_25_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_27_" aria-checked="false" size="sm" aria-label="Member access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_28_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-amber-400 data-checked:border-amber-400" checked="" role="switch" tabIndex="0" id="base-ui-_r_2a_" aria-checked="true" size="sm" aria-label="Billing access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2b_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2d_" aria-checked="false" size="sm" aria-label="Guest access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2e_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2g_" aria-checked="false" size="sm" aria-label="Support Agent access for Export members">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2h_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="members-transfer">
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                            <div className="flex flex-col gap-px min-w-0 py-1">
                              <div className="font-medium text-foreground text-sm truncate">
                                {"Transfer owner"}
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                {"Move Owner after handoff approval"}
                              </div>
                            </div>
                          </td>
                          <td className="align-middle bg-muted/40 border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-emerald-500 data-checked:border-emerald-500" disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_2j_" aria-checked="true" size="sm" aria-label="Owner access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                              </Switch>
                              <input disabled id="base-ui-_r_2k_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch className="data-checked:bg-amber-400 data-checked:border-amber-400" checked="" role="switch" tabIndex="0" id="base-ui-_r_2m_" aria-checked="true" size="sm" aria-label="Admin access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2n_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2p_" aria-checked="false" size="sm" aria-label="Member access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2q_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2s_" aria-checked="false" size="sm" aria-label="Billing access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_2t_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2v_" aria-checked="false" size="sm" aria-label="Guest access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_30_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
                          </td>
                          <td className="align-middle border-e first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-center!">
                            <div className="flex items-center justify-center">
                              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_32_" aria-checked="false" size="sm" aria-label="Support Agent access for Transfer owner">
                                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="base-ui-_r_33_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </div>
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
          <footer className="flex flex-col gap-3 items-stretch px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
            <div className="gap-2 inline-flex items-center min-w-0 text-muted-foreground text-xs">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                <svg className="lucide lucide-circle-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                {"Saved"}
              </Badge>
              <span className="truncate">
                {"All scopes saved"}
              </span>
            </div>
            <div className="gap-2 grid grid-cols-2 sm:flex sm:items-center">
              <Button className="sm:w-auto w-full" type="button" disabled="" tabIndex="0" disabled>
                {"Discard"}
              </Button>
              <Button className="sm:w-auto w-full" type="button" disabled="" tabIndex="0" disabled>
                {"Save changes"}
              </Button>
            </div>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
