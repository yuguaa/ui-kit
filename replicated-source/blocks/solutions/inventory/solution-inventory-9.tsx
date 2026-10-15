import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Timeline,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/registry-neui/bases/radix/neui/timeline"
import { Button } from "@/registry/bases/base/ui/button"
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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full">
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          Open Track Shipping
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(48rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-11 px-4">
          <SheetTitle className="font-medium leading-5 text-sm truncate" id="base-ui-_r_3_">
            Track Shipping
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          Shipment SHP-3827462 live tracking and shipping log.
        </SheetDescription>
        <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold text-foreground text-xl tracking-tight">
                SHP-3827462
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Shipped
              </Badge>
            </div>
            <p className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
              <span>
                Placed
              </span>
              <span className="font-medium text-foreground">
                2022-01-01
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                Order ID
              </span>
              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#order-so-ams-4620">
                SO-AMS-4620
              </a>
            </p>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button href="#cancel-order" role="button" tabIndex="0">
              Cancel Order
            </Button>
            <Button type="button" tabIndex="0">
              Notify Customer
            </Button>
          </div>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "139px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-3 px-4 py-4">
              <Frame className="w-full" spacing="sm">
                <FramePanel className="flex flex-col gap-4 shadow-none!">
                  <div className="flex gap-4 items-start justify-between">
                    <Timeline className="flex-1 gap-0 min-w-0" data-orientation="vertical">
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:not-last:pb-2">
                        <TimelineSeparator className="bg-input group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                        <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          1234 Industrial Way, Dallas, TX 75201
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:pb-0">
                        <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          8458 Sunset Blvd #209, Los Angeles, CA 90069
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                    <div className="bg-background border border-border gap-2 inline-flex items-center px-2.5 py-1 rounded-md">
                      <svg className="h-3 w-auto" viewBox="0 0 40 12" role="img" aria-label="DHL" shape-rendering="geometricPrecision">
                        <rect width="40" height="12" rx="1.5" fill="#FFCC00"></rect>
                        <text x="3" y="9.4" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="8" fontWeight="900" font-style="italic" letter-spacing="-0.2" fill="#D40511">
                          DHL
                        </text>
                        <g fill="#D40511">
                          <polygon points="24,3.5 33,3.5 32,4.7 23,4.7"></polygon>
                          <polygon points="25,5.4 34,5.4 33,6.6 24,6.6"></polygon>
                          <polygon points="26,7.3 35,7.3 34,8.5 25,8.5"></polygon>
                        </g>
                      </svg>
                      <span className="font-medium text-foreground text-sm">
                        DHL Global
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="gap-2 grid grid-cols-4">
                      <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                      <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                      <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted h-1.5 rounded-full" aria-hidden="true"></span>
                    </div>
                    <div className="gap-2 grid grid-cols-4">
                      <div className="flex gap-1.5 items-center text-xs">
                        <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-4 text-white" aria-hidden="true">
                          <svg className="lucide lucide-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span className="font-medium text-foreground">
                          Picking
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-center text-xs">
                        <span className="bg-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-4 text-white" aria-hidden="true">
                          <svg className="lucide lucide-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span className="font-medium text-foreground">
                          Packed
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-center text-xs">
                        <span className="border-2 border-emerald-500 inline-flex items-center justify-center rounded-full shrink-0 size-4 text-emerald-500" aria-hidden="true">
                          <svg className="lucide lucide-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                        <span className="font-medium text-foreground">
                          Shipping
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-center text-xs">
                        <span className="border-2 border-muted-foreground/40 inline-flex rounded-full shrink-0 size-4" aria-hidden="true"></span>
                        <span className="text-muted-foreground">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Shipping Data
                  </div>
                </header>
                <FramePanel className="shadow-none!">
                  <div className="gap-x-4 gap-y-3 grid grid-cols-2 sm:grid-cols-4">
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Total Time
                      </span>
                      <div className="font-medium min-w-0 text-foreground text-sm">
                        19 days, 7 hours
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Dep. Time
                      </span>
                      <div className="font-medium min-w-0 text-foreground text-sm">
                        01 Aug, 2025 09:17
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Exp. Arrival
                      </span>
                      <div className="font-medium min-w-0 text-foreground text-sm">
                        17 Apr, 2025 12:00
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Tracking No.
                      </span>
                      <div className="font-medium min-w-0 text-foreground text-sm">
                        <span className="font-mono text-foreground text-sm">
                          1Z999AA10123456784
                        </span>
                      </div>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Shipping Log
                  </div>
                </header>
                <FramePanel className="shadow-none!">
                  <Timeline className="gap-0" data-orientation="vertical">
                    <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:not-last:pb-4">
                      <TimelineSeparator className="bg-input group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineContent className="text-foreground">
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-medium leading-snug text-foreground text-sm">
                              Order Placed
                            </span>
                            <time className="tabular-nums text-muted-foreground text-xs" datetime="28 Jul, 2025 10:02">
                              28 Jul, 2025 10:02
                            </time>
                          </div>
                          <p className="leading-snug text-muted-foreground text-xs">
                            Shipment information received by seller
                          </p>
                          <p className="gap-1 inline-flex items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Silicon Valley, CA
                          </p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:not-last:pb-4">
                      <TimelineSeparator className="bg-input group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineContent className="text-foreground">
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-medium leading-snug text-foreground text-sm">
                              Picking
                            </span>
                            <time className="tabular-nums text-muted-foreground text-xs" datetime="28 Jul, 2025 11:02">
                              28 Jul, 2025 11:02
                            </time>
                          </div>
                          <p className="leading-snug text-muted-foreground text-xs">
                            Items being picked from inventory
                          </p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:not-last:pb-4">
                      <TimelineSeparator className="bg-input group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                      <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineContent className="text-foreground">
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-medium leading-snug text-foreground text-sm">
                              Packed
                            </span>
                            <time className="tabular-nums text-muted-foreground text-xs" datetime="28 Jul, 2025 12:27">
                              28 Jul, 2025 12:27
                            </time>
                          </div>
                          <p className="leading-snug text-muted-foreground text-xs">
                            Shipment information received by seller
                          </p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-5 group-data-[orientation=vertical]/timeline:pb-0">
                      <TimelineIndicator className="bg-input border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                      <TimelineContent className="text-foreground">
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-medium leading-snug text-foreground text-sm">
                              Shipped
                            </span>
                            <time className="tabular-nums text-muted-foreground text-xs" datetime="28 Jul, 2025 14:27">
                              28 Jul, 2025 14:27
                            </time>
                          </div>
                          <p className="leading-snug text-muted-foreground text-xs">
                            Package handed off to carrier
                          </p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </FramePanel>
              </Frame>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "320.6272084805654px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="bg-muted/40 border-t px-4 py-3 shrink-0">
        <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0">
          Close
        </SheetClose>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
