import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Ecommerce product creation wizard"}
      </h1>
      <div className="bg-muted/35 flex flex-col h-svh min-h-0 w-full">
        <StepperItem>
        <Stepper className="flex flex-1 flex-col min-h-0" role="tablist" aria-orientation="vertical" data-orientation="vertical" aria-label="Product creation progress">
          <header className="backdrop-blur bg-background/95 border-b border-border shrink-0 sticky top-0 z-20">
            <div className="flex gap-3 items-center lg:px-8 min-h-14 px-4 sm:px-6">
              <div className="flex items-center min-w-0">
                <Button className="-ms-2 size-8" type="button" tabIndex="0" aria-label="Close product wizard" extracted="1">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
                <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="min-w-0">
                  <h1 className="font-medium leading-5 text-base text-foreground truncate">
                    {"Add Product"}
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-end ml-auto shrink-0 sm:gap-3">
                <div className="gap-1 hidden items-center sm:flex">
                  <Button className="hidden md:inline-flex px-2.5" type="button" tabIndex="0">
                    {"Preview"}
                  </Button>
                  <Button className="px-2.5" type="button" tabIndex="0">
                    {"Save draft"}
                  </Button>
                </div>
                <Separator className="-ml-1 h-4 hidden mr-1 my-auto sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-2 items-center justify-end">
                  <Button className="min-w-20" type="submit" tabIndex="0" form="wizard-6-product-form">
                    {"Next"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 lg:px-8 min-h-0 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
            <form className="gap-6 grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start max-w-[60rem] min-w-0 mx-auto shrink-0 w-full" id="wizard-6-product-form" novalidate="" aria-label="Ecommerce product creation wizard">
              <aside className="lg:self-start lg:sticky lg:top-0 lg:w-64 min-w-0 shrink-0 w-full">
                <Card className="gap-0 min-w-0 overflow-hidden p-0 shadow-xs shrink-0 w-full" size="default">
                  <CardContent className="lg:max-h-[calc(100svh-7.5rem)] lg:overflow-y-auto px-5 py-6">
                    <Stepper>
                    <StepperNav className="gap-0 max-w-60 mx-auto w-full" data-state="1" data-orientation="vertical">
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="active">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                            <div className="absolute">
                              {"1"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="active">
                              <span className="truncate">
                                {"Product"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-foreground/70 text-sm! truncate" data-state="active">
                              {"Basics"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="active"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="inactive">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                            <div className="absolute">
                              {"2"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="inactive">
                              <span className="truncate">
                                {"Images"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="inactive">
                              {"Gallery"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="inactive"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="inactive">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                            <div className="absolute">
                              {"3"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="inactive">
                              <span className="truncate">
                                {"Options"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="inactive">
                              {"Variant system"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="inactive"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="inactive">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                            <div className="absolute">
                              {"4"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="inactive">
                              <span className="truncate">
                                {"Pricing"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="inactive">
                              {"Price mapping"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="inactive"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="inactive">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                            <div className="absolute">
                              {"5"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="inactive">
                              <span className="truncate">
                                {"Variants"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="inactive">
                              {"SKU matrix"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                      </StepperItem>
                      </Stepper>
                    </StepperNav>
                    </Stepper>
                  </CardContent>
                </Card>
              </aside>
              <Card className="gap-0 min-w-0 overflow-hidden p-0 shrink-0 w-full" size="default">
                <CardHeader className="gap-y-1.5 pb-5 pt-5 px-5 sm:pb-6 sm:pt-6 sm:px-6">
                  <CardTitle className="min-w-0 text-lg" role="heading" aria-level="1">
                    {"Product"}
                  </CardTitle>
                  <CardDescription className="leading-5 max-w-2xl min-w-0 text-sm">
                    {"Name, taxonomy, fulfillment, and storefront copy."}
                  </CardDescription>
                </CardHeader>
                <div className="px-5 sm:px-6">
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <CardContent className="flex-1 min-w-0 pb-6 pt-5 px-5 sm:pb-7 sm:pt-6 sm:px-6">
                  <Stepper>
                  <StepperPanel className="min-w-0 shrink-0" data-state="1">
                    <Stepper>
                    <StepperContent className="min-w-0 shrink-0" data-state="1">
                      <section className="flex flex-col gap-6 min-w-0" aria-labelledby="wizard-6-details-title">
                        <section className="flex flex-col gap-3 min-w-0" aria-labelledby="wizard-6-details-title">
                          <div className="flex flex-col gap-1 min-w-0">
                            <h2 className="font-semibold leading-6 text-base" id="wizard-6-details-title">
                              {"Product Identity"}
                            </h2>
                          </div>
                          <FieldSet className="gap-0">
                            <FieldLegend className="sr-only" variant="legend">
                              {"Product Identity"}
                            </FieldLegend>
                            <FieldDescription className="sr-only">
                              {"Define listing copy, taxonomy, and publishing state."}
                            </FieldDescription>
                            <FieldGroup className="gap-4">
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-product-title">
                                      {"Product name"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Product name details" id="base-ui-_r_1_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Input id="wizard-6-product-title" type="text" value="Aster Knit Runner"></Input>
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-handle">
                                      {"Handle"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Handle details" id="base-ui-_r_4_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Input id="wizard-6-handle" type="text" value="aster-knit-runner"></Input>
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-status">
                                      {"Status"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Status details" id="base-ui-_r_7_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="wizard-6-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        {"Draft"}
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        {"▼"}
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="draft" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-vendor">
                                      {"Vendor"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Vendor details" id="base-ui-_r_c_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Input id="wizard-6-vendor" type="text" value="Northstar Goods"></Input>
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-product-type">
                                      {"Product type"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Product type details" id="base-ui-_r_f_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="wizard-6-product-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        {"Footwear"}
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        {"▼"}
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_g_-hidden-input" tabIndex="-1" aria-hidden="true" value="Footwear" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-collection">
                                      {"Collection"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Collection details" id="base-ui-_r_k_" baseUiTooltipTrigger="">
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
                                  <Field className="gap-2 min-w-0" role="group" data-orientation="vertical">
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="wizard-6-collection" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        {"Spring Essentials"}
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        {"▼"}
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_l_-hidden-input" tabIndex="-1" aria-hidden="true" value="Spring Essentials" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                </FieldContent>
                              </Field>
                              <Field className="@md/field-group:gap-4 gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-6-description">
                                      {"Description"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Description details" id="base-ui-_r_p_" baseUiTooltipTrigger="">
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
                                  <Textarea className="min-h-24 resize-none" id="wizard-6-description">
                                    {"A breathable everyday runner with a sculpted sole, recycled knit upper, and soft interior support for all-day retail wear."}
                                  </Textarea>
                                </FieldContent>
                              </Field>
                            </FieldGroup>
                          </FieldSet>
                        </section>
                        <section className="border-border/70 border-t flex flex-col gap-3 min-w-0 pt-5" aria-labelledby="wizard-6-fulfillment-title">
                          <div className="flex flex-col gap-1 min-w-0">
                            <h2 className="font-semibold leading-6 text-base" id="wizard-6-fulfillment-title">
                              {"Fulfillment"}
                            </h2>
                          </div>
                          <FieldSet className="gap-0">
                            <FieldLegend className="sr-only" variant="legend">
                              {"Fulfillment"}
                            </FieldLegend>
                            <FieldDescription className="sr-only">
                              {"Choose how inventory reaches the customer."}
                            </FieldDescription>
                            <FieldGroup className="gap-4">
                              <Field className="@md/field-group:gap-4 gap-2" role="group" data-orientation="responsive">
                                <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                  <div className="flex gap-1.5 items-center min-w-0">
                                    <FieldLabel className="cn-field-title items-center">
                                      {"Fulfillment mode"}
                                    </FieldLabel>
                                    <Tooltip>
                                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fulfillment mode details" id="base-ui-_r_r_" baseUiTooltipTrigger="">
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
                                  <RadioGroup role="radiogroup">
                                    <FieldLabel className="block border-b border-border/70 cn-label cursor-pointer font-normal group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 hover:bg-muted/30 items-center last:border-b-0 leading-snug peer-disabled:cursor-not-allowed select-none transition-colors w-full" htmlFor="wizard-6-choice-warehouse" id="wizard-6-choice-warehouse-label">
                                      <Field className="gap-3 items-start px-3 py-2" role="group" data-orientation="horizontal">
                                        <FieldContent className="gap-0.5 min-w-0">
                                          <FieldLabel className="cn-field-title font-medium gap-2 items-center leading-5 min-w-0 text-sm">
                                            <span className="truncate">
                                              {"Warehouse stock"}
                                            </span>
                                          </FieldLabel>
                                          <FieldDescription className="leading-5 text-muted-foreground text-sm">
                                            {"Ship from owned inventory."}
                                          </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem className="mt-1" checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_t_" aria-labelledby="wizard-6-choice-warehouse-label">
                                          <span className="cn-radio-group-indicator" data-checked="">
                                            <span className="cn-radio-group-indicator-icon"></span>
                                          </span>
                                        </RadioGroupItem>
                                        <input id="wizard-6-choice-warehouse" tabIndex="-1" aria-hidden="true" type="radio" value="warehouse" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                    </FieldLabel>
                                    <FieldLabel className="block border-b border-border/70 cn-label cursor-pointer font-normal group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 hover:bg-muted/30 items-center last:border-b-0 leading-snug peer-disabled:cursor-not-allowed select-none transition-colors w-full" htmlFor="wizard-6-choice-made-to-order" id="wizard-6-choice-made-to-order-label">
                                      <Field className="gap-3 items-start px-3 py-2" role="group" data-orientation="horizontal">
                                        <FieldContent className="gap-0.5 min-w-0">
                                          <FieldLabel className="cn-field-title font-medium gap-2 items-center leading-5 min-w-0 text-sm">
                                            <span className="truncate">
                                              {"Made to order"}
                                            </span>
                                          </FieldLabel>
                                          <FieldDescription className="leading-5 text-muted-foreground text-sm">
                                            {"Create after checkout."}
                                          </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem className="mt-1" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_10_" aria-labelledby="wizard-6-choice-made-to-order-label"></RadioGroupItem>
                                        <input id="wizard-6-choice-made-to-order" tabIndex="-1" aria-hidden="true" type="radio" value="made-to-order" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                    </FieldLabel>
                                    <FieldLabel className="block border-b border-border/70 cn-label cursor-pointer font-normal group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 hover:bg-muted/30 items-center last:border-b-0 leading-snug peer-disabled:cursor-not-allowed select-none transition-colors w-full" htmlFor="wizard-6-choice-dropship" id="wizard-6-choice-dropship-label">
                                      <Field className="gap-3 items-start px-3 py-2" role="group" data-orientation="horizontal">
                                        <FieldContent className="gap-0.5 min-w-0">
                                          <FieldLabel className="cn-field-title font-medium gap-2 items-center leading-5 min-w-0 text-sm">
                                            <span className="truncate">
                                              {"Supplier fulfilled"}
                                            </span>
                                          </FieldLabel>
                                          <FieldDescription className="leading-5 text-muted-foreground text-sm">
                                            {"Route to partner warehouse."}
                                          </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem className="mt-1" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_13_" aria-labelledby="wizard-6-choice-dropship-label"></RadioGroupItem>
                                        <input id="wizard-6-choice-dropship" tabIndex="-1" aria-hidden="true" type="radio" value="dropship" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                    </FieldLabel>
                                  </RadioGroup>
                                </FieldContent>
                              </Field>
                            </FieldGroup>
                          </FieldSet>
                        </section>
                      </section>
                    </StepperContent>
                    </Stepper>
                  </StepperPanel>
                  </Stepper>
                </CardContent>
              </Card>
            </form>
          </main>
        </Stepper>
        </StepperItem>
      </div>
    </main>
  )
}
