import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <Frame className="max-w-3xl w-full">
        <header className="flex flex-row gap-4 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
          <div className="space-y-px">
            <div className="font-semibold text-sm">
              Webhook Endpoints
            </div>
            <div className="text-muted-foreground text-sm">
              Routes and status
            </div>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Endpoint
          </Button>
        </header>
        <FramePanel className="p-0!">
          <div>
            <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
              <ItemMedia className="self-center! translate-y-0!" variant="icon">
                <Item className="[&_svg]:opacity-60 border border-border p-0 size-10" variant="default" size="default">
                  <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </Item>
              </ItemMedia>
              <ItemContent className="gap-1 min-w-0">
                <ItemTitle className="gap-2 min-w-0">
                  <span className="min-w-0 truncate">
                    Billing Pipeline
                  </span>
                  <span className="flex gap-1 items-center shrink-0">
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-green-600" type="button" aria-label="Healthy. Billing Pipeline is delivering subscribed events normally." id="base-ui-_r_1_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-circle-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Delivering
                  </Badge>
                </ItemTitle>
                <ItemDescription className="min-w-0">
                  <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                    <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                      https://events.acme.dev/webhooks/billing
                    </code>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy endpoint URL for Billing Pipeline" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2 self-start sm:self-center">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_4_" aria-checked="true" size="default" aria-label="Toggle https://events.acme.dev/webhooks/billing">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_5_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Billing Pipeline" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
          <div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
              <ItemMedia className="self-center! translate-y-0!" variant="icon">
                <Item className="[&_svg]:opacity-60 border border-border p-0 size-10" variant="default" size="default">
                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </Item>
              </ItemMedia>
              <ItemContent className="gap-1 min-w-0">
                <ItemTitle className="gap-2 min-w-0">
                  <span className="min-w-0 truncate">
                    Customer Ledger
                  </span>
                  <span className="flex gap-1 items-center shrink-0">
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-warning" type="button" aria-label="Warning. Signing secret was rotated 28d ago. Consider refreshing it soon." id="base-ui-_r_d_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-triangle-alert shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Delivering
                  </Badge>
                </ItemTitle>
                <ItemDescription className="min-w-0">
                  <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                    <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                      https://ingest.acme.dev/webhooks/customers
                    </code>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy endpoint URL for Customer Ledger" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2 self-start sm:self-center">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_g_" aria-checked="true" size="default" aria-label="Toggle https://ingest.acme.dev/webhooks/customers">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_h_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Customer Ledger" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
          <div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
              <ItemMedia className="self-center! translate-y-0!" variant="icon">
                <Item className="[&_svg]:opacity-60 border border-border p-0 size-10" variant="default" size="default">
                  <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RepeatIcon" tabler="IconRepeat" hugeicons="RepeatIcon" phosphor="RepeatIcon" remixicon="RiRepeatLine" aria-hidden="true">
                    <path d="m17 2 4 4-4 4"></path>
                    <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                    <path d="m7 22-4-4 4-4"></path>
                    <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                  </svg>
                </Item>
              </ItemMedia>
              <ItemContent className="gap-1 min-w-0">
                <ItemTitle className="gap-2 min-w-0">
                  <span className="min-w-0 truncate">
                    Subscription Orchestrator
                  </span>
                  <span className="flex gap-1 items-center shrink-0">
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-destructive" type="button" aria-label="Critical. Subscription Orchestrator has deliveries waiting for retry review." id="base-ui-_r_p_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-circle-x shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-warning" type="button" aria-label="Warning. Signing secret rotation is due within 5 days." id="base-ui-_r_r_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-triangle-alert shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    Retrying
                  </Badge>
                </ItemTitle>
                <ItemDescription className="min-w-0">
                  <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                    <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                      https://ops.acme.dev/webhooks/subscriptions
                    </code>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy endpoint URL for Subscription Orchestrator" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2 self-start sm:self-center">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_u_" aria-checked="true" size="default" aria-label="Toggle https://ops.acme.dev/webhooks/subscriptions">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_v_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Subscription Orchestrator" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
          <div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
              <ItemMedia className="self-center! translate-y-0!" variant="icon">
                <Item className="[&_svg]:opacity-60 border border-border p-0 size-10" variant="default" size="default">
                  <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                </Item>
              </ItemMedia>
              <ItemContent className="gap-1 min-w-0">
                <ItemTitle className="gap-2 min-w-0">
                  <span className="min-w-0 truncate">
                    Finance Reconciliation
                  </span>
                  <span className="flex gap-1 items-center shrink-0">
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-warning" type="button" aria-label="Warning. Finance Reconciliation is paused and not receiving new events." id="base-ui-_r_17_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-triangle-alert shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    Paused
                  </Badge>
                </ItemTitle>
                <ItemDescription className="min-w-0">
                  <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                    <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                      https://ledger.acme.dev/webhooks/payouts
                    </code>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy endpoint URL for Finance Reconciliation" id="base-ui-_r_19_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2 self-start sm:self-center">
                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1a_" aria-checked="false" size="default" aria-label="Toggle https://ledger.acme.dev/webhooks/payouts">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="base-ui-_r_1b_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Finance Reconciliation" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
          <div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
              <ItemMedia className="self-center! translate-y-0!" variant="icon">
                <Item className="[&_svg]:opacity-60 border border-border p-0 size-10" variant="default" size="default">
                  <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </Item>
              </ItemMedia>
              <ItemContent className="gap-1 min-w-0">
                <ItemTitle className="gap-2 min-w-0">
                  <span className="min-w-0 truncate">
                    Risk Intake
                  </span>
                  <span className="flex gap-1 items-center shrink-0">
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex p-0.5 rounded-sm text-warning" type="button" aria-label="Warning. Last delivery landed 47m ago. Check if that delay is expected." id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-triangle-alert shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Delivering
                  </Badge>
                </ItemTitle>
                <ItemDescription className="min-w-0">
                  <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                    <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                      https://risk.acme.dev/webhooks/disputes
                    </code>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy endpoint URL for Risk Intake" id="base-ui-_r_1l_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2 self-start sm:self-center">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1m_" aria-checked="true" size="default" aria-label="Toggle https://risk.acme.dev/webhooks/disputes">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_1n_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Risk Intake" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                  <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </ItemActions>
            </Item>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
