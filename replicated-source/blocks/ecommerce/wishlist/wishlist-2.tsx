import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl mx-auto px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="wishlist-title">
        <header className="flex flex-col gap-3 mb-5 sm:mb-7">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="sm:text-sm text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Wishlist"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <h1 className="font-semibold leading-tight sm:text-[1.75rem] text-2xl text-foreground tracking-tight" id="wishlist-title">
                  {"Saved For Later"}
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-primary-foreground text-xs transition-shadow" aria-label="5 items saved">
                  {"5"}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <Button type="button" tabIndex={0} extracted="1">
                  <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                    <circle cx={18} cy={5} r={3}></circle>
                    <circle cx={6} cy={12} r={3}></circle>
                    <circle cx={18} cy={19} r={3}></circle>
                    <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
                    <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
                  </svg>
                  {"Share List"}
                </Button>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add 4 To Cart"}
                </Button>
              </div>
            </div>
            <p className="flex flex-wrap gap-x-2 gap-y-1 items-center sm:text-sm text-muted-foreground text-xs">
              <span className="gap-2 inline-flex items-center">
                <span>
                  {"1 price drop"}
                </span>
              </span>
              <span className="gap-2 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"1 back in stock"}
                </span>
              </span>
              <span className="gap-2 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"1 almost gone"}
                </span>
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="font-medium text-success">
                {"Total savings $35"}
              </span>
            </p>
          </div>
        </header>
        <div className="mb-5 sm:mb-6">
          <Tabs data-orientation="horizontal" activationDirection="none">
            <TabsList className="border-b h-10! justify-start w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
              <TabsTrigger className="gap-2 group-data-horizontal/tabs:after:bottom-[-5px]! px-3 py-1.5" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-label="All, 5 items">
                <span>
                  {"All"}
                </span>
                <span className="bg-muted font-semibold h-4 inline-flex items-center justify-center min-w-4 px-1 rounded-full tabular-nums text-[10px] text-muted-foreground">
                  {"5"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="gap-2 group-data-horizontal/tabs:after:bottom-[-5px]! px-3 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_" aria-label="Price Drops, 1 item">
                <span>
                  {"Price Drops"}
                </span>
                <span className="bg-muted font-semibold h-4 inline-flex items-center justify-center min-w-4 px-1 rounded-full tabular-nums text-[10px] text-muted-foreground">
                  {"1"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="gap-2 group-data-horizontal/tabs:after:bottom-[-5px]! px-3 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_" aria-label="Back In Stock, 1 item">
                <span>
                  {"Back In Stock"}
                </span>
                <span className="bg-muted font-semibold h-4 inline-flex items-center justify-center min-w-4 px-1 rounded-full tabular-nums text-[10px] text-muted-foreground">
                  {"1"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="gap-2 group-data-horizontal/tabs:after:bottom-[-5px]! px-3 py-1.5" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_" aria-label="Almost Gone, 1 item">
                <span>
                  {"Almost Gone"}
                </span>
                <span className="bg-muted font-semibold h-4 inline-flex items-center justify-center min-w-4 px-1 rounded-full tabular-nums text-[10px] text-muted-foreground">
                  {"1"}
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <ul className="gap-5 grid lg:gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4" role="list">
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card min-w-0">
              <Item className="aspect-[4/5] overflow-hidden p-0 relative" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-2" href="#" aria-label="View Storm Wool Coat">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Storm Wool Coat in camel on a studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=750&q=80" />
                </a>
                <div className="absolute left-2 pointer-events-none top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    {"Price Drop"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Storm Wool Coat from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1.5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Outerwear">
                  {"Outerwear"}
                </a>
                <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                    {"Storm Wool Coat"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                  <span className="font-semibold tabular-nums text-base text-foreground">
                    {"$385"}
                  </span>
                  <span className="line-through tabular-nums text-muted-foreground text-xs">
                    {"$420"}
                  </span>
                  <span className="font-semibold tabular-nums text-success text-xs">
                    {"Save $35"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {"Saved 3 days ago"}
                </p>
              </div>
              <Button className="w-full" type="button" tabIndex={0} aria-label="Add Storm Wool Coat to cart">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Add To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card min-w-0">
              <Item className="aspect-[4/5] overflow-hidden p-0 relative" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-2" href="#" aria-label="View Italian Penny Loafers">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Italian Penny Loafers in walnut leather" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=600&h=750&q=80" />
                </a>
                <div className="absolute left-2 pointer-events-none top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    <svg className="lucide lucide-flame size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlameIcon" tabler="IconFlame" hugeicons="Fire02Icon" phosphor="FlameIcon" remixicon="RiFireLine" aria-hidden="true">
                      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                    </svg>
                    {"Almost Gone"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Italian Penny Loafers from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1.5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Footwear">
                  {"Footwear"}
                </a>
                <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                    {"Italian Penny Loafers"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                  <span className="font-semibold tabular-nums text-base text-foreground">
                    {"$295"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {"Only 2 left"}
                </p>
              </div>
              <Button className="w-full" type="button" tabIndex={0} aria-label="Add Italian Penny Loafers to cart">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Add To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card min-w-0">
              <Item className="aspect-[4/5] overflow-hidden p-0 relative" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-2" href="#" aria-label="View Cashmere V-Neck Sweater">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Cashmere V-Neck Sweater in oat heather" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&h=750&q=80" />
                </a>
                <div className="absolute left-2 pointer-events-none top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    {"Back In Stock"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Cashmere V-Neck Sweater from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1.5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Knits">
                  {"Knits"}
                </a>
                <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                    {"Cashmere V-Neck Sweater"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                  <span className="font-semibold tabular-nums text-base text-foreground">
                    {"$228"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {"Restocked 2 days ago"}
                </p>
              </div>
              <Button className="w-full" type="button" tabIndex={0} aria-label="Add Cashmere V-Neck Sweater to cart">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Add To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card min-w-0">
              <Item className="aspect-[4/5] overflow-hidden p-0 relative" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-2" href="#" aria-label="View Slim Card Holder">
                  <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Slim Card Holder in oxblood leather" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&h=750&q=80" />
                </a>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Slim Card Holder from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1.5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Leather Goods">
                  {"Leather Goods"}
                </a>
                <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                    {"Slim Card Holder"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                  <span className="font-semibold tabular-nums text-base text-foreground">
                    {"$85"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {"Saved 4 days ago"}
                </p>
              </div>
              <Button className="w-full" type="button" tabIndex={0} aria-label="Add Slim Card Holder to cart">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                {"Add To Cart"}
              </Button>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card min-w-0">
              <Item className="aspect-[4/5] opacity-60 overflow-hidden p-0 relative" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring hover:text-primary hover:underline inset-0 outline-none transition-colors underline-offset-2" href="#" aria-label="View Weekend Tote Bag">
                  <img className="absolute duration-500 ease-out grayscale h-full inset-0 object-cover transition-transform w-full" alt="Weekend Tote Bag in tan canvas with leather handles" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&h=750&q=80" />
                </a>
                <div className="absolute left-2 pointer-events-none top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-eye-off size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeOffIcon" tabler="IconEyeOff" hugeicons="ViewOffSlashIcon" phosphor="EyeSlashIcon" remixicon="RiEyeOffLine" aria-hidden="true">
                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                      <path d="m2 2 20 20"></path>
                    </svg>
                    {"Unavailable"}
                  </Badge>
                </div>
                <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex={0} aria-label="Remove Weekend Tote Bag from wishlist">
                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-col gap-1.5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Bags">
                  {"Bags"}
                </a>
                <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                    {"Weekend Tote Bag"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                  <span className="font-semibold tabular-nums text-base text-foreground">
                    {"$310"}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {"Currently unavailable"}
                </p>
              </div>
              <Button className="w-full" type="button" tabIndex={0} aria-label="Notify me when Weekend Tote Bag is restocked">
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
    </main>
  )
}
