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
  CardFooter,
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
        Marketing-led workspace onboarding
      </h1>
      <div className="bg-background isolate min-h-svh overflow-hidden relative w-full">
        <div className="auth18-wave" aria-hidden="true">
          <div className="auth18-blob auth18-blob-1"></div>
          <div className="auth18-blob auth18-blob-2"></div>
          <div className="auth18-blob auth18-blob-3"></div>
          <div className="auth18-blob auth18-blob-4"></div>
          <div className="auth18-grain"></div>
          <style>{`
  .auth18-wave { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
  .auth18-blob { position: absolute; border-radius: 9999px; filter: blur(110px); will-change: transform; }
  .auth18-blob-1 {
    top: -18%; right: -12%;
    width: 64vw; height: 64vw; max-width: 780px; max-height: 780px;
    background: radial-gradient(circle at 30% 30%, rgba(255, 138, 61, 0.78), rgba(255, 138, 61, 0) 70%);
    animation: auth18-drift-1 22s ease-in-out infinite;
  }
  .auth18-blob-2 {
    top: 6%; right: 18%;
    width: 52vw; height: 52vw; max-width: 640px; max-height: 640px;
    background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.6), rgba(236, 72, 153, 0) 70%);
    animation: auth18-drift-2 30s ease-in-out infinite;
  }
  .auth18-blob-3 {
    top: 32%; right: -6%;
    width: 48vw; height: 48vw; max-width: 600px; max-height: 600px;
    background: radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.55), rgba(139, 92, 246, 0) 70%);
    animation: auth18-drift-3 26s ease-in-out infinite;
  }
  .auth18-blob-4 {
    top: 58%; right: 12%;
    width: 44vw; height: 44vw; max-width: 560px; max-height: 560px;
    background: radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.45), rgba(59, 130, 246, 0) 70%);
    animation: auth18-drift-4 34s ease-in-out infinite;
  }
  .auth18-grain {
    position: absolute; inset: 0; opacity: 0.35; mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }
  .dark .auth18-blob-1 { background: radial-gradient(circle at 30% 30%, rgba(255, 138, 61, 0.55), rgba(255, 138, 61, 0) 70%); }
  .dark .auth18-blob-2 { background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.45), rgba(236, 72, 153, 0) 70%); }
  .dark .auth18-blob-3 { background: radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.45), rgba(139, 92, 246, 0) 70%); }
  .dark .auth18-blob-4 { background: radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.38), rgba(59, 130, 246, 0) 70%); }
  .dark .auth18-grain { opacity: 0.18; }
  @keyframes auth18-drift-1 {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(-5%, 7%, 0) scale(1.08); }
  }
  @keyframes auth18-drift-2 {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(7%, -5%, 0) scale(1.12); }
  }
  @keyframes auth18-drift-3 {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(-7%, -7%, 0) scale(1.1); }
  }
  @keyframes auth18-drift-4 {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(9%, 5%, 0) scale(1.14); }
  }
  @media (prefers-reduced-motion: reduce) {
    .auth18-blob { animation: none !important; }
  }
`}</style>
        </div>
        <div className="fixed h-1 inset-x-0 overflow-visible top-0 w-full z-50">
          <Stepper className="h-1 leading-none overflow-visible relative rounded-none!" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
            <StepperNav className="flex h-1 rounded-none!" data-state="1" data-orientation="horizontal">
              <StepperItem className="duration-300 flex-1 h-1 overflow-hidden rounded-none! transition-all" data-state="active">
                <StepperTrigger className="flex-col gap-0 h-1 items-start rounded-none! w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false" extracted="1">
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
            </StepperNav>
            <div className="absolute bg-primary inset-y-0 left-0 origin-left pointer-events-none w-full z-10" aria-hidden="true" style={{transform: "scaleX(0.166667)"}}>
              <span className="-translate-y-1/2 absolute bg-gradient-to-r blur-sm from-primary/0 h-5 right-0 to-primary/0 top-1/2 translate-x-1/2 via-primary-foreground/65 w-44" style={{opacity: "0", transform: "translateX(64px)"}}></span>
            </div>
          </Stepper>
        </div>
        <div className="flex flex-col lg:px-14 lg:py-12 min-h-svh px-6 py-7 relative sm:px-12 sm:py-10">
          <header className="flex gap-4 items-center justify-between">
            <div className="gap-2 inline-flex items-center">
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
            <p className="font-medium tabular-nums text-muted-foreground text-sm">
              Step 1 of 6
            </p>
          </header>
          <main className="flex flex-1 items-center lg:py-16 max-w-6xl mx-auto py-10 sm:py-14 w-full" id="onboarding-9-content">
            <div className="gap-10 grid grid-cols-1 items-center lg:gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] w-full">
              <section className="flex flex-col gap-7 max-w-xl sm:gap-8">
                <div className="bg-background/85 border border-border/60 font-medium gap-2 inline-flex items-center px-3 py-1 rounded-full text-foreground/75 text-sm tracking-tight w-fit">
                  <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                  <span>
                    Guided workspace launch
                  </span>
                </div>
                <div className="space-y-5">
                  <h1 className="font-semibold leading-[1.12] lg:leading-[1.04] lg:text-[3.5rem] max-w-xl sm:leading-[1.06] text-[clamp(1.75rem,1.1rem+3.25vw,3rem)] text-balance text-foreground tracking-tight">
                    Shape the workspace before the first project.
                  </h1>
                  <p className="leading-relaxed max-w-lg sm:text-lg text-base text-muted-foreground text-pretty">
                    A focused first-run flow for profile, team, goals, and invites, wrapped in the calmer marketing shell from the trial signup.
                  </p>
                </div>
              </section>
              <Card className="lg:max-h-[min(43rem,calc(100svh-12rem))] min-h-[34rem] min-w-0 overflow-hidden p-0 w-full" size="default">
                <CardContent className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-7 sm:px-8 sm:py-9">
                  <form className="flex flex-col gap-8 max-w-lg min-h-[26.25rem] min-w-0 mx-auto w-full" id="onboarding-9-form" style={{opacity: "1", transform: "none"}}>
                    <div className="flex flex-col gap-2 items-start text-left w-full" aria-live="polite">
                      <h2 className="font-semibold leading-7 sm:leading-8 sm:text-2xl text-balance text-foreground text-xl">
                        Set Up Your Profile
                      </h2>
                      <p className="leading-5 text-muted-foreground text-pretty text-sm">
                        Add the details teammates will see across the workspace.
                      </p>
                    </div>
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
                                  <input className="hidden" id="onboarding-9-profile-photo" accept="image/*" aria-hidden="true" tabIndex="-1" type="file" />
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
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-9-name">
                              Full name
                              <span className="text-destructive">
                                *
                              </span>
                            </FieldLabel>
                            <Input id="onboarding-9-name" autoComplete="name" value="Sam Rivera"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-9-title">
                              Job title
                            </FieldLabel>
                            <Input id="onboarding-9-title" autoComplete="organization-title" value="Product Engineer"></Input>
                          </Field>
                          <Field className="gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-9-timezone">
                              Timezone
                            </FieldLabel>
                            <InputGroup className="cn-combobox-input" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-9-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
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
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-9-marketing-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="onboarding-9-marketing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-9-marketing" id="onboarding-9-marketing-label">
                            Send me product updates and workspace tips.
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </form>
                </CardContent>
                <CardFooter className="!bg-transparent border-t-0 px-6 py-4 sm:px-8">
                  <div className="flex gap-2 items-center justify-between w-full">
                    <div className="flex items-center min-w-0"></div>
                    <div className="flex gap-2 items-center justify-end shrink-0">
                      <Button className="min-w-0 px-3 sm:min-w-32 sm:px-4" type="submit" tabIndex="0" form="onboarding-9-form">
                        Next step
                        <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}
