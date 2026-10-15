import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-16 min-h-svh p-8 w-full">
      <Frame className="max-w-3xl w-full">
        <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
          <div className="font-semibold text-sm">
            General Settings
          </div>
          <div className="text-muted-foreground text-sm">
            Core app preferences.
          </div>
        </header>
        <FramePanel className="p-0">
          <FieldGroup className="gap-0">
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-project-name">
                    Project name
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  The display name for your project across the platform.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <Input id="settings-3-project-name" value="Acme Dashboard"></Input>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-api-endpoint">
                    API endpoint
                  </FieldLabel>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                    Required
                  </Badge>
                </div>
                <FieldDescription className="text-xs">
                  Set the base URL for your project API.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <InputGroup role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                      https://
                    </span>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="settings-3-api-endpoint" value="api.acme.io" />
                </InputGroup>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-start-of-week">
                    Start of week
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  Choose which day marks the start of your week.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="settings-3-start-of-week" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                  <SelectValue>
                    Monday
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="monday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-field-title items-center">
                    Allowed origins
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  Define the trusted domains for CORS requests.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    Add origin
                  </Button>
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                      <path d="M12 3v12"></path>
                      <path d="m17 8-5-5-5 5"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    </svg>
                    Import from file
                  </Button>
                </div>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-field-title items-center">
                    Accent color
                  </FieldLabel>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                    Upgrade to Pro
                  </Badge>
                </div>
                <FieldDescription className="text-xs">
                  Select a color to represent your brand.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <FieldSet className="gap-0">
                  <FieldLegend className="sr-only" variant="legend">
                    Accent color
                  </FieldLegend>
                  <div className="flex gap-3 items-center">
                    <button className="flex items-center justify-center ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full size-7 transition-shadow" type="button" aria-label="Slate" style={{backgroundColor: "rgb(100, 116, 139)"}}>
                      <svg className="lucide lucide-check size-3 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </button>
                    <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Rose" style={{backgroundColor: "rgb(244, 63, 94)"}}></button>
                    <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Orange" style={{backgroundColor: "rgb(249, 115, 22)"}}></button>
                    <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Violet" style={{backgroundColor: "rgb(139, 92, 246)"}}></button>
                    <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Emerald" style={{backgroundColor: "rgb(16, 185, 129)"}}></button>
                    <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Sky" style={{backgroundColor: "rgb(14, 165, 233)"}}></button>
                  </div>
                </FieldSet>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-field-title items-center">
                    Region & currency
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  Adjust your regional preferences and currency.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-[22rem] min-w-0">
                <FieldSet className="gap-3 w-full">
                  <FieldLegend className="sr-only" variant="legend">
                    Region and currency
                  </FieldLegend>
                  <FieldDescription className="sr-only">
                    Regional and financial formatting preferences.
                  </FieldDescription>
                  <FieldGroup className="gap-3">
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-region">
                        Region
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex="0" id="settings-3-region" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        <SelectValue>
                          United States
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="us" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-currency">
                        Currency
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex="0" id="settings-3-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                          <path d="M12 18V6"></path>
                        </svg>
                        <SelectValue>
                          USD · US Dollar
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="usd" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-field-title items-center">
                    Date display format
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  Choose your preferred format for dates.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-78 min-w-0">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Date display format" style={{"--gap": "2"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                    MM/DD/YYYY
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                    DD/MM/YYYY
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                    YYYY/MM/DD
                  </ToggleGroupItem>
                </ToggleGroup>
              </FieldContent>
            </Field>
            <FieldSeparator content="false">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </FieldSeparator>
            <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
              <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <FieldLabel className="cn-field-title items-center">
                    Editor preferences
                  </FieldLabel>
                </div>
                <FieldDescription className="text-xs">
                  Adjust your editing environment and display options.
                </FieldDescription>
              </div>
              <FieldContent className="@md/field-group:w-[22rem] min-w-0">
                <FieldSet className="gap-3 w-full">
                  <FieldLegend className="sr-only" variant="legend">
                    Editor preferences
                  </FieldLegend>
                  <FieldDescription className="sr-only">
                    Configure editing behavior and interface density.
                  </FieldDescription>
                  <FieldGroup className="gap-3">
                    <Field className="gap-3" role="group" data-orientation="horizontal">
                      <Switch className="mt-0.5" checked="" role="switch" tabIndex="0" id="base-ui-_r_e_" aria-checked="true" size="default" aria-labelledby="settings-3-keyboard-shortcuts-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="settings-3-keyboard-shortcuts" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldContent className="gap-0.5">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-keyboard-shortcuts" id="settings-3-keyboard-shortcuts-label">
                          Enable keyboard shortcuts.
                        </FieldLabel>
                        <FieldDescription className="text-xs">
                          Use shortcuts to speed up your workflow.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                    <Field className="gap-3" role="group" data-orientation="horizontal">
                      <Switch className="mt-0.5" checked="" role="switch" tabIndex="0" id="base-ui-_r_h_" aria-checked="true" size="default" aria-labelledby="settings-3-spellcheck-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="settings-3-spellcheck" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldContent className="gap-0.5">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-spellcheck" id="settings-3-spellcheck-label">
                          Auto spell-check.
                        </FieldLabel>
                        <FieldDescription className="text-xs">
                          Highlight spelling errors in text fields.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                    <Field className="gap-3" role="group" data-orientation="horizontal">
                      <Switch className="mt-0.5" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" size="default" aria-labelledby="settings-3-compact-mode-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                      </Switch>
                      <input id="settings-3-compact-mode" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldContent className="gap-0.5">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-compact-mode" id="settings-3-compact-mode-label">
                          Compact Mode.
                        </FieldLabel>
                        <FieldDescription className="text-xs">
                          Reduce spacing for a denser interface layout.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                    <Field className="gap-3" role="group" data-orientation="horizontal">
                      <Switch className="mt-0.5" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" size="default" aria-labelledby="settings-3-animations-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                      </Switch>
                      <input id="settings-3-animations" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldContent className="gap-0.5">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-3-animations" id="settings-3-animations-label">
                          Reduce animations.
                        </FieldLabel>
                        <FieldDescription className="text-xs">
                          Minimize motion effects throughout the UI.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FramePanel>
        <footer className="flex flex-row gap-3 justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <Button type="button" tabIndex="0">
            Reset
          </Button>
          <Button type="button" tabIndex="0">
            Save changes
          </Button>
        </footer>
      </Frame>
    </div>
  )
}
