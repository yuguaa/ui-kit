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
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-center justify-center lg:p-10 min-h-svh mx-auto p-4 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Billing upgrade wizard layout"}
      </h1>
      <Card className="gap-0 max-w-4xl p-0 w-full" size="default">
        <StepperItem>
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <CardHeader className="border-b gap-x-4 gap-y-1 px-5 py-4 sm:px-6">
            <CardTitle className="leading-5">
              {"Billing upgrade"}
            </CardTitle>
            <CardDescription className="leading-5 max-w-[34rem]">
              {"Change plan, seats, and payment terms before renewal."}
            </CardDescription>
            <CardAction className="pl-3 self-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Workflow status: Draft">
                <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                {"Draft"}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 px-5 py-5 sm:px-6 sm:py-6">
            <div className="overflow-x-auto overflow-y-hidden py-4" data-stepper-scroll="true">
              <Stepper>
              <StepperNav className="items-start min-w-full" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false" aria-label="Plan" extracted="1">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="max-w-full truncate" data-state="active">
                        {"Plan"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-muted-foreground text-xs">
                        {"Select tier"}
                      </span>
                    </span>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="active"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" aria-label="Seats">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="max-w-full truncate" data-state="inactive">
                        {"Seats"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-muted-foreground text-xs">
                        {"Set seats"}
                      </span>
                    </span>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" aria-label="Payment">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="max-w-full truncate" data-state="inactive">
                        {"Payment"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-muted-foreground text-xs">
                        {"Choose terms"}
                      </span>
                    </span>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="absolute flex-none group-data-[state=completed]/step:bg-primary left-[calc(50%+1.125rem)] m-0 top-3 w-[calc(100%-2.25rem)]" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false" aria-label="Review">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border border-transparent data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=completed]:border-primary data-[state=inactive]:bg-background data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"4"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="max-w-full truncate" data-state="inactive">
                        {"Review"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-muted-foreground text-xs">
                        {"Approve"}
                      </span>
                    </span>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </div>
            <div className="gap-7 grid lg:grid-cols-[minmax(0,1fr)_19rem]">
              <Stepper>
              <StepperPanel data-state="1">
                <Stepper>
                <StepperContent data-state="1">
                  <section className="flex flex-col gap-4" aria-labelledby="billing-plan-title">
                    <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h2 className="font-semibold leading-6 text-base" id="billing-plan-title">
                          {"Plan"}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {"Choose the tier for the seat increase."}
                        </p>
                      </div>
                    </div>
                    <FieldSet className="gap-0">
                      <FieldLegend className="sr-only" variant="legend">
                        {"Available plans"}
                      </FieldLegend>
                      <RadioGroup role="radiogroup" aria-label="Select billing plan">
                        <ItemGroup className="gap-2" role="list">
                          <Item className="gap-3 hover:bg-muted/50" variant="outline" size="sm">
                            <Field className="flex-wrap gap-3 sm:flex-nowrap" role="group" data-orientation="horizontal">
                              <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_1_" aria-labelledby="wizard-4-plan-team-label"></RadioGroupItem>
                              <input id="wizard-4-plan-team" tabIndex="-1" aria-hidden="true" type="radio" value="team" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldLabel className="cn-label flex-1 group-data-[disabled=true]:pointer-events-none items-start min-w-0 peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-4-plan-team" id="wizard-4-plan-team-label">
                                <span className="flex flex-col gap-0.5 min-w-0">
                                  <span className="flex flex-wrap gap-2 items-center min-w-0">
                                    <span className="font-medium">
                                      {"Team"}
                                    </span>
                                  </span>
                                  <span className="font-normal text-muted-foreground text-sm">
                                    {"Workspace controls for growing product teams."}
                                  </span>
                                </span>
                              </FieldLabel>
                              <span className="font-semibold ml-auto shrink-0 tabular-nums text-right text-sm">
                                {"$49"}
                                <span className="font-normal text-muted-foreground">
                                  {"/seat/mo"}
                                </span>
                              </span>
                            </Field>
                          </Item>
                          <Item className="bg-primary/5 border-primary gap-3 hover:bg-muted/50" variant="outline" size="sm">
                            <Field className="flex-wrap gap-3 sm:flex-nowrap" role="group" data-orientation="horizontal">
                              <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_4_" aria-labelledby="wizard-4-plan-business-label">
                                <span className="cn-radio-group-indicator" data-checked="">
                                  <span className="cn-radio-group-indicator-icon"></span>
                                </span>
                              </RadioGroupItem>
                              <input id="wizard-4-plan-business" tabIndex="-1" aria-hidden="true" type="radio" value="business" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldLabel className="cn-label flex-1 group-data-[disabled=true]:pointer-events-none items-start min-w-0 peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-4-plan-business" id="wizard-4-plan-business-label">
                                <span className="flex flex-col gap-0.5 min-w-0">
                                  <span className="flex flex-wrap gap-2 items-center min-w-0">
                                    <span className="font-medium">
                                      {"Business"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                      {"Recommended"}
                                    </Badge>
                                  </span>
                                  <span className="font-normal text-muted-foreground text-sm">
                                    {"SAML, audit exports, and priority support."}
                                  </span>
                                </span>
                              </FieldLabel>
                              <span className="font-semibold ml-auto shrink-0 tabular-nums text-right text-sm">
                                {"$72"}
                                <span className="font-normal text-muted-foreground">
                                  {"/seat/mo"}
                                </span>
                              </span>
                            </Field>
                          </Item>
                          <Item className="gap-3 hover:bg-muted/50" variant="outline" size="sm">
                            <Field className="flex-wrap gap-3 sm:flex-nowrap" role="group" data-orientation="horizontal">
                              <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_7_" aria-labelledby="wizard-4-plan-enterprise-label"></RadioGroupItem>
                              <input id="wizard-4-plan-enterprise" tabIndex="-1" aria-hidden="true" type="radio" value="enterprise" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldLabel className="cn-label flex-1 group-data-[disabled=true]:pointer-events-none items-start min-w-0 peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-4-plan-enterprise" id="wizard-4-plan-enterprise-label">
                                <span className="flex flex-col gap-0.5 min-w-0">
                                  <span className="flex flex-wrap gap-2 items-center min-w-0">
                                    <span className="font-medium">
                                      {"Enterprise"}
                                    </span>
                                  </span>
                                  <span className="font-normal text-muted-foreground text-sm">
                                    {"Procurement review and account governance."}
                                  </span>
                                </span>
                              </FieldLabel>
                              <span className="font-semibold ml-auto shrink-0 tabular-nums text-right text-sm">
                                {"$96"}
                                <span className="font-normal text-muted-foreground">
                                  {"/seat/mo"}
                                </span>
                              </span>
                            </Field>
                          </Item>
                        </ItemGroup>
                      </RadioGroup>
                    </FieldSet>
                  </section>
                </StepperContent>
                </Stepper>
              </StepperPanel>
              </Stepper>
              <aside className="border-t flex flex-col gap-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 min-w-0 pt-5" aria-labelledby="wizard-4-summary-title">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <h2 className="font-semibold text-sm" id="wizard-4-summary-title">
                      {"Invoice preview"}
                    </h2>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"Annual"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {"Draft before approval."}
                  </p>
                </div>
                <Item className="bg-muted/35 border-dashed border-foreground/20 flex-nowrap gap-3 py-3" variant="outline" size="default">
                  <ItemContent className="gap-0.5">
                    <ItemTitle className="font-medium text-foreground">
                      {"Due today"}
                    </ItemTitle>
                    <ItemDescription className="leading-4 line-clamp-none text-xs">
                      {"Business, 42 seats, annual"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <span className="break-words font-semibold leading-6 min-w-0 tabular-nums text-foreground text-lg text-right">
                      {"$31,235"}
                    </span>
                  </ItemActions>
                </Item>
                <section className="flex flex-col gap-2.5">
                  <div className="flex gap-1.5 items-center">
                    <h3 className="font-medium leading-5 text-sm">
                      {"Cost breakdown"}
                    </h3>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm size-4 text-muted-foreground transition-colors" type="button" aria-label="Cost breakdown details" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <dl className="flex flex-col gap-2.5">
                    <div className="flex gap-4 items-start justify-between text-sm">
                      <dt className="flex flex-col gap-0.5 min-w-0 text-foreground">
                        <span>
                          {"Seats"}
                        </span>
                        <span className="leading-4 text-muted-foreground text-xs">
                          {"42 seats, annual"}
                        </span>
                      </dt>
                      <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                        {"$36,288"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-start justify-between text-sm">
                      <dt className="flex flex-col gap-0.5 min-w-0 text-foreground">
                        <span>
                          {"Discount"}
                        </span>
                        <span className="leading-4 text-muted-foreground text-xs">
                          {"15% term credit"}
                        </span>
                      </dt>
                      <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                        {"-$5,443"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-start justify-between text-sm">
                      <dt className="flex flex-col gap-0.5 min-w-0 text-foreground">
                        <span>
                          {"Support"}
                        </span>
                      </dt>
                      <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                        {"$390"}
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="flex flex-col gap-2.5">
                  <div className="flex gap-1.5 items-center">
                    <h3 className="font-medium leading-5 text-sm">
                      {"Invoice routing"}
                    </h3>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm size-4 text-muted-foreground transition-colors" type="button" aria-label="Invoice routing details" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <dl className="flex flex-col gap-2.5">
                    <div className="flex gap-4 items-start justify-between text-sm">
                      <dt className="flex flex-col gap-0.5 min-w-0 text-foreground">
                        <span>
                          {"Renewal"}
                        </span>
                      </dt>
                      <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                        {"May 31, 2026"}
                      </dd>
                    </div>
                    <div className="flex gap-4 items-start justify-between text-sm">
                      <dt className="flex flex-col gap-0.5 min-w-0 text-foreground">
                        <span>
                          {"PO"}
                        </span>
                      </dt>
                      <dd className="break-words font-medium min-w-0 tabular-nums text-foreground text-right">
                        {"PO-2026-184"}
                      </dd>
                    </div>
                  </dl>
                </section>
              </aside>
            </div>
          </CardContent>
          <CardFooter className="border-t gap-3 justify-between px-5 py-4 sm:px-6">
            <span className="h-9 hidden sm:block w-28" aria-hidden="true"></span>
            <Button className="ml-auto" type="button" tabIndex="0">
              {"Next"}
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </CardFooter>
        </Stepper>
        </StepperItem>
      </Card>
    </main>
  )
}
