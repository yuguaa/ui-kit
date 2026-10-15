import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="comparison-3-heading">
        <header className="flex flex-col gap-3 items-start sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-semibold text-muted-foreground text-xs tracking-[0.08em] uppercase">
              {"Editor’s picks"}
            </p>
            <h1 className="font-semibold mt-1 sm:text-3xl text-2xl tracking-tight" id="comparison-3-heading">
              {"Find the one that fits you"}
            </h1>
            <p className="leading-5 max-w-prose mt-1 text-muted-foreground text-sm">
              {"Three favorites from the lineup. Each one is the best pick for a different kind of buyer."}
            </p>
          </div>
          <a className="font-medium gap-1.5 group hover:text-primary hover:underline inline-flex items-center shrink-0 text-foreground text-sm underline-offset-4" href="#all-models">
            {"Browse all models"}
            <svg className="group-hover:translate-x-0.5 lucide lucide-arrow-right size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </header>
        <div className="gap-4 grid items-stretch lg:gap-5 lg:grid-cols-3 mt-8 sm:grid-cols-2">
          <article className="bg-background border border-border flex flex-col group/card min-w-0 overflow-hidden rounded-lg" aria-labelledby="comparison-3-studio-name">
            <a className="aspect-[5/4] bg-muted/40 block overflow-hidden relative w-full" href="#studio" aria-label="View Studio Wireless">
              <img className="absolute duration-300 group-hover/card:scale-[1.03] h-full inset-0 object-cover transition-transform w-full" alt="Studio wireless headphones product shot" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=600&q=80" />
              <span className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                  {"Best value"}
                </Badge>
              </span>
            </a>
            <div className="flex flex-1 flex-col gap-3.5 p-5">
              <div className="flex flex-col gap-1 min-w-0">
                <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors underline-offset-4" id="comparison-3-studio-name" href="#studio">
                  {"Studio Wireless"}
                </a>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Wireless, Noise cancelling">
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#wireless" aria-label="View Wireless products">
                    {"Wireless"}
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#noise-cancelling" aria-label="View Noise cancelling products">
                    {"Noise cancelling"}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
                <div className="flex gap-2 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl text-foreground tracking-tight">
                    {"$249"}
                  </span>
                  <span className="line-through tabular-nums text-muted-foreground text-sm">
                    {"$299"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center shrink-0 text-xs">
                  <span className="inline-flex relative shrink-0" role="img" aria-label="4.6 out of 5">
                    <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "92%"}}>
                      <span className="gap-0.5 inline-flex items-center">
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    {"4.6"}
                  </span>
                  <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio#reviews" aria-label="Read 412 reviews for Studio Wireless">
                    {"(412)"}
                  </a>
                </div>
              </div>
              <p className="leading-snug text-muted-foreground text-sm">
                {"The sweet spot for everyday listening, at the right price."}
              </p>
              <ul className="space-y-1.5" aria-label="Included features">
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Active noise cancellation"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Multi-device pairing"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-muted-foreground text-sm">
                  <svg className="lucide lucide-minus shrink-0 size-3.5 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                  <span className="decoration-current/55 line-through">
                    {"Spatial audio"}
                  </span>
                  <span className="sr-only">
                    {"not included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-muted-foreground text-sm">
                  <svg className="lucide lucide-minus shrink-0 size-3.5 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                  <span className="decoration-current/55 line-through">
                    {"Wireless charging"}
                  </span>
                  <span className="sr-only">
                    {"not included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-muted-foreground text-sm">
                  <svg className="lucide lucide-minus shrink-0 size-3.5 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                  <span className="decoration-current/55 line-through">
                    {"Priority support"}
                  </span>
                  <span className="sr-only">
                    {"not included"}
                  </span>
                </li>
              </ul>
              <div className="gap-2 grid grid-cols-2" role="list" aria-label="Key specs">
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Battery"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"38 h"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"ANC"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"Yes"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Codec"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"aptX"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Weight"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"265 g"}
                  </span>
                </Item>
              </div>
              <div className="mt-auto pt-1">
                <Button className="w-full" type="button" tabIndex={0} extracted="1">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to cart"}
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-background border border-foreground/15 flex flex-col group/card min-w-0 overflow-hidden rounded-lg shadow-black/5 shadow-md" aria-labelledby="comparison-3-studio-pro-name">
            <a className="aspect-[5/4] bg-muted/40 block overflow-hidden relative w-full" href="#studio-pro" aria-label="View Studio Pro">
              <img className="absolute duration-300 group-hover/card:scale-[1.03] h-full inset-0 object-cover transition-transform w-full" alt="Studio Pro headphones product shot" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80" />
              <span className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                  {"Editor's choice"}
                </Badge>
              </span>
            </a>
            <div className="flex flex-1 flex-col gap-3.5 p-5">
              <div className="flex flex-col gap-1 min-w-0">
                <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors underline-offset-4" id="comparison-3-studio-pro-name" href="#studio-pro">
                  {"Studio Pro"}
                </a>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Audiophile">
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                    {"Studio"}
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#audiophile" aria-label="View Audiophile products">
                    {"Audiophile"}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
                <div className="flex gap-2 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl text-foreground tracking-tight">
                    {"$399"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center shrink-0 text-xs">
                  <span className="inline-flex relative shrink-0" role="img" aria-label="4.8 out of 5">
                    <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "96%"}}>
                      <span className="gap-0.5 inline-flex items-center">
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    {"4.8"}
                  </span>
                  <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-pro#reviews" aria-label="Read 96 reviews for Studio Pro">
                    {"(96)"}
                  </a>
                </div>
              </div>
              <p className="leading-snug text-muted-foreground text-sm">
                {"Reference-tuned sound and the best balance of features in the lineup."}
              </p>
              <ul className="space-y-1.5" aria-label="Included features">
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Active noise cancellation"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Multi-device pairing"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Spatial audio"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Wireless charging"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-muted-foreground text-sm">
                  <svg className="lucide lucide-minus shrink-0 size-3.5 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                  </svg>
                  <span className="decoration-current/55 line-through">
                    {"Priority support"}
                  </span>
                  <span className="sr-only">
                    {"not included"}
                  </span>
                </li>
              </ul>
              <div className="gap-2 grid grid-cols-2" role="list" aria-label="Key specs">
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Battery"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"50 h"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Codec"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"LDAC"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"ANC"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"Yes"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Weight"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"295 g"}
                  </span>
                </Item>
              </div>
              <div className="mt-auto pt-1">
                <Button className="w-full" type="button" tabIndex={0}>
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to cart"}
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-background border border-border flex flex-col group/card min-w-0 overflow-hidden rounded-lg" aria-labelledby="comparison-3-studio-elite-name">
            <a className="aspect-[5/4] bg-muted/40 block overflow-hidden relative w-full" href="#studio-elite" aria-label="View Studio Elite">
              <img className="absolute duration-300 group-hover/card:scale-[1.03] h-full inset-0 object-cover transition-transform w-full" alt="Studio Elite headphones product shot" src="https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&h=600&q=80" />
              <span className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                  {"Top premium"}
                </Badge>
              </span>
            </a>
            <div className="flex flex-1 flex-col gap-3.5 p-5">
              <div className="flex flex-col gap-1 min-w-0">
                <a className="font-semibold hover:text-primary hover:underline text-base text-foreground tracking-tight transition-colors underline-offset-4" id="comparison-3-studio-elite-name" href="#studio-elite">
                  {"Studio Elite"}
                </a>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Premium">
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                    {"Studio"}
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#premium" aria-label="View Premium products">
                    {"Premium"}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
                <div className="flex gap-2 items-baseline min-w-0">
                  <span className="font-semibold tabular-nums text-2xl text-foreground tracking-tight">
                    {"$649"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center shrink-0 text-xs">
                  <span className="inline-flex relative shrink-0" role="img" aria-label="4.9 out of 5">
                    <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "98%"}}>
                      <span className="gap-0.5 inline-flex items-center">
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="font-medium tabular-nums text-foreground">
                    {"4.9"}
                  </span>
                  <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-elite#reviews" aria-label="Read 32 reviews for Studio Elite">
                    {"(32)"}
                  </a>
                </div>
              </div>
              <p className="leading-snug text-muted-foreground text-sm">
                {"Flagship build with the longest battery and the longest warranty."}
              </p>
              <ul className="space-y-1.5" aria-label="Included features">
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Active noise cancellation"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Multi-device pairing"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Spatial audio"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Wireless charging"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
                <li className="flex gap-2 items-center leading-snug text-foreground text-sm">
                  <svg className="lucide lucide-check shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>
                    {"Priority support"}
                  </span>
                  <span className="sr-only">
                    {"included"}
                  </span>
                </li>
              </ul>
              <div className="gap-2 grid grid-cols-2" role="list" aria-label="Key specs">
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Battery"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"60 h"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Codec"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"LDAC"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Warranty"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"5 yr"}
                  </span>
                </Item>
                <Item className="border-dashed gap-2 justify-between" variant="outline" size="sm" role="listitem">
                  <span className="text-muted-foreground text-xs">
                    {"Weight"}
                  </span>
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    {"340 g"}
                  </span>
                </Item>
              </div>
              <div className="mt-auto pt-1">
                <Button className="w-full" type="button" tabIndex={0}>
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to cart"}
                </Button>
              </div>
            </div>
          </article>
        </div>
        <p className="flex gap-2 items-start mt-6 text-muted-foreground text-xs">
          <svg className="lucide lucide-info mt-px shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
            <circle cx={12} cy={12} r={10}></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>
            {"Editor picks reflect best fit across price, features, and target use. For a full spec table or a head-to-head, see the related comparison blocks."}
          </span>
        </p>
      </section>
    </main>
  )
}
