import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Tabbed entry dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {"Open entry composer"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="sm:max-w-2xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader>
        <DialogTitle id="base-ui-_r_2_">
          {"Create entry"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Create and assign a quick record."}
        </DialogDescription>
      </DialogHeader>
      <form className="gap-6 grid" id="dialog-12-entry-form">
        <Tabs className="gap-5" data-orientation="horizontal" activationDirection="none">
          <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
            <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_4_" compositeItemActive="" aria-controls="base-ui-_r_9_">
              {"Action"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
              {"Brief"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
              {"Nudge"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
              {"Canvas"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_8_">
              {"Pulse"}
            </TabsTrigger>
          </TabsList>
          <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_9_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_4_">
            <div className="flex flex-col gap-5">
              <FieldGroup className="gap-4">
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="entry-action-title">
                      {"Title"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Title help" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <InputGroup role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <span className="[&_svg]:pointer-events-none [&_svg]:size-4 cn-input-group-text flex items-center text-muted-foreground">
                        <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="1"></circle>
                        </svg>
                      </span>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="entry-action-title" placeholder="Name the next action..." value="Close billing-event gaps before partner beta" />
                  </InputGroup>
                </Field>
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="entry-action-note">
                      {"Notes"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Notes help" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <Textarea className="min-h-24 resize-none" id="entry-action-note" placeholder="Add context, acceptance notes, or blockers...">
                    {"Confirm upgrade, downgrade, and trial-extension events are mapped before the beta opens."}
                  </Textarea>
                </Field>
              </FieldGroup>
              <div className="gap-3 grid min-[360px]:grid-cols-2">
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                      {"Status"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Status help" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_h_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                    <span className="flex gap-2 items-center min-w-0">
                      <svg className="[&_*]:text-foreground/70! lucide lucide-circle shrink-0 size-4 text-foreground/70!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      <span className="truncate">
                        {"Planned"}
                      </span>
                    </span>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </ComboboxTrigger>
                  <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="Planned" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                      {"Assignee"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Assignee help" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_m_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                    <span className="flex gap-2 items-center min-w-0">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Maya Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span className="truncate">
                        {"Maya Stone"}
                      </span>
                    </span>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </ComboboxTrigger>
                  <input id="base-ui-_r_m_-hidden-input" tabIndex="-1" aria-hidden="true" value="Maya Stone owner planning" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                      {"Due date"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Due date help" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_r_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                    <span className="flex gap-2 items-center min-w-0">
                      <svg className="lucide lucide-calendar shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="truncate">
                        {"Tomorrow"}
                      </span>
                    </span>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </ComboboxTrigger>
                  <input id="base-ui-_r_r_-hidden-input" tabIndex="-1" aria-hidden="true" value="Tomorrow next day due date" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                      {"Priority"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Priority help" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_11_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                    <span className="flex gap-2 items-center min-w-0 text-foreground!">
                      <svg className="[&_*]:text-foreground! shrink-0 size-4 text-foreground!" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <rect x="3" y="9" width="2.5" height="4" rx="1" fill="currentColor"></rect>
                        <rect x="7" y="6" width="2.5" height="7" rx="1" fill="currentColor"></rect>
                        <rect x="11" y="3" width="2.5" height="10" rx="1" fill="currentColor" opacity="0.28"></rect>
                      </svg>
                      <span className="text-foreground! truncate">
                        {"Medium"}
                      </span>
                    </span>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </ComboboxTrigger>
                  <input id="base-ui-_r_11_-hidden-input" tabIndex="-1" aria-hidden="true" value="Medium" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Field className="gap-2" role="group" data-orientation="vertical">
                  <div className="flex gap-1.5 items-center leading-none w-fit">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                      {"Labels"}
                    </FieldLabel>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Labels help" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_16_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                    <span className="flex gap-1 items-center min-w-0">
                      <span className="sr-only">
                        {"Selected labels: Billing, Beta"}
                      </span>
                      <span className="bg-sky-500 rounded-full shrink-0 size-3" aria-hidden="true"></span>
                      <span className="bg-violet-500 rounded-full shrink-0 size-3" aria-hidden="true"></span>
                    </span>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </ComboboxTrigger>
                  <input id="base-ui-_r_16_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            {"Cancel"}
          </DialogClose>
          <Button type="submit" tabIndex="0" form="dialog-12-entry-form">
            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" data-icon="inline-start" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            {"Create Action"}
          </Button>
        </DialogFooter>
      </form>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
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
