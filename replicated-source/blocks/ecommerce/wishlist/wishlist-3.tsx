import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex justify-center lg:p-10 min-h-svh p-4 sm:p-6 w-full">
      <section className="max-w-6xl mx-auto w-full" aria-labelledby="wishlist-title">
        <header className="flex flex-wrap gap-x-6 gap-y-3 items-baseline justify-between pb-5">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline">
            <h1 className="font-semibold text-2xl text-foreground tracking-tight" id="wishlist-title">
              {"Wishlist"}
            </h1>
            <span className="tabular-nums text-muted-foreground text-sm">
              {"6 saved"}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="hidden sm:inline-flex" type="button" tabIndex={0} extracted="1">
              <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                <circle cx={18} cy={5} r={3}></circle>
                <circle cx={6} cy={12} r={3}></circle>
                <circle cx={18} cy={19} r={3}></circle>
                <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
                <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
              </svg>
              {"Share"}
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              {"Move All To Cart"}
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"5"}
              </Badge>
            </Button>
          </div>
        </header>
        <Tabs data-orientation="horizontal" activationDirection="none">
          <TabsList className="gap-6 h-10! justify-start overflow-x-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Filter wishlist by signal">
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-label="All (6)">
              <svg className="lucide lucide-heart size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
              <span>
                {"All"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"6"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_" aria-label="Back In Stock (1)">
              <svg className="lucide lucide-sparkles size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx={4} cy={20} r={2}></circle>
              </svg>
              <span>
                {"Back In Stock"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"1"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_" aria-label="Price Drop (1)">
              <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                <path d="M16 17h6v-6"></path>
                <path d="m22 17-8.5-8.5-5 5L2 7"></path>
              </svg>
              <span>
                {"Price Drop"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"1"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_" aria-label="Low Stock (1)">
              <svg className="lucide lucide-triangle-alert size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span>
                {"Low Stock"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"1"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_" aria-label="Sale (1)">
              <svg className="lucide lucide-tag size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
              </svg>
              <span>
                {"Sale"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"1"}
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <ul className="gap-x-6 gap-y-8 grid grid-cols-1 lg:grid-cols-4 mt-6 sm:grid-cols-2" role="list">
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-atelier-tulle-blouse" aria-label="View Atelier Tulle Blouse">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model wearing the Atelier Tulle Blouse in onyx on a clean studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1774813958356-652b1f2a6b4c?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <div className="absolute left-3 pointer-events-none top-3 z-10">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    {"$14.00 Off"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Atelier Tulle Blouse from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-atelier" aria-label="Shop Atelier">
                  {"Atelier"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-atelier-tulle-blouse">
                    {"Atelier Tulle Blouse"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$48.00"}
                  </span>
                  <span className="font-normal line-through text-muted-foreground text-xs">
                    {"$62.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Dropped $14 since you saved it"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Move To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-heritage-suede-mules" aria-label="View Heritage Suede Mules">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model centered in a refined studio look on a neutral backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <div className="absolute left-3 pointer-events-none top-3 z-10">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                    {"Back In Stock"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Heritage Suede Mules from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-heritage" aria-label="Shop Heritage">
                  {"Heritage"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-heritage-suede-mules">
                    {"Heritage Suede Mules"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$168.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Restocked in your size today"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Move To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-atelier-quilted-crossbody-bag" aria-label="View Atelier Quilted Crossbody Bag">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model styled with a soft layered look on a clean studio sweep" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <div className="absolute left-3 pointer-events-none top-3 z-10">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    {"Only 2 Left"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Atelier Quilted Crossbody Bag from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-atelier" aria-label="Shop Atelier">
                  {"Atelier"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-atelier-quilted-crossbody-bag">
                    {"Atelier Quilted Crossbody Bag"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$138.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Only 2 left in Sage"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Move To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-linen-field-shirt" aria-label="View Linen Field Shirt">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model wearing the Linen Field Shirt in soft daylight studio space" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390110-8221cb9cc28f?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <div className="absolute left-3 pointer-events-none top-3 z-10">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                    {"Sale"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Linen Field Shirt from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-halden" aria-label="Shop Halden">
                  {"Halden"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-linen-field-shirt">
                    {"Linen Field Shirt"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$96.00"}
                  </span>
                  <span className="font-normal line-through text-muted-foreground text-xs">
                    {"$128.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Final markdown, no further reductions"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Move To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-studio-wool-coat" aria-label="View Atelier Studio Wool Coat">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model wearing the Atelier Studio Wool Coat in cream on a clean studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Atelier Studio Wool Coat from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-atelier" aria-label="Shop Atelier">
                  {"Atelier"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-studio-wool-coat">
                    {"Atelier Studio Wool Coat"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$285.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Quiet pick, waiting for the moment"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Move To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-2.5 group/card h-full min-w-0">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-4" href="#shop-pleated-wide-trouser" aria-label="View Pleated Wide Trouser">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Model wearing the Pleated Wide Trouser in stone on a clean studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1674851993957-f5d6cacd5e1b?auto=format&fit=crop&w=900&h=900&q=85" />
                </a>
                <div className="absolute left-3 pointer-events-none top-3 z-10">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                    {"Out Of Stock"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 hover:bg-background opacity-100 right-2.5 shadow-sm sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10" type="button" tabIndex={0} aria-label="Remove Pleated Wide Trouser from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1 min-w-0">
                <a className="block font-medium hover:text-primary hover:underline max-w-full text-muted-foreground text-xs tracking-wider transition-colors truncate underline-offset-4 uppercase" href="#brand-halden" aria-label="Shop Halden">
                  {"Halden"}
                </a>
                <h3 className="font-semibold leading-tight sm:text-[15px] text-foreground text-sm">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#shop-pleated-wide-trouser">
                    {"Pleated Wide Trouser"}
                  </a>
                </h3>
                <div className="flex font-semibold gap-2 items-baseline mt-0.5 tabular-nums text-[15px]">
                  <span className="text-foreground">
                    {"$178.00"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs truncate">
                  {"Out in your size. Notify when restocked"}
                </p>
              </div>
              <Button className="mt-auto w-full" type="button" tabIndex={0}>
                <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                {"Notify When Restocked"}
              </Button>
            </article>
          </li>
        </ul>
      </section>
    </div>
  )
}
