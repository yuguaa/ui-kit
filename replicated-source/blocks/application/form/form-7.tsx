import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ComboboxChip,
  ComboboxChips,
} from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="flex items-center justify-center min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full">
      <h1 className="sr-only">
        Inline editable ticket details form
      </h1>
      <form className="max-w-lg w-full" id="form-7-ticket-details">
        <Frame className="group w-full" spacing="sm">
          <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:items-center">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="font-semibold text-sm">
                Ticket Details
              </div>
              <div className="hidden sm:block text-muted-foreground text-sm truncate">
                Operational fields for triage.
              </div>
            </div>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add note
            </TooltipTrigger>
            </Tooltip>
          </header>
          <FramePanel className="p-0">
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Due Date
                </span>
                <Tooltip>
                <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Due Date info" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Due Date" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        Apr 30, 2026
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <Popover>
                    <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-0 font-medium group/button h-8 hover:bg-transparent inline-flex items-center justify-between min-w-0 outline-none px-2.5 select-none text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" id="form-7-due-date" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                      <span className="flex gap-2 items-center min-w-0">
                        <svg className="lucide lucide-calendar shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span className="truncate">
                          Apr 30, 2026
                        </span>
                      </span>
                    </PopoverTrigger>
                    </Popover>
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Due Date">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Due Date">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Status
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Status" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                      </svg>
                      Open
                    </Badge>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <Select>
                    <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="form-7-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                      <SelectValue>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                          </svg>
                          Open
                        </Badge>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="open" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Status">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Status">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  SLA
                </span>
                <Tooltip>
                <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="SLA info" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit SLA" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      SLA Met
                    </Badge>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <div className="flex flex-1 gap-3 h-8 items-center justify-between min-w-0 px-2.5">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-7-sla" id="form-7-sla-label">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          SLA Met
                        </Badge>
                      </FieldLabel>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" size="sm" aria-labelledby="form-7-sla-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="form-7-sla" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard SLA">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save SLA">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Priority
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Priority" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        Medium
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <Select>
                    <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="form-7-priority" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                      <SelectValue>
                        <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                          <span className="flex items-center shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            Medium
                          </span>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_e_-hidden-input" tabIndex="-1" aria-hidden="true" value="medium" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Priority">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Priority">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Source
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Source" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-inbox size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        Customer Portal
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <Select>
                    <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="form-7-source" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                      <SelectValue>
                        <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                          <span className="flex items-center shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-inbox size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            Customer Portal
                          </span>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="portal" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Source">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Source">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Channel
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Channel" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-hash size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                          <line x1="4" x2="20" y1="9" y2="9"></line>
                          <line x1="4" x2="20" y1="15" y2="15"></line>
                          <line x1="10" x2="8" y1="3" y2="21"></line>
                          <line x1="16" x2="14" y1="3" y2="21"></line>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        identity-access
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                        <svg className="lucide lucide-hash size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HashIcon" tabler="IconHash" hugeicons="HashtagIcon" phosphor="HashIcon" remixicon="RiHashtag" aria-hidden="true">
                          <line x1="4" x2="20" y1="9" y2="9"></line>
                          <line x1="4" x2="20" y1="15" y2="15"></line>
                          <line x1="10" x2="8" y1="3" y2="21"></line>
                          <line x1="16" x2="14" y1="3" y2="21"></line>
                        </svg>
                      </span>
                    </InputGroupAddon>
                    <input className="bg-transparent cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! font-medium h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left text-sm w-full" id="form-7-channel" value="identity-access" />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Channel">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Channel">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Form
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Form" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        Workspace Access
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <InputGroup className="bg-transparent border-0 cn-combobox-input flex-1 focus-visible:ring-0 h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none! shadow-none w-auto" role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-7-request-form" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select request form" type="text" value="Workspace Access" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                          <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </InputGroupAddon>
                    </InputGroup>
                    <input id="base-ui-_r_l_-hidden-input" tabIndex="-1" aria-hidden="true" value="workspace-access" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Form">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Form">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Category
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Category" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="min-w-0 truncate">
                        Access Request
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <Select>
                    <SelectTrigger className="border-0 flex-1 focus-visible:ring-0 focus:ring-0 h-8 min-w-0 px-2.5 shadow-none" type="button" tabIndex="0" id="form-7-category" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                      <SelectValue>
                        <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                          <span className="min-w-0 truncate">
                            Access Request
                          </span>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        ▼
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="access" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Category">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Category">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-start" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 sm:min-h-8 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Tags
                </span>
              </FieldLabel>
              <div className="col-start-1 items-start min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-auto hover:bg-muted/40 items-start min-h-8 min-w-0 opacity-100 outline-none px-2.5 py-1 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Tags" aria-hidden="false">
                  <span className="flex items-start min-w-0">
                    <span className="flex flex-wrap gap-1.5 items-center min-h-6 min-w-0 overflow-visible">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                        Feature
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Security
                      </Badge>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-auto! has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none! items-start min-h-8!" role="group">
                    <ComboboxChips className="bg-transparent border-0 flex-1 flex-wrap! focus-within:ring-0 gap-1.5 h-auto! has-data-[slot=combobox-chip]:pl-1 items-center min-h-8! overflow-visible px-2 py-1! ring-0 shadow-none" role="toolbar">
                      <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 inline-flex items-center justify-center min-w-5 outline-none px-1.25 py-0.5 relative rounded-full shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                        Feature
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 inline-flex items-center justify-center min-w-5 outline-none px-1.25 py-0.5 relative rounded-full shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                        Security
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <input className="bg-transparent cn-combobox-chip-input flex-1 min-w-20 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_t_" placeholder="" type="text" value="" />
                    </ComboboxChips>
                    <input id="base-ui-_r_t_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2 pt-1 self-start" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Tags">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Tags">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-start" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 sm:min-h-8 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Owners
                </span>
              </FieldLabel>
              <div className="col-start-1 items-start min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-auto hover:bg-muted/40 items-start min-h-8 min-w-0 opacity-100 outline-none px-2.5 py-1 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Owners" aria-hidden="false">
                  <span className="flex items-start min-w-0">
                    <span className="flex flex-wrap gap-1.5 items-center min-h-6 min-w-0 overflow-visible">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <Avatar className="size-3.5" size="default">
                          <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="max-w-32 truncate">
                          Mira Stone
                        </span>
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <Avatar className="size-3.5" size="default">
                          <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <span className="max-w-32 truncate">
                          Leo Grant
                        </span>
                      </Badge>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-auto! has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none! items-start min-h-8!" role="group">
                    <ComboboxChips className="bg-transparent border-0 flex-1 flex-wrap! focus-within:ring-0 gap-1.5 h-auto! has-data-[slot=combobox-chip]:pl-1 items-center min-h-8! overflow-visible px-2 py-1! ring-0 shadow-none" role="toolbar">
                      <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 inline-flex items-center justify-center min-w-0 outline-none px-1.25 py-0.5 relative shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                        <Avatar className="size-4" size="default">
                          <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        Mira Stone
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 inline-flex items-center justify-center min-w-0 outline-none px-1.25 py-0.5 relative shrink-0 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow w-fit whitespace-nowrap" tabIndex="-1">
                        <Avatar className="size-4" size="default">
                          <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        Leo Grant
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <input className="bg-transparent cn-combobox-chip-input flex-1 min-w-20 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_10_" placeholder="" type="text" value="" />
                    </ComboboxChips>
                    <input id="base-ui-_r_10_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <InputGroupAddon className="gap-1 pr-2 pt-1 self-start" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Owners">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Owners">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Updates
                </span>
              </FieldLabel>
              <div className="col-start-1 items-center min-h-8 min-w-0 relative row-start-2 sm:col-start-2 sm:row-start-1">
                <button className="active:bg-muted/40 border border-transparent duration-150 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/value h-8 hover:bg-muted/40 items-center min-w-0 opacity-100 outline-none px-2.5 relative rounded-md sm:group-hover/row:bg-muted/40 text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Updates" aria-hidden="false">
                  <span className="flex items-center min-w-0">
                    <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                      <span className="flex items-center shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 truncate">
                        Requester notified
                      </span>
                    </span>
                  </span>
                  <Item className="ml-1.5 opacity-100 p-0 size-5 sm:group-focus-visible/value:opacity-100 sm:group-hover/row:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </button>
                <div className="absolute duration-150 inset-x-0 min-w-0 opacity-0 pointer-events-none top-0 transition-opacity" aria-hidden="true" inert="">
                  <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                    <div className="flex flex-1 gap-3 h-8 items-center justify-between min-w-0 px-2.5">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-7-updates" id="form-7-updates-label">
                        <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                          <span className="flex items-center shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            Requester notified
                          </span>
                        </span>
                      </FieldLabel>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_13_" aria-checked="true" size="sm" aria-labelledby="form-7-updates-label">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="form-7-updates" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Discard Updates">
                        <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                      <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" disabled="" tabIndex="0" disabled size="icon-xs" aria-label="Save Updates">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Created
                </span>
              </FieldLabel>
              <div className="col-start-1 flex items-center min-h-8 min-w-0 px-2.5 row-start-2 sm:col-start-2 sm:row-start-1">
                <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                  <span className="flex items-center shrink-0 text-muted-foreground">
                    <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </span>
                  <span className="min-w-0 truncate">
                    Jan 21, 2026 at 10:16 PM
                  </span>
                </span>
              </div>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-x-2 gap-y-1 grid group/row px-4 py-1.5 sm:gap-4 sm:grid-cols-[minmax(7.75rem,0.5fr)_minmax(0,1.5fr)] sm:items-center" role="group" data-orientation="vertical">
              <FieldLabel className="cn-field-title font-normal gap-1 items-center min-w-0 text-muted-foreground text-sm">
                <span className="min-w-0 truncate">
                  Updated
                </span>
              </FieldLabel>
              <div className="col-start-1 flex items-center min-h-8 min-w-0 px-2.5 row-start-2 sm:col-start-2 sm:row-start-1">
                <span className="flex font-medium gap-2 items-center min-h-8 min-w-0 text-foreground text-sm">
                  <span className="flex items-center shrink-0 text-muted-foreground">
                    <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </span>
                  <span className="min-w-0 truncate">
                    Just now
                  </span>
                </span>
              </div>
            </Field>
          </FramePanel>
        </Frame>
      </form>
    </main>
  )
}
