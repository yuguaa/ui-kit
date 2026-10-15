import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Collapsible } from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="@container max-w-7xl w-full">
        <section aria-labelledby="environment-lanes-title">
          <Frame className="w-full" spacing="default">
            <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-px min-w-0">
                <div className="font-semibold text-sm" id="environment-lanes-title">
                  {"Environments"}
                </div>
                <div className="tabular-nums text-muted-foreground text-xs">
                  {"8 services across 3 environments"}
                </div>
              </div>
              <Button type="button" tabIndex="0" aria-expanded="false" aria-controls="environment-lanes-services-staging environment-lanes-services-sandbox environment-lanes-services-production" extracted="1">
                {"Services"}
                <svg className="in-aria-expanded:rotate-180 lucide lucide-chevron-down motion-reduce:transition-none transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
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
                      <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" laneMenu="" aria-label="Staging actions" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
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
                      <span className="flex font-medium min-w-0 text-foreground text-sm">
                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WebhookIcon" tabler="IconWebhook" hugeicons="WebhookIcon" phosphor="WebhooksLogoIcon" remixicon="RiWebhookLine" aria-hidden="true">
                            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                          </svg>
                          <span className="truncate">
                            {"webhook-dispatcher"}
                          </span>
                        </span>
                      </span>
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
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Promote Staging to Sandbox, 1 ahead of Sandbox" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                    <span className="@4xl:rotate-0 flex rotate-90">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
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
                      <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" laneMenu="" aria-label="Sandbox actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
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
                      <span className="flex font-medium min-w-0 text-foreground text-sm">
                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
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
                      </span>
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
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" aria-disabled="true" aria-label="Promote Sandbox to Production, Production rolling out" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <span className="@4xl:rotate-0 flex rotate-90">
                      <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
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
                      <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" laneMenu="" aria-label="Production actions" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
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
                      <span className="flex font-medium min-w-0 text-foreground text-sm">
                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span className="truncate">
                            {"fraud-scorer"}
                          </span>
                        </span>
                      </span>
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
                      <Button className="aria-disabled:opacity-50 aria-disabled:pointer-events-none" type="button" tabIndex="0" aria-disabled="false">
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
                        {"Waiting 0:21"}
                      </span>
                    </div>
                  </div>
                  <Collapsible className="contents" data-closed=""></Collapsible>
                </FramePanel>
              </div>
            </div>
          </Frame>
        </section>
      </div>
    </div>
  )
}
