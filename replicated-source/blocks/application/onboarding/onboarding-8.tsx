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
        Dark workspace onboarding
      </h1>
      <div className="bg-background dark flex flex-col min-h-svh overflow-x-hidden relative text-foreground w-full">
        <div className="inset-x-0 shrink-0 sticky top-0 w-full z-20">
          <Stepper className="h-1 leading-none overflow-visible relative rounded-none!" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
            <StepperNav className="flex h-1 rounded-none!" data-state="1" data-orientation="horizontal">
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="active">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="active">
                    <div className="absolute">
                      <span className="sr-only">
                        Profile
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Role
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Source
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Workspace
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Goals
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Invite
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-7" aria-selected="false" aria-controls="stepper-panel-7" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        Agent
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-8" aria-selected="false" aria-controls="stepper-panel-8" tabIndex="-1" data-state="inactive" loading="false">
                  <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
                    <div className="absolute">
                      <span className="sr-only">
                        API access
                      </span>
                    </div>
                  </StepperIndicator>
                </StepperTrigger>
              </StepperItem>
            </StepperNav>
            <div className="absolute bg-primary inset-y-0 left-0 origin-left pointer-events-none w-full z-10" aria-hidden="true" style={{transform: "scaleX(0.125)"}}>
              <span className="-translate-y-1/2 absolute bg-gradient-to-r blur-sm from-primary/0 h-5 right-0 to-primary/0 top-1/2 translate-x-1/2 via-primary-foreground/65 w-44" style={{opacity: "0", transform: "translateX(64px)"}}></span>
            </div>
          </Stepper>
          <header className="bg-background/95 border-b border-dashed border-input flex gap-4 items-center justify-between px-6 py-4 shrink-0 sm:px-10">
            <div className="flex gap-2 items-center min-w-0">
              <div className="[&_span]:hidden gap-2 inline-flex items-center sm:[&_span]:inline">
                <Item className="bg-primary p-1.5 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-[0.95rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <span className="font-medium text-[0.9375rem]">
                  NeUI
                </span>
              </div>
            </div>
            <span className="font-medium tabular-nums text-muted-foreground text-sm whitespace-nowrap">
              Step 1 of 8
            </span>
          </header>
        </div>
        <div className="-z-10 absolute bg-[radial-gradient(ellipse_75%_60%_at_50%_50%,transparent_0%,rgb(0_0_0/0.06)_100%)] dark:bg-[radial-gradient(ellipse_75%_60%_at_50%_50%,transparent_0%,rgb(255_255_255/0.04)_100%)] inset-0 pointer-events-none" aria-hidden="true"></div>
        <div className="-z-10 absolute bg-[radial-gradient(circle_at_top,_rgb(0_0_0/0.045),_transparent_42%),radial-gradient(circle_at_bottom,_rgb(0_0_0/0.035),_transparent_44%)] dark:bg-[radial-gradient(circle_at_top,_rgb(255_255_255/0.045),_transparent_42%),radial-gradient(circle_at_bottom,_rgb(255_255_255/0.03),_transparent_44%)] inset-0 pointer-events-none" aria-hidden="true"></div>
        <div className="flex flex-1 items-center justify-center pb-28 pt-8 px-6 relative sm:pb-32 sm:pt-12 sm:px-10 z-10">
          <div className="flex flex-col gap-8 items-center max-w-lg w-full">
            <div className="bg-background/95 border border-dashed border-input relative rounded-none! w-full">
              <svg className="-left-[6px] -top-[6px] absolute size-3 text-foreground/60" aria-hidden="true" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
              </svg>
              <svg className="-right-[6px] -top-[6px] absolute size-3 text-foreground/60" aria-hidden="true" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
              </svg>
              <svg className="-bottom-[6px] -left-[6px] absolute size-3 text-foreground/60" aria-hidden="true" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
              </svg>
              <svg className="-bottom-[6px] -right-[6px] absolute size-3 text-foreground/60" aria-hidden="true" viewBox="0 0 12 12" fill="none">
                <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
              </svg>
              <div className="duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none overflow-hidden transition-[height]" style={{height: "460px"}}>
                <div>
                  <form className="flex flex-col gap-8 pb-8 pt-9 px-8 sm:gap-10 sm:px-10" id="onboarding-8-form" style={{opacity: "1", transform: "none"}}>
                    <div className="flex flex-col gap-2 items-start text-left" aria-live="polite">
                      <h1 className="font-semibold text-2xl tracking-tight">
                        Set Up Your Profile
                      </h1>
                      <p className="leading-5 text-muted-foreground text-pretty text-sm">
                        Add the details teammates will see across the workspace.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <FieldSet>
                        <FieldLegend className="sr-only" variant="legend">
                          Profile details
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
                                      Upload photo
                                    </Button>
                                    <input className="hidden" id="onboarding-8-profile-photo" accept="image/*" aria-hidden="true" tabIndex="-1" type="file" />
                                  </div>
                                </div>
                                <p className="leading-4 text-muted-foreground text-xs">
                                  PNG or JPG, at least 400 x 400 px, up to 10 MB.
                                </p>
                              </div>
                            </div>
                          </Field>
                          <FieldGroup className="gap-4">
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-8-name">
                                Full name
                                <span className="text-destructive">
                                  *
                                </span>
                              </FieldLabel>
                              <Input id="onboarding-8-name" autoComplete="name" value="Sam Rivera"></Input>
                            </Field>
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-8-title">
                                Job title
                              </FieldLabel>
                              <Input id="onboarding-8-title" autoComplete="organization-title" value="Product Engineer"></Input>
                            </Field>
                            <Field className="gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-8-timezone">
                                Timezone
                              </FieldLabel>
                              <InputGroup className="cn-combobox-input" role="group">
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-8-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
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
                            <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-8-marketing-label">
                              <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </span>
                            </Checkbox>
                            <input id="onboarding-8-marketing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-8-marketing" id="onboarding-8-marketing-label">
                              Send me product updates and workspace tips.
                            </FieldLabel>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p className="leading-5 max-w-[22rem] text-center text-muted-foreground text-pretty text-xs">
              Setup choices can be changed later from
              <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                workspace settings
              </a>
              .
            </p>
          </div>
        </div>
        <footer className="bg-background/95 border-dashed border-input border-t bottom-0 fixed inset-x-0 px-6 py-3 sm:px-10 sm:py-4 z-20">
          <div className="flex gap-2 items-center justify-between max-w-lg mx-auto sm:gap-4 w-full">
            <div className="flex items-center min-w-0"></div>
            <div className="flex gap-2 items-center justify-end shrink-0">
              <Button className="min-w-0 px-3 sm:min-w-32 sm:px-4" type="submit" tabIndex="0" form="onboarding-8-form">
                Continue
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
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
