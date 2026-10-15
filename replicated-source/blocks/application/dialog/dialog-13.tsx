import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-10 min-h-svh p-4 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Create project dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex={0} extracted="1">
          <svg className="lucide lucide-folder-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderPlusIcon" tabler="IconFolderPlus" hugeicons="FolderAddIcon" phosphor="FolderPlusIcon" remixicon="RiFolderAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M12 10v6"></path>
            <path d="M9 13h6"></path>
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
          </svg>
          {"Open project dialog"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 h-[calc(100vh-3rem)] max-h-[calc(100vh-3rem)] max-w-[calc(100vw-3rem)] overflow-hidden p-0" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_9_" style={{"--nested-dialogs": "0"}}>
      <form className="flex flex-1 flex-col min-h-0 overflow-hidden">
        <DialogHeader className="bg-background border-b p-0 shrink-0 sticky text-left top-0 z-10">
          <div className="flex gap-3 items-center justify-between px-5 py-3 w-full">
            <DialogClose className="-ms-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
              <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              {"Back"}
            </DialogClose>
            <Button href="#" role="button" tabIndex={0}>
              {"Support"}
              <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" data-icon="inline-end" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 min-h-0 overflow-hidden">
          <ScrollArea className="[&_[data-slot=scroll-area-viewport]]:h-full h-full min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "164px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 max-w-2xl mx-auto px-5 py-6 w-full">
                <div className="flex flex-col gap-0.5 py-2">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <DialogTitle className="leading-6 text-lg" id="base-ui-_r_3_">
                      {"Create Project"}
                    </DialogTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button h-7 inline-flex items-center justify-center outline-none px-2.5 select-none shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                      <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      {"Select template"}
                      <svg className="lucide lucide-chevron-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </div>
                  <DialogDescription className="leading-5 max-w-xl text-sm" id="base-ui-_r_9_">
                    {"Set details, owner, timing, and labels."}
                  </DialogDescription>
                </div>
                <FieldGroup className="gap-4">
                  <div className="gap-3 grid sm:grid-cols-[minmax(0,1fr)_8rem]">
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-name">
                        {"Project name"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                            <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                            </svg>
                          </span>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="project-name" value="Billing Event Cleanup" />
                      </InputGroup>
                    </Field>
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-key">
                        {"Key"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground uppercase w-full" id="project-key" value="BEC" />
                      </InputGroup>
                    </Field>
                  </div>
                  <Field className="gap-1.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center leading-none w-fit">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-summary">
                        {"Project brief"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Project brief help" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Textarea className="min-h-20 resize-none" id="project-summary">
                      {"Audit subscription event mapping before the partner beta opens to billing admins."}
                    </Textarea>
                  </Field>
                  <div className="gap-3 grid sm:grid-cols-2">
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-status">
                        {"Status"}
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="project-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="flex gap-2 items-center min-w-0">
                            <span className="bg-sky-500 rounded-full size-2" aria-hidden="true"></span>
                            <span className="truncate">
                              {"Planned"}
                            </span>
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_e_-hidden-input" tabIndex={-1} aria-hidden="true" value="planned" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-assignee">
                        {"Assigned"}
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="project-assignee" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="flex gap-2 items-center min-w-0">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Maya Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <span className="flex flex-col gap-px items-start min-w-0">
                              <span className="truncate">
                                {"Maya Stone"}
                              </span>
                            </span>
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_h_-hidden-input" tabIndex={-1} aria-hidden="true" value="maya-stone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <div className="flex gap-1.5 items-center leading-none w-fit">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-due-date">
                          {"Due date"}
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Due date help" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="project-due-date" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-calendar shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                            <span className="truncate">
                              {"Next Friday"}
                            </span>
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_m_-hidden-input" tabIndex={-1} aria-hidden="true" value="next-friday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <div className="flex gap-1.5 items-center leading-none w-fit">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-priority">
                          {"Priority"}
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Priority help" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="project-priority" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="flex gap-2 items-center min-w-0">
                            <span className="flex gap-0.5 items-end justify-center shrink-0 size-4" aria-hidden="true">
                              <span className="bg-current h-1.5 rounded-sm w-1"></span>
                              <span className="bg-current h-2.5 rounded-sm w-1"></span>
                              <span className="bg-current h-3.5 rounded-sm w-1"></span>
                            </span>
                            <span className="truncate">
                              {"High"}
                            </span>
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_r_-hidden-input" tabIndex={-1} aria-hidden="true" value="high" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </div>
                  <Field className="gap-2" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-end justify-between min-w-0">
                      <FieldContent className="gap-0.5 min-w-0">
                        <div className="flex gap-1.5 items-center leading-none w-fit">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                            {"Labels"}
                          </FieldLabel>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Labels help" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <FieldDescription>
                          {"Tag the project for planning and reporting."}
                        </FieldDescription>
                      </FieldContent>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                        {"2 selected"}
                      </Badge>
                    </div>
                    <FieldGroup className="gap-2 grid sm:grid-cols-2">
                      <FieldLabel className="border cn-label cursor-pointer gap-2 group-data-[disabled=true]:pointer-events-none has-[[data-checked]]:bg-primary/5 has-[[data-checked]]:border-primary/50 hover:bg-accent/40 items-start peer-disabled:cursor-not-allowed px-3 py-2.5 rounded-md select-none transition-colors w-full" htmlFor="project-label-feature" id="project-label-feature-label">
                        <Checkbox className="mt-0.5" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_10_" aria-checked="true" aria-labelledby="project-label-feature-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="project-label-feature" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5 min-w-0">
                          <span className="font-medium text-sm truncate">
                            {"Feature"}
                          </span>
                          <FieldDescription className="truncate">
                            {"Product-facing capability."}
                          </FieldDescription>
                        </FieldContent>
                      </FieldLabel>
                      <FieldLabel className="border cn-label cursor-pointer gap-2 group-data-[disabled=true]:pointer-events-none has-[[data-checked]]:bg-primary/5 has-[[data-checked]]:border-primary/50 hover:bg-accent/40 items-start peer-disabled:cursor-not-allowed px-3 py-2.5 rounded-md select-none transition-colors w-full" htmlFor="project-label-billing" id="project-label-billing-label">
                        <Checkbox className="mt-0.5" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_13_" aria-checked="true" aria-labelledby="project-label-billing-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="project-label-billing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5 min-w-0">
                          <span className="font-medium text-sm truncate">
                            {"Billing"}
                          </span>
                          <FieldDescription className="truncate">
                            {"Revenue or plan logic."}
                          </FieldDescription>
                        </FieldContent>
                      </FieldLabel>
                      <FieldLabel className="border cn-label cursor-pointer gap-2 group-data-[disabled=true]:pointer-events-none has-[[data-checked]]:bg-primary/5 has-[[data-checked]]:border-primary/50 hover:bg-accent/40 items-start peer-disabled:cursor-not-allowed px-3 py-2.5 rounded-md select-none transition-colors w-full" htmlFor="project-label-design" id="project-label-design-label">
                        <Checkbox className="mt-0.5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_16_" aria-checked="false" aria-labelledby="project-label-design-label"></Checkbox>
                        <input id="project-label-design" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5 min-w-0">
                          <span className="font-medium text-sm truncate">
                            {"Design"}
                          </span>
                          <FieldDescription className="truncate">
                            {"Interface or UX work."}
                          </FieldDescription>
                        </FieldContent>
                      </FieldLabel>
                      <FieldLabel className="border cn-label cursor-pointer gap-2 group-data-[disabled=true]:pointer-events-none has-[[data-checked]]:bg-primary/5 has-[[data-checked]]:border-primary/50 hover:bg-accent/40 items-start peer-disabled:cursor-not-allowed px-3 py-2.5 rounded-md select-none transition-colors w-full" htmlFor="project-label-ops" id="project-label-ops-label">
                        <Checkbox className="mt-0.5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_19_" aria-checked="false" aria-labelledby="project-label-ops-label"></Checkbox>
                        <input id="project-label-ops" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5 min-w-0">
                          <span className="font-medium text-sm truncate">
                            {"Operations"}
                          </span>
                          <FieldDescription className="truncate">
                            {"Process and rollout tasks."}
                          </FieldDescription>
                        </FieldContent>
                      </FieldLabel>
                    </FieldGroup>
                  </Field>
                </FieldGroup>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_2_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "347.8724409448819px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
        <DialogFooter className="bg-background border-t m-0 p-0 shrink-0">
          <div className="flex flex-col-reverse gap-3 max-w-2xl mx-auto px-5 py-3 sm:flex-row sm:items-center sm:justify-between w-full">
            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
              <Tooltip>
              <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 transition-colors" type="button" aria-label="Project draft info" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <span className="font-medium truncate">
                {"Project draft"}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-end shrink-0 sm:w-auto w-full">
              <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
                {"Cancel"}
              </DialogClose>
              <Button type="submit" tabIndex={0}>
                {"Create project"}
              </Button>
            </div>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
    </Dialog>
  </>
  )
}
