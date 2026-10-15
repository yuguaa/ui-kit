import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Ask NeUI support chat sheet"}
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <circle cx={4} cy={20} r={2}></circle>
        </svg>
        {"Open Ask NeUI"}
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden right-4 rounded-xl w-[min(28rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_d_">
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <div className="flex gap-2 items-center min-w-0">
            <SheetTitle className="font-medium text-sm truncate" id="base-ui-_r_3_">
              {"Ask NeUI"}
            </SheetTitle>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_5_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-square-pen size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
              <span className="sr-only">
                {"Start new Ask NeUI chat"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_7_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-refresh-cw size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              <span className="sr-only">
                {"Refresh Ask NeUI context"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open Ask NeUI actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close Ask NeUI sheet">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </SheetClose>
          </div>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_d_">
          {"Ask NeUI support chat with scrollable conversation history."}
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_e_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "117px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col min-h-full pb-4 pt-3 px-4">
              <section className="flex flex-col gap-2.5">
                <h2 className="font-medium leading-6 text-foreground text-lg">
                  {"What can Ask NeUI help with?"}
                </h2>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button type="button" tabIndex={0}>
                    {"Find NeUI issues related to sheets"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"What should I work on?"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"Show overdue review tasks"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"What block areas are active?"}
                  </Button>
                </div>
              </section>
              <section className="flex flex-col gap-4 mt-5">
                <article className="flex justify-end min-w-0">
                  <div className="bg-primary leading-5 max-w-[84%] min-w-0 px-3 py-1.5 rounded-xl text-primary-foreground text-sm">
                    {"Can you review sheet-10 before handoff?"}
                  </div>
                </article>
                <article className="flex gap-2 items-start min-w-0">
                  <span className="flex items-center justify-center mt-0.5 shrink-0 size-4 text-muted-foreground">
                    <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                    <span className="sr-only">
                      {"Ask NeUI reply"}
                    </span>
                  </span>
                  <div className="leading-5 max-w-[calc(100%-1.5rem)] min-w-0 text-sm">
                    <div className="flex flex-col min-w-0">
                      <div className="flex gap-2 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                        <span className="font-medium text-foreground">
                          {"Ask NeUI"}
                        </span>
                        <span>
                          {"4 hours ago"}
                        </span>
                      </div>
                      <div className="mt-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Yes. I would check the sheet shell first: header density, body scroll ownership, and whether the composer stays pinned without adding a footer divider."}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex justify-end min-w-0">
                  <div className="bg-primary leading-5 max-w-[84%] min-w-0 px-3 py-1.5 rounded-xl text-primary-foreground text-sm">
                    {"What should be fixed first?"}
                  </div>
                </article>
                <article className="flex gap-2 items-start min-w-0">
                  <span className="flex items-center justify-center mt-0.5 shrink-0 size-4 text-muted-foreground">
                    <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                    <span className="sr-only">
                      {"Ask NeUI reply"}
                    </span>
                  </span>
                  <div className="leading-5 max-w-[calc(100%-1.5rem)] min-w-0 text-sm">
                    <div className="flex flex-col min-w-0">
                      <div className="flex gap-2 items-center leading-5 min-w-0 text-muted-foreground text-xs">
                        <span className="font-medium text-foreground">
                          {"Ask NeUI"}
                        </span>
                        <span>
                          {"4 hours ago"}
                        </span>
                      </div>
                      <div className="mt-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Start with the footer. Keep the question entry form compact, remove extra footer actions, then confirm the chat still has enough context to feel useful."}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <div aria-hidden="true"></div>
              </section>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_e_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "286.1842105263158px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="shrink-0">
        <form className="w-full">
          <Field className="gap-2" role="group" data-orientation="vertical">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ask-neui-prompt">
              {"Ask NeUI prompt"}
            </FieldLabel>
            <InputGroup className="rounded-xl" role="group">
              <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="ask-neui-prompt" placeholder="Ask NeUI..." rows={2} aria-label="Ask NeUI prompt"></textarea>
              <InputGroupAddon className="gap-2 justify-between" role="group" data-align="block-end">
                <div className="flex gap-1 items-center">
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Add NeUI context">
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
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="button" tabIndex={0} size="icon-sm" aria-label="Use docs context">
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
                  <Button className="cn-input-group-button cn-input-group-button-size-icon-sm flex shadow-none" type="submit" tabIndex={0} size="icon-sm" aria-label="Send Ask NeUI prompt">
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
