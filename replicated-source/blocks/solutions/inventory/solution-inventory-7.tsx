import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { Button } from "@/registry/bases/base/ui/button"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full">
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          {"Open Stock Planner"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(60rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" style={{"--nested-dialogs": "0"}} aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_">
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-11 px-4">
          <SheetTitle className="font-medium leading-5 text-sm truncate" id="base-ui-_r_3_">
            {"Product Details & Analytics"}
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          {"Detailed inventory, analytics, and variant data for Cloud Shift Lightweight Runner."}
        </SheetDescription>
        <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold text-foreground text-lg tracking-tight">
                {"Cloud Shift Lightweight Runner"}
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"Live"}
              </Badge>
            </div>
            <p className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
              <span>
                {"SKU"}
              </span>
              <span className="font-medium font-mono text-foreground">
                {"WM-8421"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"Created"}
              </span>
              <span className="font-medium text-foreground">
                {"16 Jan, 2025"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"Last Updated"}
              </span>
              <span className="font-medium text-foreground">
                {"2 days ago"}
              </span>
            </p>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#customer-view">
              {"Customer View"}
            </a>
            <Button type="button" tabIndex="0">
              {"Remove"}
            </Button>
            <Button type="button" tabIndex="0">
              {"Edit Product"}
            </Button>
          </div>
        </div>
      </SheetHeader>
      <div className="flex-1 lg:hidden min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
            <div className="flex flex-col gap-3 px-4 py-4">
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                  <div className="font-semibold text-sm">
                    {"Inventory"}
                  </div>
                </header>
                <FramePanel className="shadow-none!">
                  <div className="gap-x-4 gap-y-3 grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3">
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        {"Status"}
                      </span>
                      <div className="flex items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"In Stock"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        {"In Stock"}
                      </span>
                      <div className="flex items-center min-w-0">
                        <span className="font-semibold tabular-nums text-foreground text-sm">
                          {"1,263"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        {"Delta"}
                      </span>
                      <div className="flex items-center min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                          {"+289"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        {"Velocity"}
                      </span>
                      <div className="flex items-center min-w-0">
                        <span className="tabular-nums text-foreground text-sm">
                          {"0.24/day"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        {"Updated By"}
                      </span>
                      <div className="flex items-center min-w-0">
                        <span className="text-foreground text-sm">
                          {"Jason Taytum"}
                        </span>
                      </div>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                  <div className="font-semibold text-sm">
                    {"Analytics"}
                  </div>
                </header>
                <FramePanel className="shadow-none!">
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-xs">
                          {"Sales price"}
                        </span>
                        <div className="flex gap-2 items-baseline">
                          <span className="font-semibold tabular-nums text-foreground text-lg">
                            {"$96.23"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"3.5%"}
                          </Badge>
                        </div>
                      </div>
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-[60px] justify-center text-xs w-full" data-chart="chart-_r_6_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_6_] {\n  --color-value: var(--color-purple-500);\n}\n\n\n.dark [data-chart=chart-_r_6_] {\n  --color-value: var(--color-purple-500);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}></div>
                        </div>
                      </div>
                      </ChartContainer>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-xs">
                          {"Sales"}
                        </span>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                          <span className="font-semibold tabular-nums text-foreground text-lg">
                            {"6,346"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            {"18%"}
                          </Badge>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"$43,784.02"}
                          </span>
                        </div>
                      </div>
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-[60px] justify-center text-xs w-full" data-chart="chart-_r_7_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_7_] {\n  --color-value: var(--color-purple-500);\n}\n\n\n.dark [data-chart=chart-_r_7_] {\n  --color-value: var(--color-purple-500);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}></div>
                        </div>
                      </div>
                      </ChartContainer>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                  <div className="font-semibold text-sm">
                    {"Variants"}
                  </div>
                  <Button href="#manage-variants" role="button" tabIndex="0">
                    {"Manage Variants"}
                  </Button>
                </header>
                <FramePanel className="p-0! shadow-none!">
                  <div className="cn-table-container">
                    <Table className="[&_td]:py-1.5 [&_th]:py-2">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">
                            {"Size"}
                          </TableHead>
                          <TableHead className="text-xs">
                            {"Color"}
                          </TableHead>
                          <TableHead className="text-xs">
                            {"Price"}
                          </TableHead>
                          <TableHead className="text-xs">
                            {"Available"}
                          </TableHead>
                          <TableHead className="text-xs">
                            {"On Hand"}
                          </TableHead>
                          <TableHead className="text-right text-xs w-10">
                            <span className="sr-only">
                              {"Edit"}
                            </span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 40"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"White"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-foreground text-sm">
                            {"Yes"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"24"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 40 White">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 39"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"White"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-foreground text-sm">
                            {"Yes"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"18"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 39 White">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 42"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"Black"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-foreground text-sm">
                            {"Yes"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"12"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 42 Black">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 41"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"White"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {"No"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"30"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 41 White">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 44"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"Red"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-foreground text-sm">
                            {"Yes"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"27"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 44 Red">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-foreground text-sm">
                            {"EU 43"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {"Black"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"$96.00"}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {"No"}
                          </TableCell>
                          <TableCell className="tabular-nums text-sm">
                            {"15"}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button type="button" tabIndex="0" aria-label="Edit EU 43 Black">
                              <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </FramePanel>
              </Frame>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-4 py-4">
              <div className="flex flex-col gap-2">
                <div className="aspect-square bg-muted/40 overflow-hidden relative ring-1 ring-border/60 rounded-lg w-full">
                  <img className="h-full object-cover w-full" alt="Cloud Shift Lightweight Runner" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=560&h=560&q=80" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <button className="bg-muted/40 overflow-hidden relative ring-2 ring-foreground rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 1">
                    <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=560&h=560&q=80" />
                  </button>
                  <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 2">
                    <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=560&h=560&q=80" />
                  </button>
                  <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 3">
                    <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=560&h=560&q=80" />
                  </button>
                  <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 4">
                    <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=560&h=560&q=80" />
                  </button>
                  <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 5">
                    <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=560&h=560&q=80" />
                  </button>
                </div>
              </div>
              <p className="leading-5 text-foreground text-pretty text-xs">
                {"Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh."}
              </p>
              <dl className="gap-x-4 gap-y-2 grid grid-cols-[5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Category"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    <span className="flex-wrap gap-x-1.5 gap-y-1 inline-flex items-center">
                      <span className="gap-x-1.5 inline-flex items-center">
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-sneakers">
                          {"Sneakers"}
                        </a>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-running">
                          {"Running"}
                        </a>
                      </span>
                      <span className="gap-x-1.5 inline-flex items-center">
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-lifestyle">
                          {"Lifestyle"}
                        </a>
                      </span>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Fit"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    {"True to size"}
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Colors"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-white border border-border inline-block rounded-full size-3.5" aria-label="White"></span>
                      <span className="bg-black inline-block rounded-full size-3.5" aria-label="Black"></span>
                      <span className="bg-red-500 inline-block rounded-full size-3.5" aria-label="Red"></span>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Sizes"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    <span className="tabular-nums text-foreground text-xs">
                      {"EU: 39-45   US: 6-12   UK: 5.5-11.5"}
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Rating"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    <span className="flex gap-2 items-center">
                      <Rating className="gap-0.5">
                        <div className="flex items-center">
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                              <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Rating>
                      <a className="hover:text-primary hover:underline text-primary text-xs transition-colors underline-offset-4" href="#reviews">
                        {"834 reviews"}
                      </a>
                    </span>
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-xs">
                    {"Uploaded by"}
                  </dt>
                  <dd className="font-medium text-foreground text-xs">
                    <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#user-jtaytum">
                      {"Jason Taytum"}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="flex-1 flex-row hidden lg:flex min-h-0">
        <div className="flex-1 min-h-0 min-w-0">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "252px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-3 px-4 py-4">
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                    <div className="font-semibold text-sm">
                      {"Inventory"}
                    </div>
                  </header>
                  <FramePanel className="shadow-none!">
                    <div className="gap-x-4 gap-y-3 grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Status"}
                        </span>
                        <div className="flex items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            {"In Stock"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"In Stock"}
                        </span>
                        <div className="flex items-center min-w-0">
                          <span className="font-semibold tabular-nums text-foreground text-sm">
                            {"1,263"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Delta"}
                        </span>
                        <div className="flex items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                            {"+289"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Velocity"}
                        </span>
                        <div className="flex items-center min-w-0">
                          <span className="tabular-nums text-foreground text-sm">
                            {"0.24/day"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Updated By"}
                        </span>
                        <div className="flex items-center min-w-0">
                          <span className="text-foreground text-sm">
                            {"Jason Taytum"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                    <div className="font-semibold text-sm">
                      {"Analytics"}
                    </div>
                  </header>
                  <FramePanel className="shadow-none!">
                    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-muted-foreground text-xs">
                            {"Sales price"}
                          </span>
                          <div className="flex gap-2 items-baseline">
                            <span className="font-semibold tabular-nums text-foreground text-lg">
                              {"$96.23"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"3.5%"}
                            </Badge>
                          </div>
                        </div>
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-[60px] justify-center text-xs w-full" data-chart="chart-_r_9_">
                          <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_9_] {\n  --color-value: var(--color-purple-500);\n}\n\n\n.dark [data-chart=chart-_r_9_] {\n  --color-value: var(--color-purple-500);\n}\n" }} />
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                            <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                              <div className="recharts-wrapper" width="252" height="60" style={{position: "relative", cursor: "default", width: "252px", height: "60px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" role="application" tabIndex="0" width="252" height="60" viewBox="0 0 252 60" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts1-clip">
                                      <rect x="0" y="4" height="56" width="252"></rect>
                                    </clippath>
                                  </defs>
                                  <defs>
                                    <lineargradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-value)" stopOpacity="0.25"></stop>
                                      <stop offset="95%" stopColor="var(--color-value)" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_c_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#sparklineGradient)" fillOpacity="0.6" height="56" stroke="none" width="252" id="recharts-area-_r_c_" d="M0,20.8C14,17.415,28,14.03,42,14.733C56,15.437,70,20.229,84,19.867C98,19.504,112,13.988,126,13.8C140,13.612,154,18.753,168,18.933C182,19.114,196,14.334,210,12.867C224,11.4,238,13.246,252,15.093L252,60C238,60,224,60,210,60C196,60,182,60,168,60C154,60,140,60,126,60C112,60,98,60,84,60C70,60,56,60,42,60C28,60,14,60,0,60Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.6" height="56" stroke="var(--color-value)" width="252" d="M0,20.8C14,17.415,28,14.03,42,14.733C56,15.437,70,20.229,84,19.867C98,19.504,112,13.988,126,13.8C140,13.612,154,18.753,168,18.933C182,19.114,196,14.334,210,12.867C224,11.4,238,13.246,252,15.093"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        </ChartContainer>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-muted-foreground text-xs">
                            {"Sales"}
                          </span>
                          <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                            <span className="font-semibold tabular-nums text-foreground text-lg">
                              {"6,346"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"18%"}
                            </Badge>
                            <span className="tabular-nums text-muted-foreground text-xs">
                              {"$43,784.02"}
                            </span>
                          </div>
                        </div>
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-[60px] justify-center text-xs w-full" data-chart="chart-_r_a_">
                          <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_a_] {\n  --color-value: var(--color-purple-500);\n}\n\n\n.dark [data-chart=chart-_r_a_] {\n  --color-value: var(--color-purple-500);\n}\n" }} />
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                            <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                              <div className="recharts-wrapper" width="252" height="60" style={{position: "relative", cursor: "default", width: "252px", height: "60px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" role="application" tabIndex="0" width="252" height="60" viewBox="0 0 252 60" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts2-clip">
                                      <rect x="0" y="4" height="56" width="252"></rect>
                                    </clippath>
                                  </defs>
                                  <defs>
                                    <lineargradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-value)" stopOpacity="0.25"></stop>
                                      <stop offset="95%" stopColor="var(--color-value)" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_d_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#sparklineGradient)" fillOpacity="0.6" height="56" stroke="none" width="252" id="recharts-area-_r_d_" d="M0,26.4C14,18.021,28,9.642,42,11.467C56,13.291,70,25.32,84,24.533C98,23.747,112,10.145,126,9.6C140,9.055,154,21.567,168,22.667C182,23.766,196,13.454,210,10.533C224,7.612,238,12.083,252,16.553L252,60C238,60,224,60,210,60C196,60,182,60,168,60C154,60,140,60,126,60C112,60,98,60,84,60C70,60,56,60,42,60C28,60,14,60,0,60Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="0.6" height="56" stroke="var(--color-value)" width="252" d="M0,26.4C14,18.021,28,9.642,42,11.467C56,13.291,70,25.32,84,24.533C98,23.747,112,10.145,126,9.6C140,9.055,154,21.567,168,22.667C182,23.766,196,13.454,210,10.533C224,7.612,238,12.083,252,16.553"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        </ChartContainer>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5!">
                    <div className="font-semibold text-sm">
                      {"Variants"}
                    </div>
                    <Button href="#manage-variants" role="button" tabIndex="0">
                      {"Manage Variants"}
                    </Button>
                  </header>
                  <FramePanel className="p-0! shadow-none!">
                    <div className="cn-table-container">
                      <Table className="[&_td]:py-1.5 [&_th]:py-2">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs">
                              {"Size"}
                            </TableHead>
                            <TableHead className="text-xs">
                              {"Color"}
                            </TableHead>
                            <TableHead className="text-xs">
                              {"Price"}
                            </TableHead>
                            <TableHead className="text-xs">
                              {"Available"}
                            </TableHead>
                            <TableHead className="text-xs">
                              {"On Hand"}
                            </TableHead>
                            <TableHead className="text-right text-xs w-10">
                              <span className="sr-only">
                                {"Edit"}
                              </span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 40"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"White"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-foreground text-sm">
                              {"Yes"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"24"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 40 White">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 39"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"White"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-foreground text-sm">
                              {"Yes"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"18"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 39 White">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 42"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"Black"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-foreground text-sm">
                              {"Yes"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"12"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 42 Black">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 41"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"White"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {"No"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"30"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 41 White">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 44"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"Red"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-foreground text-sm">
                              {"Yes"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"27"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 44 Red">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium text-foreground text-sm">
                              {"EU 43"}
                            </TableCell>
                            <TableCell className="text-sm">
                              {"Black"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"$96.00"}
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">
                              {"No"}
                            </TableCell>
                            <TableCell className="tabular-nums text-sm">
                              {"15"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button type="button" tabIndex="0" aria-label="Edit EU 43 Black">
                                <svg className="lucide lucide-pencil size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_8_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "274.1703056768559px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
        <Separator className="self-stretch" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
        <div className="min-h-0 shrink-0 w-[380px]">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "201px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-3 px-4 py-4">
                <div className="flex flex-col gap-2">
                  <div className="aspect-square bg-muted/40 overflow-hidden relative ring-1 ring-border/60 rounded-lg w-full">
                    <img className="h-full object-cover w-full" alt="Cloud Shift Lightweight Runner" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=560&h=560&q=80" />
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <button className="bg-muted/40 overflow-hidden relative ring-2 ring-foreground rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 1">
                      <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=560&h=560&q=80" />
                    </button>
                    <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 2">
                      <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=560&h=560&q=80" />
                    </button>
                    <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 3">
                      <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=560&h=560&q=80" />
                    </button>
                    <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 4">
                      <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=560&h=560&q=80" />
                    </button>
                    <button className="bg-muted/40 hover:ring-border overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0 size-12 transition" type="button" aria-label="View image 5">
                      <img className="h-full object-cover w-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=560&h=560&q=80" />
                    </button>
                  </div>
                </div>
                <p className="leading-5 text-foreground text-pretty text-xs">
                  {"Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh."}
                </p>
                <dl className="gap-x-4 gap-y-2 grid grid-cols-[5rem_1fr]">
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Category"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      <span className="flex-wrap gap-x-1.5 gap-y-1 inline-flex items-center">
                        <span className="gap-x-1.5 inline-flex items-center">
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-sneakers">
                            {"Sneakers"}
                          </a>
                        </span>
                        <span className="gap-x-1.5 inline-flex items-center">
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-running">
                            {"Running"}
                          </a>
                        </span>
                        <span className="gap-x-1.5 inline-flex items-center">
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#category-lifestyle">
                            {"Lifestyle"}
                          </a>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Fit"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      {"True to size"}
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Colors"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      <span className="flex gap-1.5 items-center">
                        <span className="bg-white border border-border inline-block rounded-full size-3.5" aria-label="White"></span>
                        <span className="bg-black inline-block rounded-full size-3.5" aria-label="Black"></span>
                        <span className="bg-red-500 inline-block rounded-full size-3.5" aria-label="Red"></span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Sizes"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      <span className="tabular-nums text-foreground text-xs">
                        {"EU: 39-45   US: 6-12   UK: 5.5-11.5"}
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Rating"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      <span className="flex gap-2 items-center">
                        <Rating className="gap-0.5">
                          <div className="flex items-center">
                            <div className="relative">
                              <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="relative">
                              <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="relative">
                              <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="relative">
                              <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                            </div>
                            <div className="relative">
                              <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                              </svg>
                              <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Rating>
                        <a className="hover:text-primary hover:underline text-primary text-xs transition-colors underline-offset-4" href="#reviews">
                          {"834 reviews"}
                        </a>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-xs">
                      {"Uploaded by"}
                    </dt>
                    <dd className="font-medium text-foreground text-xs">
                      <a className="font-medium hover:text-primary hover:underline text-foreground text-xs transition-colors underline-offset-4" href="#user-jtaytum">
                        {"Jason Taytum"}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_b_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "296.1556603773585px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
      </div>
      <SheetFooter className="bg-muted/40 border-t flex-row gap-2 items-center justify-end px-4 py-2.5 shrink-0">
        <div className="flex gap-2 items-center shrink-0">
          <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#customer-view">
            {"Customer View"}
          </a>
          <Button type="button" tabIndex="0">
            {"Remove"}
          </Button>
          <Button type="button" tabIndex="0">
            {"Edit Product"}
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
