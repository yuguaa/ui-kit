import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Mini cart sheet
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
            <path d="M16 10a4 4 0 0 1-8 0"></path>
            <path d="M3.103 6.034h17.794"></path>
            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
          </svg>
          Open Cart
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 ml-1.5 outline-none px-1 py-0.25 relative rounded-full! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-primary-foreground transition-shadow" aria-label="6 items in cart">
            6
          </Badge>
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(26rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-12 px-4">
          <div className="flex gap-2 items-baseline min-w-0">
            <SheetTitle className="font-semibold text-sm truncate" id="base-ui-_r_3_">
              Your Cart
            </SheetTitle>
            <span className="tabular-nums text-muted-foreground text-xs">
              6 items
            </span>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close cart">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_4_">
          Review the items you just added to your cart and proceed to checkout.
        </SheetDescription>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "232px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-5 p-4">
              <section className="flex flex-col gap-2" aria-label="Just added">
                <div className="flex gap-2 items-center justify-between">
                  <div className="gap-1.5 inline-flex items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      <svg className="lucide lucide-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Just Added
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      12 seconds ago
                    </span>
                  </div>
                </div>
                <Item className="bg-success/[0.03] block border-success/25 p-3" variant="outline" size="default">
                  <div className="gap-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-start">
                    <a className="shrink-0" href="#product-linen-fold-tote" aria-label="View Linen Fold Carryall Tote">
                      <Item className="overflow-hidden p-0 relative size-14" variant="muted" size="default">
                        <img className="absolute h-full inset-0 object-cover w-full" alt="Linen Fold Carryall Tote in Sand" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=200&h=200&q=80" />
                      </Item>
                    </a>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                          Bags
                        </p>
                        <h3 className="font-medium leading-tight min-w-0 text-foreground text-sm">
                          <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#product-linen-fold-tote">
                            Linen Fold Carryall Tote
                          </a>
                        </h3>
                        <p className="text-muted-foreground text-xs truncate">
                          Sand
                        </p>
                      </div>
                      <ButtonGroup className="shrink-0" role="group" aria-label="Quantity for Linen Fold Carryall Tote">
                        <Button type="button" tabIndex="0" aria-label="Remove Linen Fold Carryall Tote from cart">
                          <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </Button>
                        <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-xs">
                          1
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Increase quantity for Linen Fold Carryall Tote">
                          <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <p className="font-semibold tabular-nums text-foreground text-sm">
                      $98.00
                    </p>
                  </div>
                </Item>
              </section>
              <section className="flex flex-col gap-2" aria-label="Also in your cart">
                <h3 className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                  Also In Your Cart (4)
                </h3>
                <ul className="divide-border divide-y" role="list">
                  <li className="first:pt-0 last:pb-0 py-3">
                    <div className="gap-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-start">
                      <a className="shrink-0" href="#product-studio-cotton-tee" aria-label="View Studio Cotton Pocket Tee">
                        <Item className="overflow-hidden p-0 relative size-14" variant="muted" size="default">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Studio Cotton Pocket Tee in Ivory" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=200&h=200&q=80" />
                        </Item>
                      </a>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                            Tops
                          </p>
                          <h3 className="font-medium leading-tight min-w-0 text-foreground text-sm">
                            <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#product-studio-cotton-tee">
                              Studio Cotton Pocket Tee
                            </a>
                          </h3>
                          <p className="text-muted-foreground text-xs truncate">
                            Ivory
                          </p>
                        </div>
                        <ButtonGroup className="shrink-0" role="group" aria-label="Quantity for Studio Cotton Pocket Tee">
                          <Button type="button" tabIndex="0" aria-label="Decrease quantity for Studio Cotton Pocket Tee">
                            <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-xs">
                            2
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Studio Cotton Pocket Tee">
                            <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <p className="font-semibold tabular-nums text-foreground text-sm">
                        $84.00
                      </p>
                    </div>
                  </li>
                  <li className="first:pt-0 last:pb-0 py-3">
                    <div className="gap-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-start">
                      <a className="shrink-0" href="#product-atelier-linen-pants" aria-label="View Atelier Wide-Leg Linen Pants">
                        <Item className="overflow-hidden p-0 relative size-14" variant="muted" size="default">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Atelier Wide-Leg Linen Pants in Stone" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=200&h=200&q=80" />
                        </Item>
                      </a>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                            Bottoms
                          </p>
                          <h3 className="font-medium leading-tight min-w-0 text-foreground text-sm">
                            <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#product-atelier-linen-pants">
                              Atelier Wide-Leg Linen Pants
                            </a>
                          </h3>
                          <p className="text-muted-foreground text-xs truncate">
                            Stone
                          </p>
                        </div>
                        <ButtonGroup className="shrink-0" role="group" aria-label="Quantity for Atelier Wide-Leg Linen Pants">
                          <Button type="button" tabIndex="0" aria-label="Remove Atelier Wide-Leg Linen Pants from cart">
                            <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-xs">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Atelier Wide-Leg Linen Pants">
                            <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <p className="font-semibold tabular-nums text-foreground text-sm">
                        $148.00
                      </p>
                    </div>
                  </li>
                  <li className="first:pt-0 last:pb-0 py-3">
                    <div className="gap-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-start">
                      <a className="shrink-0" href="#product-heritage-suede-loafers" aria-label="View Heritage Suede Loafers">
                        <Item className="overflow-hidden p-0 relative size-14" variant="muted" size="default">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Heritage Suede Loafers in Tan" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&h=200&q=80" />
                        </Item>
                      </a>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                            Footwear
                          </p>
                          <h3 className="font-medium leading-tight min-w-0 text-foreground text-sm">
                            <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#product-heritage-suede-loafers">
                              Heritage Suede Loafers
                            </a>
                          </h3>
                          <p className="text-muted-foreground text-xs truncate">
                            Tan
                          </p>
                        </div>
                        <ButtonGroup className="shrink-0" role="group" aria-label="Quantity for Heritage Suede Loafers">
                          <Button type="button" tabIndex="0" aria-label="Remove Heritage Suede Loafers from cart">
                            <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-xs">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Heritage Suede Loafers">
                            <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <p className="font-semibold tabular-nums text-foreground text-sm">
                        $185.00
                      </p>
                    </div>
                  </li>
                  <li className="first:pt-0 last:pb-0 py-3">
                    <div className="gap-3 grid grid-cols-[56px_minmax(0,1fr)_auto] items-start">
                      <a className="shrink-0" href="#product-maris-wool-scarf" aria-label="View Maris Felted Wool Scarf">
                        <Item className="overflow-hidden p-0 relative size-14" variant="muted" size="default">
                          <img className="absolute h-full inset-0 object-cover w-full" alt="Maris Felted Wool Scarf in Camel" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=200&h=200&q=80" />
                        </Item>
                      </a>
                      <div className="flex flex-col gap-2 min-w-0">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <p className="font-semibold text-[10px] text-muted-foreground tracking-widest uppercase">
                            Accessories
                          </p>
                          <h3 className="font-medium leading-tight min-w-0 text-foreground text-sm">
                            <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#product-maris-wool-scarf">
                              Maris Felted Wool Scarf
                            </a>
                          </h3>
                          <p className="text-muted-foreground text-xs truncate">
                            Camel
                          </p>
                        </div>
                        <ButtonGroup className="shrink-0" role="group" aria-label="Quantity for Maris Felted Wool Scarf">
                          <Button type="button" tabIndex="0" aria-label="Remove Maris Felted Wool Scarf from cart">
                            <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </Button>
                          <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-8 tabular-nums text-xs">
                            1
                          </div>
                          <Button type="button" tabIndex="0" aria-label="Increase quantity for Maris Felted Wool Scarf">
                            <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <p className="font-semibold tabular-nums text-foreground text-sm">
                        $58.00
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "241.56129032258067px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="bg-muted/30 border-t gap-3 p-4 shrink-0">
        <div className="flex flex-col gap-1.5">
          <p className="text-muted-foreground text-xs">
            <span className="font-medium tabular-nums text-foreground">
              $27.00
            </span>
            away from free shipping
          </p>
          <Progress className="h-1.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="95.5" aria-valuetext="96%" role="progressbar" aria-label="Free shipping progress">
            <ProgressTrack progressing="">
              <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "95.5%"}}></ProgressIndicator>
            </ProgressTrack>
            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
              x
            </span>
          </Progress>
        </div>
        <div className="flex gap-3 items-baseline justify-between">
          <span className="text-muted-foreground text-xs">
            Subtotal
            <span className="tabular-nums text-foreground/80">
              (6 items)
            </span>
          </span>
          <span className="font-semibold tabular-nums text-base text-foreground">
            $573.00
          </span>
        </div>
        <div className="gap-2 grid grid-cols-[auto_minmax(0,1fr)]">
          <Button href="#cart" role="button" tabIndex="0">
            View Cart
          </Button>
          <Button href="#checkout" role="button" tabIndex="0">
            Checkout
            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
        <p className="text-[11px] text-center text-muted-foreground">
          Taxes and discounts calculated at checkout.
        </p>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
