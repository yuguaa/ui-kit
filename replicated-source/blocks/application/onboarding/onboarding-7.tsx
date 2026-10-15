import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
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
        {"Workspace onboarding"}
      </h1>
      <div className="flex flex-col min-h-svh overflow-x-clip relative w-full">
        <div className="bg-background inset-x-0 shrink-0 sticky top-0 z-50">
          <div className="h-1 overflow-visible w-full">
            <StepperItem>
            <Stepper className="h-1 leading-none overflow-visible relative rounded-none!" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
              <Stepper>
              <StepperNav className="flex h-1 rounded-none!" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="active">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="active">
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
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
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
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
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
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
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
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
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
                <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="bg-muted border-0 data-[state=active]:bg-muted data-[state=completed]:bg-muted h-1 p-0 rounded-none! w-full" data-state="inactive">
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
              <div className="absolute bg-primary inset-y-0 left-0 origin-left pointer-events-none w-full z-10" aria-hidden="true" style={{transform: "scaleX(0.166667)"}}>
                <span className="-translate-y-1/2 absolute bg-gradient-to-r blur-sm from-primary/0 h-5 right-0 to-primary/0 top-1/2 translate-x-1/2 via-primary-foreground/65 w-44" style={{opacity: "0", transform: "translateX(64px)"}}></span>
              </div>
            </Stepper>
            </StepperItem>
          </div>
          <header className="bg-background flex items-center justify-between lg:px-20 px-12 py-5 relative shrink-0 sm:px-16 sm:py-6 z-40">
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
        <div className="flex-1 gap-12 grid items-center justify-center lg:gap-40 lg:grid-cols-[minmax(0,400px)_minmax(0,500px)] lg:px-10 lg:py-6 max-w-[82rem] mx-auto px-4 py-8 sm:px-8 sm:py-10 w-full xl:gap-48 xl:grid-cols-[minmax(0,420px)_minmax(0,540px)]">
          <section className="flex items-center lg:h-full lg:py-0 min-h-0 min-w-0 py-2 sm:py-4">
            <div className="flex flex-col h-full justify-center max-w-[30rem] min-h-0 mx-auto w-full">
              <form className="flex flex-col lg:min-h-[min(32rem,100%)] min-h-[32rem] min-w-0 origin-center w-full" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                <div className="flex-1 pr-1">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 max-w-[30rem]" aria-live="polite">
                      <div className="flex flex-wrap gap-2 items-center">
                        <h1 className="font-semibold leading-7 sm:text-[1.375rem] text-foreground text-xl">
                          {"Set up your profile"}
                        </h1>
                      </div>
                      <p className="leading-5 text-muted-foreground text-sm">
                        {"Add the details teammates will see across the workspace."}
                      </p>
                    </div>
                    <FieldSet>
                      <FieldLegend className="sr-only" variant="legend">
                        {"Profile details"}
                      </FieldLegend>
                      <FieldGroup className="gap-4">
                        <FieldGroup className="gap-4">
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-7-name">
                              {"Full name"}
                              <span className="text-destructive">
                                {"*"}
                              </span>
                            </FieldLabel>
                            <Input id="onboarding-7-name" autoComplete="name" value="Sam Rivera"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-7-title">
                              {"Job title"}
                            </FieldLabel>
                            <Input id="onboarding-7-title" autoComplete="organization-title" value="Product Engineer"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-7-timezone">
                              {"Timezone"}
                            </FieldLabel>
                            <InputGroup className="cn-combobox-input" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-7-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
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
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-7-marketing-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="onboarding-7-marketing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-7-marketing" id="onboarding-7-marketing-label">
                            {"Send me product updates and workspace tips."}
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </div>
                </div>
                <footer className="flex flex-col gap-2 pt-8 shrink-0">
                  <Button className="w-full" type="submit" tabIndex="0">
                    {"Continue"}
                  </Button>
                </footer>
              </form>
            </div>
          </section>
          <section className="flex items-center justify-center lg:h-full lg:justify-end min-h-0 min-w-0">
            <div className="h-full lg:max-w-[38rem] lg:pl-8 lg:pr-14 lg:py-8 max-w-[34rem] pl-4 pr-8 py-6 relative sm:pl-6 sm:pr-10 w-full">
              <div className="h-[24rem] lg:h-full lg:max-h-none lg:min-h-[18rem] min-h-[20rem] relative sm:h-[34rem] sm:min-h-[30rem]">
                <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_34px_90px_-42px_rgba(15,23,42,0.48)] transform-gpu will-change-transform" style={{zIndex: "3", opacity: "1", transform: "none"}}>
                  <div className="absolute bg-muted/45 dark:bg-muted/20 inset-0" aria-hidden="true" style={{opacity: "0"}}></div>
                  <div className="[backface-visibility:hidden] absolute inset-0 transform-gpu will-change-transform" style={{opacity: "1", transform: "none"}}>
                    <img className="absolute dark:hidden h-full inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&w=1080&h=1500&q=80" />
                    <img className="absolute dark:block h-full hidden inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1651065567117-ac52c1a62e21?auto=format&fit=crop&w=1080&h=1500&q=80" />
                  </div>
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_22px_64px_-44px_rgba(15,23,42,0.34)] transform-gpu will-change-transform" style={{zIndex: "2", opacity: "0.84", transform: "translateX(34px) scale(0.946) rotate(1.4deg)"}}>
                  <div className="absolute bg-muted/45 dark:bg-muted/20 inset-0" aria-hidden="true" style={{opacity: "0"}}></div>
                  <div className="[backface-visibility:hidden] absolute inset-0 transform-gpu will-change-transform" style={{opacity: "1", transform: "none"}}>
                    <img className="absolute dark:hidden h-full inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1743657166981-8d8e11d03c3e?auto=format&fit=crop&w=1080&h=1500&q=80" />
                    <img className="absolute dark:block h-full hidden inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1760992795200-52321e30d64c?auto=format&fit=crop&w=1080&h=1500&q=80" />
                  </div>
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_22px_64px_-44px_rgba(15,23,42,0.34)] transform-gpu will-change-transform" style={{zIndex: "1", opacity: "0.64", transform: "translateX(68px) scale(0.892) rotate(2.8deg)"}}>
                  <div className="absolute bg-muted/45 dark:bg-muted/20 inset-0" aria-hidden="true" style={{opacity: "0"}}></div>
                  <div className="[backface-visibility:hidden] absolute inset-0 transform-gpu will-change-transform" style={{opacity: "1", transform: "none"}}>
                    <img className="absolute dark:hidden h-full inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1640177155742-835de7b2a9a0?auto=format&fit=crop&w=1080&h=1500&q=80" />
                    <img className="absolute dark:block h-full hidden inset-0 object-cover w-full" alt="" width="1080" height="1500" aria-hidden="true" loading="eager" decoding="async" src="https://images.unsplash.com/photo-1709990740078-05aa8ee5b9b7?auto=format&fit=crop&w=1080&h=1500&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
