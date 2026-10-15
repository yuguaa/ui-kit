import { Button } from "@/registry/bases/base/ui/button"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Project create sheet
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        Open project sheet
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden right-4 rounded-xl w-[min(34rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="p-0 shrink-0">
        <SheetTitle className="sr-only" id="base-ui-_r_3_">
          Create project
        </SheetTitle>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          Add a project title, description, owners, labels, and planning metadata.
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <form className="border-0 flex flex-col min-h-full pb-6 pt-8 px-6" id="sheet-1-project-form">
              <FieldGroup className="gap-0">
                <Field className="gap-0" role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="sheet-1-project-title">
                    Project name
                  </FieldLabel>
                  <Input className="bg-transparent border-0 focus-visible:ring-0 font-semibold h-auto px-0 py-0 rounded-none shadow-none text-2xl" id="sheet-1-project-title" placeholder="Project name" value=""></Input>
                </Field>
                <Field className="gap-0 mt-4" role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="sheet-1-project-description">
                    Project description
                  </FieldLabel>
                  <Textarea className="bg-transparent border-0 focus-visible:ring-0 min-h-12 px-0 py-0 resize-none rounded-none shadow-none text-muted-foreground" id="sheet-1-project-description" placeholder="Write a description, project brief, or collect ideas..." rows="2"></Textarea>
                </Field>
              </FieldGroup>
              <div className="flex flex-wrap gap-2 items-center mt-5" aria-label="Project metadata">
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project status" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="[&_*]:text-muted-foreground! lucide lucide-circle shrink-0 size-4 text-muted-foreground!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span className="truncate">
                      Planned
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="Planned scoped scheduled ready" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project priority" id="base-ui-_r_a_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="[&_*]:text-muted-foreground! lucide lucide-ellipsis shrink-0 size-4 text-muted-foreground!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    <span className="text-foreground! truncate">
                      No priority
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_a_-hidden-input" tabIndex="-1" aria-hidden="true" value="No priority clear priority none" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project lead" id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-user shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="text-muted-foreground truncate">
                      No lead
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_d_-hidden-input" tabIndex="-1" aria-hidden="true" value="No lead owner unassigned clear lead" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project members" placeholder="" id="base-ui-_r_g_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span className="text-muted-foreground truncate">
                      Members
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_g_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project milestone" id="base-ui-_r_j_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-flag shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                    </svg>
                    <span className="text-muted-foreground truncate">
                      No milestone
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_j_-hidden-input" tabIndex="-1" aria-hidden="true" value="No milestone clear milestone unlinked" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select target date" id="base-ui-_r_m_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-calendar shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span className="text-muted-foreground truncate">
                      Set target date
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_m_-hidden-input" tabIndex="-1" aria-hidden="true" value="No date clear date target empty" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-2 group/button inline-flex items-center justify-between max-w-full outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select project labels" placeholder="" id="base-ui-_r_q_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                  <span className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-tag shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="text-muted-foreground truncate">
                      Add labels
                    </span>
                  </span>
                  <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </ComboboxTrigger>
                <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="border-t mt-8 pt-5">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <div className="flex gap-2 items-center min-w-0">
                    <svg className="lucide lucide-flag shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                    </svg>
                    <span className="font-medium text-sm truncate">
                      Quick Tips
                    </span>
                  </div>
                  <Button href="#" role="button" tabIndex="0">
                    View Guide
                    <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex gap-2 items-start leading-snug min-w-0 py-0.5 text-muted-foreground text-sm">
                    <span className="leading-none mt-0.5 shrink-0 text-[13px]" aria-hidden="true">
                      ✨
                    </span>
                    <span>
                      Start with the outcome, not every task.
                    </span>
                  </div>
                  <div className="flex gap-2 items-start leading-snug min-w-0 py-0.5 text-muted-foreground text-sm">
                    <span className="leading-none mt-0.5 shrink-0 text-[13px]" aria-hidden="true">
                      🎯
                    </span>
                    <span>
                      Choose one lead before adding members.
                    </span>
                  </div>
                  <div className="flex gap-2 items-start leading-snug min-w-0 py-0.5 text-muted-foreground text-sm">
                    <span className="leading-none mt-0.5 shrink-0 text-[13px]" aria-hidden="true">
                      ⏱️
                    </span>
                    <span>
                      Set timing when it affects launch or review.
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="bg-muted border-t gap-3 shrink-0">
        <div className="flex flex-col gap-2">
          <Button className="w-full" type="submit" disabled="" tabIndex="0" disabled form="sheet-1-project-form">
            Create project
          </Button>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0">
            Close
          </SheetClose>
        </div>
      </SheetFooter>
      <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-sheet-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          Close
        </span>
      </SheetClose>
    </SheetContent>
    </Sheet>
  </>
  )
}
