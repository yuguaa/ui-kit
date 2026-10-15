import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
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
    <div className="flex items-start justify-center md:p-10 min-h-svh p-6 w-full">
      <section className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-5">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Shop"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                  {"Apparel"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Studio Mosaic"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              <h2 className="font-semibold md:text-3xl text-2xl text-balance">
                {"Studio Mosaic"}
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                {"8 pieces"}
              </Badge>
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
                {"Show Filters"}
              </PopoverTrigger>
              </Popover>
              <Select>
              <SelectTrigger className="w-[174px]" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                <span className="text-muted-foreground">
                  {"Sort by:"}
                </span>
                <SelectValue>
                  {"Newest"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="newest" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
          </div>
        </div>
        <div className="columns-1 gap-4 lg:columns-4 sm:columns-2">
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[3/4] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Leather Biker Jacket details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Leather Biker Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=720&h=940&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Studio Outerwear products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Studio Outerwear"}
                        </span>
                      </a>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                        {"New"}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Leather Biker Jacket"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Polished leather with a sharp stance, cropped sleeve line, and enough structure for cool-weather styling."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$248.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Leather Biker Jacket to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[4/5] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Gloss Puffer Jacket details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Gloss Puffer Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=720&h=980&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform">
                  <div className="bg-background flex items-center min-w-0 p-1.5 relative rounded-md shadow-xs">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                      {"-25%"}
                    </Badge>
                  </div>
                </div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Cold Weather products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Cold Weather"}
                        </span>
                      </a>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                        {"4 left"}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Gloss Puffer Jacket"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"High-shine warmth with a clean fit, soft collar, and compact winter volume that still layers easily."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span className="font-normal line-through text-muted-foreground">
                          {"$198.00"}
                        </span>
                        <span>
                          {"$148.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 motion-reduce:transition-none opacity-100 pointer-events-auto right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Remove Gloss Puffer Jacket from wishlist" aria-pressed="true">
                  <svg className="fill-destructive lucide lucide-heart text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[5/6] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Ribbed Tank Set details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Ribbed Tank Set" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Travel Set products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Travel Set"}
                        </span>
                      </a>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Ribbed Tank Set"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Soft ribbed tank paired with tapered pull-on pants for long flights, weekend plans, and easy packing."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$86.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Ribbed Tank Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[3/4] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Wide-Leg Denim Set details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Wide-Leg Denim Set" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1762395271662-2a5a077f9662?auto=format&fit=crop&w=720&h=1040&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Denim Studio products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Denim Studio"}
                        </span>
                      </a>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                        {"Trending"}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Wide-Leg Denim Set"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Easy tank styling with wide-leg denim, a relaxed studio line, and a balanced fit through the waist."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$132.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Wide-Leg Denim Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[4/5] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Cognac Crop Jacket details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Cognac Crop Jacket" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1603748945907-60d79ed187d1?auto=format&fit=crop&w=720&h=900&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Studio Outerwear products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Studio Outerwear"}
                        </span>
                      </a>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Cognac Crop Jacket"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Cropped structure in warm polished leather with a close fit, clean hardware, and sharp everyday proportion."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$226.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Cognac Crop Jacket to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[5/7] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Sage Utility Set details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Sage Utility Set" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1625224590908-d02e98d0cb3f?auto=format&fit=crop&w=720&h=960&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Travel Set products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Travel Set"}
                        </span>
                      </a>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                        {"New"}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Sage Utility Set"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Soft utility layers with an easy profile, roomy pockets, and all-day movement for city travel."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$154.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Sage Utility Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[3/4] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Navy Padded Coat details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Navy Padded Coat" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1583513702324-73e5c09c9dcf?auto=format&fit=crop&w=720&h=930&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform">
                  <div className="bg-background flex items-center min-w-0 p-1.5 relative rounded-md shadow-xs">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                      {"-18%"}
                    </Badge>
                  </div>
                </div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Cold Weather products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Cold Weather"}
                        </span>
                      </a>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Navy Padded Coat"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Insulated volume with a clean city profile, warm collar shape, and a finish that keeps outfits refined."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span className="font-normal line-through text-muted-foreground">
                          {"$228.00"}
                        </span>
                        <span>
                          {"$186.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Navy Padded Coat to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
          <article className="bg-muted break-inside-avoid group mb-4 overflow-hidden rounded-md">
            <div className="aspect-[4/5] group/media relative">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none rounded-md" href="#" aria-label="View Black Rinse Denim details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover transition-transform w-full will-change-transform" alt="Black Rinse Denim" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1578693082747-50c396cacd81?auto=format&fit=crop&w=720&h=980&q=80" />
              </a>
              <div className="absolute duration-200 flex flex-col inset-0 justify-between opacity-100 p-3 pointer-events-none sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
                <div className="-translate-y-0 duration-200 flex gap-2 items-start justify-between sm:-translate-y-2 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 transition-transform"></div>
                <div className="duration-200 sm:group-focus-within:translate-y-0 sm:group-hover:translate-y-0 sm:translate-y-2 transition-transform translate-y-0">
                  <div className="bg-background border p-4 relative rounded-md shadow-xs">
                    <div className="flex gap-3 items-center justify-between mb-2.5 min-w-0">
                      <a className="flex font-medium gap-1.5 group/category hover:text-primary hover:underline items-center min-w-0 pointer-events-auto text-muted-foreground text-xs transition-colors underline-offset-4" href="#" aria-label="View Denim Studio products">
                        <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="group-hover/category:underline truncate underline-offset-4">
                          {"Denim Studio"}
                        </span>
                      </a>
                    </div>
                    <h3 className="font-semibold text-sm truncate">
                      <a className="hover:text-primary hover:underline pointer-events-auto transition-colors underline-offset-4" href="#">
                        {"Black Rinse Denim"}
                      </a>
                    </h3>
                    <p className="leading-5 line-clamp-2 min-h-10 mt-1 text-muted-foreground text-xs">
                      {"Dark rinse denim with an easy straight leg, softened finish, and just enough polish for repeat wear."}
                    </p>
                    <div className="flex justify-start mt-3">
                      <div className="flex font-semibold gap-1.5 items-baseline tabular-nums text-sm">
                        <span>
                          {"$118.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute duration-200 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-hover:opacity-100 group-hover:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none right-3 top-3 transition-opacity">
                <Button type="button" tabIndex="0" aria-label="Add Black Rinse Denim to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
