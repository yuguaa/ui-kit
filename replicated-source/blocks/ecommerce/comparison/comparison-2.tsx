import { Button } from "@/registry/bases/base/ui/button"
import { SelectTrigger } from "@/registry/bases/base/ui/select"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="comparison-2-heading">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-semibold text-muted-foreground text-xs tracking-[0.08em] uppercase">
              Head To Head
            </p>
            <h1 className="font-semibold mt-1 sm:text-3xl text-2xl tracking-tight" id="comparison-2-heading">
              Pick The One That Fits You
            </h1>
            <p className="leading-5 mt-1 text-muted-foreground text-sm">
              Compare any two models on the specs that matter, with the better value bolded automatically.
            </p>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Swap selected products" extracted="1">
              <svg className="lucide lucide-arrow-left-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftRightIcon" tabler="IconArrowsLeftRight" hugeicons="ArrowDataTransferHorizontalIcon" phosphor="ArrowsLeftRightIcon" remixicon="RiArrowLeftRightLine" data-icon="inline-start" aria-hidden="true">
                <path d="M8 3 4 7l4 4"></path>
                <path d="M4 7h16"></path>
                <path d="m16 21 4-4-4-4"></path>
                <path d="M20 17H4"></path>
              </svg>
              Swap
            </Button>
          </div>
        </header>
        <div className="gap-4 grid lg:gap-5 mt-6 sm:grid-cols-2">
          <article className="bg-background border border-border flex flex-col gap-4 min-w-0 p-4 rounded-md sm:p-5" aria-label="Compare Studio Pro">
            <div className="flex gap-3 items-center min-w-0">
              <a className="aspect-square bg-muted block group/image overflow-hidden relative rounded-md shrink-0 size-20 sm:size-24" href="#studio-pro" aria-label="View Studio Pro">
                <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Pro headphones product shot" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80" />
              </a>
              <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                <div className="flex items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    New
                  </Badge>
                </div>
                <Select>
                <SelectTrigger className="border-0 focus-visible:ring-0 font-semibold gap-2 h-auto max-w-full px-0 py-0 shadow-none sm:text-lg text-base text-foreground tracking-tight" type="button" tabIndex="0" id="comparison-2-primary-picker" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Change compared product: Studio Pro">
                  <span className="truncate">
                    Studio Pro
                  </span>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="studio-pro" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Audiophile">
                  <svg className="lucide lucide-tag shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                    Studio
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#audiophile" aria-label="View Audiophile products">
                    Audiophile
                  </a>
                </div>
              </div>
            </div>
            <p className="leading-5 text-muted-foreground text-sm">
              Reference-tuned audio for serious listeners.
            </p>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2 items-baseline min-w-0">
                <span className="font-semibold tabular-nums text-foreground text-xl">
                  $399
                </span>
              </div>
              <div className="flex gap-1.5 items-center shrink-0 text-xs">
                <span className="inline-flex relative shrink-0" role="img" aria-label="4.8 out of 5">
                  <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "96%"}}>
                    <span className="gap-0.5 inline-flex items-center">
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  4.8
                </span>
                <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-pro#reviews" aria-label="Read 96 reviews for Studio Pro">
                  (96)
                </a>
              </div>
            </div>
            <Button className="w-full" type="button" tabIndex="0">
              <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              Add to cart
            </Button>
          </article>
          <article className="bg-background border border-border flex flex-col gap-4 min-w-0 p-4 rounded-md sm:p-5" aria-label="Compare Studio Elite">
            <div className="flex gap-3 items-center min-w-0">
              <a className="aspect-square bg-muted block group/image overflow-hidden relative rounded-md shrink-0 size-20 sm:size-24" href="#studio-elite" aria-label="View Studio Elite">
                <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Elite headphones product shot" src="https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&h=600&q=80" />
              </a>
              <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                <div className="flex items-center min-w-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                    Flagship
                  </Badge>
                </div>
                <Select>
                <SelectTrigger className="border-0 focus-visible:ring-0 font-semibold gap-2 h-auto max-w-full px-0 py-0 shadow-none sm:text-lg text-base text-foreground tracking-tight" type="button" tabIndex="0" id="comparison-2-secondary-picker" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Change compared product: Studio Elite">
                  <span className="truncate">
                    Studio Elite
                  </span>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="studio-elite" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Premium">
                  <svg className="lucide lucide-tag shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                    Studio
                  </a>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#premium" aria-label="View Premium products">
                    Premium
                  </a>
                </div>
              </div>
            </div>
            <p className="leading-5 text-muted-foreground text-sm">
              Flagship build with planar drivers and LDAC.
            </p>
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-2 items-baseline min-w-0">
                <span className="font-semibold tabular-nums text-foreground text-xl">
                  $649
                </span>
              </div>
              <div className="flex gap-1.5 items-center shrink-0 text-xs">
                <span className="inline-flex relative shrink-0" role="img" aria-label="4.9 out of 5">
                  <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "98%"}}>
                    <span className="gap-0.5 inline-flex items-center">
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <svg className="fill-current lucide lucide-star size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  4.9
                </span>
                <a className="hover:text-foreground hover:underline text-muted-foreground transition-colors underline-offset-4" href="#studio-elite#reviews" aria-label="Read 32 reviews for Studio Elite">
                  (32)
                </a>
              </div>
            </div>
            <Button className="w-full" type="button" tabIndex="0">
              <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              Add to cart
            </Button>
          </article>
        </div>
        <div className="border border-border mt-6 overflow-hidden rounded-md">
          <table className="border-collapse table-fixed text-sm w-full">
            <caption className="sr-only">
              Feature-by-feature comparison of Studio Pro and Studio Elite.
            </caption>
            <colgroup>
              <col className="sm:w-[14rem] w-[12rem]" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="border-b border-border">
                <th className="align-bottom bg-muted/30 px-4 py-3 text-left" scope="col">
                  <span className="block font-semibold leading-4 text-[0.6875rem] text-muted-foreground tracking-[0.12em] uppercase">
                    Specification
                  </span>
                </th>
                <th className="align-middle bg-muted/30 border-border border-l px-4 py-3 text-left" scope="col">
                  <span className="block font-semibold leading-5 sm:text-base text-foreground text-sm truncate">
                    Studio Pro
                  </span>
                </th>
                <th className="align-middle bg-muted/30 border-border border-l px-4 py-3 text-left" scope="col">
                  <span className="block font-semibold leading-5 sm:text-base text-foreground text-sm truncate">
                    Studio Elite
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-muted border-b border-border font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="3">
                  <span className="inline-block px-4 py-2">
                    Overview
                  </span>
                </th>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Type
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    Over ear
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    Over ear
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Color options
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    6 colors
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-muted-foreground text-sm">
                    3 colors
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Weight
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" aria-label="About Weight">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    295 g
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-muted-foreground text-sm">
                    340 g
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="3">
                  <span className="inline-block px-4 py-2">
                    Audio
                  </span>
                </th>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Active noise cancellation
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" aria-label="About Active noise cancellation">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Spatial audio
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" aria-label="About Spatial audio">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Driver size
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    40 mm planar
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    45 mm planar
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Hi-res codec
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" aria-label="About Hi-res codec">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    LDAC, aptX HD
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    LDAC, aptX HD, AAC
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="3">
                  <span className="inline-block px-4 py-2">
                    Connectivity
                  </span>
                </th>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Bluetooth version
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    5.3
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-foreground text-sm">
                    5.3 LE
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Multi-device pairing
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" aria-label="About Multi-device pairing">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Wired (3.5 mm)
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="3">
                  <span className="inline-block px-4 py-2">
                    Battery
                  </span>
                </th>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Playback time
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-muted-foreground text-sm">
                    Up to 50 h
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    Up to 60 h
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Fast charge
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" aria-label="About Fast charge">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-muted-foreground text-sm">
                    10 min → 8 h
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    10 min → 12 h
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Wireless charging
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="3">
                  <span className="inline-block px-4 py-2">
                    Support
                  </span>
                </th>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Warranty
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="tabular-nums text-muted-foreground text-sm">
                    3 years
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="font-medium tabular-nums text-foreground text-sm">
                    5 years
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Free returns
                    </span>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border last:border-b-0">
                <th className="align-middle font-medium px-4 py-2.5 text-foreground text-left text-sm" scope="row">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Priority support
                    </span>
                    <Tooltip>
                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-3.5 text-muted-foreground/60 transition-colors" type="button" id="base-ui-_r_j_" baseUiTooltipTrigger="" aria-label="About Priority support">
                      <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </th>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="align-middle border-border border-l px-4 py-2.5">
                  <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                    <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="flex gap-2 items-start mt-5 text-muted-foreground text-xs">
          <svg className="lucide lucide-info mt-px shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>
            Specs compared are objective only. Audio character, fit, and build quality are subjective. Try them on if you can.
          </span>
        </p>
      </section>
    </main>
  )
}
