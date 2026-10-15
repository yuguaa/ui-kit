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
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <Card className="gap-0 max-w-3xl p-0 w-full" size="default">
        <CardHeader className="gap-1 px-5 py-4 sm:px-6">
          <CardTitle>
            {"Meeting Capture"}
          </CardTitle>
          <CardDescription>
            {"Set recording defaults and the note template for customer calls."}
          </CardDescription>
          <CardAction className="self-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
              {"Review Ready"}
            </Badge>
          </CardAction>
        </CardHeader>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <form id="profile-7-meeting-capture">
          <CardContent className="p-0">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"Meeting capture profile"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Configure automatic capture, attendee notice, notes template, and output preferences for customer calls."}
              </FieldDescription>
              <FieldGroup className="gap-0">
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-capture-mode">
                      {"Capture Mode"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Choose when recording starts."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-7-capture-mode" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                      <SelectValue>
                        {"External Meetings"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="external" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-consent">
                      {"Consent Notice"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Set the attendee notice behavior."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-7-consent" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Host Prompt"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_3_-hidden-input" tabIndex={-1} aria-hidden="true" value="host-prompt" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-template">
                      {"Notes Template"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Pick the default analysis format."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-7-template" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Customer Summary"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_6_-hidden-input" tabIndex={-1} aria-hidden="true" value="customer-summary" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-field-title items-center">
                      {"Output Fields"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Include only the fields teams review."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-3">
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" aria-labelledby="profile-7-output-summary-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="profile-7-output-summary" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-output-summary" id="profile-7-output-summary-label">
                            {"Summary"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Concise recap for the meeting record."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_c_" aria-checked="true" aria-labelledby="profile-7-output-actions-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="profile-7-output-actions" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-output-actions" id="profile-7-output-actions-label">
                            {"Action Items"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Owners, dates, and promised follow-ups."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_f_" aria-checked="true" aria-labelledby="profile-7-output-crm-note-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="profile-7-output-crm-note" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-output-crm-note" id="profile-7-output-crm-note-label">
                            {"CRM Note"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Clean writeback draft for the account timeline."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </div>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-prompt">
                      {"Prompt"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Guide the generated meeting note."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Textarea className="min-h-24" id="profile-7-prompt">
                      {"Capture the customer goal, open risks, clear next steps, and any commitments made by the team."}
                    </Textarea>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-auto-share" id="profile-7-auto-share-label">
                      {"Auto Share"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Send the note draft to call owners."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_i_" aria-checked="true" size="default" aria-labelledby="profile-7-auto-share-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="profile-7-auto-share" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-7-transcript" id="profile-7-transcript-label">
                      {"Transcript"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Attach the full transcript by default."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_l_" aria-checked="false" size="default" aria-labelledby="profile-7-transcript-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                    </Switch>
                    <input id="profile-7-transcript" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="gap-3 justify-between px-5 py-4 sm:px-6">
            <div className="hidden min-w-0 sm:block text-muted-foreground text-sm">
              <span className="truncate">
                {"External Meetings / Customer Summary / 3 outputs"}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
              <Button type="button" tabIndex={0}>
                {"Reset"}
              </Button>
              <Button type="submit" tabIndex={0}>
                <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" aria-hidden="true">
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                {"Save Settings"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
