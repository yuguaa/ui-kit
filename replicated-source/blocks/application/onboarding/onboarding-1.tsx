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
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
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
      <div className="min-h-svh relative w-full">
        <div className="fixed h-1 inset-x-0 overflow-visible top-0 w-full z-50">
          <StepperItem>
          <Stepper className="h-1 leading-none overflow-visible relative rounded-none!" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
            <Stepper>
            <StepperNav className="flex h-1 rounded-none!" data-state="1" data-orientation="horizontal">
              <Stepper>
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="active">
                <Stepper>
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={0} data-state="active" loading="false">
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
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
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
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
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
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
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
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex={-1} data-state="inactive" loading="false">
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
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex={-1} data-state="inactive" loading="false">
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
        <div className="absolute inset-x-0 top-0 z-40">
          <header className="flex items-center justify-between lg:px-20 px-12 py-5 shrink-0 sm:px-16 sm:py-6">
            <div className="flex items-center min-w-0 relative">
              <Button className="-left-8 -translate-y-1/2 absolute sm:-left-10 top-1/2" type="button" tabIndex={0} aria-label="Back to previous step" hidden>
                <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </Button>
              <div className="[&_span]:text-lg gap-2 inline-flex items-center">
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
            <span className="font-medium text-muted-foreground text-sm">
              {"Step 1 of 6"}
            </span>
          </header>
        </div>
        <main className="flex items-center justify-center lg:px-8 min-h-svh px-4 py-20 sm:px-6">
          <Card className="border-border/40 gap-0 max-w-5xl overflow-hidden p-0 shadow-xs w-full" size="default">
            <CardContent className="grid lg:grid-cols-2 lg:min-h-[46rem] p-0">
              <div className="lg:min-h-[46rem] min-h-[36rem] min-w-0 overflow-hidden relative">
                <form className="absolute flex flex-col inset-0 lg:px-14 lg:py-16 min-w-0 px-6 py-8 sm:px-9 sm:py-11" style={{opacity: "1", transform: "none"}}>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2 max-w-[30rem]" aria-live="polite">
                      <h1 className="font-semibold leading-7 sm:text-[1.375rem] text-foreground text-xl">
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
                                  <input className="hidden" id="onboarding-1-profile-photo" accept="image/*" aria-hidden="true" tabIndex={-1} type="file" />
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
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-1-name">
                              {"Full name"}
                              <span className="text-destructive">
                                {"*"}
                              </span>
                            </FieldLabel>
                            <Input id="onboarding-1-name" autoComplete="name" value="Sam Rivera"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-1-title">
                              {"Job title"}
                            </FieldLabel>
                            <Input id="onboarding-1-title" autoComplete="organization-title" value="Product Engineer"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-1-timezone">
                              {"Timezone"}
                            </FieldLabel>
                            <InputGroup className="cn-combobox-input" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-1-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
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
                          <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-1-marketing-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="onboarding-1-marketing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-1-marketing" id="onboarding-1-marketing-label">
                            {"Send me product updates and workspace tips."}
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto pt-8">
                    <Button className="w-full" type="submit" tabIndex={0}>
                      {"Continue"}
                    </Button>
                  </div>
                </form>
              </div>
              <aside className="bg-muted/60 border-border/50 border-l dark:bg-muted/25 hidden lg:block min-w-0 overflow-hidden relative" aria-label="Workspace preview">
                <div className="h-full min-h-[46rem] overflow-hidden relative">
                  <div className="absolute h-[64.5rem] left-[22%] top-[18%] w-[28.25rem]" style={{opacity: "1", transform: "none"}}>
                    <div className="h-full relative w-full">
                      <div className="absolute bg-transparent h-full left-[6%] pointer-events-none rounded-lg shadow-[0_3rem_8rem_-3rem_currentColor] text-foreground/20 top-[4%] w-full"></div>
                      <div className="bg-background border border-border/40 h-full overflow-hidden relative rounded-lg shadow-[0_2rem_5rem_-2.5rem_rgba(15,23,42,0.45)] w-full z-10">
                        <div className="grid grid-cols-[3rem_minmax(0,1fr)] h-full">
                          <nav className="bg-background border-border/45 border-r flex flex-col items-center">
                            <span className="bg-foreground/85 flex font-semibold items-center justify-center mt-3 rounded-lg size-7 text-background text-sm">
                              <span style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                {"R"}
                              </span>
                            </span>
                            <div className="flex flex-1 flex-col gap-3 items-center mt-5">
                              <span className="bg-muted flex items-center justify-center relative rounded-md shadow-xs size-8 text-muted-foreground/70">
                                <span className="-right-0.5 -top-0.5 absolute bg-foreground rounded-full size-1.5"></span>
                                <svg className="lucide lucide-inbox size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="FavouriteIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-send size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                  <path d="m21.854 2.147-10.94 10.939"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-archive size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                  <rect width={20} height={5} x={2} y={3} rx={1}></rect>
                                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                  <path d="M10 12h4"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-shield size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                              </span>
                              <span className="flex items-center justify-center relative rounded-md size-8 text-muted-foreground/70">
                                <svg className="lucide lucide-trash-2 lucide-trash2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                  <path d="M10 11v6"></path>
                                  <path d="M14 11v6"></path>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                              </span>
                            </div>
                            <span className="bg-accent block blur-[0.4px] mb-3 rounded-full size-7" aria-hidden="true"></span>
                          </nav>
                          <section className="bg-background min-w-0 relative">
                            <div className="border-b border-border/45 flex h-[3.25rem] items-center px-3">
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <h2 className="font-semibold min-w-0 text-[0.95rem]" aria-live="polite">
                                  <span className="block max-w-40 truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                    {"Sam Rivera"}
                                  </span>
                                </h2>
                                <span className="border border-border/50 flex h-5 items-center justify-center leading-none max-w-20 min-w-5 overflow-hidden px-1.5 rounded-full text-muted-foreground text-xs">
                                  <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                    {"4"}
                                  </span>
                                </span>
                              </div>
                              <div className="flex gap-3 items-center text-muted-foreground">
                                <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                  <path d="M21 3v5h-5"></path>
                                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                  <path d="M8 16H3v5"></path>
                                </svg>
                                <svg className="lucide lucide-funnel size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                                </svg>
                                <svg className="lucide lucide-square-pen size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="border-b border-border/45 px-3 py-2">
                              <div className="border border-border/50 flex gap-2 h-8 items-center px-3 rounded-lg text-muted-foreground">
                                <svg className="lucide lucide-search size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                  <path d="m21 21-4.34-4.34"></path>
                                  <circle cx={11} cy={11} r={8}></circle>
                                </svg>
                                <span className="bg-muted blur-[0.4px] h-2.5 rounded-full w-20" aria-hidden="true"></span>
                              </div>
                            </div>
                            <div className="border-b border-border/45 flex gap-4 h-9 items-center px-2">
                              <div className="bg-foreground/85 flex gap-2 h-6 items-center px-3 rounded-full text-background text-xs">
                                <span>
                                  {"All"}
                                </span>
                              </div>
                              <div className="flex gap-2 h-6 items-center rounded-full text-muted-foreground text-xs">
                                <span className="bg-muted blur-[0.4px] h-2.5 rounded-full w-9" aria-hidden="true"></span>
                                <span className="bg-muted blur-[0.4px] rounded-full size-4" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2 h-6 items-center rounded-full text-muted-foreground text-xs">
                                <span className="bg-muted blur-[0.4px] h-2.5 rounded-full w-10" aria-hidden="true"></span>
                                <span className="bg-muted blur-[0.4px] rounded-full size-4" aria-hidden="true"></span>
                              </div>
                              <div className="flex gap-2 h-6 items-center rounded-full text-muted-foreground text-xs">
                                <span className="bg-muted blur-[0.4px] h-2.5 rounded-full w-6" aria-hidden="true"></span>
                                <span className="bg-muted blur-[0.4px] rounded-full size-4" aria-hidden="true"></span>
                              </div>
                            </div>
                            <div className="divide-border/45 divide-y relative">
                              <span className="absolute bg-muted-foreground/20 h-[44.5rem] right-1 rounded-full top-1 w-1"></span>
                              <div className="bg-muted/45 gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[7rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-accent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-20" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-star size-3.5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                      <span>
                                        {"10:42 AM"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-52" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-64" aria-hidden="true"></span>
                                  <div className="flex items-center mt-2">
                                    <span className="-ml-1 bg-accent block blur-[0.4px] first:ml-0 ring-2 ring-background rounded-full size-5" aria-hidden="true"></span>
                                    <span className="-ml-1 bg-accent block blur-[0.4px] first:ml-0 ring-2 ring-background rounded-full size-5" aria-hidden="true"></span>
                                    <span className="-ml-1 bg-accent block blur-[0.4px] first:ml-0 ring-2 ring-background rounded-full size-5" aria-hidden="true"></span>
                                    <span className="bg-primary/10 font-medium h-5 inline-flex items-center leading-none max-w-28 ml-2 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-primary">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"Developer"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[7rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-accent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-24" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-paperclip size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                      </svg>
                                      <span>
                                        {"9:15 AM"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-56" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-60" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-purple-100 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-purple-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"Work"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-1.5 items-center mt-2">
                                    <span className="bg-muted block blur-[0.4px] border border-border/40 h-5 rounded-md w-[11.5rem]" aria-hidden="true"></span>
                                    <span className="bg-muted block blur-[0.4px] border border-border/40 rounded-md size-5" aria-hidden="true"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[7rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-accent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-24" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <span>
                                        {"Yesterday"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-52" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-56" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-amber-100 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-amber-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"Business"}
                                      </span>
                                    </span>
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-20" aria-hidden="true"></span>
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-20" aria-hidden="true"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[5.65rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-transparent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-20" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <span>
                                        {"Yesterday"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-64" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-60" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-7" aria-hidden="true"></span>
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-12" aria-hidden="true"></span>
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-7" aria-hidden="true"></span>
                                    <span className="bg-muted blur-[0.4px] h-5 rounded-md w-12" aria-hidden="true"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[5.65rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-transparent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-16" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <span>
                                        {"Mon"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-56" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-64" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-emerald-100 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-emerald-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"Finance"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[7rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-transparent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-24" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-paperclip size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                                      </svg>
                                      <span>
                                        {"Mon"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-52" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-56" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-background font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 ring-1 ring-border rounded-md text-[0.65rem] text-foreground">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"#"}
                                      </span>
                                    </span>
                                    <span className="bg-yellow-50 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-yellow-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"1024"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-1.5 items-center mt-2">
                                    <span className="bg-muted block blur-[0.4px] border border-border/40 h-5 rounded-md w-[11.5rem]" aria-hidden="true"></span>
                                    <span className="bg-muted block blur-[0.4px] border border-border/40 rounded-md size-5" aria-hidden="true"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[5.65rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-transparent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-18" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <span>
                                        {"Sun"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-56" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-60" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-muted font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-foreground">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"env"}
                                      </span>
                                    </span>
                                    <span className="bg-emerald-50 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-emerald-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"production"}
                                      </span>
                                    </span>
                                    <span className="bg-muted font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-foreground">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"build"}
                                      </span>
                                    </span>
                                    <span className="bg-muted font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-foreground">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"47s"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="gap-2 grid grid-cols-[1rem_2.25rem_minmax(0,1fr)] min-h-[5.65rem] px-3 py-3">
                                <div className="flex h-8 items-center justify-center mt-2">
                                  <span className="bg-accent blur-[0.4px] rounded-full size-1.5" aria-hidden="true"></span>
                                </div>
                                <div className="mt-2">
                                  <span className="bg-accent block blur-[0.4px] rounded-full size-8" aria-hidden="true"></span>
                                </div>
                                <div className="min-w-0">
                                  <div className="flex gap-3 items-center justify-between">
                                    <span className="bg-accent blur-[0.4px] h-3 rounded-full w-24" aria-hidden="true"></span>
                                    <div className="flex gap-1 items-center shrink-0 text-muted-foreground text-xs">
                                      <svg className="lucide lucide-star size-3.5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                      </svg>
                                      <span>
                                        {"Nov 23"}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-2 rounded-full w-52" aria-hidden="true"></span>
                                  <span className="bg-accent block blur-[0.4px] h-2.5 mt-1.5 rounded-full w-56" aria-hidden="true"></span>
                                  <div className="flex flex-wrap gap-1.5 items-center mt-3">
                                    <span className="bg-blue-100 font-medium h-5 inline-flex items-center leading-none max-w-28 overflow-hidden px-1.5 rounded-md text-[0.65rem] text-blue-700">
                                      <span className="truncate" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                                        {"Legal"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div className="absolute bg-gradient-to-l dark:from-muted/25 dark:via-muted/20 from-muted/60 inset-y-0 pointer-events-none right-0 to-transparent via-muted/50 w-40 z-20"></div>
                        <div className="absolute bg-gradient-to-t bottom-0 dark:from-muted/25 dark:via-muted/20 from-muted/60 h-52 inset-x-0 pointer-events-none to-transparent via-muted/45 z-20"></div>
                        <div className="absolute inset-0 pointer-events-none rounded-lg shadow-[inset_0_0_0_1px_hsl(var(--border)/0.4)] z-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </CardContent>
          </Card>
        </main>
        <div className="absolute bottom-0 inset-x-0 z-30">
          <footer className="flex-wrap gap-x-5 gap-y-2 hidden items-center justify-center pb-6 px-6 sm:flex text-muted-foreground">
            <span className="text-xs">
              {"2026 NeUI"}
            </span>
            <a className="hover:text-primary hover:underline text-sm transition-colors underline-offset-4" href="#">
              {"Privacy Policy"}
            </a>
            <a className="hover:text-primary hover:underline text-sm transition-colors underline-offset-4" href="#">
              {"Support"}
            </a>
            <a className="hover:text-primary hover:underline text-sm transition-colors underline-offset-4" href="#">
              {"Sign out"}
            </a>
          </footer>
        </div>
      </div>
    </main>
  )
}
