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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Label } from "@/registry/bases/base/ui/label"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full">
      <div className="flex items-center justify-center min-h-[360px]">
        <Dialog>
        <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          {"Open Shipping Label"}
        </DialogTrigger>
        </Dialog>
      </div>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 max-h-[min(96svh,52rem)] max-w-none overflow-hidden p-0 w-[min(64rem,calc(100vw-1.5rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex gap-2 items-center justify-between px-5 py-3.5 shrink-0">
        <DialogTitle className="font-semibold text-base text-foreground" id="base-ui-_r_3_">
          {"Create Shipping Label"}
        </DialogTitle>
        <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close create shipping label dialog">
          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </DialogClose>
      </div>
      <DialogDescription className="sr-only" id="base-ui-_r_4_">
        {"Review pickup and destination addresses, confirm shipment items, set packaging, and buy a shipping label for order SO-AMS-4620."}
      </DialogDescription>
      <form className="flex flex-1 flex-col min-h-0" id="create-shipping-label-form">
        <div className="flex-1 lg:hidden min-h-0">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
              <div className="flex flex-col gap-4 px-5 py-5">
                <Frame className="w-full" spacing="sm">
                  <FramePanel className="flex flex-col gap-0 p-0! shadow-none!">
                    <Timeline className="gap-0 px-4 py-3.5" data-orientation="vertical">
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-4 group-data-[orientation=vertical]/timeline:not-last:pb-4">
                        <TimelineSeparator className="bg-primary group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                        <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          {"1234 Industrial Way, Dallas, TX 75201"}
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-4 group-data-[orientation=vertical]/timeline:pb-0">
                        <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                        <TimelineContent className="leading-snug text-foreground">
                          {"8458 Sunset Blvd #209, Los Angeles, CA 90069"}
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="gap-x-4 gap-y-3 grid grid-cols-2 px-4 py-3.5 sm:grid-cols-4">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Order ID"}
                        </span>
                        <span className="font-medium text-foreground text-sm">
                          {"SO-AMS-4620"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Placed"}
                        </span>
                        <span className="font-medium text-foreground text-sm">
                          {"28 Jul, 2025"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Total Price"}
                        </span>
                        <span className="font-medium text-foreground text-sm">
                          {"$320.00"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Shipping Priority"}
                        </span>
                        <span className="font-medium text-foreground text-sm">
                          {"High"}
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      {"Products"}
                    </div>
                  </header>
                  <FramePanel className="flex flex-col gap-4 shadow-none!">
                    <div className="flex flex-col gap-4" role="list">
                      <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                        <ItemMedia className="bg-muted border relative size-12" variant="image">
                          <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-wm-8421" aria-label="View Nike Air Max 270 React SE">
                            <img alt="Nike Air Max 270 React SE" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=240&h=240&q=80" />
                          </a>
                        </ItemMedia>
                        <ItemContent className="gap-0.5 min-w-0">
                          <ItemTitle className="font-medium text-sm">
                            <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-wm-8421">
                              {"Nike Air Max 270 React SE"}
                            </a>
                          </ItemTitle>
                          <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                            <span>
                              {"SKU:"}
                            </span>
                            <span className="font-medium font-mono text-foreground">
                              {"WM-8421"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              {"Color Beige"}
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <div className="flex flex-col gap-1 items-end shrink-0">
                          <Label className="font-normal text-muted-foreground text-xs" htmlFor="shipment-item-weight-item-nike-air-max-270">
                            {"Weight"}
                          </Label>
                          <InputGroup className="w-20" role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="shipment-item-weight-item-nike-air-max-270" inputmode="decimal" step="0.1" min="0" aria-label="Weight of Nike Air Max 270 React SE in kilograms" type="number" value="1.2" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <span className="text-muted-foreground text-xs">
                                {"kg"}
                              </span>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </Item>
                      <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                        <ItemMedia className="bg-muted border relative size-12" variant="image">
                          <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-xr-0293" aria-label="View Wave Strike Dynamic Boost Sneaker">
                            <img alt="Wave Strike Dynamic Boost Sneaker" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=240&h=240&q=80" />
                          </a>
                        </ItemMedia>
                        <ItemContent className="gap-0.5 min-w-0">
                          <ItemTitle className="font-medium text-sm">
                            <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-xr-0293">
                              {"Wave Strike Dynamic Boost Sneaker"}
                            </a>
                          </ItemTitle>
                          <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                            <span>
                              {"SKU:"}
                            </span>
                            <span className="font-medium font-mono text-foreground">
                              {"XR-0293"}
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              {"Color Red"}
                            </span>
                          </ItemDescription>
                        </ItemContent>
                        <div className="flex flex-col gap-1 items-end shrink-0">
                          <Label className="font-normal text-muted-foreground text-xs" htmlFor="shipment-item-weight-item-wave-strike">
                            {"Weight"}
                          </Label>
                          <InputGroup className="w-20" role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="shipment-item-weight-item-wave-strike" inputmode="decimal" step="0.1" min="0" aria-label="Weight of Wave Strike Dynamic Boost Sneaker in kilograms" type="number" value="0.9" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <span className="text-muted-foreground text-xs">
                                {"kg"}
                              </span>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </Item>
                    </div>
                  </FramePanel>
                </Frame>
                <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                  <Frame className="w-full" spacing="sm">
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-0!">
                      <div className="font-semibold py-2.5 text-sm">
                        {"Packaging"}
                      </div>
                      <TabsList className="gap-4 p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                        <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-foreground text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_8_" compositeItemActive="" aria-controls="base-ui-_r_a_">
                          {"Custom Package"}
                        </TabsTrigger>
                        <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_9_">
                          {"Carrier Package"}
                        </TabsTrigger>
                      </TabsList>
                    </header>
                    <FramePanel className="p-0! shadow-none!">
                      <TabsContent className="m-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_a_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_8_">
                        <div className="flex flex-col gap-4 px-4 py-4">
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-name">
                              {"Package Name"}
                            </FieldLabel>
                            <Input id="package-name" value="Mike Anderson - Medium Box"></Input>
                          </Field>
                          <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-type">
                                {"Package Type"}
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="w-full" type="button" tabIndex="0" id="package-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  {"medium-box"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="medium-box" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-total-weight">
                                {"Total Weight"}
                              </FieldLabel>
                              <InputGroup role="group">
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="package-total-weight" inputmode="decimal" step="0.1" min="0" type="number" value="2.1" />
                                <InputGroupAddon role="group" data-align="inline-end">
                                  <span className="text-muted-foreground text-xs">
                                    {"kg"}
                                  </span>
                                </InputGroupAddon>
                              </InputGroup>
                            </Field>
                          </div>
                          <div className="gap-3 grid grid-cols-2 items-end sm:grid-cols-[1fr_1fr_1fr_5rem]">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-length">
                                {"Length"}
                              </FieldLabel>
                              <Input id="package-length" inputmode="numeric" min="0" placeholder="48" type="number" value="48"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-width">
                                {"Width"}
                              </FieldLabel>
                              <Input id="package-width" inputmode="numeric" min="0" placeholder="36" type="number" value="36"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-height">
                                {"Height"}
                              </FieldLabel>
                              <Input id="package-height" inputmode="numeric" min="0" placeholder="20" type="number" value="20"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="package-unit">
                                {"Dimension Unit"}
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="w-full" type="button" tabIndex="0" id="package-unit" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  {"sm"}
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_j_-hidden-input" tabIndex="-1" aria-hidden="true" value="sm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                          </div>
                          <Field className="gap-2" role="group" data-orientation="horizontal">
                            <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_m_" aria-checked="true" aria-labelledby="package-save-future-label">
                              <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </span>
                            </Checkbox>
                            <input id="package-save-future" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-foreground text-sm" htmlFor="package-save-future" id="package-save-future-label">
                              {"Save package for future orders"}
                            </FieldLabel>
                          </Field>
                        </div>
                      </TabsContent>
                    </FramePanel>
                  </Frame>
                </Tabs>
              </div>
              <div className="flex flex-col gap-5 px-5 py-5">
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      {"Summary"}
                    </div>
                  </header>
                  <FramePanel className="flex flex-col gap-4 shadow-none!">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-foreground text-sm">
                        {"Shipping to Jeroen's Home"}
                      </span>
                      <span className="leading-5 text-muted-foreground text-xs">
                        {"Prinsengracht 24"}
                        <br />
                        {"1015 DV Amsterdam, NL"}
                      </span>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-foreground text-sm">
                        {"Price Details"}
                      </span>
                      <dl className="flex flex-col gap-1.5 text-sm">
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            {"Subtotal"}
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            {"$19.00"}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            {"Discount"}
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            {"$00.00"}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-muted-foreground">
                            {"Total"}
                          </dt>
                          <dd className="tabular-nums text-foreground">
                            {"$3.99"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground text-sm">
                        {"Total"}
                      </span>
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        {"$22.99"}
                      </span>
                    </div>
                  </FramePanel>
                </Frame>
                <div className="flex flex-col gap-3">
                  <Field className="gap-1.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="shipping-date">
                      {"Shipping Date"}
                    </FieldLabel>
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="shipping-date" placeholder="Active" aria-label="Shipping date" value="" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <svg className="lucide lucide-calendar size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field className="gap-2" role="group" data-orientation="horizontal">
                    <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" aria-labelledby="send-shipping-info-label"></Checkbox>
                    <input id="send-shipping-info" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-foreground text-sm" htmlFor="send-shipping-info" id="send-shipping-info-label">
                      {"Send"}
                      <a className="hover:text-primary hover:underline text-primary transition-colors underline-offset-4" href="#shipping-info">
                        {"Shipping Info"}
                      </a>
                      {"to Customer"}
                    </FieldLabel>
                  </Field>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="flex-1 flex-row hidden lg:flex min-h-0">
          <div className="flex-1 min-h-0 min-w-0">
            <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_u_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "200px"}} data-has-overflow-y="" data-overflow-y-end="">
                <div className="flex flex-col gap-4 px-5 py-5">
                  <Frame className="w-full" spacing="sm">
                    <FramePanel className="flex flex-col gap-0 p-0! shadow-none!">
                      <Timeline className="gap-0 px-4 py-3.5" data-orientation="vertical">
                        <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-4 group-data-[orientation=vertical]/timeline:not-last:pb-4">
                          <TimelineSeparator className="bg-primary group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)]" aria-hidden="true"></TimelineSeparator>
                          <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                          <TimelineContent className="leading-snug text-foreground">
                            {"1234 Industrial Way, Dallas, TX 75201"}
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-4 group-data-[orientation=vertical]/timeline:pb-0">
                          <TimelineIndicator className="bg-primary border-0 group-data-[orientation=vertical]/timeline:-left-3 group-data-[orientation=vertical]/timeline:top-1.5 size-2" aria-hidden="true"></TimelineIndicator>
                          <TimelineContent className="leading-snug text-foreground">
                            {"8458 Sunset Blvd #209, Los Angeles, CA 90069"}
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="gap-x-4 gap-y-3 grid grid-cols-2 px-4 py-3.5 sm:grid-cols-4">
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Order ID"}
                          </span>
                          <span className="font-medium text-foreground text-sm">
                            {"SO-AMS-4620"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Placed"}
                          </span>
                          <span className="font-medium text-foreground text-sm">
                            {"28 Jul, 2025"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Total Price"}
                          </span>
                          <span className="font-medium text-foreground text-sm">
                            {"$320.00"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Shipping Priority"}
                          </span>
                          <span className="font-medium text-foreground text-sm">
                            {"High"}
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="w-full" spacing="sm">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-sm">
                        {"Products"}
                      </div>
                    </header>
                    <FramePanel className="flex flex-col gap-4 shadow-none!">
                      <div className="flex flex-col gap-4" role="list">
                        <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                          <ItemMedia className="bg-muted border relative size-12" variant="image">
                            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-wm-8421" aria-label="View Nike Air Max 270 React SE">
                              <img alt="Nike Air Max 270 React SE" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=240&h=240&q=80" />
                            </a>
                          </ItemMedia>
                          <ItemContent className="gap-0.5 min-w-0">
                            <ItemTitle className="font-medium text-sm">
                              <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-wm-8421">
                                {"Nike Air Max 270 React SE"}
                              </a>
                            </ItemTitle>
                            <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                              <span>
                                {"SKU:"}
                              </span>
                              <span className="font-medium font-mono text-foreground">
                                {"WM-8421"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span>
                                {"Color Beige"}
                              </span>
                            </ItemDescription>
                          </ItemContent>
                          <div className="flex flex-col gap-1 items-end shrink-0">
                            <Label className="font-normal text-muted-foreground text-xs" htmlFor="shipment-item-weight-item-nike-air-max-270">
                              {"Weight"}
                            </Label>
                            <InputGroup className="w-20" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="shipment-item-weight-item-nike-air-max-270" inputmode="decimal" step="0.1" min="0" aria-label="Weight of Nike Air Max 270 React SE in kilograms" type="number" value="1.2" />
                              <InputGroupAddon role="group" data-align="inline-end">
                                <span className="text-muted-foreground text-xs">
                                  {"kg"}
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                          </div>
                        </Item>
                        <Item className="gap-3 px-0 py-0" variant="default" size="default" role="listitem">
                          <ItemMedia className="bg-muted border relative size-12" variant="image">
                            <a className="absolute focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#product-xr-0293" aria-label="View Wave Strike Dynamic Boost Sneaker">
                              <img alt="Wave Strike Dynamic Boost Sneaker" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=240&h=240&q=80" />
                            </a>
                          </ItemMedia>
                          <ItemContent className="gap-0.5 min-w-0">
                            <ItemTitle className="font-medium text-sm">
                              <a className="hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#product-xr-0293">
                                {"Wave Strike Dynamic Boost Sneaker"}
                              </a>
                            </ItemTitle>
                            <ItemDescription className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
                              <span>
                                {"SKU:"}
                              </span>
                              <span className="font-medium font-mono text-foreground">
                                {"XR-0293"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span>
                                {"Color Red"}
                              </span>
                            </ItemDescription>
                          </ItemContent>
                          <div className="flex flex-col gap-1 items-end shrink-0">
                            <Label className="font-normal text-muted-foreground text-xs" htmlFor="shipment-item-weight-item-wave-strike">
                              {"Weight"}
                            </Label>
                            <InputGroup className="w-20" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 h-7! min-w-0 outline-none placeholder:text-muted-foreground px-2! py-0! tabular-nums text-right text-xs w-full" id="shipment-item-weight-item-wave-strike" inputmode="decimal" step="0.1" min="0" aria-label="Weight of Wave Strike Dynamic Boost Sneaker in kilograms" type="number" value="0.9" />
                              <InputGroupAddon role="group" data-align="inline-end">
                                <span className="text-muted-foreground text-xs">
                                  {"kg"}
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                          </div>
                        </Item>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                    <Frame className="w-full" spacing="sm">
                      <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-0!">
                        <div className="font-semibold py-2.5 text-sm">
                          {"Packaging"}
                        </div>
                        <TabsList className="gap-4 p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                          <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-foreground text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_11_" compositeItemActive="" aria-controls="base-ui-_r_13_">
                            {"Custom Package"}
                          </TabsTrigger>
                          <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_12_">
                            {"Carrier Package"}
                          </TabsTrigger>
                        </TabsList>
                      </header>
                      <FramePanel className="p-0! shadow-none!">
                        <TabsContent className="m-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_13_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_11_">
                          <div className="flex flex-col gap-4 px-4 py-4">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-name">
                                {"Package Name"}
                              </FieldLabel>
                              <Input id="package-name" value="Mike Anderson - Medium Box"></Input>
                            </Field>
                            <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-type">
                                  {"Package Type"}
                                </FieldLabel>
                                <Select>
                                <SelectTrigger className="w-full" type="button" tabIndex="0" id="package-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    {"medium-box"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_15_-hidden-input" tabIndex="-1" aria-hidden="true" value="medium-box" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-total-weight">
                                  {"Total Weight"}
                                </FieldLabel>
                                <InputGroup role="group">
                                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="package-total-weight" inputmode="decimal" step="0.1" min="0" type="number" value="2.1" />
                                  <InputGroupAddon role="group" data-align="inline-end">
                                    <span className="text-muted-foreground text-xs">
                                      {"kg"}
                                    </span>
                                  </InputGroupAddon>
                                </InputGroup>
                              </Field>
                            </div>
                            <div className="gap-3 grid grid-cols-2 items-end sm:grid-cols-[1fr_1fr_1fr_5rem]">
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-length">
                                  {"Length"}
                                </FieldLabel>
                                <Input id="package-length" inputmode="numeric" min="0" placeholder="48" type="number" value="48"></Input>
                              </Field>
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-width">
                                  {"Width"}
                                </FieldLabel>
                                <Input id="package-width" inputmode="numeric" min="0" placeholder="36" type="number" value="36"></Input>
                              </Field>
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-height">
                                  {"Height"}
                                </FieldLabel>
                                <Input id="package-height" inputmode="numeric" min="0" placeholder="20" type="number" value="20"></Input>
                              </Field>
                              <Field className="gap-1.5" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="package-unit">
                                  {"Dimension Unit"}
                                </FieldLabel>
                                <Select>
                                <SelectTrigger className="w-full" type="button" tabIndex="0" id="package-unit" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                  <SelectValue>
                                    {"sm"}
                                  </SelectValue>
                                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6"></path>
                                    {"▼"}
                                  </svg>
                                </SelectTrigger>
                                </Select>
                                <input id="base-ui-_r_1c_-hidden-input" tabIndex="-1" aria-hidden="true" value="sm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </Field>
                            </div>
                            <Field className="gap-2" role="group" data-orientation="horizontal">
                              <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1f_" aria-checked="true" aria-labelledby="package-save-future-label">
                                <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                  <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                </span>
                              </Checkbox>
                              <input id="package-save-future" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-foreground text-sm" htmlFor="package-save-future" id="package-save-future-label">
                                {"Save package for future orders"}
                              </FieldLabel>
                            </Field>
                          </div>
                        </TabsContent>
                      </FramePanel>
                    </Frame>
                  </Tabs>
                </div>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_u_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "350.2132564841499px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </div>
          <Separator className="self-stretch" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <div className="min-h-0 shrink-0 w-72">
            <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1j_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div className="flex flex-col gap-5 px-5 py-5">
                  <Frame className="w-full" spacing="sm">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-sm">
                        {"Summary"}
                      </div>
                    </header>
                    <FramePanel className="flex flex-col gap-4 shadow-none!">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-foreground text-sm">
                          {"Shipping to Jeroen's Home"}
                        </span>
                        <span className="leading-5 text-muted-foreground text-xs">
                          {"Prinsengracht 24"}
                          <br />
                          {"1015 DV Amsterdam, NL"}
                        </span>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="flex flex-col gap-2">
                        <span className="font-semibold text-foreground text-sm">
                          {"Price Details"}
                        </span>
                        <dl className="flex flex-col gap-1.5 text-sm">
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                              {"Subtotal"}
                            </dt>
                            <dd className="tabular-nums text-foreground">
                              {"$19.00"}
                            </dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                              {"Discount"}
                            </dt>
                            <dd className="tabular-nums text-foreground">
                              {"$00.00"}
                            </dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                              {"Total"}
                            </dt>
                            <dd className="tabular-nums text-foreground">
                              {"$3.99"}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground text-sm">
                          {"Total"}
                        </span>
                        <span className="font-semibold tabular-nums text-foreground text-sm">
                          {"$22.99"}
                        </span>
                      </div>
                    </FramePanel>
                  </Frame>
                  <div className="flex flex-col gap-3">
                    <Field className="gap-1.5" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="shipping-date">
                        {"Shipping Date"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="shipping-date" placeholder="Active" aria-label="Shipping date" value="" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <svg className="lucide lucide-calendar size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="horizontal">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1l_" aria-checked="false" aria-labelledby="send-shipping-info-label"></Checkbox>
                      <input id="send-shipping-info" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-foreground text-sm" htmlFor="send-shipping-info" id="send-shipping-info-label">
                        {"Send"}
                        <a className="hover:text-primary hover:underline text-primary transition-colors underline-offset-4" href="#shipping-info">
                          {"Shipping Info"}
                        </a>
                        {"to Customer"}
                      </FieldLabel>
                    </Field>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </form>
      <div className="border-t flex flex-col-reverse gap-3 items-stretch justify-between px-5 py-3.5 shrink-0 sm:flex-row sm:items-center">
        <p className="text-muted-foreground text-sm">
          {"Read Shipping"}
          <a className="hover:text-primary hover:underline text-primary transition-colors underline-offset-4" href="#shipping-terms">
            {"Terms & Conditions"}
          </a>
        </p>
        <div className="flex gap-2 items-center justify-end shrink-0">
          <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            {"Cancel"}
          </DialogClose>
          <Button type="submit" tabIndex="0" form="create-shipping-label-form">
            {"Buy Shipping Label"}
          </Button>
        </div>
      </div>
    </DialogContent>
    </Dialog>
  </>
  )
}
