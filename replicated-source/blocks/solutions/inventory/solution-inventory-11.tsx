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
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Label } from "@/registry/bases/base/ui/label"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full">
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          Open Order Details
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(64rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-11 px-4">
          <SheetTitle className="font-medium leading-5 text-sm truncate" id="base-ui-_r_3_">
            Order Details
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          Order SO-FL-5633 details, items, route and totals.
        </SheetDescription>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-4 py-3.5">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold text-foreground text-xl tracking-tight">
                Order: SO-FL-5633
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Shipped
              </Badge>
            </div>
            <p className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
              <span>
                Created
              </span>
              <span className="font-medium text-foreground">
                16 Jan, 2025
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                Customer:
              </span>
              <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#customer-jeroen-de-jong">
                Jeroen de Jong
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center shrink-0">
            <Button href="#delete-order" role="button" tabIndex="0">
              Delete
            </Button>
            <Button type="button" tabIndex="0">
              Order Tracking
            </Button>
            <Button type="button" tabIndex="0">
              View Shipping Label
            </Button>
          </div>
        </div>
      </SheetHeader>
      <div className="flex-1 lg:hidden min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Order Data
                  </div>
                </header>
                <FramePanel className="shadow-none!">
                  <div className="gap-x-4 gap-y-3 grid grid-cols-2 sm:grid-cols-4">
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Items
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium text-foreground text-sm">
                          2 Items
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Total Price
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium tabular-nums text-foreground text-sm">
                          $320.00
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Shipping Priority
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium text-foreground text-sm">
                          High
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-muted-foreground text-xs">
                        Delivery Method
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium text-foreground text-sm">
                          Express Delivery
                        </span>
                      </div>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Products
                  </div>
                </header>
                <FramePanel className="flex flex-col gap-4 shadow-none!">
                  <div className="flex flex-col gap-4" role="list">
                    <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                      <ItemMedia className="bg-muted border relative size-10" variant="image">
                        <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-wm-8421" aria-label="View Nike Air Max 270 React SE">
                          <img alt="Nike Air Max 270 React SE" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=160&h=160&q=80" />
                        </a>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle className="font-medium text-sm">
                          <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-wm-8421">
                            Nike Air Max 270 React SE
                          </a>
                        </ItemTitle>
                        <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                          <span>
                            SKU:
                          </span>
                          <span className="font-medium font-mono text-foreground">
                            WM-8421
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            Color Beige
                          </span>
                        </ItemDescription>
                      </ItemContent>
                      <InputGroup className="shrink-0 w-32" role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <Label className="font-normal text-muted-foreground text-xs" htmlFor="weight-WM-8421">
                            Weight
                          </Label>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="weight-WM-8421" inputmode="decimal" aria-label="Weight of Nike Air Max 270 React SE in kilograms" type="text" value="1.2" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <span className="text-muted-foreground text-xs">
                            kg
                          </span>
                        </InputGroupAddon>
                      </InputGroup>
                    </Item>
                    <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                      <ItemMedia className="bg-muted border relative size-10" variant="image">
                        <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-xr-0293" aria-label="View Wave Strike Dynamic Boost Sneaker">
                          <img alt="Wave Strike Dynamic Boost Sneaker" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=160&h=160&q=80" />
                        </a>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle className="font-medium text-sm">
                          <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-xr-0293">
                            Wave Strike Dynamic Boost Sneaker
                          </a>
                        </ItemTitle>
                        <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                          <span>
                            SKU:
                          </span>
                          <span className="font-medium font-mono text-foreground">
                            XR-0293
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            Color Red
                          </span>
                        </ItemDescription>
                      </ItemContent>
                      <InputGroup className="shrink-0 w-32" role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <Label className="font-normal text-muted-foreground text-xs" htmlFor="weight-XR-0293">
                            Weight
                          </Label>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="weight-XR-0293" inputmode="decimal" aria-label="Weight of Wave Strike Dynamic Boost Sneaker in kilograms" type="text" value="0.9" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <span className="text-muted-foreground text-xs">
                            kg
                          </span>
                        </InputGroupAddon>
                      </InputGroup>
                    </Item>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="w-full" spacing="sm">
                <FramePanel className="flex flex-col gap-0 p-0! shadow-none!">
                  <div className="flex flex-col gap-3 items-start justify-between px-4 py-3.5 sm:flex-row sm:items-center">
                    <Timeline className="flex-1 gap-0 min-w-0" data-orientation="vertical">
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-3 group-data-[orientation=vertical]/timeline:not-last:pb-2">
                        <TimelineSeparator className="bg-primary group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                        <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          1234 Industrial Way, Dallas, TX 75201
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-3 group-data-[orientation=vertical]/timeline:pb-0">
                        <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          8458 Sunset Blvd #209, Los Angeles, CA 90069
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-7 min-w-5 outline-none px-2.5 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-sm transition-shadow">
                      <svg className="h-4 w-auto" viewBox="0 0 20 22" role="img" aria-label="UPS" shape-rendering="geometricPrecision">
                        <path d="M10 1 1 4v9.2c0 3.4 2 5.6 4.5 6.7L10 22l4.5-2.1c2.5-1.1 4.5-3.3 4.5-6.7V4l-9-3Z" fill="#644117"></path>
                        <path d="M10 2.4 2.4 5v8.2c0 2.8 1.6 4.6 3.6 5.5L10 20.4l4-1.7c2-.9 3.6-2.7 3.6-5.5V5L10 2.4Z" fill="#FFB500"></path>
                        <text x="10" y="14" textAnchor="middle" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="6" fontWeight="900" fill="#644117">
                          UPS
                        </text>
                      </svg>
                      UPS Global
                    </Badge>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="px-4 py-3.5">
                    <div className="flex flex-col gap-2.5">
                      <div className="gap-2 grid grid-cols-4">
                        <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                        <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                        <span className="bg-gradient-to-r from-emerald-500 h-1.5 rounded-full to-emerald-500/30" aria-hidden="true"></span>
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
                  </div>
                </FramePanel>
              </Frame>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Summary
                  </div>
                </header>
                <FramePanel className="flex flex-col gap-4 shadow-none!">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground text-sm">
                      Shipping to Jeroen's Home
                    </span>
                    <span className="leading-5 text-muted-foreground text-xs">
                      <span>
                        Prinsengracht 24
                        <br />
                      </span>
                      <span>
                        1015 DV Amsterdam, NL
                      </span>
                    </span>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-foreground text-sm">
                      Price Details
                    </span>
                    <dl className="flex flex-col gap-1.5 text-sm">
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">
                          Subtotal
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          $320.00
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">
                          Shipping
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          $10.00
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">
                          Tax
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          $20.00
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">
                          Total
                        </dt>
                        <dd className="tabular-nums text-foreground">
                          $350.00
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-sm">
                      Total
                    </span>
                    <span className="font-semibold tabular-nums text-foreground text-sm">
                      $22.99
                    </span>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="flex-1 flex-row hidden lg:flex min-h-0">
        <div className="flex-1 min-h-0 min-w-0">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "37px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 px-4 py-4">
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      Order Data
                    </div>
                  </header>
                  <FramePanel className="shadow-none!">
                    <div className="gap-x-4 gap-y-3 grid grid-cols-2 sm:grid-cols-4">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Items
                        </span>
                        <div className="min-w-0">
                          <span className="font-medium text-foreground text-sm">
                            2 Items
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Total Price
                        </span>
                        <div className="min-w-0">
                          <span className="font-medium tabular-nums text-foreground text-sm">
                            $320.00
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Shipping Priority
                        </span>
                        <div className="min-w-0">
                          <span className="font-medium text-foreground text-sm">
                            High
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Delivery Method
                        </span>
                        <div className="min-w-0">
                          <span className="font-medium text-foreground text-sm">
                            Express Delivery
                          </span>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      Products
                    </div>
                  </header>
                  <FramePanel className="flex flex-col gap-4 shadow-none!">
                    <div className="flex flex-col gap-4" role="list">
                      <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                        <ItemMedia className="bg-muted border relative size-10" variant="image">
                          <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-wm-8421" aria-label="View Nike Air Max 270 React SE">
                            <img alt="Nike Air Max 270 React SE" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=160&h=160&q=80" />
                          </a>
                        </ItemMedia>
                        <ItemContent className="gap-0.5 min-w-0">
                          <ItemTitle className="font-medium text-sm">
                            <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-wm-8421">
                              Nike Air Max 270 React SE
                            </a>
                          </ItemTitle>
                          <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                            <span>
                              SKU:
                            </span>
                            <span className="font-medium font-mono text-foreground">
                              WM-8421
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Color Beige
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <InputGroup className="shrink-0 w-32" role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <Label className="font-normal text-muted-foreground text-xs" htmlFor="weight-WM-8421">
                              Weight
                            </Label>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="weight-WM-8421" inputmode="decimal" aria-label="Weight of Nike Air Max 270 React SE in kilograms" type="text" value="1.2" />
                          <InputGroupAddon role="group" data-align="inline-end">
                            <span className="text-muted-foreground text-xs">
                              kg
                            </span>
                          </InputGroupAddon>
                        </InputGroup>
                      </Item>
                      <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                        <ItemMedia className="bg-muted border relative size-10" variant="image">
                          <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-xr-0293" aria-label="View Wave Strike Dynamic Boost Sneaker">
                            <img alt="Wave Strike Dynamic Boost Sneaker" src="https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=160&h=160&q=80" />
                          </a>
                        </ItemMedia>
                        <ItemContent className="gap-0.5 min-w-0">
                          <ItemTitle className="font-medium text-sm">
                            <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-xr-0293">
                              Wave Strike Dynamic Boost Sneaker
                            </a>
                          </ItemTitle>
                          <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                            <span>
                              SKU:
                            </span>
                            <span className="font-medium font-mono text-foreground">
                              XR-0293
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Color Red
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <InputGroup className="shrink-0 w-32" role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <Label className="font-normal text-muted-foreground text-xs" htmlFor="weight-XR-0293">
                              Weight
                            </Label>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="weight-XR-0293" inputmode="decimal" aria-label="Weight of Wave Strike Dynamic Boost Sneaker in kilograms" type="text" value="0.9" />
                          <InputGroupAddon role="group" data-align="inline-end">
                            <span className="text-muted-foreground text-xs">
                              kg
                            </span>
                          </InputGroupAddon>
                        </InputGroup>
                      </Item>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="w-full" spacing="sm">
                  <FramePanel className="flex flex-col gap-0 p-0! shadow-none!">
                    <div className="flex flex-col gap-3 items-start justify-between px-4 py-3.5 sm:flex-row sm:items-center">
                      <Timeline className="flex-1 gap-0 min-w-0" data-orientation="vertical">
                        <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-3 group-data-[orientation=vertical]/timeline:not-last:pb-2">
                          <TimelineSeparator className="bg-primary group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                          <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                          <TimelineContent className="leading-snug text-foreground">
                            1234 Industrial Way, Dallas, TX 75201
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-3 group-data-[orientation=vertical]/timeline:pb-0">
                          <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                          <TimelineContent className="leading-snug text-foreground">
                            8458 Sunset Blvd #209, Los Angeles, CA 90069
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-2 h-7 min-w-5 outline-none px-2.5 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-sm transition-shadow">
                        <svg className="h-4 w-auto" viewBox="0 0 20 22" role="img" aria-label="UPS" shape-rendering="geometricPrecision">
                          <path d="M10 1 1 4v9.2c0 3.4 2 5.6 4.5 6.7L10 22l4.5-2.1c2.5-1.1 4.5-3.3 4.5-6.7V4l-9-3Z" fill="#644117"></path>
                          <path d="M10 2.4 2.4 5v8.2c0 2.8 1.6 4.6 3.6 5.5L10 20.4l4-1.7c2-.9 3.6-2.7 3.6-5.5V5L10 2.4Z" fill="#FFB500"></path>
                          <text x="10" y="14" textAnchor="middle" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="6" fontWeight="900" fill="#644117">
                            UPS
                          </text>
                        </svg>
                        UPS Global
                      </Badge>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="px-4 py-3.5">
                      <div className="flex flex-col gap-2.5">
                        <div className="gap-2 grid grid-cols-4">
                          <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                          <span className="bg-emerald-500 h-1.5 rounded-full" aria-hidden="true"></span>
                          <span className="bg-gradient-to-r from-emerald-500 h-1.5 rounded-full to-emerald-500/30" aria-hidden="true"></span>
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
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_8_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "395.0833333333333px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
        <Separator className="self-stretch" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
        <div className="min-h-0 shrink-0 w-[320px]">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div className="flex flex-col gap-4 px-4 py-4">
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      Summary
                    </div>
                  </header>
                  <FramePanel className="flex flex-col gap-4 shadow-none!">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-foreground text-sm">
                        Shipping to Jeroen's Home
                      </span>
                      <span className="leading-5 text-muted-foreground text-xs">
                        <span>
                          Prinsengracht 24
                          <br />
                        </span>
                        <span>
                          1015 DV Amsterdam, NL
                        </span>
                      </span>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-foreground text-sm">
                        Price Details
                      </span>
                      <dl className="flex flex-col gap-1.5 text-sm">
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            Subtotal
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            $320.00
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            Shipping
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            $10.00
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            Tax
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            $20.00
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            Total
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            $350.00
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground text-sm">
                        Total
                      </span>
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        $22.99
                      </span>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
      <SheetFooter className="bg-muted/40 border-t gap-3 items-stretch justify-between px-4 py-2.5 shrink-0 sm:flex-row sm:items-center">
        <p className="text-muted-foreground text-xs">
          Read Shipping
          <a className="hover:text-primary hover:underline text-primary transition-colors underline-offset-4" href="#shipping-terms">
            Terms & Conditions
          </a>
        </p>
        <div className="flex flex-wrap gap-2 items-center shrink-0">
          <Button href="#delete-order" role="button" tabIndex="0">
            Delete
          </Button>
          <Button type="button" tabIndex="0">
            Order Tracking
          </Button>
          <Button type="button" tabIndex="0">
            View Shipping Label
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
