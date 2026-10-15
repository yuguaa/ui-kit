import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center lg:p-10 min-h-svh p-4 sm:p-6 w-full">
      <form className="flex flex-col max-w-2xl w-full" aria-label="Procurement vendor onboarding wizard">
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <Frame className="w-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex gap-3 items-center justify-between">
                <div className="flex flex-col gap-px min-w-0">
                  <div className="font-semibold text-sm">
                    Procurement Vendor Setup
                  </div>
                  <div className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-sm">
                    <span className="shrink-0">
                      VEN-2048
                    </span>
                    <span className="bg-gray-400 dark:bg-gray-500 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="truncate">
                      Software subscription
                    </span>
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  Review file
                </Badge>
              </div>
            </header>
            <FramePanel className="flex items-center overflow-x-auto">
              <StepperNav className="items-center min-w-full" data-state="2" data-orientation="horizontal">
                <StepperItem className="min-w-0 relative" data-state="completed">
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-1" aria-selected="false" aria-controls="stepper-panel-1" tabIndex="-1" data-state="completed" loading="false" extracted="1">
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="completed">
                      <div className="absolute">
                        <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="completed">
                      Company Details
                    </StepperTitle>
                  </StepperTrigger>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="completed"></StepperSeparator>
                </StepperItem>
                <StepperItem className="min-w-0 relative" data-state="active">
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-2" aria-selected="true" aria-controls="stepper-panel-2" tabIndex="0" data-state="active" loading="false">
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        2
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="active">
                      Compliance
                    </StepperTitle>
                  </StepperTrigger>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
                </StepperItem>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        3
                      </div>
                    </StepperIndicator>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="inactive">
                      Submit
                    </StepperTitle>
                  </StepperTrigger>
                </StepperItem>
              </StepperNav>
            </FramePanel>
            <FramePanel>
              <StepperPanel className="text-sm" data-state="2">
                <StepperContent data-state="2">
                  <section className="flex flex-col gap-6" aria-labelledby="wizard-2-ownership-title">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-base" id="wizard-2-ownership-title">
                        Compliance
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Confirm ownership and tax records.
                      </p>
                    </div>
                    <FieldGroup className="gap-5 grid sm:grid-cols-2">
                      <Field className="gap-3 sm:col-span-2" role="group" data-orientation="vertical" invalid="false">
                        <div className="flex flex-col gap-2">
                          <div className="gap-2 grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_5rem_auto]">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-1-name">
                                Owner 1 name
                              </FieldLabel>
                              <Input id="owner-1-name" placeholder="Owner full name" autoComplete="name" value="Maya Chen"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-1-address">
                                Owner 1 address
                              </FieldLabel>
                              <Input id="owner-1-address" placeholder="Registered address" autoComplete="street-address" value="214 Mission Street, San Francisco, CA"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-1-share">
                                Owner 1 share
                              </FieldLabel>
                              <Input id="owner-1-share" placeholder="Share" inputmode="numeric" value="52%"></Input>
                            </Field>
                            <Button className="hover:text-destructive justify-self-start sm:justify-self-end text-muted-foreground" type="button" tabIndex="0" aria-label="Remove owner 1">
                              <svg className="lucide lucide-trash-2 lucide-trash2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </Button>
                          </div>
                          <div className="gap-2 grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_5rem_auto]">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-2-name">
                                Owner 2 name
                              </FieldLabel>
                              <Input id="owner-2-name" placeholder="Owner full name" autoComplete="name" value="Kai Morgan"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-2-address">
                                Owner 2 address
                              </FieldLabel>
                              <Input id="owner-2-address" placeholder="Registered address" autoComplete="street-address" value="18 King Street, Seattle, WA"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="owner-2-share">
                                Owner 2 share
                              </FieldLabel>
                              <Input id="owner-2-share" placeholder="Share" inputmode="numeric" value="28%"></Input>
                            </Field>
                            <Button className="hover:text-destructive justify-self-start sm:justify-self-end text-muted-foreground" type="button" tabIndex="0" aria-label="Remove owner 2">
                              <svg className="lucide lucide-trash-2 lucide-trash2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button className="w-auto" type="button" tabIndex="0">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add owner
                          </Button>
                        </div>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <div className="flex gap-1.5 items-center leading-snug w-fit">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-2-tax">
                            Tax/VAT ID
                            <span className="text-destructive">
                              *
                            </span>
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Tax/VAT ID hint" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <Input id="wizard-2-tax" aria-invalid="false" placeholder="Enter tax number" value="US-82-4917721"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <div className="flex gap-1.5 items-center leading-snug w-fit">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-2-incorporated">
                            Date Incorporated
                            <span className="text-destructive">
                              *
                            </span>
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Date Incorporated hint" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <Input id="wizard-2-incorporated" aria-invalid="false" placeholder="MM/DD/YYYY" value="08/08/2025"></Input>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal" invalid="false">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="true" aria-invalid="false" aria-labelledby="wizard-2-ownership-attested-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="wizard-2-ownership-attested" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-2-ownership-attested" id="wizard-2-ownership-attested-label">
                            Ownership reviewed
                          </FieldLabel>
                          <FieldDescription>
                            Records match company documents.
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </section>
                </StepperContent>
              </StepperPanel>
            </FramePanel>
            <footer className="flex flex-col gap-3 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="gap-1.5 hidden items-center min-w-0 sm:flex text-muted-foreground text-sm">
                <svg className="lucide lucide-flag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                </svg>
                Owners and tax IDs.
              </div>
              <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  Previous
                </Button>
                <Button type="submit" tabIndex="0">
                  Next Step
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </footer>
          </Frame>
        </Stepper>
      </form>
    </div>
  )
}
