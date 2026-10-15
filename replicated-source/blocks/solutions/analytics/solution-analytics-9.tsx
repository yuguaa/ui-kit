import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/bases/base/ui/field"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
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
    <main className="bg-background flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 text-foreground w-full">
      <form className="flex flex-col gap-6 max-w-2xl w-full">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="font-semibold text-foreground text-xl tracking-tight">
              {"Alert Rules"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {"4 rules · 1 needs setup"}
            </p>
          </div>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
            {"Unsaved changes"}
          </Badge>
        </header>
        <Tabs className="gap-5" data-orientation="horizontal" activationDirection="none">
          <TabsList className="w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
            <TabsTrigger className="gap-1.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_3_" extracted="1">
              {"Thresholds"}
              <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
              {"Delivery"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
              {"Schedule"}
            </TabsTrigger>
          </TabsList>
          <TabsContent className="flex flex-col gap-4" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_3_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
            <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
              <svg className="lucide lucide-circle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                {"Threshold required"}
              </AlertTitle>
              <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                {"Experiment regression cannot save without a threshold."}
              </AlertDescription>
            </Alert>
            <FieldSeparator className="[&_[data-slot=field-separator-content]]:bg-background [&_[data-slot=field-separator-content]]:font-medium [&_[data-slot=field-separator-content]]:px-3 [&_[data-slot=field-separator-content]]:text-muted-foreground [&_[data-slot=field-separator-content]]:text-xs my-2" content="true">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <span className="bg-background block cn-field-separator-content mx-auto relative w-fit">
                {"Growth metrics"}
              </span>
            </FieldSeparator>
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <FieldGroup className="gap-0">
                  <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center min-w-0">
                      <span className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_oklch(0.2_0.01_260/0.16)] shrink-0 size-8">
                        <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                          <path d="M16 17h6v-6"></path>
                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                        </svg>
                      </span>
                      <FieldContent className="gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-field-title items-center">
                            {"Activation drop"}
                          </FieldLabel>
                          <div className="shrink-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </div>
                        </div>
                        <FieldDescription className="max-w-2xl">
                          {"ALR-516 · Activation rate (MET-609) below median."}
                        </FieldDescription>
                      </FieldContent>
                      <div className="self-center shrink-0">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-[180px]" type="button" tabIndex="0" id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            <span className="flex flex-col gap-px items-start">
                              <span className="font-medium">
                                {"Significant"}
                              </span>
                              <small className="text-muted-foreground text-xs">
                                {"20 percent or more."}
                              </small>
                            </span>
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="significant" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center min-w-0">
                      <span className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_oklch(0.2_0.01_260/0.16)] shrink-0 size-8">
                        <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                      </span>
                      <FieldContent className="gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-field-title items-center">
                            {"Event volume spike"}
                          </FieldLabel>
                          <div className="shrink-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Active"}
                            </Badge>
                          </div>
                        </div>
                        <FieldDescription className="max-w-2xl">
                          {"ALR-517 · Event volume over 2x baseline."}
                        </FieldDescription>
                      </FieldContent>
                      <div className="self-center shrink-0">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-[180px]" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            <span className="flex flex-col gap-px items-start">
                              <span className="font-medium">
                                {"Moderate"}
                              </span>
                              <small className="text-muted-foreground text-xs">
                                {"10 percent or more."}
                              </small>
                            </span>
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="moderate" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </div>
                  </Field>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center min-w-0">
                      <span className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_oklch(0.2_0.01_260/0.16)] shrink-0 size-8">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <FieldContent className="gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-field-title items-center">
                            {"Retention decay"}
                          </FieldLabel>
                          <div className="shrink-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                              {"Paused"}
                            </Badge>
                          </div>
                        </div>
                        <FieldDescription className="max-w-2xl">
                          {"ALR-518 · Week four retention under 32 percent."}
                        </FieldDescription>
                      </FieldContent>
                      <div className="self-center shrink-0">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-[180px]" type="button" tabIndex="0" id="base-ui-_r_a_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            <span className="flex flex-col gap-px items-start">
                              <span className="font-medium">
                                {"Moderate"}
                              </span>
                              <small className="text-muted-foreground text-xs">
                                {"10 percent or more."}
                              </small>
                            </span>
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="moderate" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </div>
                  </Field>
                </FieldGroup>
              </CardContent>
            </Card>
            <FieldSeparator className="[&_[data-slot=field-separator-content]]:bg-background [&_[data-slot=field-separator-content]]:font-medium [&_[data-slot=field-separator-content]]:px-3 [&_[data-slot=field-separator-content]]:text-muted-foreground [&_[data-slot=field-separator-content]]:text-xs my-2" content="true">
              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <span className="bg-background block cn-field-separator-content mx-auto relative w-fit">
                {"Experiments"}
              </span>
            </FieldSeparator>
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <FieldGroup className="gap-0">
                  <Field className="gap-3 px-5 py-4" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center min-w-0">
                      <span className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_oklch(0.2_0.01_260/0.16)] shrink-0 size-8">
                        <svg className="lucide lucide-flask-conical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                          <path d="M6.453 15h11.094"></path>
                          <path d="M8.5 2h7"></path>
                        </svg>
                      </span>
                      <FieldContent className="gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-field-title items-center">
                            {"Experiment regression"}
                          </FieldLabel>
                          <div className="shrink-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                              {"Set threshold"}
                            </Badge>
                          </div>
                        </div>
                        <FieldDescription className="max-w-2xl">
                          {"ALR-519 · Experiment lift negative for 2 days."}
                        </FieldDescription>
                      </FieldContent>
                      <div className="self-center shrink-0">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-[180px]" type="button" placeholder="" tabIndex="0" id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-invalid="true">
                          <SelectValue placeholder="">
                            <span className="text-destructive">
                              {"Set a threshold"}
                            </span>
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_d_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </div>
                  </Field>
                </FieldGroup>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="border-t flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            {"Experiment regression needs a threshold to save."}
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
              {"Save changes"}
            </Button>
          </div>
        </div>
      </form>
    </main>
  )
}
