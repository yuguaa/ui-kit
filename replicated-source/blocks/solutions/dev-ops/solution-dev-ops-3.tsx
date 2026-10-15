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
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Collapsible } from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
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
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Deployments"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
          <div className="@container flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                    {"Deployments"}
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary text-xs transition-shadow">
                    {"1 live"}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {"Ship, watch and roll back every release"}
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex={0} extracted="1">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {"New Deploy"}
                </Button>
              </div>
            </div>
            <section aria-labelledby="devops-3-environments">
              <Frame className="w-full" spacing="default">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm" id="devops-3-environments">
                      {"Environments"}
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs">
                      {"8 services across 3 environments"}
                    </div>
                  </div>
                  <Button type="button" tabIndex={0} aria-expanded="false" aria-controls="devops-3-services-staging devops-3-services-sandbox devops-3-services-production">
                    {"Services"}
                    <svg className="in-aria-expanded:rotate-180 lucide lucide-chevron-down motion-reduce:transition-none transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Button>
                </header>
                <div className="@4xl:gap-0 @4xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-1 grid grid-cols-1">
                  <div className="contents">
                    <FramePanel className="flex flex-col gap-4 min-w-0" lane="staging">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex gap-3 items-center justify-between">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-medium min-w-0 text-foreground text-sm truncate">
                              {"Staging"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                              {"2 failed"}
                            </Badge>
                          </div>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Staging actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={1}></circle>
                              <circle cx={19} cy={12} r={1}></circle>
                              <circle cx={5} cy={12} r={1}></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="font-mono truncate">
                            {"staging-us-east-1"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"On merge"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex gap-2 items-center justify-between min-w-0">
                          <button className="cursor-pointer flex font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors underline-offset-2" type="button" data-lane-hero="" aria-label="Open DEP-4126, webhook-dispatcher">
                            <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                              <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                              </svg>
                              <span className="truncate">
                                {"webhook-dispatcher"}
                              </span>
                            </span>
                          </button>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"Succeeded"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 items-baseline min-w-0">
                          <span className="font-semibold tabular-nums text-xl tracking-tight">
                            {"v1.27.0"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate">
                            {"from v1.26.2"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                            {"7c3e8b1"}
                          </Badge>
                          <span className="min-w-0 text-muted-foreground text-sm truncate">
                            {"Sign deliveries with the rotated whsec key"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-h-6 min-w-0">
                          <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                          </span>
                          <span className="shrink-0 tabular-nums text-xs">
                            {"6/6"}
                          </span>
                        </div>
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="flex gap-1.5 items-center min-w-0">
                            <Avatar className="size-4" size="sm">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Omar Haddad"}
                            </span>
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0 tabular-nums whitespace-nowrap">
                            {"1h ago"}
                          </span>
                        </div>
                      </div>
                      <Collapsible className="contents" data-closed=""></Collapsible>
                    </FramePanel>
                    <div className="@4xl:px-1.5 @4xl:py-0 flex items-center justify-center py-1">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-disabled="false" aria-label="Promote Staging to Sandbox, 1 ahead of Sandbox" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        <span className="@4xl:rotate-0 flex rotate-90">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="contents">
                    <FramePanel className="flex flex-col gap-4 min-w-0" lane="sandbox">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex gap-3 items-center justify-between">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-medium min-w-0 text-foreground text-sm truncate">
                              {"Sandbox"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Healthy"}
                            </Badge>
                          </div>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Sandbox actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={1}></circle>
                              <circle cx={19} cy={12} r={1}></circle>
                              <circle cx={5} cy={12} r={1}></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="font-mono truncate">
                            {"staging-us-east-1"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="truncate">
                            {"Partner testing"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex gap-2 items-center justify-between min-w-0">
                          <button className="cursor-pointer flex font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors underline-offset-2" type="button" data-lane-hero="" aria-label="Open DEP-4123, reconciliation">
                            <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                              <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                <path d="M13 5h8"></path>
                                <path d="M13 12h8"></path>
                                <path d="M13 19h8"></path>
                                <path d="m3 17 2 2 4-4"></path>
                                <path d="m3 7 2 2 4-4"></path>
                              </svg>
                              <span className="truncate">
                                {"reconciliation"}
                              </span>
                            </span>
                          </button>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"Succeeded"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 items-baseline min-w-0">
                          <span className="font-semibold tabular-nums text-xl tracking-tight">
                            {"v2.7.1"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate">
                            {"from v2.7.0"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                            {"f2a6c84"}
                          </Badge>
                          <span className="min-w-0 text-muted-foreground text-sm truncate">
                            {"Parse CAMT.053 statements from EU banks"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-h-6 min-w-0">
                          <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                          </span>
                          <span className="shrink-0 tabular-nums text-xs">
                            {"6/6"}
                          </span>
                        </div>
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="flex gap-1.5 items-center min-w-0">
                            <Avatar className="size-4" size="sm">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Sofia Romero"}
                            </span>
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0 tabular-nums whitespace-nowrap">
                            {"4h ago"}
                          </span>
                        </div>
                      </div>
                      <Collapsible className="contents" data-closed=""></Collapsible>
                    </FramePanel>
                    <div className="@4xl:px-1.5 @4xl:py-0 flex items-center justify-center py-1">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex={0} aria-disabled="true" aria-label="Promote Sandbox to Production, Production rolling out" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                        <span className="@4xl:rotate-0 flex rotate-90">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="contents">
                    <FramePanel className="flex flex-col gap-4 min-w-0" lane="production">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex gap-3 items-center justify-between">
                          <div className="flex gap-2 items-center min-w-0">
                            <h3 className="font-medium min-w-0 text-foreground text-sm truncate">
                              {"Production"}
                            </h3>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Healthy"}
                            </Badge>
                          </div>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Production actions" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={1}></circle>
                              <circle cx={19} cy={12} r={1}></circle>
                              <circle cx={5} cy={12} r={1}></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                        <p className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="font-mono truncate">
                            {"prod-us-east-1"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="font-mono truncate">
                            {"prod-eu-west-1"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex gap-2 items-center justify-between min-w-0">
                          <button className="cursor-pointer flex font-medium hover:text-primary hover:underline min-w-0 text-foreground text-left text-sm transition-colors underline-offset-2" type="button" data-lane-hero="" aria-label="Open DEP-4128, fraud-scorer">
                            <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                              <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              <span className="truncate">
                                {"fraud-scorer"}
                              </span>
                            </span>
                          </button>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            {"Waiting"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 items-baseline min-w-0">
                          <span className="font-semibold tabular-nums text-xl tracking-tight">
                            {"v3.9.0"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate">
                            {"from v3.8.2"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                            {"d4a7c19"}
                          </Badge>
                          <span className="min-w-0 text-muted-foreground text-sm truncate">
                            {"Serve fs-v7 features from the online store"}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center min-h-6 min-w-0">
                          <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Waiting for Promote at Canary 50%">
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                            <span className="bg-warning overflow-hidden relative rounded-full" aria-hidden="true"></span>
                          </span>
                          <Button className="aria-disabled:opacity-50 aria-disabled:pointer-events-none" type="button" tabIndex={0} aria-disabled="false">
                            {"Promote"}
                          </Button>
                        </div>
                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                          <span className="flex gap-1.5 items-center min-w-0">
                            <Avatar className="size-4" size="sm">
                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="truncate">
                              {"Kenji Tan"}
                            </span>
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span className="shrink-0 tabular-nums whitespace-nowrap">
                            {"Waiting 0:09"}
                          </span>
                        </div>
                      </div>
                      <Collapsible className="contents" data-closed=""></Collapsible>
                    </FramePanel>
                  </div>
                </div>
              </Frame>
            </section>
            <section className="scroll-mt-4" aria-label="Deploy history">
              <Frame className="w-full" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      {"Deploy History"}
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"23 deploys"}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center min-w-0 ms-auto shrink-0">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Display settings" baseUiClickTrigger="" id="base-ui-_r_o_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                        <path d="M14 17H5"></path>
                        <path d="M19 7h-9"></path>
                        <circle cx={17} cy={17} r={3}></circle>
                        <circle cx={7} cy={7} r={3}></circle>
                      </svg>
                      <span className="max-sm:sr-only">
                        {"Settings"}
                      </span>
                    </PopoverTrigger>
                    </Popover>
                  </div>
                </header>
                <FramePanel className="p-0">
                  <Tabs data-orientation="horizontal" activationDirection="none">
                    <TabsList className="border-b gap-5 h-10! justify-start no-scrollbar overflow-x-auto px-(--frame-panel-header-px) py-0! w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_p_" compositeItemActive="">
                        {"All"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"23"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_q_">
                        {"Live"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"1"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_r_">
                        {"Failed"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"2"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_s_">
                        {"Rolled back"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"3"}
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <InputGroup className="flex-1 sm:max-w-64" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx={11} cy={11} r={8}></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_t_" placeholder="Search deploys or commits..." aria-label="Search deploys" value="" />
                    </InputGroup>
                    <div className="flex gap-2 items-center ms-auto shrink-0">
                      <Popover>
                      <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter" baseUiClickTrigger="" id="base-ui-_r_10_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                          <path d="M2 5h20"></path>
                          <path d="M6 12h12"></path>
                          <path d="M9 19h6"></path>
                        </svg>
                        <span className="max-sm:sr-only">
                          {"Filter"}
                        </span>
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative">
                    <DataGridProvider>
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_11_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "34px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                        <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                          <DataGridProvider>
                          <DataGridTableViewport>
                            <DataGridProvider>
                            <DataGridTable>
                              <colgroup>
                                <col style={{width: "36px"}} />
                                <col style={{width: "188px"}} />
                                <col style={{width: "180px"}} />
                                <col style={{width: "92px"}} />
                                <col style={{width: "104px"}} />
                                <col style={{width: "108px"}} />
                                <col style={{width: "132px"}} />
                                <col style={{width: "104px"}} />
                                <col style={{width: "140px"}} />
                                <col style={{width: "108px"}} />
                                <col style={{width: "80px"}} />
                              </colgroup>
                              <thead>
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" data-pinned="start" data-outer-pinned-col="start" style={{width: "36px"}}>
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_12_" aria-checked="false" aria-label="Select all"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="deployment" data-header-id="deployment" data-header-depth="0" data-pinned="start" data-last-col="start" style={{width: "188px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                                        {"Deploy"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="commit" data-header-id="commit" data-header-depth="0" style={{width: "180px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1d_" aria-expanded="false">
                                        {"Commit"}
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="environment" data-header-id="environment" data-header-depth="0" style={{width: "92px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
                                        {"Env"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="strategy" data-header-id="strategy" data-header-depth="0" style={{width: "104px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                                        {"Strategy"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "108px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                                        {"Status"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="pipeline" data-header-id="pipeline" data-header-depth="0" style={{width: "132px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
                                        {"Pipeline"}
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="duration" data-header-id="duration" data-header-depth="0" style={{width: "104px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_26_" aria-expanded="false">
                                        {"Duration"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="author" data-header-id="author" data-header-depth="0" style={{width: "140px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_2b_" aria-expanded="false">
                                        {"Author"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="started" data-header-id="started" data-header-depth="0" style={{width: "108px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_2g_" aria-expanded="false">
                                        {"Started"}
                                        <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                          <path d="M12 5v14"></path>
                                          <path d="m19 12-7 7-7-7"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" data-pinned="end" data-outer-pinned-col="end" data-last-col="end" style={{width: "80px"}}></th>
                                </tr>
                              </thead>
                              <DataGridProvider>
                              <DataGridTableBody>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4128">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2i_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4128, fraud-scorer v3.9.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"fraud-scorer"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v3.9.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4128"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit d4a7c19, Serve fs-v7 features from the online store, 5 commits, open changes" id="base-ui-_r_2m_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"d4a7c19"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Serve fs-v7 features from the online store"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                          <path d="M12 3v18"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Canary"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                        {"Waiting"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Waiting for Promote at Canary 50%, open pipeline" id="base-ui-_r_2o_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Waiting for Promote at Canary 50%">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-warning overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"5/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"8:35"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Kenji Tan"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 14:12"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"8m ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Promote, DEP-4128" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                            <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4128" aria-haspopup="menu" id="base-ui-_r_2u_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4127">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_30_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4127, payments-api v2.41.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                                            <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                                            <circle cx={12} cy={12} r={2}></circle>
                                            <path d="M6 12h.01M18 12h.01"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"payments-api"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.41.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4127"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit 8e2c41f, Lower ledger client timeout to 1200 ms, 4 commits, open changes" id="base-ui-_r_34_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"8e2c41f"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Lower ledger client timeout to 1200 ms"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                          <path d="M12 3v18"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Canary"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_36_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"22:46"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"David Kim"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 13:51"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"29m ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Roll back, DEP-4127" id="base-ui-_r_38_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                                            <path d="M9 14 4 9l5-5"></path>
                                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4127" aria-haspopup="menu" id="base-ui-_r_3c_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4126">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4126, webhook-dispatcher v1.27.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                                            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"webhook-dispatcher"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v1.27.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4126"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit 7c3e8b1, Sign deliveries with the rotated whsec key, 2 commits, open changes" id="base-ui-_r_3i_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"7c3e8b1"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Sign deliveries with the rotated whsec key"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                          <path d="m17 2 4 4-4 4"></path>
                                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                          <path d="m7 22-4-4 4-4"></path>
                                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Rolling"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_3k_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"4:57"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Omar Haddad"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 13:19"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"1h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity"></div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4126" aria-haspopup="menu" id="base-ui-_r_3o_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4125">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4125, reconciliation v2.7.1">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"reconciliation"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.7.1"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4125"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit f2a6c84, Parse CAMT.053 statements from EU banks, open changes" id="base-ui-_r_3u_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"f2a6c84"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Parse CAMT.053 statements from EU banks"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                          <path d="M12 3v18"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Canary"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                                        {"Rolled back"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rolled back at Canary 25%, 3 of 6 stages passed, open pipeline" id="base-ui-_r_40_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rolled back at Canary 25%, 3 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-destructive overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"3/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"5:06"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Sofia Romero"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 10:38"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"3h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="View logs, DEP-4125" id="base-ui-_r_42_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4125" aria-haspopup="menu" id="base-ui-_r_46_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4124">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_48_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4124, ledger-worker v1.18.4">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                            <ellipse cx={12} cy={5} rx={9} ry={3}></ellipse>
                                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"ledger-worker"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v1.18.4"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4124"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit 1d9e6b7, Preload merchant balances at startup, 2 commits, open changes" id="base-ui-_r_4c_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"1d9e6b7"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Preload merchant balances at startup"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                          <path d="m17 2 4 4-4 4"></path>
                                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                          <path d="m7 22-4-4 4-4"></path>
                                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Rolling"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        {"Failed"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Failed at Wave 1, 3 of 6 stages passed, open pipeline" id="base-ui-_r_4e_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Failed at Wave 1, 3 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-destructive overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"3/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"6:14"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Alex Johnson"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 10:02"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"4h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Retry, DEP-4124" id="base-ui-_r_4g_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                            <path d="M21 3v5h-5"></path>
                                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                            <path d="M8 16H3v5"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4124" aria-haspopup="menu" id="base-ui-_r_4k_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4123">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4m_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4123, reconciliation v2.7.1">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"reconciliation"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.7.1"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4123"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit f2a6c84, Parse CAMT.053 statements from EU banks, open changes" id="base-ui-_r_4q_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"f2a6c84"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Parse CAMT.053 statements from EU banks"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Sandbox"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                          <path d="m17 2 4 4-4 4"></path>
                                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                          <path d="m7 22-4-4 4-4"></path>
                                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Rolling"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_4s_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"4:33"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Sofia Romero"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 09:40"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"4h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity"></div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4123" aria-haspopup="menu" id="base-ui-_r_50_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4122">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_52_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4122, reconciliation v2.7.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"reconciliation"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.7.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4122"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit e5b19a3, Match settlements by bank reference first, 3 commits, open changes" id="base-ui-_r_56_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"e5b19a3"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Match settlements by bank reference first"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                          <path d="M12 3v18"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Canary"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_58_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"27:44"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Sofia Romero"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 08:51"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"5h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Roll back, DEP-4122" id="base-ui-_r_5a_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                                            <path d="M9 14 4 9l5-5"></path>
                                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4122" aria-haspopup="menu" id="base-ui-_r_5e_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4121">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4121, reconciliation v2.7.1">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"reconciliation"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.7.1"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4121"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit f2a6c84, Parse CAMT.053 statements from EU banks, open changes" id="base-ui-_r_5k_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"f2a6c84"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Parse CAMT.053 statements from EU banks"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Staging"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                          <path d="m17 2 4 4-4 4"></path>
                                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                          <path d="m7 22-4-4 4-4"></path>
                                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Rolling"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_5m_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"4:25"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Sofia Romero"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 07:45"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"6h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity"></div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4121" aria-haspopup="menu" id="base-ui-_r_5q_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4120">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5s_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4120, reconciliation v2.7.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"reconciliation"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v2.7.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4120"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit e5b19a3, Match settlements by bank reference first, 3 commits, open changes" id="base-ui-_r_60_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"e5b19a3"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Match settlements by bank reference first"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Production"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-columns-2 lucide-columns2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Columns2Icon" tabler="IconColumns2" hugeicons="LayoutTwoColumnIcon" phosphor="SquareSplitHorizontalIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                                          <path d="M12 3v18"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Canary"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_62_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"10:26"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Sofia Romero"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 06:09"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"8h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity">
                                        <Tooltip>
                                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Roll back, DEP-4120" id="base-ui-_r_64_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                                            <path d="M9 14 4 9l5-5"></path>
                                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4120" aria-haspopup="menu" id="base-ui-_r_68_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/deploy-row hover:bg-muted/40" data-row-id="DEP-4119">
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" data-pinned="start">
                                    <div className="flex">
                                      <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6a_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5" data-pinned="start" data-last-col="start">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer flex font-medium hover:text-primary hover:underline max-w-full min-w-0 self-start text-foreground text-left transition-colors underline-offset-2" type="button" aria-label="Open DEP-4119, fraud-scorer v3.9.0">
                                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"fraud-scorer"}
                                          </span>
                                        </span>
                                      </button>
                                      <span className="flex font-mono gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          {"v3.9.0"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="shrink-0">
                                          {"DEP-4119"}
                                        </span>
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex min-w-0">
                                      <HoverCard>
                                      <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/commit items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Commit d4a7c19, Serve fs-v7 features from the online store, 5 commits, open changes" id="base-ui-_r_6e_">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium font-mono gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                                          {"d4a7c19"}
                                        </Badge>
                                        <span className="group-hover/commit:text-foreground min-w-0 text-muted-foreground text-sm transition-colors truncate">
                                          {"Serve fs-v7 features from the online store"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                        {"Sandbox"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex gap-2 items-center min-w-0 text-sm">
                                      <span className="[&_svg:not([class*=size-])]:size-4 flex shrink-0 text-muted-foreground">
                                        <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                                          <path d="m17 2 4 4-4 4"></path>
                                          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                          <path d="m7 22-4-4 4-4"></path>
                                          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                      </span>
                                      <span className="truncate">
                                        {"Rolling"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Succeeded"}
                                      </Badge>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <HoverCard>
                                    <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed, open pipeline" id="base-ui-_r_6g_">
                                      <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                        <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                                      </span>
                                      <span className="shrink-0 tabular-nums text-right text-xs w-8">
                                        {"6/6"}
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="tabular-nums text-sm">
                                      {"4:33"}
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="flex min-w-0 text-sm">
                                      <span className="flex gap-2 items-center min-w-0">
                                        <Avatar className="size-5" size="sm">
                                          <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="truncate">
                                          {"Kenji Tan"}
                                        </span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="tabular-nums text-sm whitespace-nowrap">
                                        {"Sep 29, 05:31"}
                                      </span>
                                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                                        {"8h ago"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5 text-right" data-pinned="end" data-last-col="end">
                                    <div className="flex gap-0.5 items-center justify-end">
                                      <div className="flex focus-within:opacity-100 focus-within:pointer-events-auto group-hover/deploy-row:opacity-100 group-hover/deploy-row:pointer-events-auto max-md:opacity-100 max-md:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none transition-opacity"></div>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for DEP-4119" aria-haspopup="menu" id="base-ui-_r_6k_" aria-expanded="false">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                          <circle cx={12} cy={12} r={1}></circle>
                                          <circle cx={19} cy={12} r={1}></circle>
                                          <circle cx={5} cy={12} r={1}></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
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
                      <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_11_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1202.9622641509434px"}}>
                        <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
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
                        <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_6m_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                          <SelectValue>
                            {"10"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_6m_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          {"1 - 10 of 23 deploys"}
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
                          <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 3">
                            {"3"}
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
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
