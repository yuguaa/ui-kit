import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center lg:p-8 min-h-svh p-4 sm:p-6 w-full">
      <section className="max-w-6xl mx-auto w-full" aria-labelledby="cart-title">
        <header className="border-b flex flex-col gap-2 px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-baseline justify-between">
            <div className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
              <h1 className="font-semibold text-2xl text-foreground tracking-tight" id="cart-title">
                Shopping Cart
              </h1>
              <p className="tabular-nums text-muted-foreground text-sm">
                (3 items)
              </p>
            </div>
            <Button className="h-auto p-0" type="button" tabIndex="0" extracted="1">
              Continue Shopping
              <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" data-icon="inline-end" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Button>
          </div>
          <p className="flex font-medium gap-2 items-center text-foreground text-sm">
            <svg className="lucide lucide-circle-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>
              You've unlocked free shipping
            </span>
          </p>
        </header>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] min-w-0">
          <section className="lg:pr-8 min-w-0 px-6 py-5 sm:px-8 sm:py-6" aria-label="Cart items">
            <div className="flex flex-col">
              <ul className="divide-border divide-y" role="list">
                <li className="first:pt-0 last:pb-5 py-5">
                  <div className="gap-4 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-5">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Studio model wearing the Atelier Wool Coat in Camel" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0">
                          <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2" href="#shop-coats" aria-label="Shop all Coats">
                            Coats
                          </a>
                          <h3 className="font-semibold leading-tight mt-0.5 text-base text-foreground">
                            <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-atelier-wool-coat">
                              Atelier Wool Coat
                            </a>
                          </h3>
                        </div>
                        <Button className="-mr-1 -mt-1" type="button" tabIndex="0" aria-label="Remove Atelier Wool Coat from cart">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </div>
                      <p className="flex flex-wrap gap-2 items-center text-muted-foreground text-sm">
                        <span>
                          Camel
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Size M
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            In Stock
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                          <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                            <path d="M15 18H9"></path>
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                            <circle cx="17" cy="18" r="2"></circle>
                            <circle cx="7" cy="18" r="2"></circle>
                          </svg>
                          <span className="truncate">
                            Arrives Tue, May 12
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-1">
                        <ButtonGroup role="group" aria-label="Quantity for Atelier Wool Coat">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Atelier Wool Coat">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-10 tabular-nums text-sm">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Wool Coat">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <div className="flex gap-3 items-center">
                          <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                            Save For Later
                          </Button>
                          <p className="font-semibold tabular-nums text-base text-foreground">
                            $285
                          </p>
                        </div>
                      </div>
                      <Button className="-mx-2 self-start sm:hidden" type="button" tabIndex="0">
                        <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                        </svg>
                        Save For Later
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="first:pt-0 last:pb-5 py-5">
                  <div className="gap-4 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-5">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Studio shot of the Studio Bomber Jacket in Olive on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0">
                          <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2" href="#shop-jackets" aria-label="Shop all Jackets">
                            Jackets
                          </a>
                          <h3 className="font-semibold leading-tight mt-0.5 text-base text-foreground">
                            <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-studio-bomber-jacket">
                              Studio Bomber Jacket
                            </a>
                          </h3>
                        </div>
                        <Button className="-mr-1 -mt-1" type="button" tabIndex="0" aria-label="Remove Studio Bomber Jacket from cart">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </div>
                      <p className="flex flex-wrap gap-2 items-center text-muted-foreground text-sm">
                        <span>
                          Olive
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Size M
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          <span className="text-muted-foreground">
                            In Stock
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                          <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                            <path d="M15 18H9"></path>
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                            <circle cx="17" cy="18" r="2"></circle>
                            <circle cx="7" cy="18" r="2"></circle>
                          </svg>
                          <span className="truncate">
                            Arrives Tue, May 12
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-1">
                        <ButtonGroup role="group" aria-label="Quantity for Studio Bomber Jacket">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Studio Bomber Jacket">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-10 tabular-nums text-sm">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Studio Bomber Jacket">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <div className="flex gap-3 items-center">
                          <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                            Save For Later
                          </Button>
                          <p className="font-semibold tabular-nums text-base text-foreground">
                            $248
                          </p>
                        </div>
                      </div>
                      <Button className="-mx-2 self-start sm:hidden" type="button" tabIndex="0">
                        <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                        </svg>
                        Save For Later
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="first:pt-0 last:pb-5 py-5">
                  <div className="gap-4 grid grid-cols-[auto_minmax(0,1fr)] sm:gap-5">
                    <Item className="overflow-hidden p-0 relative size-20 sm:size-24" variant="muted" size="default">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Aurora Wireless Headphones in Matte Black on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0">
                          <a className="hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2" href="#shop-audio" aria-label="Shop all Audio">
                            Audio
                          </a>
                          <h3 className="font-semibold leading-tight mt-0.5 text-base text-foreground">
                            <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-aurora-headphones">
                              Aurora Wireless Headphones
                            </a>
                          </h3>
                        </div>
                        <Button className="-mr-1 -mt-1" type="button" tabIndex="0" aria-label="Remove Aurora Wireless Headphones from cart">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </div>
                      <p className="flex flex-wrap gap-2 items-center text-muted-foreground text-sm">
                        <span>
                          Matte Black
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Size One Size
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                          <span className="text-warning-foreground">
                            Low Stock, 3 Left
                          </span>
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground">
                          <svg className="lucide lucide-truck shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                            <path d="M15 18H9"></path>
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                            <circle cx="17" cy="18" r="2"></circle>
                            <circle cx="7" cy="18" r="2"></circle>
                          </svg>
                          <span className="truncate">
                            Arrives Wed, May 13
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-1">
                        <ButtonGroup role="group" aria-label="Quantity for Aurora Wireless Headphones">
                          <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Aurora Wireless Headphones">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-10 tabular-nums text-sm">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Aurora Wireless Headphones">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                        <div className="flex gap-3 items-center">
                          <Button className="hidden sm:inline-flex" type="button" tabIndex="0">
                            <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                            </svg>
                            Save For Later
                          </Button>
                          <p className="font-semibold tabular-nums text-base text-foreground">
                            $168
                          </p>
                        </div>
                      </div>
                      <Button className="-mx-2 self-start sm:hidden" type="button" tabIndex="0">
                        <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                        </svg>
                        Save For Later
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="pt-5">
                <form className="max-w-sm">
                  <Field role="group" data-orientation="vertical" invalid="false">
                    <FieldLabel className="cn-label font-semibold group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-foreground text-sm" htmlFor="cart-promo-code">
                      Promo Code
                    </FieldLabel>
                    <InputGroup className="pr-0" role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                          <svg className="lucide lucide-tag size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                          </svg>
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="cart-promo-code" placeholder="Enter your code" aria-invalid="false" aria-describedby="cart-promo-status" value="" />
                      <InputGroupAddon className="pr-0" role="group" data-align="inline-end">
                        <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="submit" disabled="" tabIndex="0" disabled size="sm">
                          Apply
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription className="flex gap-1.5 items-center text-foreground" id="cart-promo-status">
                      <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Code applied at checkout
                    </FieldDescription>
                  </Field>
                </form>
              </div>
            </div>
          </section>
          <aside className="border-t flex flex-col gap-4 lg:border-l lg:border-t-0 min-w-0 px-6 py-5 sm:px-8 sm:py-6">
            <h2 className="font-semibold text-base text-foreground tracking-tight">
              Order Summary
            </h2>
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-4 items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  $701.00
                </span>
              </div>
              <div className="flex gap-4 items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Shipping
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 align-middle cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ml-1 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Shipping is estimated from cart weight and destination." id="base-ui-_r_2_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  Free
                </span>
              </div>
              <div className="flex gap-4 items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Estimated tax
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 align-middle cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ml-1 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Final tax is recalculated at checkout." id="base-ui-_r_4_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  $59.15
                </span>
              </div>
              <div className="flex gap-4 items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Promo discount
                </span>
                <span className="font-medium tabular-nums text-success">
                  -$25.00
                </span>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex gap-4 items-baseline justify-between">
              <p className="font-semibold text-foreground text-sm">
                Total
              </p>
              <div className="flex flex-col gap-0.5 items-end">
                <p className="font-semibold leading-none tabular-nums text-foreground text-xl">
                  $735.15
                </p>
                <p className="tabular-nums text-muted-foreground text-xs">
                  You save $25.00
                </p>
              </div>
            </div>
            <Button className="w-full" type="button" tabIndex="0">
              <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" data-icon="inline-start" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Proceed To Checkout
            </Button>
            <div className="gap-1.5 grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-6">
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="Visa" role="img">
                  <svg className="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 12" aria-hidden="true">
                    <text className="dark:fill-blue-400 fill-blue-700" x="0" y="10" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="900" letter-spacing="0.5">
                      VISA
                    </text>
                  </svg>
                </Item>
              </div>
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="Mastercard" role="img">
                  <svg className="h-5 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" aria-hidden="true">
                    <circle className="fill-red-500/90" cx="12" cy="10" r="10"></circle>
                    <circle className="fill-amber-400/90" cx="20" cy="10" r="10" style={{mixBlendMode: "multiply"}}></circle>
                  </svg>
                </Item>
              </div>
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="American Express" role="img">
                  <svg className="h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 14" aria-hidden="true">
                    <rect className="fill-blue-700" width="36" height="14" rx="1.5"></rect>
                    <text className="fill-blue-50" x="18" y="10" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7" fontWeight="900" letter-spacing="0.5">
                      AMEX
                    </text>
                  </svg>
                </Item>
              </div>
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="Discover" role="img">
                  <svg className="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 12" aria-hidden="true">
                    <text className="fill-foreground" x="0" y="9" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="700" letter-spacing="0.3">
                      DISC
                    </text>
                    <circle className="fill-orange-500" cx="26" cy="6" r="2.5"></circle>
                    <text className="fill-foreground" x="30" y="9" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="700" letter-spacing="0.3">
                      VER
                    </text>
                  </svg>
                </Item>
              </div>
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="PayPal" role="img">
                  <svg className="h-4 w-12" aria-hidden="true" id="Layer_1" viewBox="0 0 404.65 98.18">
                    <g>
                      <path d="M311.63,21.96h-22.25c-1.52,0-2.82,1.11-3.05,2.61l-9,57.05c-.18,1.13.69,2.14,1.83,2.14h11.42c1.06,0,1.97-.77,2.14-1.83l2.55-16.17c.24-1.5,1.53-2.61,3.05-2.61h7.04c14.66,0,23.11-7.09,25.32-21.15.99-6.15.04-10.98-2.84-14.36-3.16-3.72-8.77-5.68-16.22-5.68ZM314.2,42.79c-1.22,7.99-7.32,7.99-13.22,7.99h-3.36l2.35-14.91c.14-.9.92-1.57,1.83-1.57h1.54c4.02,0,7.81,0,9.77,2.29,1.17,1.37,1.52,3.4,1.08,6.2Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                      <path d="M152.93,21.96h-22.25c-1.52,0-2.82,1.11-3.05,2.61l-9,57.05c-.18,1.13.69,2.14,1.83,2.14h10.62c1.52,0,2.82-1.11,3.05-2.61l2.43-15.39c.24-1.5,1.53-2.61,3.05-2.61h7.04c14.66,0,23.11-7.09,25.32-21.15.99-6.15.04-10.98-2.84-14.36-3.16-3.72-8.77-5.68-16.22-5.68ZM155.5,42.79c-1.22,7.99-7.32,7.99-13.22,7.99h-3.36l2.35-14.91c.14-.9.92-1.57,1.83-1.57h1.54c4.02,0,7.81,0,9.76,2.29,1.17,1.37,1.52,3.4,1.08,6.2Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                      <path d="M219.44,42.54h-10.65c-.91,0-1.69.66-1.83,1.57l-.47,2.98-.74-1.08c-2.31-3.35-7.45-4.47-12.58-4.47-11.77,0-21.83,8.92-23.78,21.43-1.02,6.24.43,12.21,3.97,16.37,3.25,3.82,7.89,5.42,13.42,5.42,9.49,0,14.75-6.1,14.75-6.1l-.48,2.96c-.18,1.13.69,2.15,1.83,2.15h9.59c1.52,0,2.82-1.11,3.05-2.61l5.76-36.47c.18-1.13-.69-2.14-1.83-2.14ZM204.59,63.27c-1.03,6.09-5.86,10.17-12.03,10.17-3.09,0-5.56-.99-7.15-2.88-1.58-1.87-2.17-4.52-1.67-7.48.96-6.03,5.87-10.25,11.94-10.25,3.03,0,5.48,1,7.1,2.9,1.63,1.91,2.27,4.59,1.81,7.53Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                      <path d="M378.13,42.54h-10.65c-.91,0-1.69.66-1.83,1.57l-.47,2.98-.74-1.08c-2.31-3.35-7.45-4.47-12.58-4.47-11.77,0-21.83,8.92-23.78,21.43-1.02,6.24.43,12.21,3.97,16.37,3.25,3.82,7.89,5.42,13.42,5.42,9.49,0,14.75-6.1,14.75-6.1l-.48,2.96c-.18,1.13.69,2.15,1.83,2.15h9.59c1.52,0,2.82-1.11,3.05-2.61l5.76-36.47c.18-1.13-.69-2.14-1.83-2.14ZM363.28,63.27c-1.03,6.09-5.86,10.17-12.03,10.17-3.09,0-5.56-.99-7.15-2.88-1.58-1.87-2.17-4.52-1.67-7.48.96-6.03,5.87-10.25,11.94-10.25,3.03,0,5.48,1,7.1,2.9,1.63,1.91,2.27,4.59,1.81,7.53Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                      <path d="M276.18,42.54h-10.71c-1.02,0-1.98.51-2.56,1.36l-14.77,21.76-6.26-20.91c-.39-1.31-1.6-2.21-2.96-2.21h-10.53c-1.27,0-2.17,1.25-1.76,2.45l11.79,34.61-11.09,15.65c-.87,1.23,0,2.93,1.51,2.93h10.7c1.01,0,1.96-.5,2.54-1.33l35.61-51.4c.85-1.23-.03-2.91-1.52-2.91Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                      <path d="M390.69,23.52l-9.13,58.1c-.18,1.13.69,2.14,1.83,2.14h9.18c1.52,0,2.82-1.11,3.05-2.61l9-57.05c.18-1.13-.69-2.14-1.83-2.14h-10.28c-.91,0-1.69.66-1.83,1.57Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                    </g>
                    <g>
                      <path d="M74.98,24.94c1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l-1.3,8.25c-.22,1.39.86,2.65,2.26,2.65h15.88c1.88,0,3.48-1.37,3.77-3.22l.16-.81,2.99-18.97.19-1.05c.29-1.86,1.89-3.22,3.77-3.22h2.38c15.38,0,27.43-6.25,30.95-24.32,1.47-7.55.71-13.86-3.18-18.29-1.18-1.34-2.64-2.45-4.35-3.35h0" style={{fill: "rgb(0, 156, 222)"}}></path>
                      <path d="M74.98,24.94c1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l4.73-30.01-.15.94c.33-2.12,2.15-3.69,4.3-3.69h8.95c17.58,0,31.35-7.14,35.38-27.8.12-.61.22-1.2.31-1.79" style={{fill: "rgb(1, 33, 105)"}}></path>
                      <path d="M31.27,25.05c.2-1.28,1.02-2.32,2.12-2.85.5-.24,1.06-.37,1.65-.37h23.92c2.83,0,5.48.19,7.89.57.69.11,1.36.24,2.01.38s1.29.31,1.9.49c.31.09.61.18.9.28,1.19.39,2.29.86,3.31,1.4,1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l4.73-30.01,5.08-32.23Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                    </g>
                  </svg>
                </Item>
              </div>
              <div>
                <Item className="bg-background h-9 min-w-0 px-2" variant="outline" size="default" aria-label="Apple Pay" role="img">
                  <span className="flex font-semibold gap-1 items-center text-sm">
                    <svg className="size-3.5" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                    </svg>
                    Pay
                  </span>
                </Item>
              </div>
            </div>
            <p className="flex gap-2 items-center text-muted-foreground text-xs">
              <svg className="lucide lucide-shield-check shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>
                Encrypted payments. We never store card details.
              </span>
            </p>
          </aside>
        </div>
        <ul className="border-t flex flex-wrap gap-x-6 gap-y-2 items-center justify-center px-6 py-4 sm:gap-x-8 sm:px-8 text-muted-foreground text-xs" role="list">
          <li className="flex gap-2 items-center">
            <span className="shrink-0 text-foreground/70" aria-hidden="true">
              <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </span>
            <span>
              Free Shipping
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <span className="shrink-0 text-foreground/70" aria-hidden="true">
              <svg className="lucide lucide-rotate-ccw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </span>
            <span>
              60-Day Returns
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <span className="shrink-0 text-foreground/70" aria-hidden="true">
              <svg className="lucide lucide-headphones size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
            </span>
            <span>
              Concierge Support
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <span className="shrink-0 text-foreground/70" aria-hidden="true">
              <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <span>
              Secure Checkout
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
