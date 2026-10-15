import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/bases/base/ui/carousel"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-4xl md:py-14 mx-auto px-4 py-10 sm:px-6 w-full" aria-labelledby="reviews-heading">
        <header className="flex flex-wrap gap-x-8 gap-y-4 items-end justify-between">
          <div className="flex flex-col gap-1.5 min-w-0">
            <span className="font-medium text-muted-foreground text-xs tracking-[0.22em] uppercase">
              {"Reviews"}
            </span>
            <h2 className="font-semibold md:leading-tight md:text-[28px] text-2xl text-foreground tracking-tight" id="reviews-heading">
              {"What Customers Are Saying"}
            </h2>
            <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#all-reviews" aria-label="Read all 1,284 verified reviews for Halden Wave Pro">
              <span className="font-medium tabular-nums text-foreground">
                {"1,284"}
              </span>
              {"verified reviews"}
            </a>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            {"Write A Review"}
          </Button>
        </header>
        <Carousel className="md:mt-10 mt-8" role="region" aria-roledescription="carousel" aria-label="Featured customer reviews for Halden Wave Pro">
          <Carousel>
          <CarouselContent>
            <div className="-ml-4 flex" style={{transform: "translate3d(-2592px, 0px, 0px)"}}>
              <Carousel>
              <CarouselItem role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                <article className="flex flex-col">
                  <svg className="h-7 md:h-9 md:w-12 shrink-0 text-foreground/30 w-10" aria-hidden="true" viewBox="0 0 32 22" fill="currentColor">
                    <path d="M0 22V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v10H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v10H20z"></path>
                  </svg>
                  <div className="flex flex-col gap-4 md:gap-5 md:mt-6 mt-5 text-foreground text-pretty">
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Cancellation handled the JFK engine wash without that pressurized ear feeling. Voice pickup on a hotel call was clean enough that nobody asked if I was outside, and the side-tone makes my own voice feel natural instead of clipped."}
                    </p>
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Worth the upgrade from my old pair. The battery still showed thirty percent after the entire round trip, and the case finally fits in a laptop sleeve pocket without bowing the spine of the paperback I was halfway through."}
                    </p>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem role="group" aria-roledescription="slide">
                <article className="flex flex-col">
                  <svg className="h-7 md:h-9 md:w-12 shrink-0 text-foreground/30 w-10" aria-hidden="true" viewBox="0 0 32 22" fill="currentColor">
                    <path d="M0 22V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v10H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v10H20z"></path>
                  </svg>
                  <div className="flex flex-col gap-4 md:gap-5 md:mt-6 mt-5 text-foreground text-pretty">
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Hands off iOS at lunch, back to LDAC on the work laptop, no menu wrestling between devices. The companion app remembers EQ per source, which sounds small until you live with it for a month and never have to fiddle with sliders again."}
                    </p>
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Touch controls finally stay out of the way when I adjust my glasses, and the side detection is reliable enough that I stopped pulling them off entirely. The build is light without feeling fragile, and the headband stays put through a full standing-desk afternoon."}
                    </p>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem role="group" aria-roledescription="slide">
                <article className="flex flex-col">
                  <svg className="h-7 md:h-9 md:w-12 shrink-0 text-foreground/30 w-10" aria-hidden="true" viewBox="0 0 32 22" fill="currentColor">
                    <path d="M0 22V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v10H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v10H20z"></path>
                  </svg>
                  <div className="flex flex-col gap-4 md:gap-5 md:mt-6 mt-5 text-foreground text-pretty">
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Tracked five working days of meetings plus an evening commute and the meter still read twenty-two percent. Fast charge brings them back in twelve minutes if you forget to plug in, which has happened more times than I would like to admit."}
                    </p>
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"The half star comes off because the included USB-C cable feels too short to use without contorting around the laptop on a flight tray. Sound otherwise is exactly what I had hoped for at this price, with a wider stage than the closed-back design suggests."}
                    </p>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem role="group" aria-roledescription="slide">
                <article className="flex flex-col">
                  <svg className="h-7 md:h-9 md:w-12 shrink-0 text-foreground/30 w-10" aria-hidden="true" viewBox="0 0 32 22" fill="currentColor">
                    <path d="M0 22V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v10H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v10H20z"></path>
                  </svg>
                  <div className="flex flex-col gap-4 md:gap-5 md:mt-6 mt-5 text-foreground text-pretty">
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Clamping force is gentler than the heavier comparable models. Earpads have memory foam that warms quickly without sweating, and the headband padding sits behind glasses temples without any pinch, even after four hours of back-to-back calls."}
                    </p>
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"I have worn them through full pitch days and forgotten they were on. The microphone holds up on noisy commutes too, even if the wind cap is mild compared to the wired headset I retired. The case clasp finally feels like it was engineered, not assumed."}
                    </p>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem role="group" aria-roledescription="slide">
                <article className="flex flex-col">
                  <svg className="h-7 md:h-9 md:w-12 shrink-0 text-foreground/30 w-10" aria-hidden="true" viewBox="0 0 32 22" fill="currentColor">
                    <path d="M0 22V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v10H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v10H20z"></path>
                  </svg>
                  <div className="flex flex-col gap-4 md:gap-5 md:mt-6 mt-5 text-foreground text-pretty">
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Halden support sent fresh pads after a year of daily wear, no fuss, no questions asked. The fact that the cups pop off without tools is the kind of detail that earns a second purchase from me later, and it makes warranty conversations a non-event."}
                    </p>
                    <p className="leading-relaxed md:leading-[1.65] md:text-[17px] text-base text-foreground/85">
                      {"Sound stayed consistent after the swap, which tells me the foam is not doing acoustic work the engineers should have built into the cup itself. That is the kind of repairability I want from a premium pair, and it is genuinely rare at this price point."}
                    </p>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
            </div>
          </CarouselContent>
          </Carousel>
        </Carousel>
        <div className="border-border/60 border-t flex flex-wrap gap-x-8 gap-y-6 items-center justify-between md:mt-10 md:pt-8 mt-8 pt-6">
          <div className="flex flex-wrap gap-x-4 gap-y-3 items-center">
            <Avatar size="lg">
              <AvatarImage alt="Jonas Brandt" src="https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
            </Avatar>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                <a className="font-semibold hover:text-primary hover:underline text-foreground text-sm transition-colors underline-offset-4" href="#" aria-label="View reviews by Jonas Brandt">
                  {"Jonas Brandt"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                  {"Verified Buyer"}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                <Rating>
                  <div className="flex items-center">
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Rating>
                <span className="font-medium tabular-nums text-foreground">
                  {"5.0"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"Onyx, LDAC"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  {"3 weeks ago"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <span className="font-medium hidden sm:inline text-muted-foreground text-xs tracking-[0.18em] uppercase">
              {"More From Owners"}
            </span>
            <ul className="-space-x-2 flex items-center" role="list">
              <li>
                <button className="block duration-300 focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-ring hover:opacity-100 opacity-60 overflow-hidden relative ring-2 ring-background rounded-full size-9 transition-all" type="button" aria-label="Read review 1 of 5 by Mateo Halberg">
                  <img className="object-cover size-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80" />
                </button>
              </li>
              <li>
                <button className="block duration-300 focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-ring hover:opacity-100 opacity-60 overflow-hidden relative ring-2 ring-background rounded-full size-9 transition-all" type="button" aria-label="Read review 2 of 5 by Yuki Tanaka">
                  <img className="object-cover size-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80" />
                </button>
              </li>
              <li>
                <button className="block duration-300 focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-ring hover:opacity-100 opacity-60 overflow-hidden relative ring-2 ring-background rounded-full size-9 transition-all" type="button" aria-label="Read review 3 of 5 by Priya Iyer">
                  <img className="object-cover size-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80" />
                </button>
              </li>
              <li className="z-10">
                <button className="block duration-300 focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-ring opacity-100 overflow-hidden relative ring-2 ring-foreground rounded-full scale-110 size-9 transition-all" type="button" aria-label="Read review 4 of 5 by Jonas Brandt" aria-current="true">
                  <img className="object-cover size-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80" />
                </button>
              </li>
              <li>
                <button className="block duration-300 focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-ring hover:opacity-100 opacity-60 overflow-hidden relative ring-2 ring-background rounded-full size-9 transition-all" type="button" aria-label="Read review 5 of 5 by Camille Avery">
                  <img className="object-cover size-full" alt="" aria-hidden="true" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
