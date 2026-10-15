import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-start justify-center lg:p-10 min-h-svh p-4 sm:p-6 text-foreground w-full">
      <form className="flex flex-col max-w-3xl w-full" aria-label="CSV import wizard">
        <StepperItem>
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <Frame className="w-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex gap-3 items-center justify-between">
                <div className="flex flex-col gap-px min-w-0">
                  <div className="font-semibold text-sm">
                    {"Import Wizard"}
                  </div>
                  <div className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-sm">
                    <span className="shrink-0">
                      {"northstar-contacts.csv + 1 file"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="truncate">
                      {"1,248 rows"}
                    </span>
                  </div>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  {"Contacts"}
                </Badge>
              </div>
            </header>
            <FramePanel className="flex items-center overflow-x-auto">
              <Stepper>
              <StepperNav className="items-center min-w-full" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={0} data-state="active" loading="false" extracted="1">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="active">
                      {"Upload"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Map Columns"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Preview"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"4"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Duplicates"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"5"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="capitalize hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Summary"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </FramePanel>
            <FramePanel>
              <Stepper>
              <StepperPanel className="text-sm" data-state="1">
                <Stepper>
                <StepperContent data-state="1">
                  <section className="flex flex-col gap-6" aria-labelledby="crm-6-upload-title">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-base" id="crm-6-upload-title">
                        {"Upload Files"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {"Add CRM exports and source assets."}
                      </p>
                    </div>
                    <FieldGroup className="gap-5 grid">
                      <Field className="gap-3" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="crm-6-file-input">
                          {"Source Files"}
                          <span className="text-destructive">
                            {"*"}
                          </span>
                        </FieldLabel>
                        <input className="sr-only" id="crm-6-file-input" aria-label="Source files" aria-describedby="crm-6-upload-help" accept=".csv,.xlsx,.xls,.pdf,.png,.jpg,.jpeg,.webp,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/pdf,image/png,image/jpeg,image/webp" multiple type="file" />
                        <Item className="aria-invalid:border-destructive border-dashed flex-col gap-3 hover:bg-muted/40 hover:border-primary/60 min-h-40 px-6 py-8 text-center" id="crm-6-dropzone" type="button" aria-invalid="false" aria-describedby="crm-6-upload-help" variant="outline" size="default">
                          <ItemMedia className="mx-auto size-auto text-muted-foreground" variant="icon">
                            <svg className="lucide lucide-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                              <path d="M12 3v12"></path>
                              <path d="m17 8-5-5-5 5"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            </svg>
                          </ItemMedia>
                          <ItemContent className="flex-none gap-1 items-center">
                            <ItemTitle className="justify-center">
                              {"Drop Files"}
                            </ItemTitle>
                            <ItemDescription className="text-center" id="crm-6-upload-help">
                              {"Browse or drag files here."}
                            </ItemDescription>
                            <ItemDescription className="text-center">
                              {"CSV, Excel, PDF, PNG, or JPG. Max 10MB each."}
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </Field>
                      <ItemGroup className="gap-2" role="list" aria-label="Selected files">
                        <Item className="gap-3" variant="outline" size="sm">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </ItemMedia>
                          <ItemContent className="min-w-0">
                            <ItemTitle className="max-w-full truncate">
                              {"northstar-contacts.csv"}
                            </ItemTitle>
                            <ItemDescription className="flex flex-wrap gap-1.5 items-center">
                              <span>
                                {"CSV"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span>
                                {"2.35MB"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span>
                                {"1,248 rows"}
                              </span>
                            </ItemDescription>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                            <Button type="button" tabIndex={0} aria-label="Remove northstar-contacts.csv">
                              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                          </ItemActions>
                        </Item>
                        <Item className="gap-3" variant="outline" size="sm">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </ItemMedia>
                          <ItemContent className="min-w-0">
                            <ItemTitle className="max-w-full truncate">
                              {"account-logos.png"}
                            </ItemTitle>
                            <ItemDescription className="flex flex-wrap gap-1.5 items-center">
                              <span>
                                {"Image"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span>
                                {"667.97KB"}
                              </span>
                            </ItemDescription>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Ready"}
                            </Badge>
                            <Button type="button" tabIndex={0} aria-label="Remove account-logos.png">
                              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                          </ItemActions>
                        </Item>
                      </ItemGroup>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="crm-6-target">
                          {"Import into"}
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="crm-6-target" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Contacts"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="contacts" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_3_" aria-checked="true" size="default" aria-labelledby="crm-6-header-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="crm-6-header" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="crm-6-header" id="crm-6-header-label">
                            {"First row is a header"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Row 1 holds column names like Name, Email, Company."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </section>
                </StepperContent>
                </Stepper>
              </StepperPanel>
              </Stepper>
            </FramePanel>
            <footer className="flex flex-col gap-3 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="gap-1.5 hidden items-center min-w-0 sm:flex text-muted-foreground text-sm">
                <svg className="lucide lucide-flag shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                </svg>
                {"Pick files and target object."}
              </div>
              <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
                <Button type="submit" tabIndex={0}>
                  {"Next Step"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </footer>
          </Frame>
        </Stepper>
        </StepperItem>
      </form>
    </div>
  )
}
