import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Input } from "@/registry/bases/base/ui/input"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 text-foreground w-full">
      <div className="flex flex-col gap-4 max-w-4xl w-full">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-px">
            <h1 className="capitalize font-semibold leading-tight text-2xl tracking-tight">
              {"Prompt Detail"}
            </h1>
            <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
              <span className="gap-1.5 inline-flex items-center min-w-0">
                <span className="shrink-0">
                  {"PRM-4821"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="truncate">
                  {"Renewal Risk Summary"}
                </span>
              </span>
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex gap-2 items-center shrink-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                {"Unsaved"}
              </Badge>
              <Button type="button" tabIndex={0} extracted="1">
                {"Cancel"}
              </Button>
              <Button type="button" tabIndex={0}>
                {"Update"}
              </Button>
            </div>
          </div>
        </header>
        <Tabs className="gap-4 w-full" data-orientation="horizontal" activationDirection="none">
          <ScrollArea className="border-b w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="min-w-max w-max whitespace-nowrap" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-y="" data-overflow-y-end="">
                <TabsList className="gap-6 h-auto justify-start min-w-max w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Prompt detail sections">
                  <TabsTrigger className="after:bottom-[-1px] flex-none gap-2 justify-start px-0 py-3" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="" aria-controls="base-ui-_r_6_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </span>
                    <span>
                      {"Overview"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:bottom-[-1px] flex-none gap-2 justify-start px-0 py-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-message-square-text size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                        <path d="M7 11h10"></path>
                        <path d="M7 15h6"></path>
                        <path d="M7 7h8"></path>
                      </svg>
                    </span>
                    <span>
                      {"Prompt Text"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:bottom-[-1px] flex-none gap-2 justify-start px-0 py-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <span>
                      {"Safety"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:bottom-[-1px] flex-none gap-2 justify-start px-0 py-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </span>
                    <span>
                      {"Evaluations"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:bottom-[-1px] flex-none gap-2 justify-start px-0 py-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                      </svg>
                    </span>
                    <span>
                      {"Access"}
                    </span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </ScrollArea>
          <div className="min-w-0 pt-0">
            <TabsContent className="min-w-0 mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_6_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_1_">
              <div className="flex flex-col gap-6">
                <section className="flex flex-col">
                  <Card className="gap-0 p-0" size="default">
                    <CardHeader className="gap-1 px-5 py-4 sm:px-6">
                      <CardTitle>
                        {"Prompt Basics"}
                      </CardTitle>
                      <CardDescription>
                        {"PRM-4821 changed at 09:42."}
                      </CardDescription>
                    </CardHeader>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          {"Prompt basics"}
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          {"Prompt identity and ownership settings."}
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="ai-ops-4-prompt-id">
                                  {"Prompt ID"}
                                </FieldLabel>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Prompt ID info" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <Input id="ai-ops-4-prompt-id" readOnly value="PRM-4821"></Input>
                              </Field>
                              <FieldDescription>
                                {"Evaluation runs and SAFE-0914 logs keep this ID."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="ai-ops-4-prompt-name">
                                  {"Prompt name"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Input id="ai-ops-4-prompt-name" value="Renewal Risk Summary"></Input>
                              <FieldDescription>
                                {"Shown in the prompt registry."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Owner"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1 w-full" role="toolbar">
                                  <ComboboxChip className="gap-1.5 rounded-full" tabIndex={-1}>
                                    <Avatar className="size-4" size="default">
                                      <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    {"Mira Stone"}
                                    <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={-1} aria-disabled="false">
                                      <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </button>
                                  </ComboboxChip>
                                  <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_b_" placeholder="Add prompt owners..." type="text" value="" />
                                </ComboboxChips>
                                <input id="base-ui-_r_b_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"Mira Stone reviews production edits."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Status"}
                                </FieldLabel>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Unsaved"}
                                </Badge>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <Select>
                                <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="ai-ops-4-prompt-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    <span className="flex flex-col gap-px items-start">
                                      <span className="font-medium">
                                        {"Editing"}
                                      </span>
                                      <small className="text-muted-foreground text-sm">
                                        {"Unsaved draft from 09:42"}
                                      </small>
                                    </span>
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_e_-hidden-input" tabIndex={-1} aria-hidden="true" value="Editing" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"Controls production routing for this prompt."}
                              </FieldDescription>
                            </div>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
                <section className="flex flex-col">
                  <Card className="gap-0 p-0" size="default">
                    <CardHeader className="gap-1 px-5 py-4 sm:px-6">
                      <CardTitle>
                        {"Runtime"}
                      </CardTitle>
                      <CardDescription>
                        {"182K requests in 24h."}
                      </CardDescription>
                    </CardHeader>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          {"Runtime"}
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          {"Provider routing and request budget settings."}
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Model provider"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <Select>
                                <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="ai-ops-4-model-provider" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    <span className="flex flex-col gap-px items-start">
                                      <span className="font-medium">
                                        {"OpenRoute Primary"}
                                      </span>
                                      <small className="text-muted-foreground text-sm">
                                        {"182K requests in 24h"}
                                      </small>
                                    </span>
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_h_-hidden-input" tabIndex={-1} aria-hidden="true" value="openroute-primary" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"OpenRoute Primary handles live traffic."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Release channel"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <Select>
                                <SelectTrigger className="w-full" type="button" tabIndex={0} id="ai-ops-4-release-channel" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    {"Canary"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_k_-hidden-input" tabIndex={-1} aria-hidden="true" value="canary" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"Canary keeps 10 percent sampled traffic."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="ai-ops-4-token-budget">
                                  {"Token budget"}
                                </FieldLabel>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Token budget info" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <InputGroup role="group">
                                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="ai-ops-4-token-budget" value="9600000" />
                                  <InputGroupAddon role="group" data-align="inline-end">
                                    <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                      {"tokens"}
                                    </span>
                                  </InputGroupAddon>
                                </InputGroup>
                              </Field>
                              <FieldDescription>
                                {"Current spend is 64 percent of the daily cap."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Trace retention"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <Select>
                                <SelectTrigger className="w-full" type="button" tabIndex={0} id="ai-ops-4-retention" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    {"90 days"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_q_-hidden-input" tabIndex={-1} aria-hidden="true" value="90d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"Audit logs stay attached to PRM-4821."}
                              </FieldDescription>
                            </div>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
                <section className="flex flex-col">
                  <Card className="gap-0 p-0" size="default">
                    <CardHeader className="gap-1 px-5 py-4 sm:px-6">
                      <CardTitle>
                        {"Readiness"}
                      </CardTitle>
                      <CardDescription>
                        {"Release checks before the next update."}
                      </CardDescription>
                    </CardHeader>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          {"Readiness"}
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          {"Evaluation status and review handoff for this prompt."}
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Latest eval"}
                                </FieldLabel>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Latest eval info" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    {"Failed"}
                                  </Badge>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                    {"2 blockers"}
                                  </Badge>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                    {"22 traces loaded"}
                                  </Badge>
                                </div>
                              </Field>
                              <FieldDescription>
                                {"Payment intent traces need redaction before production update."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-field-title items-center">
                                  {"Reviewer"}
                                </FieldLabel>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field role="group" data-orientation="vertical">
                                <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1 w-full" role="toolbar">
                                  <ComboboxChip className="gap-1.5 rounded-full" tabIndex={-1}>
                                    <Avatar className="size-4" size="default">
                                      <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    {"Nora Vale"}
                                    <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={-1} aria-disabled="false">
                                      <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                      </svg>
                                    </button>
                                  </ComboboxChip>
                                  <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_v_" placeholder="Assign reviewers..." type="text" value="" />
                                </ComboboxChips>
                                <input id="base-ui-_r_v_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <FieldDescription>
                                {"Required before live traffic changes."}
                              </FieldDescription>
                            </div>
                          </Field>
                          <div className="px-5 sm:px-6">
                            <Separator className="bg-transparent border-dashed border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </div>
                          <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                            <FieldContent className="gap-0.5 md:pt-0.5">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="ai-ops-4-next-action">
                                  {"Next action"}
                                </FieldLabel>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Next action info" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </div>
                            </FieldContent>
                            <div className="flex flex-col gap-2 min-w-0">
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <Textarea className="min-h-20 resize-none" id="ai-ops-4-next-action">
                                  {"Patch PII rule, replay SAFE-0914, then update canary."}
                                </Textarea>
                              </Field>
                              <FieldDescription>
                                {"Keeps the review note attached to PRM-4821."}
                              </FieldDescription>
                            </div>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
