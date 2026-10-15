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
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center max-w-[1100px] md:p-4 min-h-svh mx-auto p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Playbook Builder
      </h1>
      <div className="@container min-w-0 w-full">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
              Playbook Builder
            </h2>
            <p className="text-muted-foreground text-sm">
              PB-31 for Refund Resolver
            </p>
          </div>
          <div className="flex gap-2 items-center justify-end shrink-0 sm:gap-3">
            <div className="gap-1 hidden items-center sm:flex">
              <Button className="px-2.5 text-foreground" type="button" tabIndex="0" extracted="1">
                Save Draft
              </Button>
            </div>
            <Separator className="-ml-1 h-4 hidden mr-1 my-auto sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <div className="flex gap-2 items-center justify-end">
              <Button className="min-w-20" type="submit" tabIndex="0" form="solution-agents-6-playbook-form">
                Next
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="@2xl:block hidden mt-4 w-full">
          <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Playbook builder steps">
            <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
              <StepperItem className="min-w-0 relative" data-state="active">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start min-w-0" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                    <div className="absolute">
                      1
                    </div>
                  </StepperIndicator>
                  <StepperTitle className="text-foreground truncate" data-state="active">
                    Trigger
                  </StepperTitle>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="active"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start min-w-0" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      2
                    </div>
                  </StepperIndicator>
                  <StepperTitle className="text-foreground truncate" data-state="inactive">
                    Conditions
                  </StepperTitle>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start min-w-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      3
                    </div>
                  </StepperIndicator>
                  <StepperTitle className="text-foreground truncate" data-state="inactive">
                    Tools
                  </StepperTitle>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start min-w-0" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      4
                    </div>
                  </StepperIndicator>
                  <StepperTitle className="text-foreground truncate" data-state="inactive">
                    Approvals
                  </StepperTitle>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start min-w-0" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      5
                    </div>
                  </StepperIndicator>
                  <StepperTitle className="text-foreground truncate" data-state="inactive">
                    Review
                  </StepperTitle>
                </StepperTrigger>
              </StepperItem>
            </StepperNav>
          </Stepper>
        </div>
        <div className="@2xl:hidden mt-4 w-full">
          <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Playbook builder steps">
            <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
              <StepperItem className="min-w-0 relative" data-state="active">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                    <div className="absolute">
                      1
                      <span className="sr-only">
                        Trigger
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      2
                      <span className="sr-only">
                        Conditions
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      3
                      <span className="sr-only">
                        Tools
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      4
                      <span className="sr-only">
                        Approvals
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
                <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
              </StepperItem>
              <StepperItem className="min-w-0 relative" data-state="inactive">
                <StepperTrigger className="disabled:opacity-100 gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                    <div className="absolute">
                      5
                      <span className="sr-only">
                        Review
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
            </StepperNav>
          </Stepper>
        </div>
        <Stepper className="min-w-0 mt-4" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <form className="@4xl:grid-cols-[minmax(0,1fr)_20rem] @4xl:items-start gap-6 grid grid-cols-1 min-w-0 w-full" id="solution-agents-6-playbook-form" novalidate="" aria-label="Agent playbook builder wizard">
            <Card className="min-w-0 shrink-0 w-full" size="sm">
              <CardHeader className="gap-0.5">
                <CardTitle className="min-w-0" role="heading" aria-level="2">
                  Trigger
                </CardTitle>
                <CardDescription className="max-w-2xl min-w-0">
                  Name the playbook and its start event.
                </CardDescription>
              </CardHeader>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <CardContent className="flex-1 min-w-0">
                <StepperPanel className="min-w-0 shrink-0" data-state="1">
                  <StepperContent className="min-w-0 shrink-0" data-state="1">
                    <section className="flex flex-col gap-6 min-w-0" aria-labelledby="playbook-trigger-title">
                      <section className="flex flex-col gap-3 min-w-0" aria-labelledby="playbook-trigger-title">
                        <div className="flex flex-col gap-1 min-w-0">
                          <h2 className="font-semibold leading-6 text-base" id="playbook-trigger-title">
                            Playbook Identity
                          </h2>
                        </div>
                        <FieldSet className="gap-0">
                          <FieldLegend className="sr-only" variant="legend">
                            Playbook Identity
                          </FieldLegend>
                          <FieldDescription className="sr-only">
                            Name the playbook, pick the agent and the start event.
                          </FieldDescription>
                          <FieldGroup className="gap-4">
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-name">
                                    Playbook name
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Playbook name details" id="base-ui-_r_1_" baseUiTooltipTrigger="">
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
                                  <Input id="playbook-name" aria-invalid="false" type="text" value="Refund Escalation"></Input>
                                </Field>
                              </FieldContent>
                            </Field>
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-agent">
                                    Agent
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Agent details" id="base-ui-_r_4_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-agent" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Refund Resolver
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="Refund Resolver" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-trigger-event">
                                    Trigger event
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Trigger event details" id="base-ui-_r_9_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-trigger-event" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Refund requested
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="Refund requested" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </section>
                      <section className="border-border/70 border-t flex flex-col gap-3 min-w-0 pt-5" aria-labelledby="playbook-trigger-controls-title">
                        <div className="flex flex-col gap-1 min-w-0">
                          <h2 className="font-semibold leading-6 text-base" id="playbook-trigger-controls-title">
                            Trigger Controls
                          </h2>
                        </div>
                        <FieldSet className="gap-0">
                          <FieldLegend className="sr-only" variant="legend">
                            Trigger Controls
                          </FieldLegend>
                          <FieldDescription className="sr-only">
                            Set source and dedupe rules for incoming events.
                          </FieldDescription>
                          <FieldGroup className="gap-4">
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-trigger-source">
                                    Source
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Source details" id="base-ui-_r_e_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-trigger-source" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Stripe webhook
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_f_-hidden-input" tabIndex="-1" aria-hidden="true" value="Stripe webhook" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-duplicate-window">
                                    Dedupe window
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Dedupe window details" id="base-ui-_r_j_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-duplicate-window" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      30 minutes
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="30 minutes" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </section>
                      <section className="border-border/70 border-t flex flex-col gap-3 min-w-0 pt-5" aria-labelledby="playbook-limits-title">
                        <div className="flex flex-col gap-1 min-w-0">
                          <h2 className="font-semibold leading-6 text-base" id="playbook-limits-title">
                            Run Limits
                          </h2>
                        </div>
                        <FieldSet className="gap-0">
                          <FieldLegend className="sr-only" variant="legend">
                            Run Limits
                          </FieldLegend>
                          <FieldDescription className="sr-only">
                            Set retry and timeout guardrails for every run.
                          </FieldDescription>
                          <FieldGroup className="gap-4">
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-retry-limit">
                                    Retry limit
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Retry limit details" id="base-ui-_r_o_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-retry-limit" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      2 retries
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_p_-hidden-input" tabIndex="-1" aria-hidden="true" value="2 retries" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-timeout">
                                    Timeout
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Timeout details" id="base-ui-_r_t_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-timeout" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      60 seconds
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_u_-hidden-input" tabIndex="-1" aria-hidden="true" value="60 seconds" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </section>
                      <section className="border-border/70 border-t flex flex-col gap-3 min-w-0 pt-5" aria-labelledby="playbook-routing-defaults-title">
                        <div className="flex flex-col gap-1 min-w-0">
                          <h2 className="font-semibold leading-6 text-base" id="playbook-routing-defaults-title">
                            Queue Routing
                          </h2>
                        </div>
                        <FieldSet className="gap-0">
                          <FieldLegend className="sr-only" variant="legend">
                            Queue Routing
                          </FieldLegend>
                          <FieldDescription className="sr-only">
                            Decide when runs start and how they enter the queue.
                          </FieldDescription>
                          <FieldGroup className="gap-4">
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-run-window">
                                    Run window
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run window details" id="base-ui-_r_12_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-run-window" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Business hours
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_13_-hidden-input" tabIndex="-1" aria-hidden="true" value="Business hours" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                            <Field className="@md/field-group:gap-4 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-2" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-2/5 @md/field-group:pr-3 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                                <div className="flex gap-1.5 items-center min-w-0">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="playbook-queue-priority">
                                    Priority
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Priority details" id="base-ui-_r_17_" baseUiTooltipTrigger="">
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
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="playbook-queue-priority" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      High value first
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_18_-hidden-input" tabIndex="-1" aria-hidden="true" value="High value first" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </section>
                    </section>
                  </StepperContent>
                </StepperPanel>
              </CardContent>
            </Card>
            <aside className="@4xl:self-start @4xl:sticky @4xl:top-4 @4xl:w-80 min-w-0 shrink-0 w-full">
              <Card className="min-w-0 shrink-0 w-full" size="sm">
                <CardHeader className="gap-0.5">
                  <CardTitle className="min-w-0 truncate">
                    Refund Escalation
                  </CardTitle>
                  <CardDescription className="min-w-0 truncate">
                    PB-31 · Refund Resolver
                  </CardDescription>
                  <CardAction>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                      Draft
                    </Badge>
                  </CardAction>
                </CardHeader>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <CardContent className="min-w-0">
                  <dl className="gap-3 grid">
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Trigger
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        Refund requested
                      </dd>
                    </div>
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Conditions
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        2 rules · all conditions
                      </dd>
                    </div>
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Tools
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        4 of 6 allowed
                      </dd>
                    </div>
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Approval ID
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        APR-7421
                      </dd>
                    </div>
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Approval
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        Finance above 500 USD
                      </dd>
                    </div>
                    <div className="gap-4 grid grid-cols-[minmax(0,1fr)_auto] items-center min-h-7 text-sm">
                      <dt className="leading-5 min-w-0 text-muted-foreground truncate">
                        Approver
                      </dt>
                      <dd className="flex font-medium justify-end leading-5 min-w-0 text-foreground text-right">
                        <span className="flex gap-2 items-center min-w-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="truncate">
                            Maya Perez
                          </span>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </aside>
          </form>
        </Stepper>
      </div>
    </main>
  )
}
