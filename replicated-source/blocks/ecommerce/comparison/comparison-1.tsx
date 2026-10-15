import { Button } from "@/registry/bases/base/ui/button"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="lg:px-8 lg:py-10 max-w-6xl mx-auto px-4 py-8 sm:px-6 w-full" aria-labelledby="comparison-1-heading">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="font-semibold sm:text-3xl text-2xl tracking-tight" id="comparison-1-heading">
              {"Compare Products"}
            </h1>
            <p className="leading-5 mt-1 text-muted-foreground text-sm">
              {"Side-by-side specs and features to help you decide."}
            </p>
          </div>
          <span className="text-muted-foreground text-sm">
            {"6 of 6 products"}
          </span>
        </header>
        <div className="border border-border mt-8 overflow-hidden rounded-md">
          <ScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar overflow-x-auto overflow-y-hidden rounded-lg size-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "674px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <table className="border-collapse table-fixed text-sm w-full">
                <colgroup>
                  <col className="sm:w-[14rem] w-[12rem]" />
                  <col className="w-[16rem]" />
                  <col className="w-[16rem]" />
                  <col className="w-[16rem]" />
                  <col className="w-[16rem]" />
                  <col className="w-[16rem]" />
                  <col className="w-[16rem]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-border">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-bottom bg-muted left-0 p-4 sticky text-left z-20" scope="col">
                      <span className="sr-only">
                        {"Product"}
                      </span>
                    </th>
                    <th className="align-top border-border text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Lite Wireless from comparison" extracted="1">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#lite" aria-label="View Lite Wireless">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Lite headphones product shot" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=480&h=480&q=80" />
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Wired, On ear">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#wired" aria-label="View Wired products">
                                {"Wired"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#on-ear" aria-label="View On ear products">
                                {"On ear"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#lite">
                            {"Lite Wireless"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="3.9 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "78%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"3.9"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#lite#reviews" aria-label="Read 72 reviews for Lite Wireless">
                              {"(72)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$79"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                    <th className="align-top border-border border-l text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Essential Wireless from comparison">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#essential" aria-label="View Essential Wireless">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Essential wireless headphones product shot" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=480&h=480&q=80" />
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Wireless, On ear">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#wireless" aria-label="View Wireless products">
                                {"Wireless"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#on-ear" aria-label="View On ear products">
                                {"On ear"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#essential">
                            {"Essential Wireless"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.2 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "84%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"4.2"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#essential#reviews" aria-label="Read 184 reviews for Essential Wireless">
                              {"(184)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$129"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                    <th className="align-top border-border border-l text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Studio Wireless from comparison">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#studio" aria-label="View Studio Wireless">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio wireless headphones product shot" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=480&h=480&q=80" />
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 left-2 min-w-5 outline-none px-1.25 py-0.5 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs top-2 transition-shadow">
                            {"Best value"}
                          </Badge>
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Wireless, Noise cancelling">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#wireless" aria-label="View Wireless products">
                                {"Wireless"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#noise-cancelling" aria-label="View Noise cancelling products">
                                {"Noise cancelling"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#studio">
                            {"Studio Wireless"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.6 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "92%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"4.6"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#studio#reviews" aria-label="Read 412 reviews for Studio Wireless">
                              {"(412)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$249"}
                            </span>
                            <span className="line-through tabular-nums text-muted-foreground text-xs">
                              {"$299"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                    <th className="align-top border-border border-l text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Studio Pro from comparison">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#studio-pro" aria-label="View Studio Pro">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Pro headphones product shot" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=480&h=480&q=80" />
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 left-2 min-w-5 outline-none px-1.25 py-0.5 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs top-2 transition-shadow">
                            {"New"}
                          </Badge>
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Audiophile">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                                {"Studio"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#audiophile" aria-label="View Audiophile products">
                                {"Audiophile"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#studio-pro">
                            {"Studio Pro"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.8 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "96%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"4.8"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#studio-pro#reviews" aria-label="Read 96 reviews for Studio Pro">
                              {"(96)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$399"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                    <th className="align-top border-border border-l text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Studio Max from comparison">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#studio-max" aria-label="View Studio Max">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Max headphones product shot" src="https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=480&h=480&q=80" />
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Spatial">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                                {"Studio"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#spatial" aria-label="View Spatial products">
                                {"Spatial"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#studio-max">
                            {"Studio Max"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.7 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "94%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"4.7"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#studio-max#reviews" aria-label="Read 58 reviews for Studio Max">
                              {"(58)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$499"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                    <th className="align-top border-border border-l text-left" scope="col">
                      <div className="flex flex-col gap-4 h-full min-w-0 p-4">
                        <div className="flex items-start justify-end">
                          <Button className="-mr-1 -mt-1 hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Remove Studio Elite from comparison">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </div>
                        <a className="aspect-square bg-muted block group/image max-w-[10rem] mx-auto overflow-hidden relative rounded-md w-full" href="#studio-elite" aria-label="View Studio Elite">
                          <img className="absolute duration-300 group-hover/image:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Studio Elite headphones product shot" src="https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=480&h=480&q=80" />
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 left-2 min-w-5 outline-none px-1.25 py-0.5 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs top-2 transition-shadow">
                            {"Flagship"}
                          </Badge>
                        </a>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <div className="flex font-medium gap-1.5 items-center min-w-0 text-muted-foreground text-xs" aria-label="Categories: Studio, Premium">
                            <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 overflow-hidden">
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#studio" aria-label="View Studio products">
                                {"Studio"}
                              </a>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#premium" aria-label="View Premium products">
                                {"Premium"}
                              </a>
                            </div>
                          </div>
                          <a className="block font-semibold hover:text-primary hover:underline min-w-0 text-foreground text-sm transition-colors truncate underline-offset-2" href="#studio-elite">
                            {"Studio Elite"}
                          </a>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="inline-flex relative shrink-0" role="img" aria-label="4.9 out of 5">
                              <span className="gap-0.5 inline-flex items-center text-muted-foreground/30" aria-hidden="true">
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </span>
                              <span className="absolute inset-y-0 left-0 overflow-hidden text-amber-500" aria-hidden="true" style={{width: "98%"}}>
                                <span className="gap-0.5 inline-flex items-center">
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                  <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="tabular-nums text-muted-foreground">
                              {"4.9"}
                            </span>
                            <a className="hover:text-primary hover:underline tabular-nums text-muted-foreground transition-colors underline-offset-4" href="#studio-elite#reviews" aria-label="Read 32 reviews for Studio Elite">
                              {"(32)"}
                            </a>
                          </div>
                          <div className="flex gap-1.5 items-baseline min-w-0 mt-1">
                            <span className="font-semibold tabular-nums text-base text-foreground">
                              {"$649"}
                            </span>
                          </div>
                        </div>
                        <Button className="mt-auto w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-shopping-bag size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                            <path d="M3.103 6.034h17.794"></path>
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                          </svg>
                          {"Add to cart"}
                        </Button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="bg-muted border-b border-border font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="7">
                      <span className="inline-block left-0 px-4 py-2 sticky">
                        {"Overview"}
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Type"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"On ear"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"On ear"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Over ear"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Over ear"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Over ear"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Over ear"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Color options"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"1 color"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"2 colors"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"4 colors"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"6 colors"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5 colors"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"3 colors"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Weight"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"180 g"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"210 g"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"265 g"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"295 g"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"310 g"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"340 g"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="7">
                      <span className="inline-block left-0 px-4 py-2 sticky">
                        {"Audio"}
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Active noise cancellation"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_2_" baseUiTooltipTrigger="" aria-label="About Active noise cancellation">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Spatial audio"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_4_" baseUiTooltipTrigger="" aria-label="About Spatial audio">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Driver size"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"30 mm"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"32 mm"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"40 mm"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"40 mm planar"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"40 mm planar"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"45 mm planar"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Hi-res codec"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_6_" baseUiTooltipTrigger="" aria-label="About Hi-res codec">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"SBC"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"SBC, AAC"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"SBC, AAC, aptX"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"LDAC, aptX HD"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"LDAC, aptX HD"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"LDAC, aptX HD, AAC"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="7">
                      <span className="inline-block left-0 px-4 py-2 sticky">
                        {"Connectivity"}
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Bluetooth version"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.0"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.0"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.2"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.3"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.3"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5.3 LE"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Multi-device pairing"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_8_" baseUiTooltipTrigger="" aria-label="About Multi-device pairing">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Wired (3.5 mm)"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="7">
                      <span className="inline-block left-0 px-4 py-2 sticky">
                        {"Battery"}
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Playback time"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 18 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 24 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 38 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 50 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 55 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"Up to 60 h"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Fast charge"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_a_" baseUiTooltipTrigger="" aria-label="About Fast charge">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"-"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"10 min → 2 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"10 min → 5 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"10 min → 8 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"10 min → 10 h"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"10 min → 12 h"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Wireless charging"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-muted border-b border-border border-t font-semibold p-0 text-left text-muted-foreground text-xs tracking-wide uppercase" scope="colgroup" colSpan="7">
                      <span className="inline-block left-0 px-4 py-2 sticky">
                        {"Support"}
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Warranty"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"6 months"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"1 year"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"2 years"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"3 years"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"3 years"}
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="tabular-nums text-sm">
                        {"5 years"}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Free returns"}
                        </span>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border last:border-b-0">
                    <th className="after:absolute after:bg-border after:content-[''] after:inset-y-0 after:pointer-events-none after:right-0 after:w-px align-middle bg-background font-medium left-0 px-4 py-2 sticky text-left text-sm z-20" scope="row">
                      <span className="gap-1.5 inline-flex items-center">
                        <span>
                          {"Priority support"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_c_" baseUiTooltipTrigger="" aria-label="About Priority support">
                          <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </span>
                    </th>
                    <td className="align-middle border-border px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-muted-foreground/50" role="img" aria-label="Not included">
                        <svg className="lucide lucide-minus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
                      <span className="inline-flex items-center justify-center text-success" role="img" aria-label="Included">
                        <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </td>
                    <td className="align-middle border-border border-l px-4 py-2">
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
            <div className="cn-scroll-area-scrollbar flex ml-[12rem] p-px select-none sm:ml-[14rem] touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "531.8931818181818px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
        </div>
        <p className="flex gap-2 items-start mt-6 text-muted-foreground text-xs">
          <svg className="lucide lucide-info mt-px shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>
            {"Specs are accurate at publish time. Confirm details on each product page before purchase."}
          </span>
        </p>
      </section>
    </main>
  )
}
