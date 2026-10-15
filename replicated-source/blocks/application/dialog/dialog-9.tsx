import {
  Avatar,
  AvatarGroup,
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
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
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
        Add project dialog
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" data-icon="inline-start" aria-hidden="true">
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
          </svg>
          Open project dialog
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 max-h-[min(96svh,48rem)] max-w-[calc(100vw-1.5rem)] overflow-hidden p-0 sm:max-w-xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute backdrop-blur-sm bg-black/45 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none end-8 group/button hover:bg-black/60 hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shadow-md shrink-0 size-7 text-white top-8 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          Close
        </span>
      </DialogClose>
      <DialogTitle className="sr-only" id="base-ui-_r_2_">
        Create Project
      </DialogTitle>
      <DialogDescription className="sr-only" id="base-ui-_r_3_">
        Add a focused project space with a cover, brief, priority, labels, and owners.
      </DialogDescription>
      <div className="flex-col grid min-h-0">
        <ScrollArea className="max-h-[calc(96svh-5rem)] min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_4_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "54px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="p-5 pb-0">
              <div className="flex flex-col gap-3 shrink-0">
                <div className="bg-muted overflow-hidden relative rounded-md transition-shadow">
                  <input className="sr-only" aria-label="Upload project cover image" accept="image/*" type="file" />
                  <div className="aspect-[5/2] relative w-full">
                    <img className="absolute duration-300 h-full inset-0 object-cover opacity-100 transition-opacity w-full" alt="Project cover preview" src="https://picsum.photos/1200/514?random=19" />
                    <div className="absolute bottom-3 right-3">
                      <Button className="shadow-sm" type="button" tabIndex="0">
                        <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M12 3v12"></path>
                          <path d="m17 8-5-5-5 5"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        </svg>
                        Change cover
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="p-5 pt-4" id="dialog-9-project-form">
              <div>
                <FieldGroup className="gap-4">
                  <div className="gap-2 grid sm:grid-cols-[minmax(0,1fr)_9rem]">
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-name">
                        Project name
                      </FieldLabel>
                      <Input id="project-name" value="Atlas Launch System"></Input>
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-key">
                        Key
                      </FieldLabel>
                      <Input id="project-key" value="ALS"></Input>
                    </Field>
                  </div>
                  <Field className="gap-2" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center leading-snug w-fit">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="project-summary">
                        Project brief
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Project brief help" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Textarea className="min-h-20 resize-none" id="project-summary">
                      Coordinate launch tasks, owner reviews, and delivery checkpoints for the next workspace release.
                    </Textarea>
                  </Field>
                  <div className="gap-3 grid sm:grid-cols-2">
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                        Status
                      </FieldLabel>
                      <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_9_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="[&_*]:text-foreground/70! lucide lucide-circle shrink-0 size-4 text-foreground/70!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
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
                      <input id="base-ui-_r_9_-hidden-input" tabIndex="-1" aria-hidden="true" value="Planned scoped scheduled ready" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                        Priority
                      </FieldLabel>
                      <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_c_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                        <span className="flex gap-2 items-center min-w-0 text-foreground!">
                          <svg className="[&_*]:text-foreground! shrink-0 size-4 text-foreground!" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                            <rect x="3" y="9" width="2.5" height="4" rx="1" fill="currentColor"></rect>
                            <rect x="7" y="6" width="2.5" height="7" rx="1" fill="currentColor"></rect>
                            <rect x="11" y="3" width="2.5" height="10" rx="1" fill="currentColor" opacity="0.28"></rect>
                          </svg>
                          <span className="text-foreground! truncate">
                            Medium
                          </span>
                        </span>
                        <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </ComboboxTrigger>
                      <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="Medium normal weekly tracking" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <div className="flex gap-1.5 items-center leading-snug w-fit">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                          Assigned
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Assigned help" id="base-ui-_r_g_" baseUiTooltipTrigger="">
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
                          <span className="sr-only">
                            Selected users: Maya Stone,Leo Grant
                          </span>
                          <AvatarGroup className="-space-x-1">
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Maya Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-5" size="default">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="truncate">
                            2 users
                          </span>
                        </span>
                        <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </ComboboxTrigger>
                      <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <div className="flex gap-1.5 items-center leading-snug w-fit">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                          Labels
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Labels help" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_m_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="sr-only">
                            Selected labels: Feature,Design
                          </span>
                          <span className="bg-sky-500 rounded-full shrink-0 size-3" aria-hidden="true"></span>
                          <span className="bg-violet-500 rounded-full shrink-0 size-3" aria-hidden="true"></span>
                        </span>
                        <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </ComboboxTrigger>
                      <input id="base-ui-_r_m_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </div>
                </FieldGroup>
              </div>
            </form>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_4_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "477.1958762886598px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <DialogFooter className="flex-row items-center justify-end m-0 p-5 pt-4">
        <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
          Cancel
        </DialogClose>
        <Button type="submit" tabIndex="0" form="dialog-9-project-form">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Create project
        </Button>
      </DialogFooter>
    </DialogContent>
    </Dialog>
  </>
  )
}
