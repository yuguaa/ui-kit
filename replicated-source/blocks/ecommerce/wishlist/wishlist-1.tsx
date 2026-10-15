import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-5xl mx-auto px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="wishlist-title">
        <header className="flex flex-col gap-3 mb-5 sm:mb-6">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="sm:text-sm text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  Wishlist
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <h1 className="font-semibold leading-tight sm:text-[1.75rem] text-2xl text-foreground tracking-tight" id="wishlist-title">
                  Saved For Later
                </h1>
                <span className="tabular-nums text-muted-foreground text-sm">
                  5 items
                </span>
              </div>
              <Button className="h-auto p-0 text-sm" type="button" tabIndex="0" extracted="1">
                Continue Shopping
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
            <p className="flex flex-wrap gap-x-2 gap-y-1 items-center sm:text-sm text-muted-foreground text-xs">
              <span className="gap-2 inline-flex items-center">
                <span>
                  1 price drop
                </span>
              </span>
              <span className="gap-2 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  1 back in stock
                </span>
              </span>
              <span className="gap-2 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  1 almost gone
                </span>
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="font-medium text-success">
                Total savings $35
              </span>
            </p>
          </div>
        </header>
        <div className="flex flex-col">
          <div className="border-y flex flex-wrap gap-3 items-center justify-between py-3">
            <div className="flex gap-3 items-center">
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_0_" aria-checked="false" aria-label="Select all"></Checkbox>
              <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <span className="font-medium tabular-nums text-foreground text-sm">
                5 items
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" data-icon="inline-start" aria-hidden="true">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                Share List
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                Add 4 To Cart
              </Button>
            </div>
          </div>
          <ul className="divide-border divide-y" role="list">
            <li className="py-4 sm:py-5">
              <div className="-mx-3 gap-3 grid grid-cols-[auto_minmax(0,1fr)] group/row px-3 rounded-lg sm:-mx-4 sm:gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 transition-colors">
                <div className="flex gap-3 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" aria-label="Select Storm Wool Coat"></Checkbox>
                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Storm Wool Coat">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Storm Wool Coat in camel on a studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Halden products">
                    Halden
                  </a>
                  <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                      Storm Wool Coat
                    </a>
                  </h3>
                  <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                    <span>
                      Camel · M
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      <span>
                        In stock
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      Saved 3 days ago
                    </span>
                  </p>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 mt-1 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full self-start text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </svg>
                    Price Drop
                    <span className="tabular-nums">
                      Save $35
                    </span>
                  </Badge>
                </div>
                <div className="col-span-2 flex flex-wrap gap-3 items-center justify-between sm:col-span-1 sm:flex-col sm:gap-2.5 sm:items-end sm:justify-center">
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="flex gap-2 items-baseline">
                      <span className="line-through tabular-nums text-muted-foreground text-xs">
                        $420
                      </span>
                      <span className="font-semibold sm:text-lg tabular-nums text-base text-foreground tracking-tight">
                        $385
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-label="Add Storm Wool Coat to cart">
                      <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                      </svg>
                      Add to Cart
                    </Button>
                    <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Storm Wool Coat from wishlist">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4 sm:py-5">
              <div className="-mx-3 gap-3 grid grid-cols-[auto_minmax(0,1fr)] group/row px-3 rounded-lg sm:-mx-4 sm:gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 transition-colors">
                <div className="flex gap-3 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="false" aria-label="Select Italian Penny Loafers"></Checkbox>
                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Italian Penny Loafers">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Italian Penny Loafers in walnut leather" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Marlow Goods products">
                    Marlow Goods
                  </a>
                  <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                      Italian Penny Loafers
                    </a>
                  </h3>
                  <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                    <span>
                      Walnut · 10
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      <span>
                        Only 2 left
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      Saved 1 week ago
                    </span>
                  </p>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 mt-1 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full self-start text-warning-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-flame size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlameIcon" tabler="IconFlame" hugeicons="Fire02Icon" phosphor="FlameIcon" remixicon="RiFireLine" aria-hidden="true">
                      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                    </svg>
                    Almost Gone
                  </Badge>
                </div>
                <div className="col-span-2 flex flex-wrap gap-3 items-center justify-between sm:col-span-1 sm:flex-col sm:gap-2.5 sm:items-end sm:justify-center">
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-semibold sm:text-lg tabular-nums text-base text-foreground tracking-tight">
                        $295
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-label="Add Italian Penny Loafers to cart">
                      <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                      </svg>
                      Add to Cart
                    </Button>
                    <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Italian Penny Loafers from wishlist">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4 sm:py-5">
              <div className="-mx-3 gap-3 grid grid-cols-[auto_minmax(0,1fr)] group/row px-3 rounded-lg sm:-mx-4 sm:gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 transition-colors">
                <div className="flex gap-3 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-label="Select Cashmere V-Neck Sweater"></Checkbox>
                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Cashmere V-Neck Sweater">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Cashmere V-Neck Sweater in oat heather" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Wren & Field products">
                    Wren & Field
                  </a>
                  <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                      Cashmere V-Neck Sweater
                    </a>
                  </h3>
                  <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                    <span>
                      Oat · M
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      <span>
                        In stock
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      Restocked 2 days ago
                    </span>
                  </p>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 mt-1 outline-none pl-1.5 pr-2 px-1.25 py-0.5 relative rounded-full self-start text-info-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-package size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                      <path d="M12 22V12"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                    Back In Stock
                  </Badge>
                </div>
                <div className="col-span-2 flex flex-wrap gap-3 items-center justify-between sm:col-span-1 sm:flex-col sm:gap-2.5 sm:items-end sm:justify-center">
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-semibold sm:text-lg tabular-nums text-base text-foreground tracking-tight">
                        $228
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-label="Add Cashmere V-Neck Sweater to cart">
                      <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                      </svg>
                      Add to Cart
                    </Button>
                    <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Cashmere V-Neck Sweater from wishlist">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4 sm:py-5">
              <div className="-mx-3 gap-3 grid grid-cols-[auto_minmax(0,1fr)] group/row px-3 rounded-lg sm:-mx-4 sm:gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 transition-colors">
                <div className="flex gap-3 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Select Slim Card Holder"></Checkbox>
                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Slim Card Holder">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Slim Card Holder in oxblood leather" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Marlow Goods products">
                    Marlow Goods
                  </a>
                  <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                      Slim Card Holder
                    </a>
                  </h3>
                  <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                    <span>
                      Oxblood
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      <span>
                        In stock
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      Saved 4 days ago
                    </span>
                  </p>
                </div>
                <div className="col-span-2 flex flex-wrap gap-3 items-center justify-between sm:col-span-1 sm:flex-col sm:gap-2.5 sm:items-end sm:justify-center">
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-semibold sm:text-lg tabular-nums text-base text-foreground tracking-tight">
                        $85
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-label="Add Slim Card Holder to cart">
                      <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                      </svg>
                      Add to Cart
                    </Button>
                    <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Slim Card Holder from wishlist">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-4 sm:py-5">
              <div className="-mx-3 gap-3 grid grid-cols-[auto_minmax(0,1fr)] group/row px-3 rounded-lg sm:-mx-4 sm:gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 transition-colors">
                <div className="flex gap-3 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-label="Select Weekend Tote Bag"></Checkbox>
                  <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none shrink-0" href="#" aria-label="View Weekend Tote Bag">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Weekend Tote Bag in tan canvas with leather handles" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Wren & Field products">
                    Wren & Field
                  </a>
                  <h3 className="font-semibold leading-tight min-w-0 sm:text-base text-foreground text-sm tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                      Weekend Tote Bag
                    </a>
                  </h3>
                  <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                    <span>
                      Tan
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="gap-1.5 inline-flex items-center">
                      <span className="bg-muted-foreground/60 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                      <span>
                        Out of stock
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      Saved 5 days ago
                    </span>
                  </p>
                </div>
                <div className="col-span-2 flex flex-wrap gap-3 items-center justify-between sm:col-span-1 sm:flex-col sm:gap-2.5 sm:items-end sm:justify-center">
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-semibold sm:text-lg tabular-nums text-base text-foreground tracking-tight">
                        $310
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Button type="button" tabIndex="0" aria-label="Notify me when Weekend Tote Bag is back in stock">
                      <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" data-icon="inline-start" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                      Notify Me
                    </Button>
                    <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Weekend Tote Bag from wishlist">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
