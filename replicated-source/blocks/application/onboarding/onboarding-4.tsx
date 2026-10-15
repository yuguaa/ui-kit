import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
        {"Compact workspace onboarding"}
      </h1>
      <div className="min-h-svh relative w-full">
        <div className="fixed h-1 inset-x-0 overflow-hidden top-0 w-full z-50">
          <StepperItem>
          <Stepper className="h-1 leading-none rounded-none!" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
            <Stepper>
            <StepperNav className="bg-muted flex h-1 overflow-hidden relative rounded-none!" data-state="1" data-orientation="horizontal">
              <span className="absolute bg-primary inset-y-0 left-0 overflow-hidden pointer-events-none z-10" aria-hidden="true" style={{width: "16.6667%"}}>
                <span className="absolute bg-gradient-to-r from-transparent inset-y-0 opacity-70 right-0 to-transparent via-primary-foreground/50 w-16" style={{opacity: "0", transform: "translateX(120%)"}}></span>
              </span>
              <Stepper>
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="active">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="active">
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
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="inactive">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="inactive">
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
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="inactive">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="inactive">
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
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="inactive">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="inactive">
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
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="inactive">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="inactive">
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
              <StepperItem className="flex-1 h-1 overflow-hidden relative rounded-none! z-20" data-state="inactive">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex="-1" data-state="inactive" loading="false">
                  <Stepper>
                  <StepperIndicator className="bg-transparent! border-0 data-[state=active]:bg-transparent! data-[state=completed]:bg-transparent! h-1 p-0 rounded-none! w-full" data-state="inactive">
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
            </StepperNav>
            </Stepper>
          </Stepper>
          </StepperItem>
        </div>
        <div className="absolute inset-x-0 top-0 z-40">
          <header className="flex items-center justify-between lg:px-20 px-12 py-5 shrink-0 sm:px-16 sm:py-6">
            <div className="flex items-center min-w-0 relative">
              <Button className="-left-8 -translate-y-1/2 absolute sm:-left-10 top-1/2" type="button" tabIndex="0" aria-label="Back to previous step" hidden>
                <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </Button>
              <div className="[&_span]:text-lg gap-2 inline-flex items-center">
                <Item className="bg-primary p-1.5 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-[0.95rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <span className="font-medium text-[0.9375rem]">
                  {"NeUI"}
                </span>
              </div>
            </div>
            <span className="font-medium text-muted-foreground text-sm">
              {"Step 1 of 6"}
            </span>
          </header>
        </div>
        <main className="flex items-center justify-center min-h-svh px-4 py-20 sm:px-6">
          <Frame className="[--frame-px:--spacing(1)] [--frame-py:--spacing(1.5)] max-w-xl w-full" spacing="sm">
            <FramePanel className="min-h-168 p-0 sm:min-h-176">
              <form className="flex flex-col lg:p-16 min-h-[42rem] min-w-0 mx-auto p-8 sm:min-h-[44rem] sm:p-12 w-full" style={{opacity: "1", transform: "none"}}>
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-1.5 max-w-[28rem]" aria-live="polite">
                    <h1 className="font-semibold leading-7 text-foreground text-xl">
                      {"Set up your profile"}
                    </h1>
                    <p className="leading-5 text-muted-foreground text-sm">
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
                              <svg className="lucide lucide-circle-user opacity-60 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="10" r="3"></circle>
                                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                              </svg>
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 space-y-1.5">
                            <div className="flex flex-wrap gap-2 items-center">
                              <div className="inline-flex relative">
                                <Button type="button" tabIndex="0" aria-haspopup="dialog">
                                  {"Upload photo"}
                                </Button>
                                <input className="hidden" id="onboarding-4-profile-photo" accept="image/*" aria-hidden="true" tabIndex="-1" type="file" />
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
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-4-name">
                            {"Full name"}
                            <span className="text-destructive">
                              {"*"}
                            </span>
                          </FieldLabel>
                          <Input id="onboarding-4-name" autoComplete="name" value="Sam Rivera"></Input>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-4-title">
                            {"Job title"}
                          </FieldLabel>
                          <Input id="onboarding-4-title" autoComplete="organization-title" value="Product Engineer"></Input>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-4-timezone">
                            {"Timezone"}
                          </FieldLabel>
                          <InputGroup className="cn-combobox-input" role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-4-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" data-placeholder="" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </button>
                            </InputGroupAddon>
                          </InputGroup>
                          <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                      </FieldGroup>
                      <Field className="gap-2.5" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-4-marketing-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="onboarding-4-marketing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-4-marketing" id="onboarding-4-marketing-label">
                          {"Send me product updates and workspace tips."}
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </div>
                <div className="flex flex-col gap-2 mt-auto pt-10">
                  <Button className="w-full" type="submit" tabIndex="0">
                    {"Continue"}
                  </Button>
                </div>
              </form>
            </FramePanel>
          </Frame>
        </main>
      </div>
    </main>
  )
}
