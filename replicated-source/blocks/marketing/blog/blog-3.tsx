import { AspectRatio } from "@/registry/bases/base/ui/aspect-ratio"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/bases/base/ui/carousel"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center lg:py-12 md:py-10 min-h-svh px-6 py-8 w-full">
      <div className="max-w-7xl w-full">
        <Carousel className="flex flex-col gap-5 md:gap-6" role="region" aria-roledescription="carousel" aria-label="Featured blog articles">
          <header className="gap-5 grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="flex flex-col gap-2.5 max-w-3xl">
              <span className="font-semibold text-foreground text-xs tracking-[0.14em] uppercase">
                {"Blog"}
              </span>
              <h1 className="font-semibold leading-tight lg:text-[2.35rem] max-w-[32rem] sm:leading-tight sm:text-4xl text-3xl text-foreground tracking-tight whitespace-nowrap">
                {"Notes & Insights"}
              </h1>
            </div>
            <div className="flex gap-2 items-center lg:pb-1">
              <Carousel>
              <CarouselPrevious className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-5 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center left-auto outline-none rounded-full select-none shrink-0 size-10 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" disabled="" tabIndex={0} disabled aria-label="Previous articles" extracted="1">
                <svg className="cn-rtl-flip lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Previous slide"}
                </span>
              </CarouselPrevious>
              </Carousel>
              <Carousel>
              <CarouselNext className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-5 cn-button cn-button-size-icon-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none right-auto rounded-full select-none shrink-0 size-10 static top-auto transition-all translate-y-0 whitespace-nowrap" type="button" tabIndex={0} aria-label="Next articles">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">
                  {"Next slide"}
                </span>
              </CarouselNext>
              </Carousel>
            </div>
          </header>
          <Progress className="[&_[data-slot=progress-indicator]]:bg-foreground [&_[data-slot=progress-track]]:h-px bg-border h-px" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-valuetext="50%" role="progressbar" aria-label="Showing articles 1 to 3 of 6" aria-labelledby="base-ui-_r_0_">
            <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_0_" role="presentation">
              {"Showing articles 1 to 3 of 6"}
            </ProgressLabel>
            <ProgressTrack progressing="">
              <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "50%"}}></ProgressIndicator>
            </ProgressTrack>
            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
              {"x"}
            </span>
          </Progress>
          <Carousel>
          <CarouselContent>
            <div className="-ml-5 flex" style={{transform: "translate3d(0px, 0px, 0px)"}}>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read Interfaces That Earn Trust">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Modern product studio with large displays and shared desks" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View Interface Design articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"Interface Design"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"6 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Interfaces That Earn Trust"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read Launch Plans Without Drift">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Team collaborating around laptops in a bright meeting room" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View Product Strategy articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"Product Strategy"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"5 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Launch Plans Without Drift"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read No-Code Systems That Scale">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Laptop on a desk showing a clean digital workspace" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View No-Code Systems articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"No-Code Systems"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"8 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"No-Code Systems That Scale"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read Sharper Product Storytelling">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Team reviewing product and brand notes on a glass wall" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View Brand Systems articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"Brand Systems"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"7 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Sharper Product Storytelling"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read Motion That Guides the Eye">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Designer reviewing a colorful interface on a tablet" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View Interaction Design articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"Interaction Design"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"4 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Motion That Guides the Eye"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
              <Carousel>
              <CarouselItem className="lg:basis-1/3 pl-5 sm:basis-1/2" role="group" aria-roledescription="slide">
                <article className="flex flex-col gap-3.5 group min-w-0">
                  <Card className="overflow-hidden p-0 shadow-none" size="default">
                    <a className="block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring outline-none" href="#" aria-label="Read Web Builds With Staying Power">
                      <AspectRatio className="bg-muted overflow-hidden" style={{"--ratio": "1.7777777777777777"}}>
                        <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="Developer workspace with code and product tools on screen" width={960} height={640} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=960&h=640&q=82" />
                      </AspectRatio>
                    </a>
                  </Card>
                  <div className="flex flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <Badge className="focus-visible:bg-transparent font-semibold gap-1.5 hover:bg-transparent hover:text-primary px-0 text-primary" href="#" aria-label="View Web Engineering articles" variant="ghost">
                        <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                        {"Web Engineering"}
                      </Badge>
                      <span className="text-muted-foreground" aria-hidden="true">
                        {"/"}
                      </span>
                      <span className="font-medium shrink-0 text-muted-foreground text-xs">
                        {"6 min read"}
                      </span>
                    </div>
                    <h2 className="font-semibold leading-snug md:text-xl text-balance text-foreground text-lg">
                      <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                        {"Web Builds With Staying Power"}
                      </a>
                    </h2>
                  </div>
                </article>
              </CarouselItem>
              </Carousel>
            </div>
          </CarouselContent>
          </Carousel>
        </Carousel>
      </div>
    </div>
  )
}
