import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Button } from "@/registry/bases/base/ui/button"
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
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Workspace launch dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[420px]">
        <Button type="button" tabIndex="0" extracted="1">
          {"Open launch checklist"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col sm:max-w-[600px]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_">
      <DialogHeader>
        <DialogTitle id="base-ui-_r_2_">
          {"Launch checklist"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Finalize routing, apps, and fallback rules before launch."}
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 flex-col grid min-h-0">
        <ScrollArea className="flex-1 max-h-[70vh] min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_4_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="in-data-[has-overflow-y]:pe-3">
              <Accordion className="bg-transparent border-0 gap-0 rounded-none shadow-none" data-orientation="vertical" dir="ltr" role="region">
                <AccordionItem className="bg-transparent border-0 data-open:bg-transparent m-0 p-0 rounded-none shadow-none" data-orientation="vertical" index="0" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                    <AccordionTrigger className="active:bg-transparent active:border-transparent! active:ring-0! aria-expanded:bg-transparent aria-expanded:border-transparent! aria-expanded:px-0! aria-expanded:py-3! aria-expanded:ring-0! bg-transparent border-transparent! box-border cursor-pointer focus-visible:after:border-transparent! focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! focus:bg-transparent focus:border-transparent! focus:outline-none! focus:ring-0! gap-4 hover:bg-transparent hover:no-underline! outline-none! px-0! py-3! ring-0! shadow-none! text-left" type="button" value="identity" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_6_" aria-expanded="true" id="base-ui-_r_7_" tabIndex="0">
                      <div className="flex flex-1 gap-3 items-start min-w-0">
                        <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                          <svg className="lucide lucide-shield-check size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </Item>
                        <div className="-mt-0.5 flex flex-col min-w-0">
                          <div className="flex gap-1.5 items-center mb-1">
                            <p className="font-medium text-foreground">
                              {"Ownership & cadence"}
                            </p>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"Lock in the primary operator, workspace alias, and review window."}
                          </p>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"In progress"}
                      </Badge>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="0" data-open="" id="base-ui-_r_6_" aria-labelledby="base-ui-_r_7_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) min-w-0 pb-2 ps-[3.25rem] pt-1">
                      <Item className="min-w-0 px-3 py-1.5 rounded-lg" variant="outline" size="default">
                        <ItemContent className="gap-0 min-w-0 w-full">
                          <ItemGroup className="gap-0 min-w-0" role="list">
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-user-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path d="M20 21a8 8 0 0 0-16 0"></path>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Launch owner"}
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Launch owner">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"Ari Mendoza"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_8_" placeholder="Enter launch owner" aria-label="Launch owner" type="text" value="Ari Mendoza" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Launch owner">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Launch owner">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-briefcase-business size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                    <path d="M12 12h.01"></path>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Workspace alias"}
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Workspace alias">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"growth-command"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_9_" placeholder="team-alias" aria-label="Workspace alias" type="text" value="growth-command" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Workspace alias">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Workspace alias">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-calendar-clock size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx="16" cy="16" r="6"></circle>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Review window"}
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Review window">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"Tue, 10:00 UTC"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_a_" placeholder="Pick review window" aria-label="Review window" type="text" value="Tue, 10:00 UTC" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Review window">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Review window">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                          </ItemGroup>
                        </ItemContent>
                      </Item>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="bg-transparent border-0 data-open:bg-transparent m-0 p-0 rounded-none shadow-none" data-orientation="vertical" hidden="" index="1" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                    <AccordionTrigger className="active:bg-transparent active:border-transparent! active:ring-0! aria-expanded:bg-transparent aria-expanded:border-transparent! aria-expanded:px-0! aria-expanded:py-3! aria-expanded:ring-0! bg-transparent border-transparent! box-border cursor-pointer focus-visible:after:border-transparent! focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! focus:bg-transparent focus:border-transparent! focus:outline-none! focus:ring-0! gap-4 hover:bg-transparent hover:no-underline! outline-none! px-0! py-3! ring-0! shadow-none! text-left" type="button" value="identity" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_d_" tabIndex="0">
                      <div className="flex flex-1 gap-3 items-start min-w-0">
                        <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                          <svg className="lucide lucide-route size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                            <circle cx="6" cy="19" r="3"></circle>
                            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                            <circle cx="18" cy="5" r="3"></circle>
                          </svg>
                        </Item>
                        <div className="-mt-0.5 flex flex-col min-w-0">
                          <div className="flex gap-1.5 items-center mb-1">
                            <p className="font-medium text-foreground">
                              {"Connected apps"}
                            </p>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"Choose the tools that can send events or receive rollout updates."}
                          </p>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                        {"Pending"}
                      </Badge>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" hidden="" index="1" data-closed="" hidden id="base-ui-_r_c_" aria-labelledby="base-ui-_r_d_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) min-w-0 pb-2 ps-[3.25rem] pt-1">
                      <Item className="px-3 py-3 rounded-lg" variant="outline" size="default">
                        <ItemContent className="gap-4 w-full">
                          <ItemHeader className="flex-wrap gap-3">
                            <InputGroup className="sm:max-w-xs" role="group">
                              <InputGroupAddon role="group" data-align="inline-start">
                                <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                  <path d="m21 21-4.34-4.34"></path>
                                  <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                              </InputGroupAddon>
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_e_" placeholder="Search apps" aria-label="Search apps" value="" />
                            </InputGroup>
                            <Button type="button" tabIndex="0">
                              <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                              {"Add app"}
                            </Button>
                          </ItemHeader>
                          <ItemGroup className="gap-2" role="list">
                            <Item className="px-3 py-3 rounded-lg" variant="outline" size="sm">
                              <ItemMedia className="pt-0.5 self-start text-foreground" variant="default">
                                <svg className="size-5" viewBox="0 0 2447.6 2452.5">
                                  <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                    <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                    <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                    <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                  </g>
                                </svg>
                              </ItemMedia>
                              <ItemContent className="gap-0.5 min-w-0 self-start">
                                <ItemTitle className="font-medium leading-5 text-sm">
                                  {"Slack"}
                                </ItemTitle>
                                <ItemDescription className="leading-5 text-muted-foreground text-sm">
                                  {"Posts rollout handoffs to the release channel."}
                                </ItemDescription>
                              </ItemContent>
                              <ItemActions className="gap-2 self-center shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Connected"}
                                </Badge>
                                <Button type="button" tabIndex="0">
                                  {"Manage"}
                                </Button>
                              </ItemActions>
                            </Item>
                            <Item className="px-3 py-3 rounded-lg" variant="outline" size="sm">
                              <ItemMedia className="pt-0.5 self-start text-foreground" variant="default">
                                <svg className="size-5" viewBox="0 0 512 512" fill="none">
                                  <g clipPath="url(#clip0_5072_3766)">
                                    <path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path>
                                    <path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path>
                                    <path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path>
                                    <path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path>
                                    <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path>
                                    <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path>
                                    <path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path>
                                    <path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path>
                                  </g>
                                  <defs>
                                    <clippath id="clip0_5072_3766">
                                      <rect width="512" height="512" fill="white"></rect>
                                    </clippath>
                                  </defs>
                                </svg>
                              </ItemMedia>
                              <ItemContent className="gap-0.5 min-w-0 self-start">
                                <ItemTitle className="font-medium leading-5 text-sm">
                                  {"Google Calendar"}
                                </ItemTitle>
                                <ItemDescription className="leading-5 text-muted-foreground text-sm">
                                  {"Adds freeze windows and review holds to the checklist."}
                                </ItemDescription>
                              </ItemContent>
                              <ItemActions className="gap-2 self-center shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Ready"}
                                </Badge>
                                <Button type="button" tabIndex="0">
                                  {"Connect"}
                                </Button>
                              </ItemActions>
                            </Item>
                            <Item className="px-3 py-3 rounded-lg" variant="outline" size="sm">
                              <ItemMedia className="pt-0.5 self-start text-foreground" variant="default">
                                <svg className="size-5" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                                </svg>
                              </ItemMedia>
                              <ItemContent className="gap-0.5 min-w-0 self-start">
                                <ItemTitle className="font-medium leading-5 text-sm">
                                  {"Loom"}
                                </ItemTitle>
                                <ItemDescription className="leading-5 text-muted-foreground text-sm">
                                  {"Stores quick walkthroughs for launch operators."}
                                </ItemDescription>
                              </ItemContent>
                              <ItemActions className="gap-2 self-center shrink-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Connected"}
                                </Badge>
                                <Button type="button" tabIndex="0">
                                  {"Manage"}
                                </Button>
                              </ItemActions>
                            </Item>
                          </ItemGroup>
                        </ItemContent>
                      </Item>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="bg-transparent border-0 data-open:bg-transparent m-0 p-0 rounded-none shadow-none" data-orientation="vertical" hidden="" index="2" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                    <AccordionTrigger className="active:bg-transparent active:border-transparent! active:ring-0! aria-expanded:bg-transparent aria-expanded:border-transparent! aria-expanded:px-0! aria-expanded:py-3! aria-expanded:ring-0! bg-transparent border-transparent! box-border cursor-pointer focus-visible:after:border-transparent! focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! focus:bg-transparent focus:border-transparent! focus:outline-none! focus:ring-0! gap-4 hover:bg-transparent hover:no-underline! outline-none! px-0! py-3! ring-0! shadow-none! text-left" type="button" value="identity" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_h_" tabIndex="0">
                      <div className="flex flex-1 gap-3 items-start min-w-0">
                        <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                          <svg className="lucide lucide-bell-ring size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellRingIcon" tabler="IconBellRinging2" hugeicons="Notification03Icon" phosphor="BellRingingIcon" remixicon="RiNotification4Line" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                          </svg>
                        </Item>
                        <div className="-mt-0.5 flex flex-col min-w-0">
                          <div className="flex gap-1.5 items-center mb-1">
                            <p className="font-medium text-foreground">
                              {"Fallback rules"}
                            </p>
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" aria-hidden="true" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 16v-4"></path>
                                <path d="M12 8h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"Set where alerts and digests land if the primary flow is paused."}
                          </p>
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                        {"Pending"}
                      </Badge>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" hidden="" index="2" data-closed="" hidden id="base-ui-_r_g_" aria-labelledby="base-ui-_r_h_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) min-w-0 pb-2 ps-[3.25rem] pt-1">
                      <Item className="min-w-0 px-3 py-1.5 rounded-lg" variant="outline" size="default">
                        <ItemContent className="gap-0 min-w-0 w-full">
                          <ItemGroup className="gap-0 min-w-0" role="list">
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Escalation inbox"}
                                  <Tooltip>
                                  <TooltipTrigger className="hover:text-foreground text-muted-foreground" type="button" aria-label="Escalation inbox info" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Escalation inbox">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"launch-ops@neui.io"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_m_" placeholder="team@company.com" aria-label="Escalation inbox" type="email" value="launch-ops@neui.io" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Escalation inbox">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Escalation inbox">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-user-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUserCircle" hugeicons="UserIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path d="M20 21a8 8 0 0 0-16 0"></path>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Backup approver"}
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Backup approver">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"Sana Qureshi"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_n_" placeholder="Enter backup approver" aria-label="Backup approver" type="text" value="Sana Qureshi" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Backup approver">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Backup approver">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                            <Item className="flex-nowrap min-h-0 px-0 py-0" variant="default" size="xs">
                              <ItemMedia className="self-center text-muted-foreground" variant="icon">
                                <div className="flex items-center justify-center shrink-0 size-4">
                                  <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                                    <path d="M14 17H5"></path>
                                    <path d="M19 7h-9"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                  </svg>
                                </div>
                              </ItemMedia>
                              <ItemContent className="gap-0 justify-center min-w-0 sm:basis-[12rem] sm:flex-none sm:max-w-[12rem]">
                                <ItemTitle className="font-normal gap-1.5 leading-5 text-muted-foreground text-sm whitespace-nowrap">
                                  {"Digest cadence"}
                                </ItemTitle>
                              </ItemContent>
                              <ItemActions className="flex-1 min-w-0">
                                <div className="min-h-8 relative w-full">
                                  <button className="absolute active:bg-muted/40 border border-transparent box-border duration-200 flex focus-visible:border-transparent! focus-visible:outline-none! focus-visible:ring-0! group/field-display hover:bg-muted/40 inset-0 items-center opacity-100 px-2.5 rounded-md text-left transition-[opacity,color,background-color] w-full" type="button" aria-label="Edit Digest cadence">
                                    <span className="block flex-1 font-medium min-w-0 pr-8 text-muted-foreground/70 text-sm truncate">
                                      {"Every business day"}
                                    </span>
                                    <span className="-translate-y-1/2 absolute duration-200 group-focus-visible/field-display:opacity-100 group-hover/field-display:opacity-100 opacity-0 pointer-events-none right-2 text-muted-foreground top-1/2 transition-opacity">
                                      <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                        <path d="m15 5 4 4"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="absolute duration-200 inset-0 opacity-0 pointer-events-none transition-opacity">
                                    <InputGroup className="box-border h-8 has-[[data-slot=input-group-control]:focus-visible]:border-input! has-[[data-slot=input-group-control]:focus-visible]:ring-0! has-[[data-slot=input-group-control]:focus-visible]:shadow-none!" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 focus-visible:ring-0! h-8 min-w-0 outline-none placeholder:text-muted-foreground text-left w-full" id="base-ui-_r_o_" placeholder="Choose digest cadence" aria-label="Digest cadence" type="text" value="Every business day" />
                                      <InputGroupAddon className="gap-1 pr-2" role="group" data-align="inline-end">
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Discard Digest cadence">
                                          <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex shadow-none" type="button" tabIndex="0" size="icon-xs" aria-label="Save Digest cadence">
                                          <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                            <path d="M20 6 9 17l-5-5"></path>
                                          </svg>
                                        </Button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </div>
                                </div>
                              </ItemActions>
                            </Item>
                          </ItemGroup>
                        </ItemContent>
                      </Item>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </ScrollArea>
      </div>
      <DialogFooter className="px-5 sm:items-center">
        <div className="flex gap-2 justify-end w-full">
          <Button type="button" tabIndex="0">
            {"Cancel"}
          </Button>
          <Button type="button" tabIndex="0">
            {"Save"}
          </Button>
        </div>
      </DialogFooter>
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
