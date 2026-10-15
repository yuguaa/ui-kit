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
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/registry/bases/base/ui/alert-dialog"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Safety Builder"}
      </h1>
      <div className="bg-muted/35 flex flex-col h-svh min-h-0 w-full">
        <StepperItem>
        <Stepper className="flex flex-1 flex-col min-h-0" role="tablist" aria-orientation="vertical" data-orientation="vertical" aria-label="Safety policy progress">
          <header className="backdrop-blur bg-background/95 border-b border-border shrink-0 sticky top-0 z-20">
            <div className="flex gap-3 items-center lg:px-8 min-h-14 px-4 sm:px-6">
              <div className="flex items-center min-w-0">
                <Button className="-ms-2 size-8" type="button" tabIndex="0" aria-label="Close safety builder" extracted="1">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
                <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="min-w-0">
                  <h1 className="font-medium leading-5 text-base text-foreground truncate">
                    {"Safety Builder"}
                  </h1>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-end ml-auto shrink-0 sm:gap-3">
                <div className="gap-1 hidden items-center sm:flex">
                  <Button className="hidden md:inline-flex px-2.5" type="button" tabIndex="0">
                    {"Review"}
                  </Button>
                  <Button className="px-2.5" type="button" tabIndex="0">
                    {"Save Draft"}
                  </Button>
                </div>
                <Separator className="-ml-1 h-4 hidden mr-1 my-auto sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-2 items-center justify-end">
                  <Button className="size-8 sm:hidden" type="button" tabIndex="0" aria-label="Previous step">
                    <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                  </Button>
                  <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                    <svg className="lucide lucide-arrow-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    {"Previous"}
                  </Button>
                  <Button className="min-w-20" type="submit" tabIndex="0" form="solution-ai-ops-7-safety-form">
                    {"Create"}
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 lg:px-8 min-h-0 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
            <form className="gap-6 grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start max-w-[60rem] min-w-0 mx-auto shrink-0 w-full" id="solution-ai-ops-7-safety-form" novalidate="" aria-label="Safety policy builder">
              <aside className="lg:self-start lg:sticky lg:top-0 lg:w-64 min-w-0 shrink-0 w-full">
                <Card className="gap-0 min-w-0 overflow-hidden p-0 shadow-xs shrink-0 w-full" size="default">
                  <CardContent className="lg:max-h-[calc(100svh-7.5rem)] lg:overflow-y-auto px-5 py-6">
                    <Stepper>
                    <StepperNav className="gap-0 max-w-60 mx-auto w-full" data-state="4" data-orientation="vertical">
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="completed">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="false" aria-controls="stepper-panel-1" tabIndex="-1" data-state="completed" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="completed">
                            <div className="absolute">
                              <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="completed">
                              <span className="truncate">
                                {"Scope"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="completed">
                              {"Policy owner"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="completed"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="completed">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="completed" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="completed">
                            <div className="absolute">
                              <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="completed">
                              <span className="truncate">
                                {"Signals"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="completed">
                              {"Evaluator inputs"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="completed"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="completed">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="completed" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="completed">
                            <div className="absolute">
                              <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="completed">
                              <span className="truncate">
                                {"Rules"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-sm! truncate" data-state="completed">
                              {"Blocked actions"}
                            </StepperDescription>
                            </Stepper>
                          </span>
                        </StepperTrigger>
                        </Stepper>
                        <StepperSeparator className="!h-auto -order-1 -translate-x-1/2 absolute bottom-0 group-data-[state=completed]/step:bg-primary left-5 m-0 top-9" data-state="completed"></StepperSeparator>
                      </StepperItem>
                      </Stepper>
                      <Stepper>
                      <StepperItem className="items-start not-last:pb-3 relative" data-state="active">
                        <Stepper>
                        <StepperTrigger className="disabled:opacity-100 gap-3 items-start justify-start min-h-12 px-2 py-1.5 text-left w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="true" aria-controls="stepper-panel-4" tabIndex="0" data-state="active" loading="false">
                          <Stepper>
                          <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-background data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                            <div className="absolute">
                              {"4"}
                            </div>
                          </StepperIndicator>
                          </Stepper>
                          <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <Stepper>
                            <StepperTitle className="flex gap-2 items-center min-w-0 text-foreground" data-state="active">
                              <span className="truncate">
                                {"Review"}
                              </span>
                            </StepperTitle>
                            </Stepper>
                            <Stepper>
                            <StepperDescription className="leading-4! text-foreground/70 text-sm! truncate" data-state="active">
                              {"Create policy"}
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
                    {"Review"}
                  </CardTitle>
                  <CardDescription className="leading-5 max-w-2xl min-w-0 text-sm">
                    {"Validate coverage before SAFE-0914 can launch."}
                  </CardDescription>
                </CardHeader>
                <div className="px-5 sm:px-6">
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <CardContent className="flex-1 min-w-0 overflow-x-auto pb-6 pt-5 px-5 sm:pb-7 sm:pt-6 sm:px-6">
                  <Stepper>
                  <StepperPanel className="min-w-0 shrink-0" data-state="4">
                    <Stepper>
                    <StepperContent className="min-w-0 shrink-0" data-state="4">
                      <section className="flex flex-col gap-6 min-w-0">
                        <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                          <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                          </svg>
                          <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                            {"Coverage Gap"}
                          </AlertTitle>
                          <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                            {"1 rule below 75 percent for SAFE-0914."}
                          </AlertDescription>
                        </Alert>
                        <section className="flex flex-col gap-3 min-w-0" aria-labelledby="solution-ai-ops-7-review-rules-title">
                          <div className="flex flex-col gap-3 min-w-0">
                            <div className="flex flex-col gap-3 min-w-0 sm:flex-row sm:items-center sm:justify-between">
                              <h2 className="font-semibold leading-6 text-base" id="solution-ai-ops-7-review-rules-title">
                                {"Policy Rule Table"}
                              </h2>
                            </div>
                            <div className="border border-border/70 min-w-[37rem] rounded-md w-full">
                              <div className="cn-table-container">
                                <Table className="table-fixed w-full">
                                  <TableHeader className="bg-muted/30">
                                    <TableRow>
                                      <TableHead className="h-8 px-2 text-sm w-[5.5rem]">
                                        {"Rule"}
                                      </TableHead>
                                      <TableHead className="h-8 px-2 text-sm w-[7.5rem]">
                                        {"Trigger"}
                                      </TableHead>
                                      <TableHead className="h-8 px-2 text-sm w-[8.5rem]">
                                        {"Action"}
                                      </TableHead>
                                      <TableHead className="h-8 px-2 text-sm w-[6.25rem]">
                                        {"Decision"}
                                      </TableHead>
                                      <TableHead className="h-8 px-2 text-sm w-[5.25rem]">
                                        {"Coverage"}
                                      </TableHead>
                                      <TableHead className="h-8 px-2 text-sm w-10">
                                        <span className="sr-only">
                                          {"Remove"}
                                        </span>
                                      </TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell className="px-2 py-1.5">
                                        <div className="font-medium text-sm">
                                          {"RULE-2101"}
                                        </div>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-trigger-RULE-2101">
                                            {"Trigger"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-trigger-RULE-2101" type="text" value="Card update request"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-action-RULE-2101">
                                            {"Action"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-action-RULE-2101" type="text" value="Initiate payment action"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-decision-RULE-2101">
                                            {"Decision"}
                                          </FieldLabel>
                                          <Select>
                                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-ai-ops-7-decision-RULE-2101" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                            <SelectValue>
                                              {"review"}
                                            </SelectValue>
                                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              {"▼"}
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="review" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-coverage-RULE-2101">
                                            {"Coverage"}
                                          </FieldLabel>
                                          <InputGroup role="group">
                                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-ai-ops-7-coverage-RULE-2101" value="93%" />
                                            <InputGroupAddon role="group" data-align="inline-end">
                                              <Tooltip>
                                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-xs" aria-label="Coverage status: Covered" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </InputGroupAddon>
                                          </InputGroup>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5 text-right">
                                        <AlertDialog>
                                        <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete RULE-2101" baseUiClickTrigger="" id="base-ui-_r_a_" aria-haspopup="dialog" aria-expanded="false">
                                          <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M3 6h18"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          </svg>
                                        </AlertDialogTrigger>
                                        </AlertDialog>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="px-2 py-1.5">
                                        <div className="font-medium text-sm">
                                          {"RULE-2102"}
                                        </div>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-trigger-RULE-2102">
                                            {"Trigger"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-trigger-RULE-2102" type="text" value="Customer identifier"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-action-RULE-2102">
                                            {"Action"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-action-RULE-2102" type="text" value="Reveal PII in reply"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-decision-RULE-2102">
                                            {"Decision"}
                                          </FieldLabel>
                                          <Select>
                                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-ai-ops-7-decision-RULE-2102" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                            <SelectValue>
                                              {"redact"}
                                            </SelectValue>
                                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              {"▼"}
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_r_d_-hidden-input" tabIndex="-1" aria-hidden="true" value="redact" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-coverage-RULE-2102">
                                            {"Coverage"}
                                          </FieldLabel>
                                          <InputGroup role="group">
                                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-ai-ops-7-coverage-RULE-2102" value="88%" />
                                            <InputGroupAddon role="group" data-align="inline-end">
                                              <Tooltip>
                                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-xs" aria-label="Coverage status: Covered" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                                                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </InputGroupAddon>
                                          </InputGroup>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5 text-right">
                                        <AlertDialog>
                                        <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete RULE-2102" baseUiClickTrigger="" id="base-ui-_r_k_" aria-haspopup="dialog" aria-expanded="false">
                                          <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M3 6h18"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          </svg>
                                        </AlertDialogTrigger>
                                        </AlertDialog>
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="px-2 py-1.5">
                                        <div className="font-medium text-sm">
                                          {"RULE-2103"}
                                        </div>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-trigger-RULE-2103">
                                            {"Trigger"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-trigger-RULE-2103" type="text" value="Medical claim"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-action-RULE-2103">
                                            {"Action"}
                                          </FieldLabel>
                                          <Input id="solution-ai-ops-7-action-RULE-2103" type="text" value="Return clinical advice"></Input>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-decision-RULE-2103">
                                            {"Decision"}
                                          </FieldLabel>
                                          <Select>
                                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="solution-ai-ops-7-decision-RULE-2103" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                            <SelectValue>
                                              {"block"}
                                            </SelectValue>
                                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                              <path d="m6 9 6 6 6-6"></path>
                                              {"▼"}
                                            </svg>
                                          </SelectTrigger>
                                          </Select>
                                          <input id="base-ui-_r_n_-hidden-input" tabIndex="-1" aria-hidden="true" value="block" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5">
                                        <Field className="gap-2 md:gap-0 min-w-0" role="group" data-orientation="vertical">
                                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="solution-ai-ops-7-coverage-RULE-2103">
                                            {"Coverage"}
                                          </FieldLabel>
                                          <InputGroup role="group">
                                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="solution-ai-ops-7-coverage-RULE-2103" value="61%" />
                                            <InputGroupAddon role="group" data-align="inline-end">
                                              <Tooltip>
                                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-xs" aria-label="Coverage status: Gap" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                                                <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </InputGroupAddon>
                                          </InputGroup>
                                        </Field>
                                      </TableCell>
                                      <TableCell className="px-2 py-1.5 text-right">
                                        <AlertDialog>
                                        <AlertDialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete RULE-2103" baseUiClickTrigger="" id="base-ui-_r_u_" aria-haspopup="dialog" aria-expanded="false">
                                          <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M3 6h18"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                          </svg>
                                        </AlertDialogTrigger>
                                        </AlertDialog>
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="border-border/70 border-t flex flex-col gap-3 min-w-0 pt-5" aria-labelledby="solution-ai-ops-7-packet-title">
                          <div className="flex flex-col gap-1 min-w-0">
                            <h2 className="font-semibold leading-6 text-base" id="solution-ai-ops-7-packet-title">
                              {"Policy Packet"}
                            </h2>
                          </div>
                          <dl className="border border-border/70 divide-border/70 divide-y overflow-hidden rounded-md">
                            <div className="gap-1 grid px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
                              <dt className="leading-5 text-muted-foreground text-sm">
                                {"Policy"}
                              </dt>
                              <dd className="font-medium min-w-0 text-sm">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"SAFE-0914"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="min-w-0 truncate">
                                    {"Payment Action Requires Reviewer"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="gap-1 grid px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
                              <dt className="leading-5 text-muted-foreground text-sm">
                                {"Prompt"}
                              </dt>
                              <dd className="font-medium min-w-0 text-sm">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"PRM-4821"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="min-w-0 truncate">
                                    {"Renewal Risk Summary"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="gap-1 grid px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
                              <dt className="leading-5 text-muted-foreground text-sm">
                                {"Evaluator"}
                              </dt>
                              <dd className="font-medium min-w-0 text-sm">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"Payment Gate Eval"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="min-w-0 truncate">
                                    {"threshold 0.82"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="gap-1 grid px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
                              <dt className="leading-5 text-muted-foreground text-sm">
                                {"Reviewer"}
                              </dt>
                              <dd className="font-medium min-w-0 text-sm">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"Nora Vale"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="min-w-0 truncate">
                                    {"6h SLA"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                            <div className="gap-1 grid px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)]">
                              <dt className="leading-5 text-muted-foreground text-sm">
                                {"Rules"}
                              </dt>
                              <dd className="font-medium min-w-0 text-sm">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="min-w-0 truncate">
                                    {"3 blocked actions"}
                                  </span>
                                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                  <span className="min-w-0 truncate">
                                    {"1 gaps"}
                                  </span>
                                </span>
                              </dd>
                            </div>
                          </dl>
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
