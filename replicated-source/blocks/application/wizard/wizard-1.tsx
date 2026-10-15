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
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-center justify-center md:p-12 min-h-svh mx-auto p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Account payment setup wizard"}
      </h1>
      <form className="flex flex-col max-w-xl w-full" aria-label="Account payment setup wizard">
        <Card size="default">
          <StepperItem>
          <Stepper className="space-y-3" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
            <CardHeader className="flex items-center py-1">
              <Stepper>
              <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="flex gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false" extracted="1">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="group-data-[state=inactive]/step:text-foreground" data-state="active">
                      {"Information"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="active"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" disabled>
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="group-data-[state=inactive]/step:text-foreground" data-state="inactive">
                      {"Payment"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex gap-1.5 justify-start" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" disabled>
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:bg-muted data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="group-data-[state=inactive]/step:text-foreground" data-state="inactive">
                      {"Completed"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </CardHeader>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <CardContent>
              <Stepper>
              <StepperPanel className="text-sm" data-state="1">
                <Stepper>
                <StepperContent data-state="1">
                  <section className="flex flex-col gap-3" aria-labelledby="wizard-info-title">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-base" id="wizard-info-title">
                        {"Your Information"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {"Billing owner details."}
                      </p>
                    </div>
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-first-name">
                          {"First Name"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <Input id="wizard-first-name" aria-invalid="false" autoComplete="given-name" value="Mara"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-last-name">
                          {"Last Name"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <Input id="wizard-last-name" aria-invalid="false" autoComplete="family-name" value="Chen"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-company-name">
                          {"Company"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <Input id="wizard-company-name" aria-invalid="false" autoComplete="organization" value="Kepler Works"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-public-handle">
                          {"Public Handle"}
                        </FieldLabel>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              {"@"}
                            </span>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="wizard-public-handle" autoComplete="off" value="kepler-works" />
                        </InputGroup>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-role">
                          {"Role"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="wizard-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Procurement owner"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="procurement-owner" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-country">
                          {"Country"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="wizard-country" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"United States"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="us" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-email">
                          {"Email Address"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <Input id="wizard-email" aria-invalid="false" autoComplete="email" type="email" value="mara@kepler.works"></Input>
                        <FieldDescription>
                          {"Receipts go here."}
                        </FieldDescription>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="wizard-mobile">
                          {"Mobile"}
                        </FieldLabel>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              {"US"}
                            </span>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="wizard-mobile" autoComplete="tel" value="+1 415 5151" />
                        </InputGroup>
                      </Field>
                    </FieldGroup>
                  </section>
                </StepperContent>
                </Stepper>
              </StepperPanel>
              </Stepper>
            </CardContent>
            <CardFooter className="gap-2 justify-end">
              <Button type="submit" tabIndex="0">
                {"Next Step"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </CardFooter>
          </Stepper>
          </StepperItem>
        </Card>
      </form>
    </main>
  )
}
