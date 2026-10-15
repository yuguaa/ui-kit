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
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-start justify-center lg:p-10 min-h-svh mx-auto p-4 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Team invite wizard layout"}
      </h1>
      <form className="flex flex-col max-w-4xl w-full" novalidate="" aria-label="Team invitation wizard">
        <StepperItem>
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <Frame className="w-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) gap-y-1 px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-sm" role="heading" aria-level="1">
                  {"Team Invitations"}
                </div>
                <div className="leading-5 text-muted-foreground text-sm">
                  {"Prepare workspace access before the invites go out."}
                </div>
              </div>
            </header>
            <FramePanel className="overflow-x-auto overflow-y-hidden py-5 sm:py-6">
              <Stepper>
              <StepperNav className="items-start min-w-full" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="flex-1 min-w-0 overflow-visible relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={0} data-state="active" loading="false" aria-label="Members" extracted="1">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="data-[state=inactive]:text-foreground max-w-full truncate" data-state="active">
                        {"Members"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-foreground/65 text-xs">
                        {"Add emails and roles."}
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
                  <StepperTrigger className="disabled:opacity-100 flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false" disabled aria-label="Delivery">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="data-[state=inactive]:text-foreground max-w-full truncate" data-state="inactive">
                        {"Delivery"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-foreground/65 text-xs">
                        {"Set message and expiry."}
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
                  <StepperTrigger className="disabled:opacity-100 flex-col gap-2 justify-start min-w-0 px-0 text-center w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false" disabled aria-label="Review">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <span className="flex flex-col gap-1 items-center max-w-full min-w-0 text-center">
                      <Stepper>
                      <StepperTitle className="data-[state=inactive]:text-foreground max-w-full truncate" data-state="inactive">
                        {"Review"}
                      </StepperTitle>
                      </Stepper>
                      <span className="hidden leading-none sm:block text-foreground/65 text-xs">
                        {"Send the invite batch."}
                      </span>
                    </span>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </FramePanel>
            <FramePanel>
              <Stepper>
              <StepperPanel className="text-sm" data-state="1">
                <Stepper>
                <StepperContent data-state="1">
                  <section className="flex flex-col gap-5 min-w-0" aria-labelledby="wizard-5-members-title">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1 min-w-0">
                        <h2 className="font-semibold text-base" id="wizard-5-members-title">
                          {"Invite Members"}
                        </h2>
                        <p className="leading-5 max-w-2xl text-muted-foreground text-sm">
                          {"Enter each teammate's email and starting role."}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 min-w-0">
                      <div className="border border-border/70 divide-border/70 divide-y overflow-hidden rounded-md">
                        <div className="bg-muted/25 font-medium gap-4 grid-cols-[minmax(0,1fr)_13rem_6.5rem_2.5rem] hidden lg:grid px-4 py-2 text-muted-foreground text-xs">
                          <span>
                            {"Email"}
                          </span>
                          <span>
                            {"Role"}
                          </span>
                          <span>
                            {"Status"}
                          </span>
                          <span className="sr-only">
                            {"Remove"}
                          </span>
                        </div>
                        <div className="gap-4 grid lg:grid-cols-[minmax(0,1fr)_13rem_6.5rem_2.5rem] lg:items-start px-4 py-3">
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-1-email">
                              {"Work email"}
                            </FieldLabel>
                            <Input id="invitee-1-email" aria-invalid="false" autoComplete="email" placeholder="name@company.com" type="email" value="mira@northstar.studio"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-1-role">
                              {"Role"}
                            </FieldLabel>
                            <Select>
                            <SelectTrigger className="w-full" type="button" tabIndex={0} id="invitee-1-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                              <SelectValue>
                                {"Editor"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_1_-hidden-input" tabIndex={-1} aria-hidden="true" value="editor" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <div className="flex items-center lg:pt-1.5 min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-end lg:pt-1">
                            <Button type="button" tabIndex={0} aria-label="Remove mira@northstar.studio">
                              <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <div className="gap-4 grid lg:grid-cols-[minmax(0,1fr)_13rem_6.5rem_2.5rem] lg:items-start px-4 py-3">
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-2-email">
                              {"Work email"}
                            </FieldLabel>
                            <Input id="invitee-2-email" aria-invalid="false" autoComplete="email" placeholder="name@company.com" type="email" value="jon@northstar.studio"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-2-role">
                              {"Role"}
                            </FieldLabel>
                            <Select>
                            <SelectTrigger className="w-full" type="button" tabIndex={0} id="invitee-2-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                              <SelectValue>
                                {"Viewer"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_5_-hidden-input" tabIndex={-1} aria-hidden="true" value="viewer" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <div className="flex items-center lg:pt-1.5 min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-end lg:pt-1">
                            <Button type="button" tabIndex={0} aria-label="Remove jon@northstar.studio">
                              <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <div className="gap-4 grid lg:grid-cols-[minmax(0,1fr)_13rem_6.5rem_2.5rem] lg:items-start px-4 py-3">
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-3-email">
                              {"Work email"}
                            </FieldLabel>
                            <Input id="invitee-3-email" aria-invalid="false" autoComplete="email" placeholder="name@company.com" type="email" value="ari@northstar.studio"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center lg:sr-only peer-disabled:cursor-not-allowed select-none" htmlFor="invitee-3-role">
                              {"Role"}
                            </FieldLabel>
                            <Select>
                            <SelectTrigger className="w-full" type="button" tabIndex={0} id="invitee-3-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="false">
                              <SelectValue>
                                {"Viewer"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_9_-hidden-input" tabIndex={-1} aria-hidden="true" value="viewer" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <div className="flex items-center lg:pt-1.5 min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-end lg:pt-1">
                            <Button type="button" tabIndex={0} aria-label="Remove ari@northstar.studio">
                              <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button type="button" tabIndex={0}>
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add member"}
                        </Button>
                      </div>
                    </div>
                  </section>
                </StepperContent>
                </Stepper>
              </StepperPanel>
              </Stepper>
            </FramePanel>
            <footer className="flex flex-col gap-3 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 text-muted-foreground text-sm">
                {"Step 1 of 3: Add emails and roles."}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:w-auto w-full">
                <Button type="submit" tabIndex={0}>
                  {"Continue"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </footer>
          </Frame>
        </Stepper>
        </StepperItem>
      </form>
    </main>
  )
}
