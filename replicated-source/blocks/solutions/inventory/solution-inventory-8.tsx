import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full">
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          Open Per Product Stock
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(60rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-11 px-4">
          <SheetTitle className="font-medium leading-5 text-sm truncate" id="base-ui-_r_3_">
            Per Product Stock
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          Per-product stock rules, shipping configuration and reorder controls for Air Max 270 React Engine.
        </SheetDescription>
        <div className="flex flex-col gap-1 min-w-0 px-4 py-3">
          <h2 className="font-semibold text-foreground text-xl tracking-tight truncate">
            Air Max 270 React Eng…
          </h2>
          <p className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
            <span>
              SKU
            </span>
            <span className="font-medium font-mono text-foreground">
              WM-8421
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              Created
            </span>
            <span className="font-medium text-foreground">
              16 Jan, 2025
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              Last Updated
            </span>
            <span className="font-medium text-foreground">
              2 days ago
            </span>
          </p>
        </div>
      </SheetHeader>
      <div className="flex-1 lg:hidden min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs" htmlFor="current-stock">
                  Current Stock
                </Label>
                <div className="flex gap-2 items-center">
                  <Input className="flex-1" id="current-stock" type="number" value="10"></Input>
                  <Button type="button" tabIndex="0">
                    Reorder Now
                  </Button>
                </div>
              </div>
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="font-semibold text-sm">
                    Inventory Rules
                  </div>
                  <Field className="gap-2 m-0 p-0 w-auto" role="group" data-orientation="horizontal">
                    <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground text-xs" htmlFor="auto-reorder" id="auto-reorder-label">
                      Auto Reorder
                    </FieldLabel>
                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_7_" aria-checked="true" size="sm" aria-labelledby="auto-reorder-label">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="auto-reorder" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </header>
                <FramePanel className="shadow-none!">
                  <FieldGroup className="gap-4">
                    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                      <Field className="gap-1.5" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="threshold-qty">
                          Threshold Qty
                        </FieldLabel>
                        <Input id="threshold-qty" type="number" value="200"></Input>
                      </Field>
                      <Field className="gap-1.5" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="safe-stock-qty">
                          Safe Stock Qty
                        </FieldLabel>
                        <Input id="safe-stock-qty" type="number" value="320"></Input>
                      </Field>
                      <Field className="gap-1.5" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="reorder-qty">
                          Reorder Qty
                        </FieldLabel>
                        <Input id="reorder-qty" type="number" value="400"></Input>
                      </Field>
                      <Field className="gap-1.5" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="lead-time">
                          Lead Time
                        </FieldLabel>
                        <InputGroup role="group">
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="lead-time" type="number" value="3" />
                          <InputGroupAddon role="group" data-align="inline-end">
                            <span className="text-muted-foreground text-xs">
                              days
                            </span>
                          </InputGroupAddon>
                        </InputGroup>
                      </Field>
                    </div>
                    <div className="gap-x-4 gap-y-3 grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Status
                        </span>
                        <div className="flex items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            In Stock
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Delta
                        </span>
                        <div className="flex items-center min-w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                            +289
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Velocity
                        </span>
                        <div className="flex items-center min-w-0">
                          <span className="tabular-nums text-foreground text-sm">
                            0.24 items/day
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Next Reorder
                        </span>
                        <div className="flex items-center min-w-0">
                          <span className="text-foreground text-sm">
                            14 Sep, 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          Updated By
                        </span>
                        <div className="flex items-center min-w-0">
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#user-jtaytum">
                            Jason Taytum
                          </a>
                        </div>
                      </div>
                    </div>
                  </FieldGroup>
                </FramePanel>
              </Frame>
              <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-0!">
                    <div className="font-semibold py-2.5 text-sm">
                      Shipping
                    </div>
                    <TabsList className="gap-4 p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                      <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-foreground text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_e_" compositeItemActive="" aria-controls="base-ui-_r_g_">
                        Custom Package
                      </TabsTrigger>
                      <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_f_">
                        Carrier Package
                      </TabsTrigger>
                    </TabsList>
                  </header>
                  <FramePanel className="shadow-none!">
                    <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_g_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_e_">
                      <FieldGroup className="gap-4">
                        <Field className="gap-1.5" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-name">
                            Package Name
                          </FieldLabel>
                          <Input id="package-name" value="Mike Anderson - Medium Box"></Input>
                        </Field>
                        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-type">
                              Package Type
                            </FieldLabel>
                            <Select>
                            <SelectTrigger type="button" tabIndex="0" id="package-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                Medium Box
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                ▼
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_i_-hidden-input" tabIndex="-1" aria-hidden="true" value="medium-box" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="total-weight">
                              Total Weight
                            </FieldLabel>
                            <InputGroup role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="total-weight" step="0.1" type="number" value="2.1" />
                              <InputGroupAddon role="group" data-align="inline-end">
                                <span className="text-muted-foreground text-xs">
                                  kg
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                          </Field>
                        </div>
                        <div className="gap-4 grid grid-cols-2 items-end sm:grid-cols-[1fr_1fr_1fr_5rem]">
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="length">
                              Length
                            </FieldLabel>
                            <Input id="length" type="number" value="48"></Input>
                          </Field>
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="width">
                              Width
                            </FieldLabel>
                            <Input id="width" type="number" value="36"></Input>
                          </Field>
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="height">
                              Height
                            </FieldLabel>
                            <Input id="height" type="number" value="20"></Input>
                          </Field>
                          <Select>
                          <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_p_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Dimension unit">
                            <SelectValue>
                              sm
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_p_-hidden-input" tabIndex="-1" aria-hidden="true" value="sm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <Field className="gap-2 m-0 p-0" role="group" data-orientation="horizontal">
                          <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_s_" aria-checked="true" aria-labelledby="save-package-label">
                            <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </Checkbox>
                          <input id="save-package" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          <FieldLabel className="cn-label cursor-pointer font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm" htmlFor="save-package" id="save-package-label">
                            Save package for future orders
                          </FieldLabel>
                        </Field>
                      </FieldGroup>
                    </TabsContent>
                  </FramePanel>
                </Frame>
              </Tabs>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-4 px-4 py-4">
              <div className="flex flex-col gap-4">
                <div className="aspect-square bg-muted/40 overflow-hidden relative ring-1 ring-border/60 rounded-lg w-full">
                  <img className="h-full object-cover w-full" alt="Air Max 270 React Engine" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=720&h=720&q=80" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-base text-foreground">
                    Air Max 270 React Eng…
                  </h3>
                  <p className="leading-5 text-muted-foreground text-pretty text-xs">
                    Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh.
                  </p>
                </div>
                <dl className="gap-x-4 gap-y-2.5 grid grid-cols-[5rem_1fr]">
                  <div className="contents">
                    <dt className="text-muted-foreground text-sm">
                      SKU
                    </dt>
                    <dd className="text-foreground">
                      <span className="font-medium font-mono text-foreground text-sm">
                        SH-001-BLK-42
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-sm">
                      Category
                    </dt>
                    <dd className="text-foreground">
                      <span className="flex-wrap gap-x-1.5 gap-y-1 inline-flex items-center">
                        <span className="gap-x-1.5 inline-flex items-center">
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#category-sneakers">
                            Sneakers
                          </a>
                        </span>
                        <span className="gap-x-1.5 inline-flex items-center">
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#category-running">
                            Running
                          </a>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-sm">
                      Rating
                    </dt>
                    <dd className="text-foreground">
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
                    </dd>
                  </div>
                  <div className="contents">
                    <dt className="text-muted-foreground text-sm">
                      Price
                    </dt>
                    <dd className="text-foreground">
                      <span className="font-medium tabular-nums text-foreground text-sm">
                        $99.00
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="flex-1 flex-row hidden lg:flex min-h-0">
        <div className="flex-1 min-h-0 min-w-0">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_10_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "199px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 px-4 py-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs" htmlFor="current-stock">
                    Current Stock
                  </Label>
                  <div className="flex gap-2 items-center">
                    <Input className="flex-1" id="current-stock" type="number" value="10"></Input>
                    <Button type="button" tabIndex="0">
                      Reorder Now
                    </Button>
                  </div>
                </div>
                <Frame className="w-full" spacing="sm">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      Inventory Rules
                    </div>
                    <Field className="gap-2 m-0 p-0 w-auto" role="group" data-orientation="horizontal">
                      <FieldLabel className="cn-label cursor-pointer font-medium group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground text-xs" htmlFor="auto-reorder">
                        Auto Reorder
                      </FieldLabel>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_12_" aria-checked="true" size="sm">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="auto-reorder" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </header>
                  <FramePanel className="shadow-none!">
                    <FieldGroup className="gap-4">
                      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                        <Field className="gap-1.5" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="threshold-qty">
                            Threshold Qty
                          </FieldLabel>
                          <Input id="threshold-qty" type="number" value="200"></Input>
                        </Field>
                        <Field className="gap-1.5" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="safe-stock-qty">
                            Safe Stock Qty
                          </FieldLabel>
                          <Input id="safe-stock-qty" type="number" value="320"></Input>
                        </Field>
                        <Field className="gap-1.5" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="reorder-qty">
                            Reorder Qty
                          </FieldLabel>
                          <Input id="reorder-qty" type="number" value="400"></Input>
                        </Field>
                        <Field className="gap-1.5" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="lead-time">
                            Lead Time
                          </FieldLabel>
                          <InputGroup role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="lead-time" type="number" value="3" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <span className="text-muted-foreground text-xs">
                                days
                              </span>
                            </InputGroupAddon>
                          </InputGroup>
                        </Field>
                      </div>
                      <div className="gap-x-4 gap-y-3 grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3">
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            Status
                          </span>
                          <div className="flex items-center min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              In Stock
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            Delta
                          </span>
                          <div className="flex items-center min-w-0">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                              +289
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            Velocity
                          </span>
                          <div className="flex items-center min-w-0">
                            <span className="tabular-nums text-foreground text-sm">
                              0.24 items/day
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            Next Reorder
                          </span>
                          <div className="flex items-center min-w-0">
                            <span className="text-foreground text-sm">
                              14 Sep, 2025
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            Updated By
                          </span>
                          <div className="flex items-center min-w-0">
                            <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#user-jtaytum">
                              Jason Taytum
                            </a>
                          </div>
                        </div>
                      </div>
                    </FieldGroup>
                  </FramePanel>
                </Frame>
                <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                  <Frame className="w-full" spacing="sm">
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-0!">
                      <div className="font-semibold py-2.5 text-sm">
                        Shipping
                      </div>
                      <TabsList className="gap-4 p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                        <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-foreground text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_19_" compositeItemActive="" aria-controls="base-ui-_r_1b_">
                          Custom Package
                        </TabsTrigger>
                        <TabsTrigger className="after:bg-primary font-medium h-7 pb-1.5 px-0 text-muted-foreground text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1a_">
                          Carrier Package
                        </TabsTrigger>
                      </TabsList>
                    </header>
                    <FramePanel className="shadow-none!">
                      <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_1b_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_19_">
                        <FieldGroup className="gap-4">
                          <Field className="gap-1.5" role="group" data-orientation="vertical">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-name">
                              Package Name
                            </FieldLabel>
                            <Input id="package-name" value="Mike Anderson - Medium Box"></Input>
                          </Field>
                          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="package-type">
                                Package Type
                              </FieldLabel>
                              <Select>
                              <SelectTrigger type="button" tabIndex="0" id="package-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  Medium Box
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  ▼
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_1d_-hidden-input" tabIndex="-1" aria-hidden="true" value="medium-box" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="total-weight">
                                Total Weight
                              </FieldLabel>
                              <InputGroup role="group">
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="total-weight" step="0.1" type="number" value="2.1" />
                                <InputGroupAddon role="group" data-align="inline-end">
                                  <span className="text-muted-foreground text-xs">
                                    kg
                                  </span>
                                </InputGroupAddon>
                              </InputGroup>
                            </Field>
                          </div>
                          <div className="gap-4 grid grid-cols-2 items-end sm:grid-cols-[1fr_1fr_1fr_5rem]">
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="length">
                                Length
                              </FieldLabel>
                              <Input id="length" type="number" value="48"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="width">
                                Width
                              </FieldLabel>
                              <Input id="width" type="number" value="36"></Input>
                            </Field>
                            <Field className="gap-1.5" role="group" data-orientation="vertical">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-xs" htmlFor="height">
                                Height
                              </FieldLabel>
                              <Input id="height" type="number" value="20"></Input>
                            </Field>
                            <Select>
                            <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_1k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Dimension unit">
                              <SelectValue>
                                sm
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                ▼
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_1k_-hidden-input" tabIndex="-1" aria-hidden="true" value="sm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                          <Field className="gap-2 m-0 p-0" role="group" data-orientation="horizontal">
                            <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1n_" aria-checked="true" aria-labelledby="save-package-label">
                              <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </span>
                            </Checkbox>
                            <input id="save-package" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-label cursor-pointer font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-sm" htmlFor="save-package" id="save-package-label">
                              Save package for future orders
                            </FieldLabel>
                          </Field>
                        </FieldGroup>
                      </TabsContent>
                    </FramePanel>
                  </Frame>
                </Tabs>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_10_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "297.089905362776px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
        <Separator className="self-stretch" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
        <div className="min-h-0 shrink-0 w-[320px]">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1r_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "95px"}} data-has-overflow-y="" data-overflow-y-end="">
              <div className="flex flex-col gap-4 px-4 py-4">
                <div className="flex flex-col gap-4">
                  <div className="aspect-square bg-muted/40 overflow-hidden relative ring-1 ring-border/60 rounded-lg w-full">
                    <img className="h-full object-cover w-full" alt="Air Max 270 React Engine" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=720&h=720&q=80" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-base text-foreground">
                      Air Max 270 React Eng…
                    </h3>
                    <p className="leading-5 text-muted-foreground text-pretty text-xs">
                      Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh.
                    </p>
                  </div>
                  <dl className="gap-x-4 gap-y-2.5 grid grid-cols-[5rem_1fr]">
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        SKU
                      </dt>
                      <dd className="text-foreground">
                        <span className="font-medium font-mono text-foreground text-sm">
                          SH-001-BLK-42
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        Category
                      </dt>
                      <dd className="text-foreground">
                        <span className="flex-wrap gap-x-1.5 gap-y-1 inline-flex items-center">
                          <span className="gap-x-1.5 inline-flex items-center">
                            <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#category-sneakers">
                              Sneakers
                            </a>
                          </span>
                          <span className="gap-x-1.5 inline-flex items-center">
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <a className="font-medium hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#category-running">
                              Running
                            </a>
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        Rating
                      </dt>
                      <dd className="text-foreground">
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
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        Price
                      </dt>
                      <dd className="text-foreground">
                        <span className="font-medium tabular-nums text-foreground text-sm">
                          $99.00
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_1r_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "355.3867924528302px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
      </div>
      <SheetFooter className="bg-muted/40 border-t flex-row gap-2 items-center justify-between px-4 py-2.5 shrink-0">
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-printer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PrinterIcon" tabler="IconPrinter" hugeicons="PrinterIcon" phosphor="PrinterIcon" remixicon="RiPrinterLine" data-icon="inline-start" aria-hidden="true">
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
            <rect x="6" y="14" width="12" height="8" rx="1"></rect>
          </svg>
          Print Label
        </Button>
        <div className="flex gap-2 items-center">
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            Cancel
          </SheetClose>
          <Button type="button" tabIndex="0">
            Save
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
