import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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
import { Input } from "@/registry/bases/base/ui/input"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-center justify-center lg:px-10 min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Profile settings form"}
      </h1>
      <Card className="gap-0 max-w-2xl p-0 w-full" size="default">
        <CardHeader className="gap-1 px-5 py-5 sm:px-6">
          <CardTitle>
            {"Profile Settings"}
          </CardTitle>
          <CardDescription>
            {"Identity and availability."}
          </CardDescription>
          <CardAction className="self-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              {"84% complete"}
            </Badge>
          </CardAction>
        </CardHeader>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <CardContent className="px-5 py-5 sm:px-6 sm:py-6">
          <form id="form-1-profile-settings">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"Profile settings"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Update profile details, visibility, and availability."}
              </FieldDescription>
              <FieldGroup className="gap-5">
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Photo"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <div className="flex flex-wrap gap-2 grow items-center justify-start">
                      <div className="relative">
                        <Avatar className="size-10" size="default">
                          <AvatarImage alt="Noa Brooks" src="https://i.pravatar.cc/96?img=47"></AvatarImage>
                        </Avatar>
                      </div>
                      <div className="inline-flex relative">
                        <Button type="button" tabIndex="0" aria-haspopup="dialog">
                          <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M12 3v12"></path>
                            <path d="m17 8-5-5-5 5"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          </svg>
                          {"Change"}
                        </Button>
                        <input className="sr-only" id="form-1-profile-photo" accept="image/*" aria-label="Upload profile photo" tabIndex="-1" type="file" />
                      </div>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        {"Remove"}
                      </Button>
                    </div>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-full-name">
                        {"Full Name"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Input id="form-1-full-name" value="Noa Brooks"></Input>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-birth-date">
                        {"Birth Date"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Birth Date details" id="base-ui-_r_2_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-1-birth-date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                      <span className="truncate">
                        {"Sep 18, 1991"}
                      </span>
                      <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </PopoverTrigger>
                    </Popover>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-availability">
                        {"Availability Date"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Availability Date details" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="form-1-availability" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                      <span className="truncate">
                        {"April 24th, 2026 - 10:30"}
                      </span>
                      <svg className="lucide lucide-calendar text-muted-foreground/80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" data-icon="inline-end" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </PopoverTrigger>
                    </Popover>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-company">
                        {"Company"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Input id="form-1-company" value="Harborline Systems"></Input>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-specialties">
                        {"Specialties"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <ComboboxChips className="w-full" role="toolbar">
                      <ComboboxChip tabIndex="-1">
                        {"Product strategy"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip tabIndex="-1">
                        {"Team workshops"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="form-1-specialties" placeholder="Add specialties..." type="text" value="" />
                    </ComboboxChips>
                    <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-dismissal-time">
                        {"Dismissal Time"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Dismissal Time details" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <InputGroup role="group">
                      <input className="[&::-webkit-calendar-picker-indicator]:appearance-none [&::-webkit-calendar-picker-indicator]:hidden appearance-none cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-1-dismissal-time" step="60" type="time" value="17:30" />
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                      </InputGroupAddon>
                    </InputGroup>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-phone">
                        {"Phone Number"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Input id="form-1-phone" placeholder="+1 (555) 000-0000" type="tel" value="+1 (312) 847-1928"></Input>
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-visibility">
                        {"Visibility"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-1-visibility" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Team only"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="team" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </FieldContent>
                </Field>
                <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-available-to-hire">
                        {"Availability"}
                      </FieldLabel>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                    <Field className="gap-2 w-auto" role="group" data-orientation="horizontal">
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_k_" aria-checked="true" size="default" aria-labelledby="form-1-available-to-hire-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="form-1-available-to-hire" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-1-available-to-hire" id="form-1-available-to-hire-label">
                        {"Available to hire"}
                      </FieldLabel>
                    </Field>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <CardDescription>
            {"Changes stay private until saved."}
          </CardDescription>
          <div className="flex flex-col gap-2 sm:flex-row sm:ml-auto">
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-rotate-ccw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" data-icon="inline-start" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              {"Cancel"}
            </Button>
            <Button type="submit" tabIndex="0" form="form-1-profile-settings">
              <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" data-icon="inline-start" aria-hidden="true">
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
              </svg>
              {"Save changes"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
