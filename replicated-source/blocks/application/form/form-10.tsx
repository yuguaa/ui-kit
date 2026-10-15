import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-center justify-center lg:px-10 min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Customer onboarding form"}
      </h1>
      <Card className="gap-0 max-w-3xl p-0 w-full" size="default">
        <CardHeader className="gap-1 px-5 py-4 sm:px-6">
          <CardTitle>
            {"Customer Onboarding"}
          </CardTitle>
          <CardDescription>
            {"Create a focused setup plan for a new workspace."}
          </CardDescription>
          <CardAction className="self-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
              {"Draft"}
            </Badge>
          </CardAction>
        </CardHeader>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <form id="form-10-customer-onboarding">
          <CardContent className="p-0">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"Customer onboarding intake"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Capture account details, launch intent, source data, owners, and notes for a new workspace."}
              </FieldDescription>
              <FieldGroup className="gap-0">
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-company">
                      {"Company Name"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Customer account display name."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-10-company" autoComplete="organization" value="Northstar Labs" />
                    </InputGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-slug">
                      {"Workspace URL"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Short route for the new workspace."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <InputGroup role="group">
                      <InputGroupAddon className="pl-3 pr-0" role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center text-muted-foreground">
                          {"app.neui.dev/"}
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-10-slug" autoComplete="off" value="northstar" />
                    </InputGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-field-title items-center">
                      {"Intent"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Pick the first success path."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <RadioGroup className="w-fit" role="radiogroup">
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_3_" aria-labelledby="form-10-goal-pipeline-label">
                          <span className="cn-radio-group-indicator" data-checked="">
                            <span className="cn-radio-group-indicator-icon"></span>
                          </span>
                        </RadioGroupItem>
                        <input id="form-10-goal-pipeline" tabIndex="-1" aria-hidden="true" type="radio" value="pipeline" checked name="form-10-goal" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-goal-pipeline" id="form-10-goal-pipeline-label">
                            {"Pipeline"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Accounts and follow-up work."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_6_" aria-labelledby="form-10-goal-support-label"></RadioGroupItem>
                        <input id="form-10-goal-support" tabIndex="-1" aria-hidden="true" type="radio" value="support" name="form-10-goal" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-goal-support" id="form-10-goal-support-label">
                            {"Support"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Tickets and customer signals."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_9_" aria-labelledby="form-10-goal-reporting-label"></RadioGroupItem>
                        <input id="form-10-goal-reporting" tabIndex="-1" aria-hidden="true" type="radio" value="reporting" name="form-10-goal" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-goal-reporting" id="form-10-goal-reporting-label">
                            {"Reporting"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Dashboards from trusted data."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </RadioGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-team-size">
                      {"Team Size"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Expected workspace users."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-10-team-size" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"11-50 people"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="growth" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-timeline">
                      {"Launch Window"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Target first usable workspace."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-10-timeline" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Next 2 weeks"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_f_-hidden-input" tabIndex="-1" aria-hidden="true" value="two-weeks" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-template">
                      {"Starter Template"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Initial workspace structure."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-10-template" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Revenue operations"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_i_-hidden-input" tabIndex="-1" aria-hidden="true" value="revops" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-source">
                      {"First Source"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Primary data source to connect."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-10-source" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"CRM"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_l_-hidden-input" tabIndex="-1" aria-hidden="true" value="crm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-field-title items-center">
                      {"Owners"}
                    </FieldLabel>
                    <FieldDescription>
                      {"People responsible for setup."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1 min-h-10" role="toolbar">
                      <ComboboxChip className="gap-1.5" tabIndex="-1">
                        {"Maya Chen"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip className="gap-1.5" tabIndex="-1">
                        {"Kai Morgan"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="form-10-stakeholders" placeholder="Add owner" type="text" value="" />
                    </ComboboxChips>
                    <input id="base-ui-_r_o_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-sample-data" id="form-10-sample-data-label">
                      {"Include Sample Data"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Seed demo records before import."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="true" size="default" aria-labelledby="form-10-sample-data-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="form-10-sample-data" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-10-notes">
                      {"Setup Notes"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Context for the implementation team."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Textarea className="min-h-20" id="form-10-notes">
                      {"Start with CRM accounts and renewal workflow defaults."}
                    </Textarea>
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="gap-3 justify-between px-5 py-4 sm:px-6">
            <div className="hidden min-w-0 sm:block text-muted-foreground text-sm">
              <span className="truncate">
                {"11-50 people team · Next 2 weeks launch · 2 owners"}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
              <Button type="button" tabIndex="0">
                {"Save Draft"}
              </Button>
              <Button type="submit" tabIndex="0">
                <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                </svg>
                {"Create Plan"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
