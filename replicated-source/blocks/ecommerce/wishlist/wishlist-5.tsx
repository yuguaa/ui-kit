import { Button } from "@/registry/bases/base/ui/button"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-3xl mx-auto px-5 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="wishlist-title">
        <header className="flex flex-col gap-3 mb-6 sm:mb-8">
          <p className="font-medium text-[11px] text-muted-foreground tracking-[0.16em] uppercase">
            {"Wishlist"}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-end justify-between">
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="font-semibold sm:text-3xl text-2xl text-foreground tracking-tight" id="wishlist-title">
                {"My Saved Items"}
              </h1>
              <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-sm">
                <span className="tabular-nums">
                  {"6 items"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"$1,300 total"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="font-medium text-success">
                  {"$100 in savings"}
                </span>
              </p>
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
                {"Share Wishlist"}
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-8 sm:gap-10">
          <section className="flex flex-col gap-3" aria-labelledby="wishlist-must-have">
            <header className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
              <h2 className="font-semibold sm:text-lg text-base text-foreground tracking-tight" id="wishlist-must-have">
                {"Must Have"}
              </h2>
              <p className="text-muted-foreground text-xs">
                {"Pieces you plan to buy first."}
              </p>
            </header>
            <ul className="divide-border divide-y" role="list">
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Lumen Studio Speakers">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Lumen Studio Speakers in walnut on a desk" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Audio">
                      {"Audio"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Lumen Studio Speakers"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Walnut"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Saved 2 days ago"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="font-medium text-success">
                        {"Save $70"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$329"}
                      </p>
                      <p className="line-through tabular-nums text-muted-foreground text-xs">
                        {"$399"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Lumen Studio Speakers priority to Save For Later" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Lumen Studio Speakers from wishlist" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="ml-1" type="button" tabIndex={0} aria-label="Add Lumen Studio Speakers to cart">
                        <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        {"Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </article>
              </li>
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Brava Espresso Machine">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Brava Espresso Machine on a marble counter" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Kitchen">
                      {"Kitchen"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Brava Espresso Machine"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Brushed Steel"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"3 left in stock"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$545"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Brava Espresso Machine priority to Save For Later" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Brava Espresso Machine from wishlist" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="ml-1" type="button" tabIndex={0} aria-label="Add Brava Espresso Machine to cart">
                        <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        {"Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-3" aria-labelledby="wishlist-save-for-later">
            <header className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
              <h2 className="font-semibold sm:text-lg text-base text-foreground tracking-tight" id="wishlist-save-for-later">
                {"Save For Later"}
              </h2>
              <p className="text-muted-foreground text-xs">
                {"Holding off, but still on the radar."}
              </p>
            </header>
            <ul className="divide-border divide-y" role="list">
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Aurora Pro Headphones">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Aurora Pro Headphones in matte black on a studio backdrop" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Audio">
                      {"Audio"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Aurora Pro Headphones"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Matte Black"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Saved 1 week ago"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="font-medium text-success">
                        {"Save $30"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$189"}
                      </p>
                      <p className="line-through tabular-nums text-muted-foreground text-xs">
                        {"$219"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Aurora Pro Headphones priority to Maybe" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Aurora Pro Headphones from wishlist" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="ml-1" type="button" tabIndex={0} aria-label="Add Aurora Pro Headphones to cart">
                        <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        {"Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </article>
              </li>
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Pace Smart Lamp">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Pace Smart Lamp in sand on a side table" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Lighting">
                      {"Lighting"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Pace Smart Lamp"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Sand"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Saved 4 days ago"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$89"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Pace Smart Lamp priority to Maybe" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Pace Smart Lamp from wishlist" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="ml-1" type="button" tabIndex={0} aria-label="Add Pace Smart Lamp to cart">
                        <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        {"Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-3" aria-labelledby="wishlist-maybe">
            <header className="flex flex-wrap gap-x-3 gap-y-1 items-baseline justify-between">
              <h2 className="font-semibold sm:text-lg text-base text-foreground tracking-tight" id="wishlist-maybe">
                {"Maybe"}
              </h2>
              <p className="text-muted-foreground text-xs">
                {"Light interest. Move up when ready."}
              </p>
            </header>
            <ul className="divide-border divide-y" role="list">
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Halden Linen Throw">
                    <Item className="overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out group-hover/row:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Halden Linen Throw folded on a couch arm" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Home">
                      {"Home"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Halden Linen Throw"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Oat"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Saved 2 weeks ago"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$148"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Halden Linen Throw priority to Must Have" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Halden Linen Throw from wishlist" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Button className="ml-1" type="button" tabIndex={0} aria-label="Add Halden Linen Throw to cart">
                        <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                          <path d="M3.103 6.034h17.794"></path>
                          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                        </svg>
                        {"Add To Cart"}
                      </Button>
                    </div>
                  </div>
                </article>
              </li>
              <li>
                <article className="gap-4 grid grid-cols-[auto_minmax(0,1fr)_auto] group/row items-center py-4 sm:gap-5">
                  <a className="hover:text-primary hover:underline shrink-0 transition-colors underline-offset-2" href="#" aria-label="View Velar Walnut Tray">
                    <Item className="opacity-60 overflow-hidden p-0 relative size-16 sm:size-20" variant="muted" size="default">
                      <img className="absolute duration-500 ease-out grayscale h-full inset-0 object-cover transition-transform w-full" alt="Velar Walnut Tray styled on a side table" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&h=400&q=80" />
                    </Item>
                  </a>
                  <div className="flex flex-col gap-1 min-w-0">
                    <a className="font-medium hover:text-primary hover:underline min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-2" href="#" aria-label="Shop all Home">
                      {"Home"}
                    </a>
                    <h3 className="font-semibold leading-tight sm:text-base text-sm truncate">
                      <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                        {"Velar Walnut Tray"}
                      </a>
                    </h3>
                    <p className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                      <span>
                        {"Walnut"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"Currently unavailable"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end shrink-0 sm:flex-row sm:gap-4 sm:items-center">
                    <div className="flex flex-col gap-0 items-end">
                      <p className="font-semibold tabular-nums text-base text-foreground">
                        {"$68"}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Set Velar Walnut Tray priority to Must Have" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Remove Velar Walnut Tray from wishlist" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 ml-1 outline-none px-1.25 py-0.5 relative rounded-full sm:inline-flex text-secondary-foreground text-xs transition-shadow">
                        {"Notify Me"}
                      </Badge>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}
