import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/base/ui/carousel"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh pb-28 px-6 py-8 w-full">
      <Card className="max-w-3xl p-5 w-full" size="sm">
        <div className="gap-4 grid md:gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(292px,1fr)]">
          <CardHeader className="p-0">
            <Carousel className="bg-muted group/media overflow-hidden rounded-lg" role="region" aria-roledescription="carousel">
              <Carousel>
              <CarouselContent>
                <div className="flex ml-0" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                  <Carousel>
                  <CarouselItem className="pl-0" role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <div className="aspect-[10/11] md:aspect-auto md:h-[440px] overflow-hidden relative sm:aspect-[900/1138]">
                      <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Ribbed Tank Set details">
                        <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.03] object-center object-cover transition-transform w-full will-change-transform" alt="Ribbed tank set front studio view" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1763499390110-8221cb9cc28f?auto=format&fit=crop&w=900&h=1138&q=80" />
                      </a>
                    </div>
                  </CarouselItem>
                  </Carousel>
                  <Carousel>
                  <CarouselItem className="pl-0" role="group" aria-roledescription="slide">
                    <div className="aspect-[10/11] md:aspect-auto md:h-[440px] overflow-hidden relative sm:aspect-[900/1138]">
                      <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Ribbed Tank Set details">
                        <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.03] object-center object-cover transition-transform w-full will-change-transform" alt="Ribbed tank set side studio view" loading="lazy" fetchpriority="auto" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=900&h=1138&q=80" />
                      </a>
                    </div>
                  </CarouselItem>
                  </Carousel>
                </div>
              </CarouselContent>
              </Carousel>
              <Carousel>
              <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-2 outline-none select-none shadow-sm shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0" extracted="1">
                <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Previous slide"}
                </span>
              </CarouselPrevious>
              </Carousel>
              <Carousel>
              <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-2 select-none shadow-sm shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Next slide"}
                </span>
              </CarouselNext>
              </Carousel>
            </Carousel>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 md:gap-5 min-w-0 p-0">
            <div className="flex flex-col gap-2 min-w-0">
              <div className="flex flex-wrap gap-2 items-center">
                <p className="font-medium text-muted-foreground text-sm">
                  {"Most Popular"}
                </p>
                <Tooltip>
                <TooltipTrigger className="appearance-none bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex outline-none p-0 rounded-full" type="button" aria-label="5 left. Only 5 left in the selected size." id="base-ui-_r_1_" baseUiTooltipTrigger="">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 cursor-help dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                    {"5 left"}
                  </Badge>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <CardTitle className="leading-tight md:text-2xl min-w-0 text-xl">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    {"Ribbed Tank Set"}
                  </a>
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {"Soft ribbed tank with tapered pull-on pants, made for polished travel days and easy weekend layering."}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"50% OFF"}
              </Badge>
              <div className="flex font-semibold gap-2 items-baseline tabular-nums text-xl">
                <span>
                  {"$80.00"}
                </span>
                <span className="font-normal line-through text-base text-muted-foreground">
                  {"$159.00"}
                </span>
              </div>
            </div>
            <div className="gap-3 grid md:mt-auto mt-2">
              <div className="flex gap-3 items-center justify-between">
                <p className="font-medium text-sm">
                  {"Select Size"}
                </p>
                <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#">
                  {"Size guide"}
                </a>
              </div>
              <div className="@container/field-group cn-field-group flex-col gap-2 grid grid-cols-5 group/field-group pt-1 w-full" role="group" aria-label="Select Size">
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="quick-buy-size-xs" id="quick-buy-size-xs-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2_" aria-checked="false" aria-label="Select size XS" aria-labelledby="quick-buy-size-xs-label"></Checkbox>
                    <input id="quick-buy-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"XS"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="quick-buy-size-s" id="quick-buy-size-s-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5_" aria-checked="false" aria-label="Select size S" aria-labelledby="quick-buy-size-s-label"></Checkbox>
                    <input id="quick-buy-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"S"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="quick-buy-size-m" id="quick-buy-size-m-label">
                  <Field className="bg-primary/5 border-primary/40 h-9 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_8_" aria-checked="true" aria-label="Select size M" aria-labelledby="quick-buy-size-m-label">
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input id="quick-buy-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"M"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="quick-buy-size-l" id="quick-buy-size-l-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_b_" aria-checked="false" aria-label="Select size L" aria-labelledby="quick-buy-size-l-label"></Checkbox>
                    <input id="quick-buy-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"L"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="quick-buy-size-xl" id="quick-buy-size-xl-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none data-unchecked:opacity-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_e_" aria-checked="false" aria-label="Select size XL" aria-labelledby="quick-buy-size-xl-label"></Checkbox>
                    <input id="quick-buy-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"XL"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
              </div>
              <div className="gap-2 grid mt-2">
                <Button className="w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to Bag"}
                </Button>
                <Button className="w-full" type="button" tabIndex="0" aria-pressed="false" aria-label="Add Ribbed Tank Set to wishlist">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  {"Wishlist"}
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
