import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemGroup,
  ItemMedia,
} from "@/registry/bases/base/ui/item"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-muted/40 min-h-svh w-full">
      <section className="gap-4 grid lg:grid-cols-[minmax(0,1fr)_336px] lg:items-start max-w-6xl mx-auto px-4 py-5 sm:px-6 sm:py-7 w-full" aria-labelledby="cart-5-title">
        <Card className="overflow-hidden" size="default">
          <CardHeader>
            <CardTitle className="font-semibold sm:text-2xl text-foreground text-xl tracking-tight" id="cart-5-title">
              {"Shopping Cart"}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              <span className="flex-wrap gap-x-1.5 inline-flex items-center">
                <span className="font-medium tabular-nums text-foreground">
                  {"5"}
                </span>
                <span>
                  {"items in review"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"ORD-48291"}
                </span>
              </span>
            </CardDescription>
            <CardAction>
              <a className="gap-1 hidden hover:text-primary hover:underline items-center sm:inline-flex text-muted-foreground text-sm transition-colors underline-offset-4" href="#continue-shopping">
                <span>
                  {"Continue shopping"}
                </span>
                <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-0 p-0">
            <div className="border-y font-semibold gap-5 grid-cols-[minmax(0,1fr)_auto_minmax(96px,auto)_auto] hidden items-center px-6 py-1.5 sm:grid text-[10px] text-muted-foreground tracking-widest uppercase">
              <span>
                {"Product"}
              </span>
              <span className="justify-self-center">
                {"Quantity"}
              </span>
              <span className="justify-self-end">
                {"Price"}
              </span>
              <span className="size-8" aria-hidden="true"></span>
            </div>
            <ul className="divide-border divide-y px-4 sm:px-6" role="list">
              <li className="py-4 sm:py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center sm:gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(96px,auto)_auto]">
                  <div className="col-span-2 flex gap-3 items-start min-w-0 sm:col-span-1 sm:gap-4 sm:items-center">
                    <a className="shrink-0" href="#product-atlas-compact-headphones" aria-label="View Atlas Compact Studio Headphones">
                      <Item className="overflow-hidden p-0 relative size-14 sm:size-16" variant="muted" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="Atlas Compact Studio Headphones on a soft studio surface" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=400&q=80" />
                      </Item>
                    </a>
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                        {"Audio"}
                      </p>
                      <h3 className="font-medium leading-snug mt-0.5 text-[15px] text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#product-atlas-compact-headphones">
                          {"Atlas Compact Studio Headphones"}
                        </a>
                      </h3>
                      <p className="flex gap-1.5 items-center mt-1 text-muted-foreground text-xs">
                        <span className="bg-stone-900 border border-border/70 dark:bg-stone-800 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="text-foreground/80 truncate">
                          {"Midnight Black"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <ButtonGroup className="col-span-2 justify-self-start row-start-2 sm:col-span-1 sm:justify-self-center sm:row-start-auto" role="group" aria-label="Quantity for Atlas Compact Studio Headphones">
                    <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Atlas Compact Studio Headphones" extracted="1">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                      {"1"}
                    </div>
                    <Button type="button" tabIndex="0" aria-label="Increase quantity for Atlas Compact Studio Headphones">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <div className="flex flex-col gap-0.5 items-end justify-self-end row-start-2 sm:row-start-auto">
                    <p className="font-semibold tabular-nums text-base text-foreground">
                      {"$249.99"}
                    </p>
                  </div>
                  <Button className="-mr-1 col-start-3 hover:text-foreground row-start-1 sm:col-start-auto sm:mr-0 sm:row-start-auto text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Atlas Compact Studio Headphones from cart">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </li>
              <li className="py-4 sm:py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center sm:gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(96px,auto)_auto]">
                  <div className="col-span-2 flex gap-3 items-start min-w-0 sm:col-span-1 sm:gap-4 sm:items-center">
                    <a className="shrink-0" href="#product-trail-beacon-gps-watch" aria-label="View Trail Beacon GPS Field Watch">
                      <Item className="overflow-hidden p-0 relative size-14 sm:size-16" variant="muted" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="Trail Beacon GPS Field Watch on a textured studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&h=400&q=80" />
                      </Item>
                    </a>
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                        {"Wearables"}
                      </p>
                      <h3 className="font-medium leading-snug mt-0.5 text-[15px] text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#product-trail-beacon-gps-watch">
                          {"Trail Beacon GPS Field Watch"}
                        </a>
                      </h3>
                      <p className="flex gap-1.5 items-center mt-1 text-muted-foreground text-xs">
                        <span className="bg-zinc-500 border border-border/70 dark:bg-zinc-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="text-foreground/80 truncate">
                          {"Carbon Grey"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <ButtonGroup className="col-span-2 justify-self-start row-start-2 sm:col-span-1 sm:justify-self-center sm:row-start-auto" role="group" aria-label="Quantity for Trail Beacon GPS Field Watch">
                    <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Trail Beacon GPS Field Watch">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                      {"1"}
                    </div>
                    <Button type="button" tabIndex="0" aria-label="Increase quantity for Trail Beacon GPS Field Watch">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <div className="flex flex-col gap-0.5 items-end justify-self-end row-start-2 sm:row-start-auto">
                    <p className="font-semibold tabular-nums text-base text-foreground">
                      {"$329.99"}
                    </p>
                  </div>
                  <Button className="-mr-1 col-start-3 hover:text-foreground row-start-1 sm:col-start-auto sm:mr-0 sm:row-start-auto text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Trail Beacon GPS Field Watch from cart">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </li>
              <li className="py-4 sm:py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center sm:gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(96px,auto)_auto]">
                  <div className="col-span-2 flex gap-3 items-start min-w-0 sm:col-span-1 sm:gap-4 sm:items-center">
                    <a className="shrink-0" href="#product-pulse-field-speaker" aria-label="View Pulse Field Bluetooth Speaker">
                      <Item className="overflow-hidden p-0 relative size-14 sm:size-16" variant="muted" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="Pulse Field Bluetooth Speaker on a clean studio surface" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&h=400&q=80" />
                      </Item>
                    </a>
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                        {"Audio"}
                      </p>
                      <h3 className="font-medium leading-snug mt-0.5 text-[15px] text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#product-pulse-field-speaker">
                          {"Pulse Field Bluetooth Speaker"}
                        </a>
                      </h3>
                      <p className="flex gap-1.5 items-center mt-1 text-muted-foreground text-xs">
                        <span className="bg-slate-700 border border-border/70 dark:bg-slate-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="text-foreground/80 truncate">
                          {"Deep Slate"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <ButtonGroup className="col-span-2 justify-self-start row-start-2 sm:col-span-1 sm:justify-self-center sm:row-start-auto" role="group" aria-label="Quantity for Pulse Field Bluetooth Speaker">
                    <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Pulse Field Bluetooth Speaker">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                      {"1"}
                    </div>
                    <Button type="button" tabIndex="0" aria-label="Increase quantity for Pulse Field Bluetooth Speaker">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <div className="flex flex-col gap-0.5 items-end justify-self-end row-start-2 sm:row-start-auto">
                    <p className="font-semibold tabular-nums text-base text-foreground">
                      {"$109.99"}
                    </p>
                  </div>
                  <Button className="-mr-1 col-start-3 hover:text-foreground row-start-1 sm:col-start-auto sm:mr-0 sm:row-start-auto text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Pulse Field Bluetooth Speaker from cart">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </li>
              <li className="py-4 sm:py-5">
                <div className="gap-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center sm:gap-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(96px,auto)_auto]">
                  <div className="col-span-2 flex gap-3 items-start min-w-0 sm:col-span-1 sm:gap-4 sm:items-center">
                    <a className="shrink-0" href="#product-helix-air-earbuds" aria-label="View Helix Air Sport Wireless Earbuds">
                      <Item className="overflow-hidden p-0 relative size-14 sm:size-16" variant="muted" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="Helix Air Sport Wireless Earbuds in a charging case" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=400&h=400&q=80" />
                      </Item>
                    </a>
                    <div className="flex flex-col min-w-0">
                      <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                        {"Audio"}
                      </p>
                      <h3 className="font-medium leading-snug mt-0.5 text-[15px] text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#product-helix-air-earbuds">
                          {"Helix Air Sport Wireless Earbuds"}
                        </a>
                      </h3>
                      <p className="flex gap-1.5 items-center mt-1 text-muted-foreground text-xs">
                        <span className="bg-blue-600 border border-border/70 dark:bg-blue-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                        <span className="text-foreground/80 truncate">
                          {"Cobalt"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <ButtonGroup className="col-span-2 justify-self-start row-start-2 sm:col-span-1 sm:justify-self-center sm:row-start-auto" role="group" aria-label="Quantity for Helix Air Sport Wireless Earbuds">
                    <Button type="button" tabIndex="0" aria-label="Decrease quantity for Helix Air Sport Wireless Earbuds">
                      <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                      </svg>
                    </Button>
                    <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                      {"2"}
                    </div>
                    <Button type="button" tabIndex="0" aria-label="Increase quantity for Helix Air Sport Wireless Earbuds">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </Button>
                  </ButtonGroup>
                  <div className="flex flex-col gap-0.5 items-end justify-self-end row-start-2 sm:row-start-auto">
                    <p className="font-semibold tabular-nums text-base text-foreground">
                      {"$359.98"}
                    </p>
                    <p className="tabular-nums text-[11px] text-muted-foreground">
                      {"$179.99 each"}
                    </p>
                  </div>
                  <Button className="-mr-1 col-start-3 hover:text-foreground row-start-1 sm:col-start-auto sm:mr-0 sm:row-start-auto text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Helix Air Sport Wireless Earbuds from cart">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4 lg:sticky lg:top-6">
          <Card size="sm">
            <CardHeader>
              <CardTitle className="font-semibold text-sm">
                {"Coupon Code"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <Field role="group" data-orientation="vertical" invalid="false">
                  <InputGroup className="pr-0" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                        <svg className="lucide lucide-tag size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                      </span>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="cart-5-coupon" placeholder="Enter your code" aria-label="Coupon code" aria-invalid="false" value="" />
                    <InputGroupAddon className="pr-0" role="group" data-align="inline-end">
                      <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="submit" tabIndex="0" size="sm">
                        {"Apply"}
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription className="text-xs" id="cart-5-coupon-help">
                    {"Discount applies before tax."}
                  </FieldDescription>
                </Field>
              </form>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle className="font-semibold text-sm">
                {"Order Summary"}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2.5">
              <div className="flex gap-3 items-center justify-between text-sm">
                <span className="gap-1 inline-flex items-center text-muted-foreground">
                  {"Subtotal"}
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {"$1,049.95"}
                </span>
              </div>
              <div className="flex gap-3 items-center justify-between text-sm">
                <span className="gap-1 inline-flex items-center text-muted-foreground">
                  {"Discount"}
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {"$0.00"}
                </span>
              </div>
              <div className="flex gap-3 items-center justify-between text-sm">
                <span className="gap-1 inline-flex items-center text-muted-foreground">
                  {"Delivery"}
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delivery details" id="base-ui-_r_2_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {"$19.99"}
                </span>
              </div>
              <div className="flex gap-3 items-center justify-between text-sm">
                <span className="gap-1 inline-flex items-center text-muted-foreground">
                  {"Tax"}
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tax details" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {"$88.27"}
                </span>
              </div>
              <Separator className="my-0.5" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex gap-3 items-end justify-between">
                <div className="flex flex-col gap-1">
                  <span className="gap-1 inline-flex items-center text-muted-foreground">
                    <span className="font-semibold text-[10px] tracking-widest uppercase">
                      {"Order Total"}
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground/70 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Order Total details" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </div>
                <p className="gap-1 inline-flex items-baseline text-foreground">
                  <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                    {"$1,158.21"}
                  </span>
                  <span className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                    {"USD"}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle className="font-semibold text-sm">
                {"Payment Method"}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <RadioGroup role="radiogroup" aria-label="Payment method">
                <ItemGroup className="gap-2 grid grid-cols-4" role="list">
                  <Item className="bg-primary/5 border-primary h-11 hover:bg-muted/40 p-0 relative" variant="outline" size="default">
                    <Field className="justify-center" role="group" data-orientation="vertical">
                      <RadioGroupItem className="sr-only" checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_8_" aria-labelledby="cart-5-payment-paypal-label">
                        <span className="cn-radio-group-indicator" data-checked="">
                          <span className="cn-radio-group-indicator-icon"></span>
                        </span>
                      </RadioGroupItem>
                      <input id="cart-5-payment-paypal" tabIndex="-1" aria-hidden="true" type="radio" value="paypal" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none h-full items-center justify-center peer-disabled:cursor-not-allowed select-none w-full" htmlFor="cart-5-payment-paypal" id="cart-5-payment-paypal-label">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-6" aria-hidden="true" viewBox="7.056000232696533 3 37.35095977783203 45">
                            <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                              <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                              <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                              <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                            </g>
                          </svg>
                        </ItemMedia>
                        <span className="sr-only">
                          {"PayPal"}
                        </span>
                      </FieldLabel>
                    </Field>
                    <span className="absolute bg-primary inline-flex items-center justify-center right-1 rounded-full size-3.5 text-primary-foreground top-1" aria-hidden="true">
                      <svg className="lucide lucide-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Item>
                  <Item className="h-11 hover:bg-muted/40 p-0 relative" variant="outline" size="default">
                    <Field className="justify-center" role="group" data-orientation="vertical">
                      <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_b_" aria-labelledby="cart-5-payment-stripe-label"></RadioGroupItem>
                      <input id="cart-5-payment-stripe" tabIndex="-1" aria-hidden="true" type="radio" value="stripe" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none h-full items-center justify-center peer-disabled:cursor-not-allowed select-none w-full" htmlFor="cart-5-payment-stripe" id="cart-5-payment-stripe-label">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-6" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                            <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                          </svg>
                        </ItemMedia>
                        <span className="sr-only">
                          {"Stripe"}
                        </span>
                      </FieldLabel>
                    </Field>
                  </Item>
                  <Item className="h-11 hover:bg-muted/40 p-0 relative" variant="outline" size="default">
                    <Field className="justify-center" role="group" data-orientation="vertical">
                      <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_e_" aria-labelledby="cart-5-payment-mastercard-label"></RadioGroupItem>
                      <input id="cart-5-payment-mastercard" tabIndex="-1" aria-hidden="true" type="radio" value="mastercard" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none h-full items-center justify-center peer-disabled:cursor-not-allowed select-none w-full" htmlFor="cart-5-payment-mastercard" id="cart-5-payment-mastercard-label">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-6" aria-hidden="true" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                            <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                            <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                          </svg>
                        </ItemMedia>
                        <span className="sr-only">
                          {"Mastercard"}
                        </span>
                      </FieldLabel>
                    </Field>
                  </Item>
                  <Item className="h-11 hover:bg-muted/40 p-0 relative" variant="outline" size="default">
                    <Field className="justify-center" role="group" data-orientation="vertical">
                      <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_h_" aria-labelledby="cart-5-payment-bitcoin-label"></RadioGroupItem>
                      <input id="cart-5-payment-bitcoin" tabIndex="-1" aria-hidden="true" type="radio" value="bitcoin" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none h-full items-center justify-center peer-disabled:cursor-not-allowed select-none w-full" htmlFor="cart-5-payment-bitcoin" id="cart-5-payment-bitcoin-label">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-6" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                            <defs>
                              <lineargradient id="btc-c" x1="50%" x2="50%" y1="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                                <stop offset="100%" stopOpacity=".5"></stop>
                              </lineargradient>
                              <circle id="btc-b" cx="16" cy="15" r="15"></circle>
                              <filter id="btc-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterunits="objectBoundingBox">
                                <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                                <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                                <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                                <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                              </filter>
                              <path id="btc-e" d="M23.1889526,13.0201846 C23.5025526,10.9239385 21.9064911,9.79704615 19.7240911,9.04529231 L20.4320295,6.20566154 L18.7035372,5.77489231 L18.0143065,8.53969231 C17.5599065,8.42646154 17.0931988,8.31963077 16.6294449,8.21378462 L17.3235988,5.43076923 L15.5960911,5 L14.8876603,7.83864615 C14.5115372,7.75298462 14.1423065,7.66830769 13.7839065,7.5792 L13.7858757,7.57033846 L11.4021218,6.97513846 L10.9423065,8.82129231 C10.9423065,8.82129231 12.224768,9.1152 12.1976911,9.13341538 C12.8977526,9.30818462 13.0242757,9.77144615 13.0031065,10.1387077 L12.1967065,13.3736615 C12.2449526,13.3859692 12.3074757,13.4036923 12.3763988,13.4312615 C12.3187988,13.4169846 12.2572603,13.4012308 12.1937526,13.3859692 L11.0634142,17.9176615 C10.9777526,18.1303385 10.7606449,18.4493538 10.2712911,18.3282462 C10.2885218,18.3533538 9.01492185,18.0146462 9.01492185,18.0146462 L8.15682954,19.9932308 L10.4061834,20.5539692 C10.8246449,20.6588308 11.2347372,20.7686154 11.6384295,20.872 L10.9231065,23.7441231 L12.6496295,24.1748923 L13.3580603,21.3332923 C13.8296911,21.4612923 14.2875372,21.5794462 14.7355372,21.6907077 L14.029568,24.5190154 L15.7580603,24.9497846 L16.4733834,22.0830769 C19.4208295,22.6408615 21.6371988,22.4158769 22.5701218,19.7500308 C23.3218757,17.6035692 22.5327065,16.3654154 20.9819372,15.5580308 C22.1112911,15.2976 22.9619988,14.5547077 23.1889526,13.0201846 L23.1889526,13.0201846 Z M19.2396603,18.5581538 C18.7055065,20.7046154 15.0914757,19.5442462 13.9197834,19.2532923 L14.8689526,15.4482462 C16.0406449,15.7406769 19.7979372,16.3196308 19.2396603,18.5581538 Z M19.7743065,12.9891692 C19.2869218,14.9416615 16.2789218,13.9496615 15.303168,13.7064615 L16.1637218,10.2553846 C17.1394757,10.4985846 20.2818757,10.9524923 19.7743065,12.9891692 Z"></path>
                              <filter id="btc-d" width="123.2%" height="117.5%" x="-11.6%" y="-6.3%" filterunits="objectBoundingBox">
                                <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                                <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                                <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"></fecolormatrix>
                              </filter>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <use fill="#000" filter="url(#btc-a)" xlinkHref="#btc-b"></use>
                              <use fill="#F7931A" xlinkHref="#btc-b"></use>
                              <use fill="url(#btc-c)" xlinkHref="#btc-b" style={{mixBlendMode: "soft-light"}}></use>
                              <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"></circle>
                              <g fillRule="nonzero">
                                <use fill="#000" filter="url(#btc-d)" xlinkHref="#btc-e"></use>
                                <use fill="#FFF" fillRule="evenodd" xlinkHref="#btc-e"></use>
                              </g>
                            </g>
                          </svg>
                        </ItemMedia>
                        <span className="sr-only">
                          {"Bitcoin"}
                        </span>
                      </FieldLabel>
                    </Field>
                  </Item>
                </ItemGroup>
              </RadioGroup>
              <p className="flex flex-wrap gap-x-1.5 items-center text-muted-foreground text-xs" aria-live="polite">
                <span className="font-medium text-foreground">
                  {"PayPal"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Pay with your PayPal balance."}
                </span>
              </p>
              <Button className="w-full" type="button" tabIndex="0">
                {"Check Out"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              <p className="gap-1.5 inline-flex items-center justify-center text-[11px] text-muted-foreground">
                <svg className="lucide lucide-shield-check shrink-0 size-3.5 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>
                  {"Encrypted payment · Card details never stored"}
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
