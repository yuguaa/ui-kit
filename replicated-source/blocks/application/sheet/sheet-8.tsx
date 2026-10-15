import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Notification relay quick settings sheet
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        Open relay settings
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(32rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <div className="min-w-0">
            <SheetTitle className="leading-5 text-sm truncate" id="base-ui-_r_3_">
              Notification Relay
            </SheetTitle>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_4_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "102px"}} data-has-overflow-y="" data-overflow-y-end="">
            <form className="pb-3 pt-5 px-4" id="sheet-8-notification-relay">
              <FieldSet className="gap-5">
                <FieldLegend className="sr-only" variant="legend">
                  Notification relay quick settings
                </FieldLegend>
                <section className="flex flex-col gap-1" aria-labelledby="sheet-8-delivery-section">
                  <h3 className="font-semibold text-muted-foreground text-sm" id="sheet-8-delivery-section">
                    Delivery
                  </h3>
                  <FieldGroup className="gap-1">
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-panel-label">
                            Panel Label
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Input id="sheet-8-panel-label" autoComplete="off" value="Launch desk relay"></Input>
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-start" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-quiet-start">
                            Quiet Window
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Quiet Window hint" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <div className="gap-2 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center min-w-0">
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-quiet-start" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Quiet window start">
                            <SelectValue>
                              18:30
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="18:30" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <span className="text-muted-foreground text-sm">
                            to
                          </span>
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-quiet-end" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Quiet window end">
                            <SelectValue>
                              08:00
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_b_-hidden-input" tabIndex="-1" aria-hidden="true" value="08:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-region-clock">
                            Region Clock
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-region-clock" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Region clock">
                          <SelectValue>
                            Asia/Tashkent
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_e_-hidden-input" tabIndex="-1" aria-hidden="true" value="asia-tashkent" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-delivery-channel">
                            Delivery Channel
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-delivery-channel" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Delivery channel">
                          <SelectValue>
                            Workspace inbox
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="workspace-inbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-digest-cadence">
                            Digest Cadence
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-digest-cadence" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Digest cadence">
                          <SelectValue>
                            Twice daily
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="twice-daily" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-workdays" id="sheet-8-workdays-label">
                            Workdays Only
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="true" size="default" aria-labelledby="sheet-8-workdays-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sheet-8-workdays" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                  </FieldGroup>
                </section>
                <section className="flex flex-col gap-1" aria-labelledby="sheet-8-routing-section">
                  <h3 className="font-semibold text-muted-foreground text-sm" id="sheet-8-routing-section">
                    Routing
                  </h3>
                  <FieldGroup className="gap-1">
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-digest-route">
                            Digest Route
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-digest-route" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Digest route">
                          <SelectValue>
                            Ops brief
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="ops-brief" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-priority" id="sheet-8-priority-label">
                            Priority Escalation
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Priority Escalation hint" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_v_" aria-checked="true" size="default" aria-labelledby="sheet-8-priority-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sheet-8-priority" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-escalation-delay">
                            Escalation Delay
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-8-escalation-delay" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Escalation delay">
                          <SelectValue>
                            10 minutes
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_12_-hidden-input" tabIndex="-1" aria-hidden="true" value="10-minutes" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                    <Field className="gap-1.5 grid py-2 sm:gap-8 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:items-center" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5 min-w-0 sm:pt-0.5">
                        <div className="flex gap-1.5 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-8-retry-failed-sends" id="sheet-8-retry-failed-sends-label">
                            Retry Failed Sends
                          </FieldLabel>
                        </div>
                      </FieldContent>
                      <div className="min-w-0 sm:pl-1">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_15_" aria-checked="true" size="default" aria-labelledby="sheet-8-retry-failed-sends-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="sheet-8-retry-failed-sends" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </Field>
                  </FieldGroup>
                </section>
              </FieldSet>
            </form>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_4_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "401.97966101694914px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="bg-muted border-t gap-3 grid grid-cols-2 min-w-0 px-5 py-4 shrink-0">
        <Button className="w-full" type="button" tabIndex="0">
          Reset
        </Button>
        <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="submit" tabIndex="0" form="sheet-8-notification-relay">
          Save Settings
        </SheetClose>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
