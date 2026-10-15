import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl mx-auto px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="cart-title">
        <header className="flex flex-col gap-3 mb-6 sm:mb-8">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="sm:text-sm text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Cart"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <h1 className="font-semibold leading-tight sm:text-[1.75rem] text-2xl text-foreground tracking-tight" id="cart-title">
                  {"Shopping Cart"}
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-primary-foreground text-xs transition-shadow" aria-label="3 items in cart">
                  {"3"}
                </Badge>
              </div>
              <Button className="h-auto p-0 text-sm" type="button" tabIndex="0" extracted="1">
                {"Continue Shopping"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
            <p className="flex flex-wrap gap-x-3 gap-y-1.5 items-center sm:text-sm text-muted-foreground text-xs">
              <span className="gap-3 inline-flex items-center">
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-truck shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                  <span>
                    <span className="font-medium tabular-nums text-foreground">
                      {"2"}
                    </span>
                    {"ready Feb 1"}
                  </span>
                </span>
              </span>
              <span className="gap-3 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="gap-1.5 inline-flex items-center">
                  <svg className="lucide lucide-store shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                  </svg>
                  <span>
                    <span className="font-medium tabular-nums text-foreground">
                      {"1"}
                    </span>
                    {"ready today"}
                  </span>
                </span>
              </span>
            </p>
          </div>
        </header>
        <div className="gap-6 grid lg:gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="flex flex-col gap-4 min-w-0">
            <ul className="divide-border divide-y" role="list">
              <li className="first:pt-0 group/row last:pb-0 py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-4">
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Lumen Compact Camera">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute duration-300 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Lumen Compact Camera in red on a soft studio surface" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-3 items-start justify-between">
                      <div className="min-w-0">
                        <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm tracking-tight">
                          <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                            {"Lumen Compact Camera"}
                          </a>
                        </h3>
                        <p className="flex flex-wrap gap-x-1.5 items-center mt-0.5 text-muted-foreground text-xs">
                          <span>
                            {"Color"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#" aria-label="Filter by color Red">
                            {"Red"}
                          </a>
                        </p>
                      </div>
                      <Button className="-mr-1 -mt-1 hover:text-destructive text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Lumen Compact Camera from cart">
                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between mt-auto">
                      <ToggleGroup className="text-muted-foreground text-xs" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Fulfillment for Lumen Compact Camera" style={{"--gap": "2"}}>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                              <path d="M15 18H9"></path>
                              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                              <circle cx="17" cy="18" r="2"></circle>
                              <circle cx="7" cy="18" r="2"></circle>
                            </svg>
                            <span className="sr-only">
                              {"Delivery"}
                            </span>
                            <span className="tabular-nums">
                              {"Feb 1"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"+$15.00"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-store shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                              <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                              <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                              <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                            </svg>
                            <span className="sr-only">
                              {"Pickup"}
                            </span>
                            <span className="tabular-nums">
                              {"Today"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"Free"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <div className="flex gap-3 items-center">
                        <ButtonGroup role="group" aria-label="Quantity for Lumen Compact Camera">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Lumen Compact Camera">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-sm">
                            {"1"}
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Lumen Compact Camera">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <p className="font-semibold sm:text-base tabular-nums text-foreground text-sm">
                          {"$99.89"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="first:pt-0 group/row last:pb-0 py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-4">
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Helix Pro Controller">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute duration-300 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Helix Pro Controller in yellow on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-3 items-start justify-between">
                      <div className="min-w-0">
                        <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm tracking-tight">
                          <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                            {"Helix Pro Controller"}
                          </a>
                        </h3>
                        <p className="flex flex-wrap gap-x-1.5 items-center mt-0.5 text-muted-foreground text-xs">
                          <span>
                            {"Color"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#" aria-label="Filter by color Yellow">
                            {"Yellow"}
                          </a>
                        </p>
                      </div>
                      <Button className="-mr-1 -mt-1 hover:text-destructive text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Helix Pro Controller from cart">
                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between mt-auto">
                      <ToggleGroup className="text-muted-foreground text-xs" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Fulfillment for Helix Pro Controller" style={{"--gap": "2"}}>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                              <path d="M15 18H9"></path>
                              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                              <circle cx="17" cy="18" r="2"></circle>
                              <circle cx="7" cy="18" r="2"></circle>
                            </svg>
                            <span className="sr-only">
                              {"Delivery"}
                            </span>
                            <span className="tabular-nums">
                              {"Feb 1"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"Free"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-store shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                              <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                              <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                              <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                            </svg>
                            <span className="sr-only">
                              {"Pickup"}
                            </span>
                            <span className="tabular-nums">
                              {"Today"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"Free"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <div className="flex gap-3 items-center">
                        <ButtonGroup role="group" aria-label="Quantity for Helix Pro Controller">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Helix Pro Controller">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-sm">
                            {"1"}
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Helix Pro Controller">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <p className="font-semibold sm:text-base tabular-nums text-foreground text-sm">
                          {"$49.99"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="first:pt-0 group/row last:pb-0 py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-4">
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Velar Wireless Headphones">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute duration-300 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Velar Wireless Headphones in dark blue on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-3 items-start justify-between">
                      <div className="min-w-0">
                        <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm tracking-tight">
                          <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                            {"Velar Wireless Headphones"}
                          </a>
                        </h3>
                        <p className="flex flex-wrap gap-x-1.5 items-center mt-0.5 text-muted-foreground text-xs">
                          <span>
                            {"Color"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <a className="font-medium hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#" aria-label="Filter by color Dark Blue">
                            {"Dark Blue"}
                          </a>
                        </p>
                      </div>
                      <Button className="-mr-1 -mt-1 hover:text-destructive text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Velar Wireless Headphones from cart">
                        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-between mt-auto">
                      <ToggleGroup className="text-muted-foreground text-xs" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Fulfillment for Velar Wireless Headphones" style={{"--gap": "2"}}>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                              <path d="M15 18H9"></path>
                              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                              <circle cx="17" cy="18" r="2"></circle>
                              <circle cx="7" cy="18" r="2"></circle>
                            </svg>
                            <span className="sr-only">
                              {"Delivery"}
                            </span>
                            <span className="tabular-nums">
                              {"Feb 1"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"Free"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                        <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-2.5 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                          <span className="flex gap-1.5 items-center">
                            <svg className="lucide lucide-store shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                              <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                              <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                              <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                            </svg>
                            <span className="sr-only">
                              {"Pickup"}
                            </span>
                            <span className="tabular-nums">
                              {"Today"}
                            </span>
                            <span className="font-semibold tabular-nums text-foreground">
                              {"Free"}
                            </span>
                          </span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <div className="flex gap-3 items-center">
                        <ButtonGroup role="group" aria-label="Quantity for Velar Wireless Headphones">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Velar Wireless Headphones">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-sm">
                            {"1"}
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Velar Wireless Headphones">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <p className="font-semibold sm:text-base tabular-nums text-foreground text-sm">
                          {"$71.69"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="border-t flex flex-wrap gap-3 items-center justify-between pt-5">
              <Button href="#" aria-label="Back to catalog" role="button" tabIndex="0">
                <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                {"Back to Catalog"}
              </Button>
              <p className="gap-2 inline-flex items-center text-muted-foreground text-xs">
                <svg className="lucide lucide-store shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                  <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                </svg>
                <span>
                  {"Free pickup at any store"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Toggle per item"}
                </span>
              </p>
            </div>
          </div>
          <div className="lg:sticky lg:top-6">
            <Card className="overflow-hidden p-0 shadow-none" size="default">
              <CardHeader className="pb-2 pt-5 px-5 sm:pb-2 sm:pt-6 sm:px-6">
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
                  <p className="font-medium text-muted-foreground text-xs">
                    {"Order Total"}
                  </p>
                  <p className="tabular-nums text-muted-foreground text-xs">
                    {"Estimated"}
                  </p>
                </div>
                <p className="font-semibold mt-0.5 sm:leading-[1.05] sm:text-[2.25rem] tabular-nums text-3xl text-foreground tracking-tight">
                  {"$217.57"}
                </p>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 mt-2 outline-none pl-2 pr-2.5 px-1.25 py-0.5 relative self-start style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-sparkles size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  <span className="font-semibold tabular-nums">
                    {"You saved $33.24"}
                  </span>
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 pb-4 pt-2 px-5 sm:pb-5 sm:pt-2 sm:px-6">
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span>
                      {"Subtotal"}
                    </span>
                  </span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {"$221.57"}
                  </span>
                </div>
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span>
                      {"Delivery"}
                    </span>
                    <span className="tabular-nums text-muted-foreground/80">
                      {"2 items"}
                    </span>
                  </span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {"+$15.00"}
                  </span>
                </div>
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span>
                      {"Pickup"}
                    </span>
                    <span className="tabular-nums text-muted-foreground/80">
                      {"1 item"}
                    </span>
                  </span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {"Free"}
                  </span>
                </div>
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span>
                      {"Promo (15%)"}
                    </span>
                  </span>
                  <span className="font-semibold tabular-nums text-success">
                    {"-$33.24"}
                  </span>
                </div>
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                    <span>
                      {"Tax"}
                    </span>
                    <span className="tabular-nums text-muted-foreground/80">
                      {"7%"}
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Final tax is recalculated at checkout." id="base-ui-_r_7_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {"$14.23"}
                  </span>
                </div>
                <div className="flex gap-3 items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {"Promo code"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none pl-2 pr-0.5 px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    <svg className="lucide lucide-check size-3 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="font-semibold text-foreground tracking-wide">
                      {"HAPPY2026"}
                    </span>
                    <button className="focus-visible:ring-2 focus-visible:ring-ring hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground" type="button" aria-label="Remove promo code HAPPY2026">
                      <svg className="lucide lucide-x size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </Badge>
                </div>
                <Separator className="mb-0.5 mt-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="flex gap-3 items-baseline justify-between">
                  <p className="font-semibold text-base text-foreground">
                    {"Total"}
                  </p>
                  <p className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                    {"$217.57"}
                  </p>
                </div>
              </CardContent>
              <div className="bg-muted/30 border-t flex flex-col gap-2 pb-5 pt-4 px-5 sm:pb-5 sm:pt-4 sm:px-6">
                <Button className="w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {"Checkout Securely"}
                </Button>
                <p className="flex flex-wrap gap-x-2 gap-y-1 items-center justify-center text-muted-foreground text-xs">
                  <span className="gap-1.5 inline-flex items-center">
                    <svg className="lucide lucide-lock shrink-0 size-3 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    {"Encrypted checkout"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"60-day returns"}
                  </span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
