import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
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

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Workspace onboarding dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex={0} extracted="1">
          {"Launch onboarding"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="max-h-[calc(100svh-1rem)] max-w-[calc(100vw-1rem)] overflow-hidden p-0 sm:max-h-[calc(100svh-2rem)] sm:max-w-132" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_4_" aria-describedby="base-ui-_r_5_" style={{"--nested-dialogs": "0"}}>
      <form className="flex flex-col max-h-[calc(100svh-1rem)] min-h-0 sm:max-h-[calc(100svh-2rem)]">
        <div className="h-[min(30rem,calc(100svh-10.5rem))] min-h-72 overflow-hidden relative sm:h-128">
          <div className="grid h-full overflow-y-auto px-5 py-6 sm:px-8 sm:py-10 transform-gpu" style={{opacity: "1", transform: "none"}}>
            <div className="sm:space-y-8 space-y-6 w-full">
              <div className="min-w-0 space-y-1">
                <DialogTitle className="font-semibold leading-6 text-base" id="base-ui-_r_4_" aria-live="polite">
                  {"Set up your profile"}
                </DialogTitle>
                <DialogDescription className="leading-5 max-w-xl text-sm" id="base-ui-_r_5_">
                  {"Add the details teammates will see across the workspace."}
                </DialogDescription>
              </div>
              <div>
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
                              <input className="hidden" id="onboarding-5-profile-photo" accept="image/*" aria-hidden="true" tabIndex={-1} type="file" />
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
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-5-name">
                          {"Full name"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <Input id="onboarding-5-name" autoComplete="name" value="Sam Rivera"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-5-title">
                          {"Job title"}
                        </FieldLabel>
                        <Input id="onboarding-5-title" autoComplete="organization-title" value="Product Engineer"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-5-timezone">
                          {"Timezone"}
                        </FieldLabel>
                        <InputGroup className="cn-combobox-input" role="group">
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-5-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
                          <InputGroupAddon role="group" data-align="inline-end">
                            <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" data-placeholder="" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                              <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </button>
                          </InputGroupAddon>
                        </InputGroup>
                        <input id="base-ui-_r_8_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldGroup>
                    <Field className="gap-2.5" role="group" data-orientation="horizontal">
                      <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_d_" aria-checked="true" aria-labelledby="onboarding-5-marketing-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="onboarding-5-marketing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-5-marketing" id="onboarding-5-marketing-label">
                        {"Send me product updates and workspace tips."}
                      </FieldLabel>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/25 border-t flex-col gap-2 mb-0! mx-0! px-5 py-4 sm:flex-col sm:justify-start sm:px-8 sm:py-5">
          <div className="flex flex-col gap-3 items-center sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-1.5 items-center justify-center shrink-0 sm:justify-start sm:w-auto w-full" aria-label="Onboarding steps">
              <button className="bg-primary duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-primary rounded-full scale-125 size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Profile" aria-current="step"></button>
              <button className="bg-muted-foreground/20 duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-muted-foreground/35 rounded-full size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Role"></button>
              <button className="bg-muted-foreground/20 duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-muted-foreground/35 rounded-full size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Source"></button>
              <button className="bg-muted-foreground/20 duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-muted-foreground/35 rounded-full size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Workspace"></button>
              <button className="bg-muted-foreground/20 duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-muted-foreground/35 rounded-full size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Goals"></button>
              <button className="bg-muted-foreground/20 duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring hover:bg-muted-foreground/35 rounded-full size-1.5 transition-[background-color,transform]" type="button" aria-label="Go to Invite"></button>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-end sm:w-auto w-full">
              <Button className="sm:w-auto w-full" type="submit" tabIndex={0}>
                {"Continue"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </form>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          {"Close"}
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
