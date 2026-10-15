import { Button } from "@/registry/bases/base/ui/button"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-label="Modern apparel">
        <div className="gap-6 grid grid-cols-1 lg:gap-10 sm:grid-cols-2">
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Linen Field Shirt">
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-0 object-cover opacity-100 size-full transition-opacity" alt="Linen Field Shirt, studio fashion shot in sand" loading="lazy" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&h=900&q=80" />
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-100 object-cover opacity-0 size-full transition-opacity" alt="Linen Field Shirt worn on a model in soft studio light" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=900&h=900&q=80" />
              </a>
              <div className="absolute left-3 pointer-events-none top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"Bestseller"}
                </Badge>
              </div>
              <div className="absolute hidden inset-0 items-center justify-center pointer-events-none px-4 sm:flex">
                <div className="duration-300 flex gap-2 group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto max-w-[16rem] opacity-0 pointer-events-none transition-opacity w-full">
                  <Button className="backdrop-blur-sm bg-background/95 flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Remove Linen Field Shirt from list" aria-pressed="true" extracted="1">
                    <svg className="fill-destructive lucide lucide-heart size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    {"Saved"}
                  </Button>
                  <Button className="flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Linen Field Shirt to cart">
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    {"Add to Cart"}
                  </Button>
                </div>
              </div>
              <Popover>
              <PopoverTrigger className="absolute bottom-3 flex focus-visible:ring-2 focus-visible:ring-ring outline-none right-3 rounded-full" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" aria-label="Linen Field Shirt, 4 colors: Sand, Ivory, Olive, Navy">
                <span className="backdrop-blur-sm bg-background/95 duration-300 font-medium gap-1.5 group-hover/card:opacity-0 inline-flex items-center opacity-100 px-2 py-1 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="-space-x-1.5 flex">
                    <span className="bg-stone-300 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-lime-900 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                  </span>
                  <span className="tabular-nums text-foreground">
                    {"+1"}
                  </span>
                </span>
                <span className="absolute backdrop-blur-sm bg-background/95 bottom-0 duration-300 font-medium gap-1.5 group-hover/card:opacity-100 group-hover/card:pointer-events-auto inline-flex items-center opacity-0 pointer-events-none px-2 py-1 right-0 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-stone-300 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-lime-900 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-blue-950 ring-2 ring-background rounded-full size-3.5"></span>
                  </span>
                </span>
              </PopoverTrigger>
              </Popover>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Halden products">
                {"Halden"}
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  {"Linen Field Shirt"}
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  {"$128"}
                </span>
              </div>
              <a className="gap-1.5 hover:text-foreground hover:underline inline-flex items-center mt-0.5 text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Shop the look for Linen Field Shirt, 4 items">
                {"Shop The Look · 4 items"}
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Heavy-Wash Denim">
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-0 object-cover opacity-100 size-full transition-opacity" alt="Heavy-Wash Denim in indigo, fashion studio shot" loading="lazy" src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&h=900&q=80" />
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-100 object-cover opacity-0 size-full transition-opacity" alt="Heavy-Wash Denim worn on a model in studio light" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&h=900&q=80" />
              </a>
              <div className="absolute left-3 pointer-events-none top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                  {"New"}
                </Badge>
              </div>
              <div className="absolute hidden inset-0 items-center justify-center pointer-events-none px-4 sm:flex">
                <div className="duration-300 flex gap-2 group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto max-w-[16rem] opacity-0 pointer-events-none transition-opacity w-full">
                  <Button className="backdrop-blur-sm bg-background/95 flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Heavy-Wash Denim to list" aria-pressed="false">
                    <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    {"Add to List"}
                  </Button>
                  <Button className="flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Heavy-Wash Denim to cart">
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    {"Add to Cart"}
                  </Button>
                </div>
              </div>
              <Popover>
              <PopoverTrigger className="absolute bottom-3 flex focus-visible:ring-2 focus-visible:ring-ring outline-none right-3 rounded-full" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false" aria-label="Heavy-Wash Denim, 3 colors: Indigo, Bone, Charcoal">
                <span className="backdrop-blur-sm bg-background/95 duration-300 font-medium gap-1.5 group-hover/card:opacity-0 inline-flex items-center opacity-100 px-2 py-1 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="-space-x-1.5 flex">
                    <span className="bg-blue-950 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-zinc-800 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                  </span>
                </span>
                <span className="absolute backdrop-blur-sm bg-background/95 bottom-0 duration-300 font-medium gap-1.5 group-hover/card:opacity-100 group-hover/card:pointer-events-auto inline-flex items-center opacity-0 pointer-events-none px-2 py-1 right-0 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-blue-950 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-zinc-800 ring-2 ring-background rounded-full size-3.5"></span>
                  </span>
                </span>
              </PopoverTrigger>
              </Popover>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Marlow Goods products">
                {"Marlow Goods"}
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  {"Heavy-Wash Denim"}
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  {"$148"}
                </span>
              </div>
              <a className="gap-1.5 hover:text-foreground hover:underline inline-flex items-center mt-0.5 text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Shop the look for Heavy-Wash Denim, 5 items">
                {"Shop The Look · 5 items"}
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Cropped Knit Sweater">
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-0 object-cover opacity-100 size-full transition-opacity" alt="Cropped Knit Sweater in bone, fashion studio shot" loading="lazy" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&h=900&q=80" />
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-100 object-cover opacity-0 size-full transition-opacity" alt="Cropped Knit Sweater worn on a model in soft light" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&fit=crop&w=900&h=900&q=80" />
              </a>
              <div className="absolute hidden inset-0 items-center justify-center pointer-events-none px-4 sm:flex">
                <div className="duration-300 flex gap-2 group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto max-w-[16rem] opacity-0 pointer-events-none transition-opacity w-full">
                  <Button className="backdrop-blur-sm bg-background/95 flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Cropped Knit Sweater to list" aria-pressed="false">
                    <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    {"Add to List"}
                  </Button>
                  <Button className="flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Cropped Knit Sweater to cart">
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    {"Add to Cart"}
                  </Button>
                </div>
              </div>
              <Popover>
              <PopoverTrigger className="absolute bottom-3 flex focus-visible:ring-2 focus-visible:ring-ring outline-none right-3 rounded-full" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false" aria-label="Cropped Knit Sweater, 5 colors: Bone, Sage, Black, Saffron, Petal">
                <span className="backdrop-blur-sm bg-background/95 duration-300 font-medium gap-1.5 group-hover/card:opacity-0 inline-flex items-center opacity-100 px-2 py-1 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="-space-x-1.5 flex">
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-emerald-800 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-zinc-950 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                  </span>
                  <span className="tabular-nums text-foreground">
                    {"+2"}
                  </span>
                </span>
                <span className="absolute backdrop-blur-sm bg-background/95 bottom-0 duration-300 font-medium gap-1.5 group-hover/card:opacity-100 group-hover/card:pointer-events-auto inline-flex items-center opacity-0 pointer-events-none px-2 py-1 right-0 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-stone-100 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-emerald-800 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-zinc-950 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-amber-500 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-rose-200 ring-2 ring-background rounded-full size-3.5"></span>
                  </span>
                </span>
              </PopoverTrigger>
              </Popover>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Wren & Field products">
                {"Wren & Field"}
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  {"Cropped Knit Sweater"}
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  {"$98"}
                </span>
                <span className="font-normal line-through text-muted-foreground">
                  {"$118"}
                </span>
              </div>
              <a className="gap-1.5 hover:text-foreground hover:underline inline-flex items-center mt-0.5 text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Shop the look for Cropped Knit Sweater, 3 items">
                {"Shop The Look · 3 items"}
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Pleated Wide Trouser">
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-0 object-cover opacity-100 size-full transition-opacity" alt="Pleated Wide Trouser in charcoal, fashion studio shot" loading="lazy" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&h=900&q=80" />
                <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/card:opacity-100 object-cover opacity-0 size-full transition-opacity" alt="Pleated Wide Trouser worn on a model in evening light" aria-hidden="true" loading="lazy" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&h=900&q=80" />
              </a>
              <div className="absolute left-3 pointer-events-none top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"Limited"}
                </Badge>
              </div>
              <div className="absolute hidden inset-0 items-center justify-center pointer-events-none px-4 sm:flex">
                <div className="duration-300 flex gap-2 group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto group-hover/card:opacity-100 group-hover/card:pointer-events-auto max-w-[16rem] opacity-0 pointer-events-none transition-opacity w-full">
                  <Button className="backdrop-blur-sm bg-background/95 flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Pleated Wide Trouser to list" aria-pressed="false">
                    <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    {"Add to List"}
                  </Button>
                  <Button className="flex-1 shadow-sm" type="button" tabIndex={0} aria-label="Add Pleated Wide Trouser to cart">
                    <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                      <path d="M3.103 6.034h17.794"></path>
                      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                    {"Add to Cart"}
                  </Button>
                </div>
              </div>
              <Popover>
              <PopoverTrigger className="absolute bottom-3 flex focus-visible:ring-2 focus-visible:ring-ring outline-none right-3 rounded-full" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false" aria-label="Pleated Wide Trouser, 3 colors: Charcoal, Cream, Navy">
                <span className="backdrop-blur-sm bg-background/95 duration-300 font-medium gap-1.5 group-hover/card:opacity-0 inline-flex items-center opacity-100 px-2 py-1 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="-space-x-1.5 flex">
                    <span className="bg-zinc-800 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-stone-200 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                    <span className="bg-blue-950 ring-2 ring-background rounded-full size-3.5" aria-hidden="true"></span>
                  </span>
                </span>
                <span className="absolute backdrop-blur-sm bg-background/95 bottom-0 duration-300 font-medium gap-1.5 group-hover/card:opacity-100 group-hover/card:pointer-events-auto inline-flex items-center opacity-0 pointer-events-none px-2 py-1 right-0 rounded-full text-xs transition-opacity" aria-hidden="true">
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-zinc-800 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-stone-200 ring-2 ring-background rounded-full size-3.5"></span>
                    <span className="bg-blue-950 ring-2 ring-background rounded-full size-3.5"></span>
                  </span>
                </span>
              </PopoverTrigger>
              </Popover>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Halden products">
                {"Halden"}
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  {"Pleated Wide Trouser"}
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  {"$178"}
                </span>
              </div>
              <a className="gap-1.5 hover:text-foreground hover:underline inline-flex items-center mt-0.5 text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#" aria-label="Shop the look for Pleated Wide Trouser, 4 items">
                {"Shop The Look · 4 items"}
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
