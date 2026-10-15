import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ComboboxChip,
  ComboboxChips,
} from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-center justify-center lg:px-10 min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Create ecommerce product form"}
      </h1>
      <Card className="gap-0 max-w-3xl p-0 w-full" size="default">
        <CardHeader className="border-b gap-1 px-5 py-4 sm:px-6">
          <CardTitle>
            {"Create Product"}
          </CardTitle>
          <CardDescription>
            {"Add catalog details, media, pricing, and fulfillment."}
          </CardDescription>
          <CardAction className="self-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
              <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                <path d="M12 22V12"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <path d="m7.5 4.27 9 5.15"></path>
              </svg>
              {"Draft"}
            </Badge>
          </CardAction>
        </CardHeader>
        <form id="form-12-product-create">
          <CardContent className="p-0">
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"Create ecommerce product"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Configure product media, details, pricing, inventory, fulfillment, collections, and publish status."}
              </FieldDescription>
              <FieldGroup className="gap-0">
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-thumbnails">
                        {"Product Media"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Product Media details" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <FieldDescription>
                      {"Thumbnail gallery for listings."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <div className="w-full">
                      <div className="border border-dashed border-muted-foreground/25 flex gap-3 hover:border-muted-foreground/50 items-center min-w-0 p-4 rounded-lg transition-colors">
                        <input className="sr-only" id="form-12-thumbnails" aria-label="Upload product thumbnails" accept="image/*" multiple type="file" />
                        <Button type="button" tabIndex="0">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add Files"}
                        </Button>
                        <div className="flex flex-1 flex-wrap gap-2 items-center min-w-0">
                          <div className="group/item relative shrink-0">
                            <img className="border object-cover rounded-lg size-12" alt="runner-front.jpg" width="48" height="48" title="runner-front.jpg (375KB)" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop&crop=center&q=80" />
                            <Button className="-right-2 -top-2 absolute opacity-100 rounded-full shadow-md size-5 sm:group-hover/item:opacity-100 sm:opacity-0 transition-opacity" type="button" tabIndex="0" aria-label="Remove runner-front.jpg">
                              <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                          </div>
                          <div className="group/item relative shrink-0">
                            <img className="border object-cover rounded-lg size-12" alt="runner-lifestyle.jpg" width="48" height="48" title="runner-lifestyle.jpg (318.36KB)" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=160&h=160&fit=crop&crop=center&q=80" />
                            <Button className="-right-2 -top-2 absolute opacity-100 rounded-full shadow-md size-5 sm:group-hover/item:opacity-100 sm:opacity-0 transition-opacity" type="button" tabIndex="0" aria-label="Remove runner-lifestyle.jpg">
                              <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <div className="shrink-0 text-muted-foreground text-xs">
                          {"2/5"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-product-name">
                        {"Product Name"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Storefront display name."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Input id="form-12-product-name" autoComplete="off" value="AeroFlex Runner Shoe"></Input>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-description">
                        {"Description"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Short sales copy for the product page."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Textarea className="min-h-24" id="form-12-description">
                      {"Responsive knit running shoe with a cushioned midsole, grippy road outsole, and reflective details for early training sessions."}
                    </Textarea>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-category">
                        {"Category"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Primary merchandising group."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-12-category" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Footwear"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="footwear" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Product Type"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"How checkout and delivery should work."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <RadioGroup className="w-fit" role="radiogroup">
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_7_" aria-labelledby="form-12-product-type-physical-label">
                          <span className="cn-radio-group-indicator" data-checked="">
                            <span className="cn-radio-group-indicator-icon"></span>
                          </span>
                        </RadioGroupItem>
                        <input id="form-12-product-type-physical" tabIndex="-1" aria-hidden="true" type="radio" value="physical" checked name="form-12-product-type" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-product-type-physical" id="form-12-product-type-physical-label">
                            {"Physical Product"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Ships from inventory and needs fulfillment rules."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_a_" aria-labelledby="form-12-product-type-digital-label"></RadioGroupItem>
                        <input id="form-12-product-type-digital" tabIndex="-1" aria-hidden="true" type="radio" value="digital" name="form-12-product-type" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-product-type-digital" id="form-12-product-type-digital-label">
                            {"Digital Download"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Delivers files, licenses, or access after purchase."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field role="group" data-orientation="horizontal">
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_d_" aria-labelledby="form-12-product-type-service-label"></RadioGroupItem>
                        <input id="form-12-product-type-service" tabIndex="-1" aria-hidden="true" type="radio" value="service" name="form-12-product-type" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                        <FieldContent>
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-product-type-service" id="form-12-product-type-service-label">
                            {"Service"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Creates a bookable or managed service offer."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </RadioGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Pricing"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Base and comparison price."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <FieldGroup className="gap-3 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-price">
                          {"Price"}
                        </FieldLabel>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              {"$"}
                            </span>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-12-price" inputmode="decimal" value="148.00" />
                        </InputGroup>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-compare-price">
                          {"Compare At"}
                        </FieldLabel>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              {"$"}
                            </span>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-12-compare-price" inputmode="decimal" value="188.00" />
                        </InputGroup>
                      </Field>
                    </FieldGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Inventory"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Stock keeping unit and quantity."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <FieldGroup className="gap-3 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-sku">
                          {"SKU"}
                        </FieldLabel>
                        <Input id="form-12-sku" autoComplete="off" value="ARS-2048-ST"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-inventory">
                          {"Quantity"}
                        </FieldLabel>
                        <Input id="form-12-inventory" inputmode="numeric" value="126"></Input>
                      </Field>
                    </FieldGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Commerce Rules"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Tax and stock behavior."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <FieldGroup className="gap-3 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="horizontal">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_k_" aria-checked="true" size="default" aria-labelledby="form-12-track-inventory-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="form-12-track-inventory" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-track-inventory" id="form-12-track-inventory-label">
                            {"Track Inventory"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Reserve stock after purchase."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="horizontal">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="true" size="default" aria-labelledby="form-12-charge-tax-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="form-12-charge-tax" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldContent className="gap-0.5">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-charge-tax" id="form-12-charge-tax-label">
                            {"Charge Tax"}
                          </FieldLabel>
                          <FieldDescription>
                            {"Apply regional tax rules."}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-fulfillment">
                        {"Fulfillment"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"How orders are completed."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="form-12-fulfillment" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Warehouse"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="warehouse" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        {"Collections"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Collections details" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <FieldDescription>
                      {"Storefront groups and campaigns."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1 min-h-10" role="toolbar">
                      <ComboboxChip className="gap-1.5" tabIndex="-1">
                        {"New Arrivals"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip className="gap-1.5" tabIndex="-1">
                        {"Running"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <ComboboxChip className="gap-1.5" tabIndex="-1">
                        {"Weather Ready"}
                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-disabled="false">
                          <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </ComboboxChip>
                      <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="form-12-collections" placeholder="Add collection" type="text" value="" />
                    </ComboboxChips>
                    <input id="base-ui-_r_v_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-12-status">
                        {"Status"}
                      </FieldLabel>
                    </div>
                    <FieldDescription>
                      {"Controls storefront visibility."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="form-12-status" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        <span className="flex gap-2 items-center min-w-0">
                          <span className="bg-warning rounded-full shrink-0 size-1.5"></span>
                          <span className="truncate">
                            {"Draft"}
                          </span>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_12_-hidden-input" tabIndex="-1" aria-hidden="true" value="draft" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="gap-3 justify-between px-5 py-4 sm:px-6">
            <div className="gap-1.5 hidden items-center min-w-0 sm:flex text-muted-foreground text-sm">
              <span className="shrink-0">
                {"2 media"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="min-w-0 truncate">
                {"Footwear"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="shrink-0">
                {"3 collections"}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                {"Save Draft"}
              </Button>
              <Button type="submit" tabIndex="0">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Create Product"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
