import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full" aria-labelledby="page-title">
      <h1 className="sr-only" id="page-title">
        {"Workspace onboarding with API access"}
      </h1>
      <div className="bg-background flex flex-col h-svh max-h-svh overflow-hidden relative w-full">
        <header className="bg-background/95 border-b border-border shrink-0">
          <div className="flex gap-3 items-center justify-between lg:px-8 px-4 py-3 relative sm:px-6">
            <div className="flex gap-2 items-center min-w-0">
              <div className="[&_span]:hidden gap-2 inline-flex items-center sm:[&_span]:inline">
                <Item className="bg-primary p-1.5 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-[0.95rem]" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <span className="font-medium text-[0.9375rem]">
                  {"NeUI"}
                </span>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 max-w-72 min-w-28 w-[36vw]">
              <StepperItem>
              <Stepper className="h-1.5 leading-none" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
                <Stepper>
                <StepperNav className="bg-muted flex h-1.5 overflow-hidden relative rounded-full" data-state="1" data-orientation="horizontal">
                  <span className="absolute bg-primary inset-y-0 left-0 origin-left overflow-hidden pointer-events-none w-full z-10" aria-hidden="true" style={{transform: "scaleX(0.125)"}}>
                    <span className="absolute bg-gradient-to-r from-transparent inset-y-0 opacity-70 right-0 to-transparent via-primary-foreground/50 w-16" style={{opacity: "0", transform: "translateX(120%)"}}></span>
                  </span>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="active">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={0} data-state="active" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="active">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Profile"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Role"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Source"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Workspace"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Goals"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Invite"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-7" aria-selected="false" aria-controls="stepper-panel-7" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"Agent"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="flex-1 h-1.5 overflow-hidden relative z-20" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="flex-col gap-0 h-1.5 items-start w-full" type="button" role="tab" id="stepper-tab-8" aria-selected="false" aria-controls="stepper-panel-8" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1.5 p-0 w-full" data-state="inactive">
                        <div className="absolute">
                          <span className="sr-only">
                            {"API access"}
                          </span>
                        </div>
                      </StepperIndicator>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                </StepperNav>
                </Stepper>
              </Stepper>
              </StepperItem>
            </div>
            <div className="ml-auto">
              <span className="font-medium tabular-nums text-muted-foreground text-sm whitespace-nowrap">
                {"1 / 8"}
              </span>
            </div>
          </div>
        </header>
        <main className="flex flex-1 justify-center lg:py-12 min-h-0 overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 sm:py-10 xl:py-16" id="onboarding-6-content">
          <div className="lg:py-8 max-w-lg min-w-0 py-4 sm:py-6 w-full">
            <form className="flex flex-col gap-8 min-w-0 mx-auto sm:gap-10 w-full" id="onboarding-6-form" style={{opacity: "1", transform: "none"}}>
              <div className="flex flex-col gap-2 items-start text-left w-full" aria-live="polite">
                <h1 className="font-semibold leading-8 text-2xl text-balance text-foreground">
                  {"Set Up Your Profile"}
                </h1>
                <p className="leading-5 text-muted-foreground text-pretty text-sm">
                  {"Add the details teammates will see across the workspace."}
                </p>
              </div>
              <FieldSet>
                <FieldLegend className="sr-only" variant="legend">
                  {"Profile details"}
                </FieldLegend>
                <FieldGroup className="gap-4">
                  <Field role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center">
                      <Avatar className="border size-12" size="default">
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          <svg className="lucide lucide-circle-user opacity-60 size-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <circle cx={12} cy={10} r={3}></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </svg>
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 space-y-1.5">
                        <div className="flex flex-wrap gap-2 items-center">
                          <div className="inline-flex relative">
                            <Button type="button" tabIndex={0} aria-haspopup="dialog">
                              {"Upload photo"}
                            </Button>
                            <input className="hidden" id="onboarding-6-profile-photo" accept="image/*" aria-hidden="true" tabIndex={-1} type="file" />
                          </div>
                        </div>
                        <p className="leading-4 text-muted-foreground text-xs">
                          {"PNG or JPG, at least 400 x 400 px, up to 10 MB."}
                        </p>
                      </div>
                    </div>
                  </Field>
                  <FieldGroup className="gap-4">
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-6-name">
                        {"Full name"}
                        <span className="text-destructive">
                          {"*"}
                        </span>
                      </FieldLabel>
                      <Input id="onboarding-6-name" autoComplete="name" value="Sam Rivera"></Input>
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-6-title">
                        {"Job title"}
                      </FieldLabel>
                      <Input id="onboarding-6-title" autoComplete="organization-title" value="Product Engineer"></Input>
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-6-timezone">
                        {"Timezone"}
                      </FieldLabel>
                      <InputGroup className="cn-combobox-input" role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-6-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" data-placeholder="" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                            <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                      <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </FieldGroup>
                  <Field className="gap-2.5" role="group" data-orientation="horizontal">
                    <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-6-marketing-label">
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input id="onboarding-6-marketing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-6-marketing" id="onboarding-6-marketing-label">
                      {"Send me product updates and workspace tips."}
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>
          </div>
        </main>
        <footer className="backdrop-blur bg-background/95 border-border border-t flex items-center px-3 py-3 shrink-0 sm:px-6 sm:py-4">
          <div className="flex gap-2 items-center justify-between max-w-lg mx-auto sm:gap-4 w-full">
            <div className="flex items-center min-w-0"></div>
            <div className="flex gap-2 items-center justify-end shrink-0">
              <Button className="min-w-0 px-3 sm:min-w-32 sm:px-4" type="submit" tabIndex={0} form="onboarding-6-form">
                {"Next step"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
