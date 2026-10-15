import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-5">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  Apparel
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  Colorways
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h2 className="font-semibold md:text-3xl text-2xl text-balance">
                New Season Colorways
              </h2>
              <p className="max-w-2xl md:text-base text-muted-foreground text-pretty text-sm">
                Polished outerwear, easy layers, and soft denim.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                Show Filters
              </PopoverTrigger>
              </Popover>
              <Select>
              <SelectTrigger className="w-[174px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                <span className="text-muted-foreground">
                  Sort by:
                </span>
                <SelectValue>
                  Newest
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  ▼
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="newest" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
          </div>
        </div>
        <div className="gap-6 grid lg:grid-cols-4 sm:grid-cols-2">
          <Card className="pt-0" size="default">
            <CardHeader className="px-0">
              <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Leather Biker Jacket details">
                  <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full" alt="Leather Biker Jacket in Black" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=900&q=80" />
                </a>
                <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Leather Biker Jacket to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#">
                Studio Outerwear
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Leather Biker Jacket">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-zinc-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Leather Biker Jacket in Black" aria-pressed="true">
                    <span className="sr-only">
                      Black
                    </span>
                  </button>
                  <button className="bg-amber-900 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Leather Biker Jacket in Cognac" aria-pressed="false">
                    <span className="sr-only">
                      Cognac
                    </span>
                  </button>
                  <button className="bg-zinc-700 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Leather Biker Jacket in Graphite" aria-pressed="false">
                    <span className="sr-only">
                      Graphite
                    </span>
                  </button>
                  <button className="bg-lime-900 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Leather Biker Jacket in Olive" aria-pressed="false">
                    <span className="sr-only">
                      Olive
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  Black
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <CardTitle className="min-w-0">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    Leather Biker Jacket
                  </a>
                </CardTitle>
                <CardDescription className="truncate">
                  Polished leather with a sharp stance.
                </CardDescription>
              </div>
              <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                <span>
                  $248.00
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="pt-0" size="default">
            <CardHeader className="px-0">
              <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Gloss Puffer Jacket details">
                  <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full" alt="Gloss Puffer Jacket in Black" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=900&q=80" />
                </a>
                <div className="absolute left-2 top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    -25%
                  </Badge>
                </div>
                <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Remove Gloss Puffer Jacket from wishlist" aria-pressed="true">
                  <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#">
                Cold Weather
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Gloss Puffer Jacket">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-zinc-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Gloss Puffer Jacket in Black" aria-pressed="true">
                    <span className="sr-only">
                      Black
                    </span>
                  </button>
                  <button className="bg-slate-100 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Gloss Puffer Jacket in Cloud" aria-pressed="false">
                    <span className="sr-only">
                      Cloud
                    </span>
                  </button>
                  <button className="bg-blue-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Gloss Puffer Jacket in Navy" aria-pressed="false">
                    <span className="sr-only">
                      Navy
                    </span>
                  </button>
                  <button className="bg-red-600 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Gloss Puffer Jacket in Signal Red" aria-pressed="false">
                    <span className="sr-only">
                      Signal Red
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  Black
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <CardTitle className="min-w-0">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    Gloss Puffer Jacket
                  </a>
                </CardTitle>
                <CardDescription className="truncate">
                  High-shine warmth with a clean fit.
                </CardDescription>
              </div>
              <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                <span className="font-normal line-through text-muted-foreground">
                  $198.00
                </span>
                <span>
                  $148.00
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="pt-0" size="default">
            <CardHeader className="px-0">
              <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Ribbed Tank Set details">
                  <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full" alt="Ribbed Tank Set in Chalk" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
                </a>
                <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Ribbed Tank Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#">
                Travel Set
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Ribbed Tank Set">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-stone-100 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Ribbed Tank Set in Chalk" aria-pressed="true">
                    <span className="sr-only">
                      Chalk
                    </span>
                  </button>
                  <button className="bg-green-700 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Ribbed Tank Set in Sage" aria-pressed="false">
                    <span className="sr-only">
                      Sage
                    </span>
                  </button>
                  <button className="bg-rose-500 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Ribbed Tank Set in Rose" aria-pressed="false">
                    <span className="sr-only">
                      Rose
                    </span>
                  </button>
                  <button className="bg-blue-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Ribbed Tank Set in Navy" aria-pressed="false">
                    <span className="sr-only">
                      Navy
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  Chalk
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <CardTitle className="min-w-0">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    Ribbed Tank Set
                  </a>
                </CardTitle>
                <CardDescription className="truncate">
                  Soft tank with tapered pull-on pants.
                </CardDescription>
              </div>
              <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                <span>
                  $86.00
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="pt-0" size="default">
            <CardHeader className="px-0">
              <div className="aspect-[4/5] bg-muted group/media overflow-hidden relative rounded-t-lg">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-t-lg" href="#" aria-label="View Wide-Leg Denim Set details">
                  <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full" alt="Wide-Leg Denim Set in Light Denim" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=900&q=80" />
                </a>
                <Button className="absolute right-2 top-2" type="button" tabIndex="0" aria-label="Add Wide-Leg Denim Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#">
                Denim Studio
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Wide-Leg Denim Set">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-sky-200 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wide-Leg Denim Set in Light Denim" aria-pressed="true">
                    <span className="sr-only">
                      Light Denim
                    </span>
                  </button>
                  <button className="bg-blue-600 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wide-Leg Denim Set in Washed Blue" aria-pressed="false">
                    <span className="sr-only">
                      Washed Blue
                    </span>
                  </button>
                  <button className="bg-stone-200 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wide-Leg Denim Set in Ecru" aria-pressed="false">
                    <span className="sr-only">
                      Ecru
                    </span>
                  </button>
                  <button className="bg-zinc-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wide-Leg Denim Set in Black Rinse" aria-pressed="false">
                    <span className="sr-only">
                      Black Rinse
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  Light Denim
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <CardTitle className="min-w-0">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    Wide-Leg Denim Set
                  </a>
                </CardTitle>
                <CardDescription className="truncate">
                  Easy tank styling with wide-leg jeans.
                </CardDescription>
              </div>
              <div className="flex font-semibold gap-2 items-center min-w-0 mt-auto tabular-nums text-sm">
                <span>
                  $132.00
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
