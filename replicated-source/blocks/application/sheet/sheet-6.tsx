import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"View customizer sheet"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          {"Open view customizer"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(25rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <div className="min-w-0">
            <SheetTitle className="leading-5 text-sm truncate" id="base-ui-_r_3_">
              {"Customize View"}
            </SheetTitle>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          {"Tune how the roadmap workspace opens for this team."}
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="flex flex-col pb-3 pt-1 px-4">
              <section className="flex flex-col">
                <FieldGroup className="gap-0">
                  <Field className="border-b last:border-b-0 py-3" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate" htmlFor="view-customizer-auto-save" id="view-customizer-auto-save-label">
                        {"Auto Save"}
                      </FieldLabel>
                      <FieldDescription className="text-muted-foreground text-xs truncate">
                        {"Save view changes automatically."}
                      </FieldDescription>
                    </FieldContent>
                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_6_" aria-checked="true" size="sm" aria-labelledby="view-customizer-auto-save-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="view-customizer-auto-save" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                  <Field className="border-b last:border-b-0 py-3" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate" htmlFor="view-customizer-smart-filters" id="view-customizer-smart-filters-label">
                        {"Smart Filters"}
                      </FieldLabel>
                      <FieldDescription className="text-muted-foreground text-xs truncate">
                        {"Surface useful filter suggestions."}
                      </FieldDescription>
                    </FieldContent>
                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" size="sm" aria-labelledby="view-customizer-smart-filters-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="view-customizer-smart-filters" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                  <Field className="border-b last:border-b-0 py-3" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate" htmlFor="view-customizer-group-totals" id="view-customizer-group-totals-label">
                        {"Group Totals"}
                      </FieldLabel>
                      <FieldDescription className="text-muted-foreground text-xs truncate">
                        {"Show counts inside grouped sections."}
                      </FieldDescription>
                    </FieldContent>
                    <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_c_" aria-checked="false" size="sm" aria-labelledby="view-customizer-group-totals-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                    </Switch>
                    <input id="view-customizer-group-totals" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                  <Field className="border-b last:border-b-0 py-3" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate" htmlFor="view-customizer-pinned-columns" id="view-customizer-pinned-columns-label">
                        {"Pinned Columns"}
                      </FieldLabel>
                      <FieldDescription className="text-muted-foreground text-xs truncate">
                        {"Keep priority columns visible while scrolling."}
                      </FieldDescription>
                    </FieldContent>
                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_f_" aria-checked="true" size="sm" aria-labelledby="view-customizer-pinned-columns-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="view-customizer-pinned-columns" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                  <Field className="gap-2.5 mt-3" role="group" data-orientation="vertical">
                    <FieldContent className="gap-0.5">
                      <div className="flex gap-1.5 items-center min-w-0">
                        <FieldLabel className="cn-label font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate">
                          {"Layout Mode"}
                        </FieldLabel>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-sm shrink-0 size-4 text-muted-foreground transition-colors" type="button" aria-label="Layout Mode hint" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <FieldDescription className="text-muted-foreground text-xs">
                        {"Choose how the review workspace is framed."}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroup className="gap-3 grid grid-cols-2 pt-1" role="radiogroup" aria-label="Layout Mode">
                      <Field className="bg-background border border-primary gap-2.5 min-h-0 p-3 relative rounded-md transition-colors" role="group" data-orientation="vertical">
                        <RadioGroupItem className="sr-only" checked="" role="radio" tabIndex={0} aria-checked="true" compositeItemActive="" id="base-ui-_r_l_" aria-labelledby="sheet-6-layout-command-deck-label">
                          <span className="cn-radio-group-indicator" data-checked="">
                            <span className="cn-radio-group-indicator-icon"></span>
                          </span>
                        </RadioGroupItem>
                        <input id="sheet-6-layout-command-deck" tabIndex={-1} aria-hidden="true" type="radio" value="command-deck" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed select-none w-full" htmlFor="sheet-6-layout-command-deck" id="sheet-6-layout-command-deck-label">
                          <span className="sr-only">
                            {"Select Command Deck layout"}
                          </span>
                          <span className="aspect-[1.6] bg-muted/40 block border overflow-hidden p-4 rounded-md">
                            <span className="block h-full w-full">
                              <svg className="h-full w-full" viewBox="0 0 208 96" aria-hidden="true">
                                <rect className="fill-background stroke-border/70" x={0} y={8} width={46} height={80} rx={7}></rect>
                                <rect className="fill-muted-foreground/18" x={11} y={21} width={20} height={5} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={11} y={34} width={23} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={11} y={47} width={23} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={11} y={60} width={23} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={11} y={73} width={23} height={4} rx={2}></rect>
                                <rect className="fill-background stroke-border/70" x={58} y={8} width={150} height={80} rx={7}></rect>
                                <rect className="fill-muted-foreground/18" x={72} y={21} width={42} height={5} rx={2}></rect>
                                <rect className="fill-primary/10 stroke-primary/70" x={72} y={38} width={55} height={12} rx={3}></rect>
                                <rect className="fill-primary/70" x={82} y={43} width={22} height={3} rx={1.5}></rect>
                                <rect className="fill-muted-foreground/12" x={72} y={61} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={121} y={61} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={166} y={61} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={72} y={76} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={121} y={76} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={166} y={76} width={26} height={4} rx={2}></rect>
                                <line className="stroke-border/60" x1={72} y1={57} x2={196} y2={57} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                <line className="stroke-border/60" x1={72} y1={72} x2={196} y2={72} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                <line className="stroke-border/50" x1={112} y1={33} x2={112} y2={82} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                <line className="stroke-border/50" x1={156} y1={33} x2={156} y2={82} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                              </svg>
                            </span>
                          </span>
                        </FieldLabel>
                        <div className="flex items-center justify-center min-w-0 pb-0.5 px-1">
                          <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate w-auto" htmlFor="sheet-6-layout-command-deck">
                            {"Command Deck"}
                            <span className="sr-only">
                              {", Wide action rail with status strips."}
                            </span>
                          </FieldLabel>
                        </div>
                      </Field>
                      <Field className="bg-background border border-border/70 gap-2.5 hover:bg-muted/30 min-h-0 p-3 relative rounded-md transition-colors" role="group" data-orientation="vertical">
                        <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_o_" aria-labelledby="sheet-6-layout-insight-rail-label"></RadioGroupItem>
                        <input id="sheet-6-layout-insight-rail" tabIndex={-1} aria-hidden="true" type="radio" value="insight-rail" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed select-none w-full" htmlFor="sheet-6-layout-insight-rail" id="sheet-6-layout-insight-rail-label">
                          <span className="sr-only">
                            {"Select Insight Rail layout"}
                          </span>
                          <span className="aspect-[1.6] bg-muted/40 block border overflow-hidden p-4 rounded-md">
                            <span className="block h-full w-full">
                              <svg className="h-full w-full" viewBox="0 0 208 96" aria-hidden="true">
                                <rect className="fill-background stroke-border/70" x={0} y={8} width={142} height={80} rx={7}></rect>
                                <rect className="fill-muted-foreground/18" x={14} y={21} width={44} height={5} rx={2}></rect>
                                <rect className="fill-primary/10 stroke-primary/70" x={14} y={39} width={88} height={13} rx={3}></rect>
                                <rect className="fill-primary/70" x={24} y={44} width={30} height={3} rx={1.5}></rect>
                                <rect className="fill-muted-foreground/12" x={14} y={64} width={104} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={14} y={78} width={104} height={4} rx={2}></rect>
                                <line className="stroke-border/60" x1={14} y1={60} x2={126} y2={60} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                <line className="stroke-border/60" x1={14} y1={74} x2={126} y2={74} strokeWidth={1} vector-effect="non-scaling-stroke"></line>
                                <rect className="fill-background stroke-border/70" x={156} y={8} width={52} height={80} rx={7}></rect>
                                <rect className="fill-muted-foreground/18" x={168} y={21} width={18} height={5} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={168} y={34} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={168} y={47} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={168} y={60} width={26} height={4} rx={2}></rect>
                                <rect className="fill-muted-foreground/12" x={168} y={73} width={26} height={4} rx={2}></rect>
                              </svg>
                            </span>
                          </span>
                        </FieldLabel>
                        <div className="flex items-center justify-center min-w-0 pb-0.5 px-1">
                          <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm truncate w-auto" htmlFor="sheet-6-layout-insight-rail">
                            {"Insight Rail"}
                            <span className="sr-only">
                              {", Slim page with context pinned right."}
                            </span>
                          </FieldLabel>
                        </div>
                      </Field>
                    </RadioGroup>
                  </Field>
                </FieldGroup>
              </section>
            </div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="bg-muted border-t gap-3 grid grid-cols-2 min-w-0 px-5 py-4 shrink-0">
        <Button className="w-full" type="button" tabIndex={0}>
          {"Reset"}
        </Button>
        <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0}>
          {"Save"}
        </SheetClose>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
