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
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Label } from "@/registry/bases/base/ui/label"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Routing rules"}
      </h1>
      <Frame className="max-w-7xl w-full">
        <header className="flex flex-col gap-4 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:gap-6 sm:items-center">
          <div className="space-y-px">
            <div className="font-semibold text-sm">
              {"Routing Rules"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"ROUTE-318 · 4 risk tiers"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 items-center shrink-0">
            <Label className="cursor-pointer gap-2" id="base-ui-_r_1_-label">
              <span className="hidden md:block text-foreground text-sm">
                {"Active"}
              </span>
              <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_0_" aria-checked="true" size="default" aria-label="Activate routing rules" aria-labelledby="base-ui-_r_1_-label">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="base-ui-_r_1_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Label>
            <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Button type="button" tabIndex={0} extracted="1">
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              <span className="hidden md:block">
                {"Reset"}
              </span>
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" aria-hidden="true">
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
              </svg>
              <span className="hidden md:block">
                {"Save"}
              </span>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Routing options" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <FramePanel className="gap-4 grid grid-cols-1 lg:grid-cols-2 xl:gap-5">
          <Item className="gap-4 items-start" variant="outline" size="default">
            <ItemContent className="gap-6">
              <div className="flex gap-4 items-start justify-between">
                <div className="space-y-px">
                  <ItemTitle>
                    {"Support Reply Drafts"}
                  </ItemTitle>
                  <ItemDescription>
                    {"1.8M requests/day use VectorEdge fallback."}
                  </ItemDescription>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  {"Low"}
                </Badge>
              </div>
              <div className="gap-4 grid sm:gap-x-5 sm:grid-cols-2">
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Provider fallback"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Move traffic after 12s p95."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_8_" aria-checked="true" size="default" aria-label="Support Reply Drafts Provider fallback">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_9_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Long context"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Allow 64M token peak days."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_b_" aria-checked="false" size="default" aria-label="Support Reply Drafts Long context">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_c_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Safety review"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Route SAFE-0914 before send."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_e_" aria-checked="false" size="default" aria-label="Support Reply Drafts Safety review">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_f_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Low cost mode"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Prefer sub $0.18 per MTok."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_h_" aria-checked="true" size="default" aria-label="Support Reply Drafts Low cost mode">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_i_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="support-reply-drafts-fallback">
                  {"Fallback priority"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="support-reply-drafts-fallback" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                  <SelectValue>
                    {"VectorEdge Small"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_k_-hidden-input" tabIndex={-1} aria-hidden="true" value="vectoredge-small" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldDescription>
                  {"Mira Stone allows low risk cost routing."}
                </FieldDescription>
              </Field>
            </ItemContent>
          </Item>
          <Item className="gap-4 items-start" variant="outline" size="default">
            <ItemContent className="gap-6">
              <div className="flex gap-4 items-start justify-between">
                <div className="space-y-px">
                  <ItemTitle>
                    {"Renewal Risk Summaries"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Northstar handles 22M to 64M token days."}
                  </ItemDescription>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  {"Medium"}
                </Badge>
              </div>
              <div className="gap-4 grid sm:gap-x-5 sm:grid-cols-2">
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Provider fallback"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Move traffic after 12s p95."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_n_" aria-checked="true" size="default" aria-label="Renewal Risk Summaries Provider fallback">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_o_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Long context"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Allow 64M token peak days."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_q_" aria-checked="true" size="default" aria-label="Renewal Risk Summaries Long context">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_r_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Safety review"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Route SAFE-0914 before send."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_t_" aria-checked="false" size="default" aria-label="Renewal Risk Summaries Safety review">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_u_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Low cost mode"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Prefer sub $0.18 per MTok."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_10_" aria-checked="false" size="default" aria-label="Renewal Risk Summaries Low cost mode">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_11_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="renewal-risk-summaries-fallback">
                  {"Fallback priority"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="renewal-risk-summaries-fallback" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                  <SelectValue>
                    {"Northstar Claude Pool"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_13_-hidden-input" tabIndex={-1} aria-hidden="true" value="northstar-claude-pool" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldDescription>
                  {"Leo Grant reviews latency drift weekly."}
                </FieldDescription>
              </Field>
            </ItemContent>
          </Item>
          <Item className="gap-4 items-start" variant="outline" size="default">
            <ItemContent className="gap-6">
              <div className="flex gap-4 items-start justify-between">
                <div className="space-y-px">
                  <ItemTitle>
                    {"Invoice Variance Explainers"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Nora Vale requires review inside 6 hours."}
                  </ItemDescription>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  {"High"}
                </Badge>
              </div>
              <div className="gap-4 grid sm:gap-x-5 sm:grid-cols-2">
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Provider fallback"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Move traffic after 12s p95."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_16_" aria-checked="true" size="default" aria-label="Invoice Variance Explainers Provider fallback">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_17_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Long context"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Allow 64M token peak days."}
                    </div>
                  </div>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_19_" aria-checked="true" size="default" aria-label="Invoice Variance Explainers Long context">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1a_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Safety review"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Permission denied by Elijah Morgan."}
                    </div>
                  </div>
                  <Switch disabled="" checked="" role="switch" tabIndex={-1} aria-disabled="true" id="base-ui-_r_1c_" aria-checked="true" size="default" aria-label="Invoice Variance Explainers Safety review">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                  </Switch>
                  <input disabled id="base-ui-_r_1d_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Low cost mode"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Prefer sub $0.18 per MTok."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1f_" aria-checked="false" size="default" aria-label="Invoice Variance Explainers Low cost mode">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1g_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="invoice-variance-explainers-fallback">
                  {"Fallback priority"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="invoice-variance-explainers-fallback" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                  <SelectValue>
                    {"Local Guardrail Runner"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_1i_-hidden-input" tabIndex={-1} aria-hidden="true" value="local-guardrail-runner" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldDescription>
                  {"SAFE-0914 keeps finance copy gated."}
                </FieldDescription>
              </Field>
            </ItemContent>
          </Item>
          <Item className="gap-4 items-start" variant="outline" size="default">
            <ItemContent className="gap-6">
              <div className="flex gap-4 items-start justify-between">
                <div className="space-y-px">
                  <ItemTitle>
                    {"Payment Action Drafts"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Elijah Morgan blocks unsafe fallback edits."}
                  </ItemDescription>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  {"Restricted"}
                </Badge>
              </div>
              <div className="gap-4 grid sm:gap-x-5 sm:grid-cols-2">
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Provider fallback"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Move traffic after 12s p95."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1l_" aria-checked="false" size="default" aria-label="Payment Action Drafts Provider fallback">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1m_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Long context"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Allow 64M token peak days."}
                    </div>
                  </div>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1o_" aria-checked="false" size="default" aria-label="Payment Action Drafts Long context">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1p_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Safety review"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Permission denied by Elijah Morgan."}
                    </div>
                  </div>
                  <Switch disabled="" unchecked="" role="switch" tabIndex={-1} aria-disabled="true" id="base-ui-_r_1r_" aria-checked="false" size="default" aria-label="Payment Action Drafts Safety review">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-unchecked=""></span>
                  </Switch>
                  <input disabled id="base-ui-_r_1s_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <div className="space-y-px">
                    <div className="font-medium text-sm">
                      {"Low cost mode"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Permission denied by Elijah Morgan."}
                    </div>
                  </div>
                  <Switch disabled="" unchecked="" role="switch" tabIndex={-1} aria-disabled="true" id="base-ui-_r_1u_" aria-checked="false" size="default" aria-label="Payment Action Drafts Low cost mode">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-unchecked=""></span>
                  </Switch>
                  <input disabled id="base-ui-_r_1v_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="payment-action-drafts-fallback">
                  {"Fallback priority"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="payment-action-drafts-fallback" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="true">
                  <SelectValue>
                    {"No fallback"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_21_-hidden-input" tabIndex={-1} aria-hidden="true" value="none" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldError role="alert">
                  {"Choose Local Guardrail Runner before saving."}
                </FieldError>
              </Field>
            </ItemContent>
          </Item>
        </FramePanel>
      </Frame>
    </main>
  )
}
