import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldDescription,
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-muted/40 min-h-svh w-full">
      <section className="max-w-6xl mx-auto px-6 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="cart-title">
        <header className="flex flex-col gap-2 mb-6 sm:mb-9">
          <p className="font-medium text-[11px] text-muted-foreground tracking-[0.16em] uppercase">
            Your Bag
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-baseline justify-between">
            <h1 className="font-semibold sm:text-4xl text-3xl text-foreground tracking-tight" id="cart-title">
              Shopping Cart
            </h1>
            <Button className="h-auto p-0 text-sm" type="button" tabIndex="0" extracted="1">
              Continue Shopping
              <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" data-icon="inline-end" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Button>
          </div>
          <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-sm">
            <span className="tabular-nums">
              5 items
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              Delivery by 9 PM today
            </span>
          </p>
        </header>
        <div className="gap-8 grid lg:gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <ul className="divide-border divide-y" role="list">
            <li className="first:pt-0 last:pb-0 py-5 sm:py-6">
              <article className="gap-5 grid grid-cols-[auto_minmax(0,1fr)] group items-start sm:gap-6">
                <a className="shrink-0" href="#shop-glow-renewal-serum" aria-label="View Glow Renewal Serum">
                  <Item className="overflow-hidden p-0 relative size-24 sm:size-28" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Glow Renewal Serum amber dropper bottle on a soft surface" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-semibold leading-snug text-base text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-glow-renewal-serum">
                          Glow Renewal Serum
                        </a>
                      </h3>
                      <p className="line-clamp-2 mt-0.5 text-muted-foreground text-sm">
                        Brightens uneven tone with vitamin C and niacinamide. Layers under moisturizer without pilling.
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0">
                      <p className="font-semibold leading-none tabular-nums text-foreground text-lg">
                        $48.00
                      </p>
                      <p className="tabular-nums text-muted-foreground text-xs">
                        $24.00 each
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-between pt-1">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span className="text-muted-foreground">
                        Size
                      </span>
                      30 ml
                    </Badge>
                    <div className="flex gap-1.5 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Remove Glow Renewal Serum" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <ButtonGroup role="group" aria-label="Quantity for Glow Renewal Serum">
                        <Button type="button" tabIndex="0" aria-label="Decrease quantity for Glow Renewal Serum">
                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </Button>
                        <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                          2
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Increase quantity for Glow Renewal Serum">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="first:pt-0 last:pb-0 py-5 sm:py-6">
              <article className="gap-5 grid grid-cols-[auto_minmax(0,1fr)] group items-start sm:gap-6">
                <a className="shrink-0" href="#shop-calm-recovery-cream" aria-label="View Calm Recovery Cream">
                  <Item className="overflow-hidden p-0 relative size-24 sm:size-28" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Calm Recovery Cream jar with cream texture sample" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-semibold leading-snug text-base text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-calm-recovery-cream">
                          Calm Recovery Cream
                        </a>
                      </h3>
                      <p className="line-clamp-2 mt-0.5 text-muted-foreground text-sm">
                        A barrier balm with ceramides and squalane for late nights and travel. Fragrance-free.
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0">
                      <p className="font-semibold leading-none tabular-nums text-foreground text-lg">
                        $32.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-between pt-1">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span className="text-muted-foreground">
                        Size
                      </span>
                      50 ml
                    </Badge>
                    <div className="flex gap-1.5 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Remove Calm Recovery Cream" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <ButtonGroup role="group" aria-label="Quantity for Calm Recovery Cream">
                        <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Calm Recovery Cream">
                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </Button>
                        <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                          1
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Increase quantity for Calm Recovery Cream">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="first:pt-0 last:pb-0 py-5 sm:py-6">
              <article className="gap-5 grid grid-cols-[auto_minmax(0,1fr)] group items-start sm:gap-6">
                <a className="shrink-0" href="#shop-ritual-clay-mask" aria-label="View Ritual Clay Mask">
                  <Item className="overflow-hidden p-0 relative size-24 sm:size-28" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Ritual Clay Mask ceramic jar with clay swatch" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-semibold leading-snug text-base text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-ritual-clay-mask">
                          Ritual Clay Mask
                        </a>
                      </h3>
                      <p className="line-clamp-2 mt-0.5 text-muted-foreground text-sm">
                        Weekly purifying mask with kaolin and oat. Rinses clean without stripping the skin.
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0">
                      <p className="font-semibold leading-none tabular-nums text-foreground text-lg">
                        $18.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-between pt-1">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span className="text-muted-foreground">
                        Size
                      </span>
                      100 ml
                    </Badge>
                    <div className="flex gap-1.5 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Remove Ritual Clay Mask" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <ButtonGroup role="group" aria-label="Quantity for Ritual Clay Mask">
                        <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Ritual Clay Mask">
                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </Button>
                        <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                          1
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Increase quantity for Ritual Clay Mask">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li className="first:pt-0 last:pb-0 py-5 sm:py-6">
              <article className="gap-5 grid grid-cols-[auto_minmax(0,1fr)] group items-start sm:gap-6">
                <a className="shrink-0" href="#shop-velvet-lip-salve" aria-label="View Velvet Lip Salve">
                  <Item className="overflow-hidden p-0 relative size-24 sm:size-28" variant="muted" size="default">
                    <img className="absolute duration-500 ease-out group-hover:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Velvet Lip Salve gold tube on a warm neutral backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=400&h=400&q=80" />
                  </Item>
                </a>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex gap-4 items-start justify-between">
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-semibold leading-snug text-base text-foreground truncate">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#shop-velvet-lip-salve">
                          Velvet Lip Salve
                        </a>
                      </h3>
                      <p className="line-clamp-2 mt-0.5 text-muted-foreground text-sm">
                        Soft conditioning balm with shea and beeswax. Glides on for everyday wear.
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0">
                      <p className="font-semibold leading-none tabular-nums text-foreground text-lg">
                        $14.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center justify-between pt-1">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      <span className="text-muted-foreground">
                        Size
                      </span>
                      10 ml
                    </Badge>
                    <div className="flex gap-1.5 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Remove Velvet Lip Salve" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <ButtonGroup role="group" aria-label="Quantity for Velvet Lip Salve">
                        <Button type="button" disabled="" tabIndex="0" disabled aria-label="Decrease quantity for Velvet Lip Salve">
                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                          </svg>
                        </Button>
                        <div className="[&_svg]:pointer-events-none cn-button-group-text flex items-center justify-center min-w-9 tabular-nums text-sm">
                          1
                        </div>
                        <Button type="button" tabIndex="0" aria-label="Increase quantity for Velvet Lip Salve">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
          <div className="lg:sticky lg:top-6">
            <Frame spacing="sm">
              <header className="flex flex-row gap-3 items-baseline justify-between px-5 py-4">
                <div className="font-semibold text-base tracking-tight">
                  Order Summary
                </div>
                <span className="font-medium text-[11px] text-muted-foreground tracking-[0.12em] uppercase">
                  Estimated
                </span>
              </header>
              <FramePanel className="px-5 py-5">
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2" role="list">
                    <li className="gap-x-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline text-sm">
                      <span className="tabular-nums text-muted-foreground">
                        ×2
                      </span>
                      <a className="hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#shop-glow-renewal-serum">
                        Glow Renewal Serum
                      </a>
                      <span className="font-medium tabular-nums text-foreground">
                        $48.00
                      </span>
                    </li>
                    <li className="gap-x-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline text-sm">
                      <span className="tabular-nums text-muted-foreground">
                        ×1
                      </span>
                      <a className="hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#shop-calm-recovery-cream">
                        Calm Recovery Cream
                      </a>
                      <span className="font-medium tabular-nums text-foreground">
                        $32.00
                      </span>
                    </li>
                    <li className="gap-x-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline text-sm">
                      <span className="tabular-nums text-muted-foreground">
                        ×1
                      </span>
                      <a className="hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#shop-ritual-clay-mask">
                        Ritual Clay Mask
                      </a>
                      <span className="font-medium tabular-nums text-foreground">
                        $18.00
                      </span>
                    </li>
                    <li className="gap-x-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline text-sm">
                      <span className="tabular-nums text-muted-foreground">
                        ×1
                      </span>
                      <a className="hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#shop-velvet-lip-salve">
                        Velvet Lip Salve
                      </a>
                      <span className="font-medium tabular-nums text-foreground">
                        $14.00
                      </span>
                    </li>
                  </ul>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="gap-x-3 grid grid-cols-[minmax(0,1fr)_auto] items-start">
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <p className="flex font-medium gap-2 items-center text-foreground text-sm">
                        <svg className="lucide lucide-truck shrink-0 size-4 text-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                          <path d="M15 18H9"></path>
                          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                          <circle cx="17" cy="18" r="2"></circle>
                          <circle cx="7" cy="18" r="2"></circle>
                        </svg>
                        <span>
                          <a className="font-semibold hover:text-primary hover:underline transition-colors underline-offset-4" href="#courier-pace-courier">
                            Pace Courier
                          </a>
                          · Arrives by 9 PM today
                        </span>
                      </p>
                      <p className="flex gap-2 items-center text-muted-foreground text-xs">
                        <svg className="lucide lucide-map-pin shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>
                          <span className="font-medium text-foreground">
                            Brooklyn, New York
                          </span>
                          ·
                          <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#change-address">
                            Change
                          </a>
                        </span>
                      </p>
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="font-semibold hover:text-primary hover:underline shrink-0 tabular-nums text-foreground text-sm transition-colors underline-offset-2" type="button" aria-label="Delivery fee details" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                      $12.00
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex gap-3 items-center justify-between">
                      <span className="flex gap-1 items-center text-muted-foreground">
                        Amount
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Amount information" aria-describedby="cart-2-amount-hint" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                      <span className="font-medium tabular-nums text-foreground">
                        $109.00
                      </span>
                    </div>
                    <div className="flex gap-3 items-center justify-between">
                      <span className="flex gap-1 items-center text-muted-foreground">
                        Tax
                        <Tooltip>
                        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tax information" aria-describedby="cart-2-tax-hint" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                      <span className="font-medium tabular-nums text-foreground">
                        $8.72
                      </span>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-baseline justify-between">
                      <p className="font-medium text-[11px] text-muted-foreground tracking-[0.12em] uppercase">
                        Order Total
                      </p>
                      <p className="font-medium tabular-nums text-[11px] text-muted-foreground">
                        USD
                      </p>
                    </div>
                    <p className="font-semibold leading-none sm:text-2xl tabular-nums text-foreground text-xl">
                      $117.72
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Charged on confirmation. Includes all taxes and delivery.
                    </p>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
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
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="cart-2-coupon" placeholder="Add coupon code" aria-label="Coupon code" aria-invalid="false" value="STUDIO15" />
                        <InputGroupAddon className="pr-0" role="group" data-align="inline-end">
                          <Button className="cn-input-group-button cn-input-group-button-size-sm flex shadow-none" type="submit" tabIndex="0" size="sm">
                            Apply
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                      <FieldDescription className="flex gap-1.5 items-center text-foreground" id="cart-2-coupon-status">
                        <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Coupon applied to your order
                      </FieldDescription>
                    </Field>
                  </form>
                  <Button className="justify-between w-full" type="button" tabIndex="0">
                    <span className="gap-2 inline-flex items-center">
                      <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Secure Checkout
                    </span>
                    <span className="font-normal tabular-nums text-background/80">
                      $117.72
                    </span>
                  </Button>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 items-center justify-center text-muted-foreground text-xs" role="list">
                    <li className="flex gap-1.5 items-center">
                      <svg className="lucide lucide-shield-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>
                        Secure payment
                      </span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <svg className="lucide lucide-rotate-ccw size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                      </svg>
                      <span>
                        Free returns
                      </span>
                    </li>
                    <li className="flex gap-1.5 items-center">
                      <svg className="lucide lucide-headphones size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>
                        Live help
                      </span>
                    </li>
                  </ul>
                </div>
              </FramePanel>
            </Frame>
          </div>
        </div>
      </section>
    </main>
  )
}
