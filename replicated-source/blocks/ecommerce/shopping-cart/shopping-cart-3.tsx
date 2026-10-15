import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex justify-center lg:p-10 min-h-svh p-4 sm:p-6 w-full">
      <section className="max-w-5xl mx-auto w-full" aria-labelledby="cart-title">
        <header className="flex flex-wrap gap-x-6 gap-y-2 items-baseline justify-between pb-5">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline">
            <h1 className="font-semibold text-2xl text-foreground tracking-tight" id="cart-title">
              Shopping Cart
            </h1>
            <span className="tabular-nums text-muted-foreground text-sm">
              4 items
            </span>
          </div>
          <Button className="h-auto p-0 text-sm" type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Continue Shopping
          </Button>
        </header>
        <div className="border-b font-medium gap-x-5 grid-cols-[minmax(0,1fr)_96px_128px_112px_32px] hidden items-center md:grid py-2.5 text-muted-foreground text-xs">
          <span>
            Product Details
          </span>
          <span>
            Price
          </span>
          <span className="text-center">
            Quantity
          </span>
          <span className="text-right">
            Total Price
          </span>
          <span aria-hidden="true"></span>
        </div>
        <ul className="border-b divide-border divide-y" role="list">
          <li className="py-3">
            <div className="gap-x-5 hidden items-center md:grid md:grid-cols-[minmax(0,1fr)_96px_128px_112px_32px]">
              <div className="flex gap-4 items-center min-w-0">
                <a className="group shrink-0" href="#shop-atelier-tulle-blouse" aria-label="View Atelier Tulle Blouse">
                  <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Atelier Tulle Blouse styled on a studio mannequin" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-atelier-tulle-blouse">
                      Atelier Tulle Blouse
                    </a>
                  </h3>
                  <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                    <span className="flex gap-1.5 items-center min-w-0">
                      <span className="bg-stone-900 dark:bg-stone-100 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="truncate">
                        Onyx
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      Size M
                    </span>
                  </p>
                </div>
              </div>
              <p className="tabular-nums text-muted-foreground text-sm">
                $48.00
              </p>
              <div className="flex justify-center">
                <ButtonGroup role="group" aria-label="Quantity for Atelier Tulle Blouse">
                  <Button type="button" tabIndex="0" aria-label="Decrease quantity for Atelier Tulle Blouse">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    2
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Tulle Blouse">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
              <p className="font-semibold tabular-nums text-base text-foreground text-right">
                $96.00
              </p>
              <div className="flex justify-end">
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Atelier Tulle Blouse from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:hidden">
              <div className="flex gap-2 items-start justify-between">
                <div className="flex gap-4 items-center min-w-0">
                  <a className="group shrink-0" href="#shop-atelier-tulle-blouse" aria-label="View Atelier Tulle Blouse">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Atelier Tulle Blouse styled on a studio mannequin" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-atelier-tulle-blouse">
                        Atelier Tulle Blouse
                      </a>
                    </h3>
                    <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <span className="bg-stone-900 dark:bg-stone-100 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="truncate">
                          Onyx
                        </span>
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="shrink-0">
                        Size M
                      </span>
                    </p>
                  </div>
                </div>
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Atelier Tulle Blouse from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <ButtonGroup role="group" aria-label="Quantity for Atelier Tulle Blouse">
                  <Button type="button" tabIndex="0" aria-label="Decrease quantity for Atelier Tulle Blouse">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    2
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Tulle Blouse">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
                <div className="flex gap-2 items-baseline tabular-nums">
                  <span className="text-muted-foreground text-xs">
                    $48.00
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="font-semibold text-base text-foreground">
                    $96.00
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="py-3">
            <div className="gap-x-5 hidden items-center md:grid md:grid-cols-[minmax(0,1fr)_96px_128px_112px_32px]">
              <div className="flex gap-4 items-center min-w-0">
                <a className="group shrink-0" href="#shop-atelier-quilted-crossbody-bag" aria-label="View Atelier Quilted Crossbody Bag">
                  <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Sage green quilted crossbody bag on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-atelier-quilted-crossbody-bag">
                      Atelier Quilted Crossbody Bag
                    </a>
                  </h3>
                  <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                    <span className="flex gap-1.5 items-center min-w-0">
                      <span className="bg-emerald-300 dark:bg-emerald-400 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="truncate">
                        Sage
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      Size One Size
                    </span>
                  </p>
                </div>
              </div>
              <p className="tabular-nums text-muted-foreground text-sm">
                $138.00
              </p>
              <div className="flex justify-center">
                <ButtonGroup role="group" aria-label="Quantity for Atelier Quilted Crossbody Bag">
                  <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Atelier Quilted Crossbody Bag">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    1
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Quilted Crossbody Bag">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
              <p className="font-semibold tabular-nums text-base text-foreground text-right">
                $138.00
              </p>
              <div className="flex justify-end">
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Atelier Quilted Crossbody Bag from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:hidden">
              <div className="flex gap-2 items-start justify-between">
                <div className="flex gap-4 items-center min-w-0">
                  <a className="group shrink-0" href="#shop-atelier-quilted-crossbody-bag" aria-label="View Atelier Quilted Crossbody Bag">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Sage green quilted crossbody bag on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-atelier-quilted-crossbody-bag">
                        Atelier Quilted Crossbody Bag
                      </a>
                    </h3>
                    <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <span className="bg-emerald-300 dark:bg-emerald-400 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="truncate">
                          Sage
                        </span>
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="shrink-0">
                        Size One Size
                      </span>
                    </p>
                  </div>
                </div>
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Atelier Quilted Crossbody Bag from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <ButtonGroup role="group" aria-label="Quantity for Atelier Quilted Crossbody Bag">
                  <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Atelier Quilted Crossbody Bag">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    1
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Quilted Crossbody Bag">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
                <div className="flex gap-2 items-baseline tabular-nums">
                  <span className="text-muted-foreground text-xs">
                    $138.00
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="font-semibold text-base text-foreground">
                    $138.00
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="py-3">
            <div className="gap-x-5 hidden items-center md:grid md:grid-cols-[minmax(0,1fr)_96px_128px_112px_32px]">
              <div className="flex gap-4 items-center min-w-0">
                <a className="group shrink-0" href="#shop-heritage-suede-mules" aria-label="View Heritage Suede Mules">
                  <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Ivory suede mule heels on a soft studio surface" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                    <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-heritage-suede-mules">
                      Heritage Suede Mules
                    </a>
                  </h3>
                  <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                    <span className="flex gap-1.5 items-center min-w-0">
                      <span className="bg-stone-200 dark:bg-stone-300 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="truncate">
                        Ivory
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      Size 8
                    </span>
                  </p>
                </div>
              </div>
              <p className="tabular-nums text-muted-foreground text-sm">
                $168.00
              </p>
              <div className="flex justify-center">
                <ButtonGroup role="group" aria-label="Quantity for Heritage Suede Mules">
                  <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Heritage Suede Mules">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    1
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Heritage Suede Mules">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
              <p className="font-semibold tabular-nums text-base text-foreground text-right">
                $168.00
              </p>
              <div className="flex justify-end">
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Heritage Suede Mules from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:hidden">
              <div className="flex gap-2 items-start justify-between">
                <div className="flex gap-4 items-center min-w-0">
                  <a className="group shrink-0" href="#shop-heritage-suede-mules" aria-label="View Heritage Suede Mules">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-18" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Ivory suede mule heels on a soft studio surface" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-semibold leading-tight sm:text-base text-foreground text-sm">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-heritage-suede-mules">
                        Heritage Suede Mules
                      </a>
                    </h3>
                    <p className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <span className="bg-stone-200 dark:bg-stone-300 inline-block ring-1 ring-border/60 ring-inset rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="truncate">
                          Ivory
                        </span>
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="shrink-0">
                        Size 8
                      </span>
                    </p>
                  </div>
                </div>
                <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Heritage Suede Mules from cart">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <ButtonGroup role="group" aria-label="Quantity for Heritage Suede Mules">
                  <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Heritage Suede Mules">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </Button>
                  <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                    1
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Increase quantity for Heritage Suede Mules">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
                <div className="flex gap-2 items-baseline tabular-nums">
                  <span className="text-muted-foreground text-xs">
                    $168.00
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="font-semibold text-base text-foreground">
                    $168.00
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex justify-end mt-8">
          <div className="flex flex-col gap-5 max-w-sm w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-6 items-center justify-between text-sm">
                  <span className="flex gap-1 items-center text-muted-foreground">
                    Subtotal (4 items)
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    $402.00
                  </span>
                </div>
                <div className="flex gap-6 items-center justify-between text-sm">
                  <span className="flex gap-1 items-center text-muted-foreground">
                    Shipping
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Shipping is on us at this order total." id="base-ui-_r_1_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                      Free
                    </Badge>
                  </span>
                </div>
                <div className="flex gap-6 items-center justify-between text-sm">
                  <span className="flex gap-1 items-center text-muted-foreground">
                    Estimated tax
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Estimated at 8 percent. Final tax is calculated at checkout based on your shipping address." id="base-ui-_r_3_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    $32.16
                  </span>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex gap-6 items-baseline justify-between">
                <span className="font-semibold text-base text-foreground">
                  Total
                </span>
                <div className="flex flex-col gap-1 items-end">
                  <span className="font-semibold leading-none tabular-nums text-3xl text-primary tracking-tight">
                    $434.16
                  </span>
                  <span className="tabular-nums text-muted-foreground text-xs">
                    You saved $20.00 on shipping
                  </span>
                </div>
              </div>
            </div>
            <Button className="w-full" href="#checkout" aria-label="Proceed to checkout, total $434.16" role="button" tabIndex="0" type="button">
              Proceed To Checkout
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
            <p className="flex gap-2 items-center justify-center text-muted-foreground text-xs">
              <svg className="lucide lucide-shield-check shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>
                Secure checkout. Free returns within 30 days.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
