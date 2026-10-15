import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-center justify-center lg:px-10 min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Checkout setup form
      </h1>
      <Frame className="max-w-2xl w-full">
        <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="font-semibold text-sm">
              Checkout Setup
            </div>
            <div className="text-muted-foreground text-sm">
              Hosted checkout settings.
            </div>
          </div>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            Ready to publish
          </Badge>
        </header>
        <FramePanel>
          <form id="form-2-checkout-setup">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                Checkout setup
              </FieldLegend>
              <FieldDescription className="sr-only">
                Configure offer, checkout requirements, and post-purchase handoff.
              </FieldDescription>
              <FieldGroup className="gap-5">
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-offer-type">
                        Offer Type
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Offer Type details" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-2-offer-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Product bundle
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="bundle" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-offer-name">
                        Offer
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <InputGroup role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                            <path d="M12 22V12"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <path d="m7.5 4.27 9 5.15"></path>
                          </svg>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-2-offer-name" value="Growth seat bundle" />
                      </InputGroup>
                      <Button className="self-start" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        Add add-ons
                      </Button>
                    </div>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Customer Details
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <FieldSet className="gap-2">
                      <FieldLegend className="sr-only" variant="legend">
                        Customer detail options
                      </FieldLegend>
                      <div className="@container/field-group cn-field-group flex flex-col gap-2 group/field-group w-full">
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" aria-labelledby="form-2-customer-name-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="form-2-customer-name" tabIndex="-1" aria-hidden="true" type="checkbox" checked name="customerName" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-customer-name" id="form-2-customer-name-label">
                            Collect customer name
                          </FieldLabel>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-labelledby="form-2-company-name-label"></Checkbox>
                          <input id="form-2-company-name" tabIndex="-1" aria-hidden="true" type="checkbox" name="companyName" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-company-name" id="form-2-company-name-label">
                            Ask for company name
                          </FieldLabel>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-labelledby="form-2-shipping-address-label"></Checkbox>
                          <input id="form-2-shipping-address" tabIndex="-1" aria-hidden="true" type="checkbox" name="shippingAddress" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-shipping-address" id="form-2-shipping-address-label">
                            Collect delivery address
                          </FieldLabel>
                        </Field>
                      </div>
                    </FieldSet>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Checkout Rules
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <FieldSet className="gap-2">
                      <FieldLegend className="sr-only" variant="legend">
                        Checkout rule options
                      </FieldLegend>
                      <div className="@container/field-group cn-field-group flex flex-col gap-2 group/field-group w-full">
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="true" aria-labelledby="form-2-managed-authorization-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="form-2-managed-authorization" tabIndex="-1" aria-hidden="true" type="checkbox" checked name="managedAuthorization" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <div className="flex flex-wrap gap-2 items-center leading-none min-w-0">
                            <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center leading-none peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-managed-authorization" id="form-2-managed-authorization-label">
                              Run managed authorization
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-sm select-none shrink-0 size-4 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run managed authorization details" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative self-center style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                              Live
                            </Badge>
                          </div>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" aria-labelledby="form-2-payment-limit-label"></Checkbox>
                          <input id="form-2-payment-limit" tabIndex="-1" aria-hidden="true" type="checkbox" name="paymentLimit" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-payment-limit" id="form-2-payment-limit-label">
                            Limit completed purchases
                          </FieldLabel>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" aria-labelledby="form-2-phone-required-label"></Checkbox>
                          <input id="form-2-phone-required" tabIndex="-1" aria-hidden="true" type="checkbox" name="phoneRequired" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-phone-required" id="form-2-phone-required-label">
                            Require phone verification
                          </FieldLabel>
                        </Field>
                      </div>
                    </FieldSet>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-call-to-action">
                        Button Copy
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-2-call-to-action" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Reserve access
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="reserve" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-handoff">
                        Handoff
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-2-handoff" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        Show confirmation
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_t_-hidden-input" tabIndex="-1" aria-hidden="true" value="confirmation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-return-url">
                        Return URL
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Return URL details" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-2-return-url" type="url" value="https://northstar.studio/welcome" />
                    </InputGroup>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Receipt Details
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <FieldSet className="gap-2">
                      <FieldLegend className="sr-only" variant="legend">
                        Receipt detail options
                      </FieldLegend>
                      <div className="@container/field-group cn-field-group flex flex-col gap-2 group/field-group w-full">
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_13_" aria-checked="true" aria-labelledby="form-2-receipt-copy-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="form-2-receipt-copy" tabIndex="-1" aria-hidden="true" type="checkbox" checked name="receiptCopy" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-receipt-copy" id="form-2-receipt-copy-label">
                            Send branded receipt
                          </FieldLabel>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="horizontal">
                          <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_16_" aria-checked="false" aria-labelledby="form-2-promo-follow-up-label"></Checkbox>
                          <input id="form-2-promo-follow-up" tabIndex="-1" aria-hidden="true" type="checkbox" name="promoFollowUp" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-promo-follow-up" id="form-2-promo-follow-up-label">
                            Allow follow-up offers
                          </FieldLabel>
                        </Field>
                        <Field className="gap-2 opacity-60" role="group" data-orientation="horizontal" disabled="true">
                          <Checkbox disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_19_" aria-checked="false" aria-labelledby="form-2-terms-required-label"></Checkbox>
                          <input disabled id="form-2-terms-required" tabIndex="-1" aria-hidden="true" type="checkbox" name="termsRequired" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                          <div className="flex flex-wrap gap-2 items-center leading-none min-w-0">
                            <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center leading-none peer-disabled:cursor-not-allowed select-none" htmlFor="form-2-terms-required" id="form-2-terms-required-label">
                              Require terms acceptance
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none rounded-sm select-none shrink-0 size-4 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Require terms acceptance details" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                        </Field>
                      </div>
                    </FieldSet>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
          <div className="text-muted-foreground text-sm">
            Draft stays private.
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" data-icon="inline-start" aria-hidden="true">
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
              </svg>
              Save draft
            </Button>
            <Button type="submit" tabIndex="0" form="form-2-checkout-setup">
              <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" data-icon="inline-start" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Publish checkout
            </Button>
          </div>
        </footer>
      </Frame>
    </main>
  )
}
