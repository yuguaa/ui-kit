import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl mx-auto px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="wishlist-title">
        <header className="flex flex-col gap-3 mb-6 sm:mb-8">
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
                  Collections
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-end justify-between">
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="font-semibold leading-tight sm:text-[1.75rem] text-2xl text-foreground tracking-tight" id="wishlist-title">
                My Collections
              </h1>
              <p className="sm:text-sm text-muted-foreground text-xs">
                4 collections · 12 saved items
              </p>
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New Collection
            </Button>
          </div>
        </header>
        <div className="gap-6 grid lg:gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-2" aria-label="Collections">
            <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none text-left w-full" type="button" aria-pressed="true" aria-label="Show Capsule Wardrobe, 4 items">
              <Item className="border border-foreground gap-3 group/tile p-3" variant="muted" size="default">
                <div className="-space-x-3 flex shrink-0">
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "3"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "2"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "1"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-semibold text-foreground text-sm tracking-tight truncate">
                    Capsule Wardrobe
                  </p>
                  <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center tabular-nums text-muted-foreground text-xs">
                    <span>
                      4 items
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      $939
                    </span>
                  </p>
                </div>
                <svg className="lucide lucide-chevron-right shrink-0 size-4 text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Item>
            </button>
            <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none text-left w-full" type="button" aria-pressed="false" aria-label="Show Gift Ideas, 3 items">
              <Item className="border border-border gap-3 group/tile hover:bg-muted/50 p-3" variant="default" size="default">
                <div className="-space-x-3 flex shrink-0">
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "3"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "2"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "1"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-semibold text-foreground text-sm tracking-tight truncate">
                    Gift Ideas
                  </p>
                  <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center tabular-nums text-muted-foreground text-xs">
                    <span>
                      3 items
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      $238
                    </span>
                  </p>
                </div>
                <svg className="lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Item>
            </button>
            <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none text-left w-full" type="button" aria-pressed="false" aria-label="Show Office Looks, 2 items">
              <Item className="border border-border gap-3 group/tile hover:bg-muted/50 p-3" variant="default" size="default">
                <div className="-space-x-3 flex shrink-0">
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "2"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "1"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-semibold text-foreground text-sm tracking-tight truncate">
                    Office Looks
                  </p>
                  <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center tabular-nums text-muted-foreground text-xs">
                    <span>
                      2 items
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      $473
                    </span>
                  </p>
                </div>
                <svg className="lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Item>
            </button>
            <button className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring outline-none text-left w-full" type="button" aria-pressed="false" aria-label="Show Travel Kit, 3 items">
              <Item className="border border-border gap-3 group/tile hover:bg-muted/50 p-3" variant="default" size="default">
                <div className="-space-x-3 flex shrink-0">
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "3"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "2"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                  <Item className="overflow-hidden p-0 relative ring-2 ring-background size-12" variant="muted" size="default" style={{zIndex: "1"}}>
                    <img className="absolute h-full inset-0 object-cover w-full" alt="" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&h=750&q=80" />
                  </Item>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <p className="font-semibold text-foreground text-sm tracking-tight truncate">
                    Travel Kit
                  </p>
                  <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center tabular-nums text-muted-foreground text-xs">
                    <span>
                      3 items
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      $793
                    </span>
                  </p>
                </div>
                <svg className="lucide lucide-chevron-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Item>
            </button>
          </aside>
          <div className="flex flex-col gap-5 min-w-0">
            <div className="border-b flex flex-wrap gap-x-4 gap-y-3 items-end justify-between pb-4">
              <div className="flex flex-col gap-1 min-w-0">
                <h2 className="font-semibold sm:text-xl text-foreground text-lg tracking-tight">
                  Capsule Wardrobe
                </h2>
                <p className="text-muted-foreground text-sm">
                  Pieces that anchor a small, intentional closet.
                </p>
                <p className="flex flex-wrap gap-x-2 gap-y-0.5 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    4 items
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="font-medium text-foreground">
                    $939
                  </span>
                </p>
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
                  Share
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
            <ul className="gap-5 grid lg:gap-6 sm:grid-cols-2 xl:grid-cols-3" role="list">
              <li className="min-w-0">
                <article className="flex flex-col gap-3 group/card min-w-0">
                  <Item className="aspect-square overflow-hidden p-0 relative" variant="muted" size="default">
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Storm Wool Coat">
                      <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Storm Wool Coat in camel on a studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=750&q=80" />
                    </a>
                    <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Remove Storm Wool Coat from collection">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Halden products">
                      Halden
                    </a>
                    <h3 className="font-semibold leading-tight min-w-0 text-foreground text-sm tracking-tight">
                      <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                        Storm Wool Coat
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        $385
                      </span>
                      <span className="line-through tabular-nums text-muted-foreground text-xs">
                        $420
                      </span>
                      <span className="font-semibold tabular-nums text-success text-xs">
                        Save $35
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Add Storm Wool Coat to cart">
                    <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    Add To Cart
                  </Button>
                </article>
              </li>
              <li className="min-w-0">
                <article className="flex flex-col gap-3 group/card min-w-0">
                  <Item className="aspect-square overflow-hidden p-0 relative" variant="muted" size="default">
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Cashmere V-Neck Sweater">
                      <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Cashmere V-Neck Sweater in oat heather" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&h=750&q=80" />
                    </a>
                    <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Remove Cashmere V-Neck Sweater from collection">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Wren & Field products">
                      Wren & Field
                    </a>
                    <h3 className="font-semibold leading-tight min-w-0 text-foreground text-sm tracking-tight">
                      <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                        Cashmere V-Neck Sweater
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        $228
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Add Cashmere V-Neck Sweater to cart">
                    <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    Add To Cart
                  </Button>
                </article>
              </li>
              <li className="min-w-0">
                <article className="flex flex-col gap-3 group/card min-w-0">
                  <Item className="aspect-square overflow-hidden p-0 relative" variant="muted" size="default">
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Linen Field Shirt">
                      <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Linen Field Shirt in sand on a studio backdrop" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=750&q=80" />
                    </a>
                    <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Remove Linen Field Shirt from collection">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Halden products">
                      Halden
                    </a>
                    <h3 className="font-semibold leading-tight min-w-0 text-foreground text-sm tracking-tight">
                      <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                        Linen Field Shirt
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        $148
                      </span>
                      <span className="line-through tabular-nums text-muted-foreground text-xs">
                        $165
                      </span>
                      <span className="font-semibold tabular-nums text-success text-xs">
                        Save $17
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Add Linen Field Shirt to cart">
                    <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    Add To Cart
                  </Button>
                </article>
              </li>
              <li className="min-w-0">
                <article className="flex flex-col gap-3 group/card min-w-0">
                  <Item className="aspect-square overflow-hidden p-0 relative" variant="muted" size="default">
                    <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Pleated Wide Trouser">
                      <img className="absolute duration-500 ease-out group-hover/card:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Pleated Wide Trouser in charcoal" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&h=750&q=80" />
                    </a>
                    <Button className="absolute backdrop-blur-sm bg-background/90 duration-200 ease-out focus-visible:opacity-100 group-focus-within/card:opacity-100 group-hover/card:opacity-100 opacity-0 right-2 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Remove Pleated Wide Trouser from collection">
                      <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </Item>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-2 w-fit" href="#" aria-label="View all Halden products">
                      Halden
                    </a>
                    <h3 className="font-semibold leading-tight min-w-0 text-foreground text-sm tracking-tight">
                      <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-2" href="#">
                        Pleated Wide Trouser
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
                      <span className="font-semibold tabular-nums text-foreground text-sm">
                        $178
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Add Pleated Wide Trouser to cart">
                    <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    Add To Cart
                  </Button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
