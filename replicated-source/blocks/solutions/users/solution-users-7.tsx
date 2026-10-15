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
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 text-foreground w-full">
      <Frame className="max-w-3xl text-foreground w-full">
        <header className="flex flex-row gap-4 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
          <div className="space-y-px">
            <div className="font-semibold text-sm">
              {"SSO & SCIM"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Enterprise sign-in for acmecloud.com"}
            </div>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
              <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            {"View as Member"}
          </Button>
        </header>
        <FramePanel className="p-0!">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-4! py-(--frame-panel-header-py) py-3!">
            <div className="font-semibold text-sm">
              {"Single Sign-On"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"84% coverage"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"1 provider needs attention"}
              </span>
            </div>
          </header>
          <fieldset className="border-t">
            <div>
              <div>
                <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
                  <ItemMedia variant="icon">
                    <Item className="[&_svg]:opacity-70 [&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </Item>
                  </ItemMedia>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="gap-1.5 min-w-0">
                      <span className="min-w-0 truncate">
                        {"Okta"}
                      </span>
                      <span className="flex gap-1 items-center shrink-0">
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-green-600 transition-colors" type="button" aria-label="Healthy. 57 members sign in through Okta." id="base-ui-_r_1_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-circle-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Connected"}
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="min-w-0">
                      <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                        <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                          {"https://acmecloud.okta.com/app/metadata"}
                        </code>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy Okta metadata URL" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="basis-full gap-2 justify-end pt-2 sm:basis-auto sm:justify-start sm:pt-0 sm:self-center">
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      {"Test"}
                    </Button>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Okta" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={12} cy={5} r={1}></circle>
                        <circle cx={12} cy={19} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
              <div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
                  <ItemMedia variant="icon">
                    <Item className="[&_svg]:opacity-70 [&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                    </Item>
                  </ItemMedia>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="gap-1.5 min-w-0">
                      <span className="min-w-0 truncate">
                        {"Microsoft Entra ID"}
                      </span>
                      <span className="flex gap-1 items-center shrink-0">
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-destructive transition-colors" type="button" aria-label="Error. Microsoft Entra ID metadata signature expired. Re-upload to restore sign-in." id="base-ui-_r_a_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-circle-x shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Error"}
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="min-w-0">
                      <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                        <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                          {"https://login.microsoftonline.com/acme/saml"}
                        </code>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy Microsoft Entra ID metadata URL" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="basis-full gap-2 justify-end pt-2 sm:basis-auto sm:justify-start sm:pt-0 sm:self-center">
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      {"Test"}
                    </Button>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Microsoft Entra ID" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={12} cy={5} r={1}></circle>
                        <circle cx={12} cy={19} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
              <div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Item className="border-t-0 border-x-0 last:border-b-0" variant="outline" size="default">
                  <ItemMedia variant="icon">
                    <Item className="[&_svg]:opacity-70 [&_svg]:size-4 bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-muted-foreground" variant="default" size="default">
                      <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </Item>
                  </ItemMedia>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="gap-1.5 min-w-0">
                      <span className="min-w-0 truncate">
                        {"Google Workspace"}
                      </span>
                      <span className="flex gap-1 items-center shrink-0">
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-warning transition-colors" type="button" aria-label="Inactive. Google Workspace is not configured yet. No members sign in through it." id="base-ui-_r_j_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-triangle-alert shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        {"Not configured"}
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="min-w-0">
                      <span className="align-top gap-1 group/url inline-flex items-center max-w-full">
                        <code className="max-w-full min-w-0 text-foreground/90 text-xs truncate">
                          {"https://accounts.google.com/.well-known/openid"}
                        </code>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/url:opacity-100 sm:group-hover/url:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy Google Workspace metadata URL" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="basis-full gap-2 justify-end pt-2 sm:basis-auto sm:justify-start sm:pt-0 sm:self-center">
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      {"Connect"}
                    </Button>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Google Workspace" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx={12} cy={12} r={1}></circle>
                        <circle cx={12} cy={5} r={1}></circle>
                        <circle cx={12} cy={19} r={1}></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
            </div>
          </fieldset>
        </FramePanel>
        <FramePanel className="p-0!">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-4! py-(--frame-panel-header-py) py-3!">
            <div className="font-semibold text-sm">
              {"SCIM Provisioning"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"Last sync 12 min ago"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"57 members in scope"}
              </span>
            </div>
          </header>
          <fieldset className="border-t">
            <FieldGroup className="gap-0">
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Endpoint URL"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Point your identity provider at this SCIM v2 endpoint."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <InputGroup role="group">
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_r_" readOnly value="https://acmecloud.com/scim/v2" />
                    <InputGroupAddon role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex={0} size="icon-xs" aria-label="Copy SCIM endpoint URL">
                        <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Bearer token"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Rotate the token if it may have leaked. Okta must be updated within 24 hours."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 font-mono min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_s_" readOnly value="•••••••••••••••••••••••••" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex={0} size="icon-xs" aria-label="Reveal bearer token">
                          <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx={12} cy={12} r={3}></circle>
                          </svg>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </svg>
                      {"Rotate"}
                    </Button>
                  </div>
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Mapped attributes"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Attributes pushed from your directory on each sync."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"userName"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"emails"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"displayName"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"title"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"department"}
                    </Badge>
                  </div>
                </FieldContent>
              </Field>
            </FieldGroup>
          </fieldset>
        </FramePanel>
        <FramePanel className="p-0!">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-4! py-(--frame-panel-header-py) py-3!">
            <div className="font-semibold text-sm">
              {"Authentication Policy"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"2FA required"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"78% of members enrolled"}
              </span>
            </div>
          </header>
          <fieldset className="border-t">
            <FieldGroup className="gap-0">
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-two-factor">
                      {"Require 2FA"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Set whether members must add a second factor to sign in."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="sso-two-factor" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"Required"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_t_-hidden-input" tabIndex={-1} aria-hidden="true" value="required" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Allowed factors"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Choose which second factors members may enroll."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-[22rem] gap-1.5 min-w-0">
                  <FieldSet className="gap-3 w-full">
                    <FieldLegend className="sr-only" variant="legend">
                      {"Allowed factors"}
                    </FieldLegend>
                    <FieldGroup className="gap-3">
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" checked="" role="switch" tabIndex={0} id="base-ui-_r_10_" aria-checked="true" size="default" aria-labelledby="sso-policy-totp-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sso-policy-totp" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-totp" id="sso-policy-totp-label">
                            {"Authenticator (TOTP)"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"One-time codes from an authenticator app."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" checked="" role="switch" tabIndex={0} id="base-ui-_r_13_" aria-checked="true" size="default" aria-labelledby="sso-policy-passkey-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sso-policy-passkey" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-passkey" id="sso-policy-passkey-label">
                            {"Passkey"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Device-bound biometric or PIN sign-in."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" unchecked="" role="switch" tabIndex={0} id="base-ui-_r_16_" aria-checked="false" size="default" aria-labelledby="sso-policy-security-key-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="sso-policy-security-key" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-security-key" id="sso-policy-security-key-label">
                            {"Security key"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Hardware FIDO2 keys for high-risk roles."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" unchecked="" role="switch" tabIndex={0} id="base-ui-_r_19_" aria-checked="false" size="default" aria-labelledby="sso-policy-sms-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="sso-policy-sms" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-sms" id="sso-policy-sms-label">
                            {"SMS"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Codes sent by text as a last resort."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-password-policy">
                      {"Password policy"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Minimum strength for members who still use a password."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="sso-password-policy" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"Strong, 16 characters"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1c_-hidden-input" tabIndex={-1} aria-hidden="true" value="strong" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
            </FieldGroup>
          </fieldset>
        </FramePanel>
        <FramePanel className="p-0!">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-4! py-(--frame-panel-header-py) py-3!">
            <div className="font-semibold text-sm">
              {"Session Policy"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"Idle 30 min"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"sessions expire after 7 days"}
              </span>
            </div>
          </header>
          <fieldset className="border-t">
            <FieldGroup className="gap-0">
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-idle-timeout">
                      {"Idle timeout"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Sign members out after this long without activity."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="sso-idle-timeout" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"30 minutes"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1f_-hidden-input" tabIndex={-1} aria-hidden="true" value="30m" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-max-session">
                      {"Max session length"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Force a fresh sign-in once a session reaches this age."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="sso-max-session" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"7 days"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1i_-hidden-input" tabIndex={-1} aria-hidden="true" value="7d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Re-authentication"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Add an extra check before high-risk changes."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-[22rem] gap-1.5 min-w-0">
                  <FieldSet className="gap-3 w-full">
                    <FieldLegend className="sr-only" variant="legend">
                      {"Re-authentication"}
                    </FieldLegend>
                    <FieldGroup className="gap-3">
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" checked="" role="switch" tabIndex={0} id="base-ui-_r_1l_" aria-checked="true" size="default" aria-labelledby="sso-policy-force-reauth-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sso-policy-force-reauth" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-force-reauth" id="sso-policy-force-reauth-label">
                            {"Force re-auth on sensitive actions"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Re-prompt before role or billing changes."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch className="mt-0.5" unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1o_" aria-checked="false" size="default" aria-labelledby="sso-policy-single-session-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="sso-policy-single-session" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-policy-single-session" id="sso-policy-single-session-label">
                            {"One active session per member"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Sign out other devices on new sign-in."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FieldContent>
              </Field>
            </FieldGroup>
          </fieldset>
        </FramePanel>
        <FramePanel className="p-0!">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-4! py-(--frame-panel-header-py) py-3!">
            <div className="font-semibold text-sm">
              {"Allowed Email Domains"}
            </div>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"2 verified"}
              </span>
            </div>
          </header>
          <fieldset className="border-t">
            <FieldGroup className="gap-0">
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-field-title items-center">
                      {"Verified domains"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Members with these email domains are matched to your org."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"acmecloud.com"}
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"eng.acmecloud.com"}
                    </Badge>
                  </div>
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive" invalid="false">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sso-add-domain">
                      {"Add a domain"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Verify ownership with a DNS TXT record before it goes live."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 gap-1.5 min-w-0">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="sso-add-domain" aria-invalid="false" placeholder="team.acmecloud.com" value="" />
                    </InputGroup>
                    <Button type="button" tabIndex={0}>
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      {"Add domain"}
                    </Button>
                  </div>
                </FieldContent>
              </Field>
            </FieldGroup>
          </fieldset>
        </FramePanel>
        <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <span className="text-muted-foreground text-xs">
            {"All changes saved"}
          </span>
          <div className="flex gap-3">
            <Button type="button" disabled="" tabIndex={0} disabled>
              {"Discard"}
            </Button>
            <Button type="button" disabled="" tabIndex={0} disabled>
              {"Save changes"}
            </Button>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
