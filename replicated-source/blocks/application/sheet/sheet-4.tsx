import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
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
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"NeUI assistant sheet"}
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <circle cx={4} cy={20} r={2}></circle>
        </svg>
        {"Open NeUI assistant"}
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden right-4 rounded-xl w-[min(28rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_d_">
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <SheetTitle className="sr-only" id="base-ui-_r_3_">
            {"NeUI AI GPT-5.4"}
          </SheetTitle>
          <Select>
          <SelectTrigger className="border-transparent focus-visible:ring-0 hover:text-accent-foreground px-0 shadow-none w-auto" type="button" tabIndex={0} id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Select assistant model">
            <span className="flex items-center min-w-0">
              <span className="shrink-0">
                {"NeUI AI ("}
              </span>
              <SelectValue>
                {"GPT-5.4"}
              </SelectValue>
              <span className="shrink-0">
                {")"}
              </span>
            </span>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              {"▼"}
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_4_-hidden-input" tabIndex={-1} aria-hidden="true" value="gpt-5-4" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          <div className="flex gap-1 items-center shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_8_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
              <span className="sr-only">
                {"Start new assistant thread"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_a_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              <span className="sr-only">
                {"Refresh assistant context"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_c_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
              <span className="sr-only">
                {"Open assistant actions"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close assistant sheet">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </SheetClose>
          </div>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_d_">
          {"Ask NeUI AI to inspect workspace tasks, summarize changes, and draft next steps."}
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_e_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="flex flex-col min-h-full px-4 py-4">
              <section className="flex flex-col gap-3">
                <h2 className="font-medium leading-6 text-foreground text-lg">
                  {"What can NeUI do for you?"}
                </h2>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button type="button" tabIndex={0}>
                    {"Overdue items"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"Today's changes"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"My active work"}
                  </Button>
                </div>
              </section>
              <section className="flex flex-col gap-2.5 mt-6">
                <article className="flex justify-end">
                  <div className="bg-primary leading-5 max-w-[84%] px-3 py-1.5 rounded-xl text-primary-foreground text-sm">
                    {"Show my open NeUI sheet tasks."}
                  </div>
                </article>
                <article className="flex justify-start">
                  <div className="max-w-[92%] min-w-0">
                    <div className="flex flex-col min-w-0">
                      <button className="flex gap-1.5 hover:text-foreground items-center leading-5 text-muted-foreground text-xs w-fit" type="button">
                        <svg className="lucide lucide-brain size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BrainIcon" tabler="IconBrain" hugeicons="AiBrain01Icon" phosphor="BrainIcon" remixicon="RiBrainLine" aria-hidden="true">
                          <path d="M12 18V5"></path>
                          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                          <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                          <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                        </svg>
                        <span>
                          {"Thought for a few seconds"}
                        </span>
                        <svg className="lucide lucide-chevron-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <div className="mt-2">
                        <p className="leading-5 text-foreground text-sm">
                          {"You have three sheet tasks in review. Sheet 4 needs a spacing polish, Sheet 8 is ready for visual QA, and Sheet 9 is waiting on copy approval."}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center mt-2">
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_g_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                            <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                          <span className="sr-only">
                            {"Copy answer"}
                          </span>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_i_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                            <path d="M7 10v12"></path>
                          </svg>
                          <span className="sr-only">
                            {"Good response"}
                          </span>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_k_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-thumbs-up rotate-180 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                            <path d="M7 10v12"></path>
                          </svg>
                          <span className="sr-only">
                            {"Needs improvement"}
                          </span>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_m_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                          </svg>
                          <span className="sr-only">
                            {"Regenerate"}
                          </span>
                        </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_o_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-file-text size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="sr-only">
                            {"Create note"}
                          </span>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex justify-end">
                  <div className="bg-primary leading-5 max-w-[84%] px-3 py-1.5 rounded-xl text-primary-foreground text-sm">
                    {"Keep the chat composer ready for the next prompt."}
                  </div>
                </article>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="shrink-0">
        <form className="w-full">
          <Field className="gap-2" role="group" data-orientation="vertical">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="neui-assistant-prompt">
              {"Prompt"}
            </FieldLabel>
            <InputGroup className="rounded-xl" role="group">
              <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="neui-assistant-prompt" placeholder="How can I help you today?" rows={2} aria-label="Prompt"></textarea>
              <InputGroupAddon className="gap-2 justify-between" role="group" data-align="block-end">
                <div className="flex gap-1 items-center">
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Add workspace context">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Add image">
                    <svg className="lucide lucide-image" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ImageIcon" tabler="IconPhoto" hugeicons="Image01Icon" phosphor="ImageIcon" remixicon="RiImageLine" aria-hidden="true">
                      <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                      <circle cx={9} cy={9} r={2}></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </Button>
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Use web context">
                    <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-center">
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Use voice input">
                    <svg className="lucide lucide-mic" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MicIcon" tabler="IconMicrophone" hugeicons="Mic02Icon" phosphor="MicrophoneIcon" remixicon="RiMicLine" aria-hidden="true">
                      <path d="M12 19v3"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <rect x={9} y={2} width={6} height={13} rx={3}></rect>
                    </svg>
                  </Button>
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="submit" tabIndex={0} size="icon-sm" aria-label="Send prompt">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </Button>
                </div>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </form>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
