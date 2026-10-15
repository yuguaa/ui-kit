import {
  Tree,
  TreeItemLabel,
} from "@/registry-neui/bases/base/neui/tree"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  ComboboxChip,
  ComboboxChips,
} from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <header className="bg-background border-b border-border flex gap-3 items-center justify-between min-h-14 px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex items-center min-w-0">
          <Button className="-ms-2 size-8" type="button" tabIndex="0" aria-label="Close member invite form">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </Button>
          <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <div className="flex flex-col min-w-0">
            <h1 className="font-medium leading-5 sm:text-base text-foreground text-sm truncate">
              Invite Member
            </h1>
            <span className="hidden sm:block text-muted-foreground text-xs truncate">
              Enterprise access request
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button className="hidden md:inline-flex" type="button" tabIndex="0">
            <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              <path d="M7 11h10"></path>
              <path d="M7 15h6"></path>
              <path d="M7 7h8"></path>
            </svg>
            Feedback
          </Button>
          <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
            <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" aria-hidden="true">
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
            </svg>
            Save Draft
          </Button>
          <Button type="submit" tabIndex="0" form="form-9-enterprise-member-invite">
            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            Send Invite
          </Button>
        </div>
      </header>
      <main className="flex flex-1 justify-center px-4 py-7 sm:px-8 sm:py-9">
        <form className="max-w-3xl w-full" id="form-9-enterprise-member-invite">
          <Card className="gap-0 p-0" size="default">
            <CardHeader className="gap-1 px-5 py-4 sm:px-6">
              <CardTitle>
                Member Access
              </CardTitle>
              <CardDescription>
                Add people and assign scoped workspace roles.
              </CardDescription>
              <CardAction className="self-center">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Policy Checked
                </Badge>
              </CardAction>
            </CardHeader>
            <div className="px-5 sm:px-6">
              <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <CardContent className="p-0">
              <FieldSet className="gap-0">
                <FieldLegend className="sr-only" variant="legend">
                  Enterprise member invitation form
                </FieldLegend>
                <FieldDescription className="sr-only">
                  Add team members with managed identity, workspace routing, and granular role assignments.
                </FieldDescription>
                <FieldGroup className="gap-0">
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-member-emails">
                          Recipients
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Recipients hint" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription>
                        Directory email addresses.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1 min-h-10" role="toolbar">
                        <ComboboxChip className="gap-1.5" tabIndex="-1">
                          iris.kwon@atlaslane.dev
                          <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                            <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                        </ComboboxChip>
                        <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="form-9-member-emails" placeholder="Add email" type="text" value="" />
                      </ComboboxChips>
                      <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-field-title items-center">
                          Workspace
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workspace hint" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription>
                        Workspace and expiry window.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <FieldGroup className="gap-3 grid sm:grid-cols-2">
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-workspace">
                            Workspace
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-9-workspace" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              Global Operations
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="global-operations" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-expiry">
                            Invite Expires
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-9-expiry" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              14 days
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="14_days" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                      </FieldGroup>
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-field-title items-center">
                          Member Type
                        </FieldLabel>
                      </div>
                      <FieldDescription>
                        How the account is governed.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <RadioGroup className="gap-2 grid" role="radiogroup">
                        <Field className="gap-2.5 items-start py-1.5" role="group" data-orientation="horizontal">
                          <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_e_" aria-labelledby="form-9-member-type-employee-label">
                            <span className="cn-radio-group-indicator" data-checked="">
                              <span className="cn-radio-group-indicator-icon"></span>
                            </span>
                          </RadioGroupItem>
                          <input id="form-9-member-type-employee" tabIndex="-1" aria-hidden="true" type="radio" value="employee" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldContent className="gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-member-type-employee" id="form-9-member-type-employee-label">
                              Employee
                            </FieldLabel>
                            <FieldDescription>
                              SSO managed.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                        <Field className="gap-2.5 items-start py-1.5" role="group" data-orientation="horizontal">
                          <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_h_" aria-labelledby="form-9-member-type-contractor-label"></RadioGroupItem>
                          <input id="form-9-member-type-contractor" tabIndex="-1" aria-hidden="true" type="radio" value="contractor" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldContent className="gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-member-type-contractor" id="form-9-member-type-contractor-label">
                              Contractor
                            </FieldLabel>
                            <FieldDescription>
                              Time-bound access.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                        <Field className="gap-2.5 items-start py-1.5" role="group" data-orientation="horizontal">
                          <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_k_" aria-labelledby="form-9-member-type-service_account-label"></RadioGroupItem>
                          <input id="form-9-member-type-service_account" tabIndex="-1" aria-hidden="true" type="radio" value="service_account" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldContent className="gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-member-type-service_account" id="form-9-member-type-service_account-label">
                              Service account
                            </FieldLabel>
                            <FieldDescription>
                              Automation owner.
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </RadioGroup>
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-field-title items-center">
                          Guardrails
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Guardrails hint" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription>
                        Sign-in and access-owner notice.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <FieldGroup className="gap-2">
                        <Field className="gap-3 py-1.5" role="group" data-orientation="horizontal">
                          <FieldContent className="gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-require-sso" id="form-9-require-sso-label">
                              Require SSO
                            </FieldLabel>
                            <FieldDescription>
                              Block password login.
                            </FieldDescription>
                          </FieldContent>
                          <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_p_" aria-checked="true" size="default" aria-labelledby="form-9-require-sso-label">
                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                          </Switch>
                          <input id="form-9-require-sso" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field className="gap-3 py-1.5" role="group" data-orientation="horizontal">
                          <FieldContent className="gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-notify-manager" id="form-9-notify-manager-label">
                              Notify Manager
                            </FieldLabel>
                            <FieldDescription>
                              Copy the access owner.
                            </FieldDescription>
                          </FieldContent>
                          <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_s_" aria-checked="false" size="default" aria-labelledby="form-9-notify-manager-label">
                            <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                          </Switch>
                          <input id="form-9-notify-manager" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                      </FieldGroup>
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-role-search">
                          Find Roles
                        </FieldLabel>
                      </div>
                      <FieldDescription>
                        Function or risk hint.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <InputGroup role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                            <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                              <path d="m21 21-4.34-4.34"></path>
                              <circle cx="11" cy="11" r="8"></circle>
                            </svg>
                          </span>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-9-role-search" placeholder="Search roles..." value="" />
                      </InputGroup>
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-field-title items-center">
                          Permissions
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Permissions hint" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription>
                        Choose minimum access.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <Card className="gap-0 overflow-hidden p-0" size="default">
                        <div className="bg-muted/30 border-b flex gap-3 items-center justify-between px-3 py-1.5">
                          <div className="flex flex-col min-w-0">
                            <span className="font-medium text-sm">
                              Role groups
                            </span>
                            <span className="text-muted-foreground text-xs">
                              7 groups available
                            </span>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            3 selected roles
                          </Badge>
                        </div>
                        <Tree className="p-1.5" role="tree" aria-label="" style={{"--tree-indent": "20px"}}>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="true" data-folder="true" aria-expanded="false" role="treeitem" aria-setsize="7" aria-posinset="1" aria-selected="false" aria-label="Admin roles" aria-level="1" tabIndex="0" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Admin roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="true" role="treeitem" aria-setsize="7" aria-posinset="2" aria-selected="false" aria-label="Developer roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Developer roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="1" aria-selected="false" aria-label="Developer" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_14_" aria-checked="true" aria-label="Developer">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Developer
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="2" aria-selected="false" aria-label="Secret manager" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_17_" aria-checked="false" aria-label="Secret manager"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Secret manager
                                </span>
                                <span className="flex gap-1.5 items-center ml-auto shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    MFA
                                  </Badge>
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="3" aria-selected="false" aria-label="Release engineer" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1a_" aria-checked="false" aria-label="Release engineer"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Release engineer
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="true" role="treeitem" aria-setsize="7" aria-posinset="3" aria-selected="false" aria-label="Finance roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Finance roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="1" aria-selected="false" aria-label="Finance analyst" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1d_" aria-checked="true" aria-label="Finance analyst">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Finance analyst
                                </span>
                                <span className="flex gap-1.5 items-center ml-auto shrink-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    Export
                                  </Badge>
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="2" aria-selected="false" aria-label="Refund analyst" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1g_" aria-checked="false" aria-label="Refund analyst"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Refund analyst
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <div className="cursor-pointer data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" data-focus="false" data-folder="false" role="treeitem" aria-setsize="3" aria-posinset="3" aria-selected="false" aria-label="Dispute analyst" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <span className="flex flex-1 gap-2 items-center min-w-0">
                                <Checkbox className="size-3.5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1j_" aria-checked="false" aria-label="Dispute analyst"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                <span className="min-w-0 truncate">
                                  Dispute analyst
                                </span>
                              </span>
                            </TreeItemLabel>
                          </div>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="false" role="treeitem" aria-setsize="7" aria-posinset="4" aria-selected="false" aria-label="Support roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Support roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="false" role="treeitem" aria-setsize="7" aria-posinset="5" aria-selected="false" aria-label="View only roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                View only roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="false" role="treeitem" aria-setsize="7" aria-posinset="6" aria-selected="false" aria-label="Identity roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Identity roles
                              </span>
                            </TreeItemLabel>
                          </button>
                          <button className="data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none z-10" type="button" data-focus="false" data-folder="true" aria-expanded="false" role="treeitem" aria-setsize="7" aria-posinset="7" aria-selected="false" aria-label="Sandbox roles" aria-level="1" tabIndex="-1" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="not-in-data-[folder=true]:ps-5">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="font-medium truncate">
                                Sandbox roles
                              </span>
                            </TreeItemLabel>
                          </button>
                        </Tree>
                      </Card>
                    </div>
                  </Field>
                  <div className="px-5 sm:px-6">
                    <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5 md:pt-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-9-internal-note">
                          Internal Note
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Internal Note hint" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription>
                        Optional internal context.
                      </FieldDescription>
                    </FieldContent>
                    <div className="min-w-0">
                      <Textarea id="form-9-internal-note">
                        Q2 onboarding batch. Confirm privileged role requests after SSO enrollment.
                      </Textarea>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  )
}
