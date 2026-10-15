import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 sm:p-8 w-full">
      <form className="flex flex-col gap-6 max-w-4xl w-full" id="form-4-authentication-settings">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="font-semibold text-foreground text-xl tracking-tight">
              {"User Authentication"}
            </h1>
            <p className="max-w-2xl text-muted-foreground text-sm">
              {"Configure sign-up, sign-in, and protection rules."}
            </p>
          </div>
          <Select>
          <SelectTrigger className="shrink-0 w-36" type="button" tabIndex="0" id="form-4-preview-target" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Preview target">
            <SelectValue>
              <span className="flex gap-2 items-center min-w-0">
                <span className="bg-info rounded-full shrink-0 size-1.5"></span>
                <span className="truncate">
                  {"Preview"}
                </span>
              </span>
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              {"▼"}
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="preview" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        </header>
        <Tabs className="gap-4 w-full" data-orientation="horizontal" activationDirection="none">
          <div className="py-0">
            <ScrollArea className="[&>[data-slot=scroll-area-scrollbar][data-orientation=vertical]]:hidden w-full whitespace-nowrap" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_3_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div className="min-w-max w-max">
                  <TabsList className="gap-6 h-auto justify-start min-w-max py-0 w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Authentication settings">
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_4_" compositeItemActive="" aria-controls="base-ui-_r_b_">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-label="Ready"></span>
                      <span className="truncate">
                        {"Email"}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                      <span className="truncate">
                        {"Phone"}
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                        {"Pro"}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                      <span className="truncate">
                        {"Username"}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-label="Ready"></span>
                      <span className="truncate">
                        {"Password"}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-label="Limited"></span>
                      <span className="truncate">
                        {"Passkeys"}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                      <span className="truncate">
                        {"Protection"}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 group-data-horizontal/tabs:after:bottom-0! justify-start px-0 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_a_">
                      <span className="truncate">
                        {"User Model"}
                      </span>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="min-w-0">
            <TabsContent className="min-w-0 mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_b_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_4_">
              <FieldGroup className="gap-5">
                <Card className="gap-0 overflow-hidden p-0" size="default">
                  <CardHeader className="bg-muted/30 border-b px-5 py-4">
                    <Field className="gap-0" role="group" data-orientation="vertical">
                      <div className="flex gap-3 items-center min-w-0">
                        <FieldContent className="gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-sign-up" id="form-4-email-sign-up-label">
                              {"Sign-up with email"}
                            </FieldLabel>
                          </div>
                          <FieldDescription>
                            {"Allow users to create accounts with a verified email address."}
                          </FieldDescription>
                        </FieldContent>
                        <div className="self-center shrink-0">
                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_c_" aria-checked="true" size="sm" aria-labelledby="form-4-email-sign-up-label">
                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                          </Switch>
                          <input id="form-4-email-sign-up" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                      </div>
                    </Field>
                  </CardHeader>
                  <CardContent className="p-0">
                    <FieldGroup className="gap-0">
                      <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical" disabled="true">
                        <div className="flex gap-3 items-center min-w-0">
                          <FieldContent className="gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center min-w-0">
                              <div className="flex items-center min-w-0">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-required" id="form-4-email-required-label">
                                  {"Require email address"}
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldDescription className="max-w-2xl">
                              {"Users must keep one reachable email address on their account."}
                            </FieldDescription>
                          </FieldContent>
                          <div className="self-center shrink-0">
                            <Switch disabled="" checked="" role="switch" tabIndex="-1" aria-disabled="true" id="base-ui-_r_f_" aria-checked="true" size="sm" aria-labelledby="form-4-email-required-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                            </Switch>
                            <input disabled id="form-4-email-required" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-info bg-info/4 border border-info/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                            <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                              {"Required method"}
                            </AlertTitle>
                            <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                              {"Email is the only enabled sign-up option, so it remains required."}
                            </AlertDescription>
                          </Alert>
                        </div>
                      </Field>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="flex gap-3 items-center min-w-0">
                          <FieldContent className="gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center min-w-0">
                              <div className="flex items-center min-w-0">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-verify" id="form-4-email-verify-label">
                                  {"Verify at sign-up"}
                                </FieldLabel>
                              </div>
                              <div className="shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                                  {"Recommended"}
                                </Badge>
                              </div>
                            </div>
                            <FieldDescription className="max-w-2xl">
                              {"Require ownership verification before a new account is created."}
                            </FieldDescription>
                          </FieldContent>
                          <div className="self-center shrink-0">
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_i_" aria-checked="true" size="sm" aria-labelledby="form-4-email-verify-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="form-4-email-verify" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <FieldSet className="gap-2">
                            <FieldLegend variant="label">
                              {"Verification methods"}
                            </FieldLegend>
                            <FieldDescription>
                              {"Choose how users confirm control of an email address."}
                            </FieldDescription>
                            <div className="@container/field-group cn-field-group flex flex-col gap-2 group/field-group w-full">
                              <Field className="gap-2" role="group" data-orientation="horizontal">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="true" aria-labelledby="form-4-email-code-label">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input id="form-4-email-code" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <FieldContent className="gap-0.5">
                                  <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="form-4-email-code" id="form-4-email-code-label">
                                    {"One-time verification code"}
                                  </FieldLabel>
                                  <FieldDescription className="text-xs">
                                    {"Send a short passcode to the submitted address."}
                                  </FieldDescription>
                                </FieldContent>
                              </Field>
                              <Field className="gap-2" role="group" data-orientation="horizontal">
                                <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" aria-labelledby="form-4-email-link-label"></Checkbox>
                                <input id="form-4-email-link" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <FieldContent className="gap-0.5">
                                  <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="form-4-email-link" id="form-4-email-link-label">
                                    {"Verification link"}
                                  </FieldLabel>
                                  <FieldDescription className="text-xs">
                                    {"Send a secure link with an expiring session token."}
                                  </FieldDescription>
                                </FieldContent>
                              </Field>
                            </div>
                          </FieldSet>
                        </div>
                      </Field>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="flex gap-3 items-center min-w-0">
                          <FieldContent className="gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center min-w-0">
                              <div className="flex items-center min-w-0">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-restrict" id="form-4-email-restrict-label">
                                  {"Restrict email changes"}
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldDescription className="max-w-2xl">
                              {"Prevent users from changing their email after sign-up."}
                            </FieldDescription>
                          </FieldContent>
                          <div className="self-center shrink-0">
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" size="sm" aria-labelledby="form-4-email-restrict-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="form-4-email-restrict" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </div>
                      </Field>
                    </FieldGroup>
                  </CardContent>
                </Card>
                <Card className="gap-0 overflow-hidden p-0" size="default">
                  <CardHeader className="bg-muted/30 border-b px-5 py-4">
                    <Field className="gap-0" role="group" data-orientation="vertical">
                      <div className="flex gap-3 items-center min-w-0">
                        <FieldContent className="gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-sign-in" id="form-4-email-sign-in-label">
                              {"Sign-in with email"}
                            </FieldLabel>
                          </div>
                          <FieldDescription>
                            {"Allow returning users to sign in with their email address."}
                          </FieldDescription>
                        </FieldContent>
                        <div className="self-center shrink-0">
                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_u_" aria-checked="true" size="sm" aria-labelledby="form-4-email-sign-in-label">
                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                          </Switch>
                          <input id="form-4-email-sign-in" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                      </div>
                    </Field>
                  </CardHeader>
                  <CardContent className="p-0">
                    <FieldGroup className="gap-0">
                      <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="flex gap-3 items-center min-w-0">
                          <FieldContent className="gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center min-w-0">
                              <div className="flex items-center min-w-0">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-login-code" id="form-4-email-login-code-label">
                                  {"Email verification code"}
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldDescription className="max-w-2xl">
                              {"Users can sign in with a one-time code."}
                            </FieldDescription>
                          </FieldContent>
                          <div className="self-center shrink-0">
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_11_" aria-checked="true" size="sm" aria-labelledby="form-4-email-login-code-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="form-4-email-login-code" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </div>
                      </Field>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="flex gap-3 items-center min-w-0">
                          <FieldContent className="gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center min-w-0">
                              <div className="flex items-center min-w-0">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-4-email-login-link" id="form-4-email-login-link-label">
                                  {"Email verification link"}
                                </FieldLabel>
                              </div>
                            </div>
                            <FieldDescription className="max-w-2xl">
                              {"Users can sign in by opening a magic link."}
                            </FieldDescription>
                          </FieldContent>
                          <div className="self-center shrink-0">
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_14_" aria-checked="false" size="sm" aria-labelledby="form-4-email-login-link-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="form-4-email-login-link" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </div>
                      </Field>
                    </FieldGroup>
                  </CardContent>
                </Card>
              </FieldGroup>
            </TabsContent>
          </div>
        </Tabs>
        <div className="border-t flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            {"Policy changes stay in preview until published."}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" data-icon="inline-start" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              {"Discard"}
            </Button>
            <Button type="submit" tabIndex="0">
              <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" data-icon="inline-start" aria-hidden="true">
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
              </svg>
              {"Save policy"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
