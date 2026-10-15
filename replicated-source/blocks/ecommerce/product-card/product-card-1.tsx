import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="flex flex-col gap-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto text-center">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="justify-center">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Apparel"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Studio Capsule"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h2 className="font-semibold md:text-4xl text-3xl tracking-tight">
            {"New Season Apparel"}
          </h2>
        </div>
        <div className="gap-5 grid lg:grid-cols-4 sm:grid-cols-2">
          <article className="flex flex-col gap-3 min-w-0">
            <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-md">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Leather Biker Jacket details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Leather Biker Jacket" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <Button className="absolute right-2 top-2" type="button" tabIndex={0} aria-label="Add Leather Biker Jacket to wishlist" aria-pressed="false" extracted="1">
                <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex gap-2 items-center min-h-5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline leading-5 min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-4" href="#" aria-label="View Studio Outerwear products">
                  {"Studio Outerwear"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                  {"New"}
                </Badge>
              </div>
              <h3 className="font-semibold text-base truncate">
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Leather Biker Jacket"}
                </a>
              </h3>
              <p className="line-clamp-1 text-muted-foreground text-sm">
                {"Polished leather with a sharp stance."}
              </p>
            </div>
            <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
              <span>
                {"$248.00"}
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-3 min-w-0">
            <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-md">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Gloss Puffer Jacket details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Gloss Puffer Jacket" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <div className="absolute left-2 top-2">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"-25%"}
                </Badge>
              </div>
              <Button className="absolute right-2 top-2" type="button" tabIndex={0} aria-label="Remove Gloss Puffer Jacket from wishlist" aria-pressed="true">
                <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex gap-2 items-center min-h-5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline leading-5 min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-4" href="#" aria-label="View Winter Layers products">
                  {"Winter Layers"}
                </a>
              </div>
              <h3 className="font-semibold text-base truncate">
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Gloss Puffer Jacket"}
                </a>
              </h3>
              <p className="line-clamp-1 text-muted-foreground text-sm">
                {"High-shine warmth with a clean fit."}
              </p>
            </div>
            <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
              <span className="font-normal line-through text-muted-foreground">
                {"$198.00"}
              </span>
              <span>
                {"$148.00"}
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-3 min-w-0">
            <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-md">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Airline Tank Set details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Airline Tank Set" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <Button className="absolute right-2 top-2" type="button" tabIndex={0} aria-label="Add Airline Tank Set to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex gap-2 items-center min-h-5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline leading-5 min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-4" href="#" aria-label="View Travel Essentials products">
                  {"Travel Essentials"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"Trending"}
                </Badge>
              </div>
              <h3 className="font-semibold text-base truncate">
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Airline Tank Set"}
                </a>
              </h3>
              <p className="line-clamp-1 text-muted-foreground text-sm">
                {"Relaxed tank and tapered joggers."}
              </p>
            </div>
            <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
              <span>
                {"$86.00"}
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-3 min-w-0">
            <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-md">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Wide-Leg Denim Set details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Wide-Leg Denim Set" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <Button className="absolute right-2 top-2" type="button" tabIndex={0} aria-label="Add Wide-Leg Denim Set to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex gap-2 items-center min-h-5 min-w-0">
                <a className="font-medium hover:text-primary hover:underline leading-5 min-w-0 text-muted-foreground text-xs transition-colors truncate underline-offset-4" href="#" aria-label="View Denim Studio products">
                  {"Denim Studio"}
                </a>
              </div>
              <h3 className="font-semibold text-base truncate">
                <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Wide-Leg Denim Set"}
                </a>
              </h3>
              <p className="line-clamp-1 text-muted-foreground text-sm">
                {"Easy tank styling with wide-leg jeans."}
              </p>
            </div>
            <div className="flex font-semibold gap-2 items-center min-w-0 tabular-nums text-sm">
              <span>
                {"$132.00"}
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
