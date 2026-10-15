import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh w-full">
      <section className="bg-background w-full" aria-labelledby="faq-3-title">
        <div className="lg:py-24 max-w-5xl mx-auto px-6 py-16 sm:py-20 w-full">
          <div className="flex flex-col gap-4 max-w-2xl mb-10 sm:mb-12">
            <p className="font-semibold text-primary text-xs tracking-wider uppercase">
              FAQ
            </p>
            <h2 className="font-semibold leading-tight sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="faq-3-title">
              Questions,
              <span className="text-primary">
                Answered
              </span>
            </h2>
            <p className="leading-7 text-base text-muted-foreground text-pretty">
              Straight answers on source ownership, the shadcn stack, licensing, and getting blocks into your product.
            </p>
          </div>
          <div className="border-border/60 border-t grid md:grid-cols-2">
            <div className="border-b border-border/60 flex flex-col gap-2 md:border-r md:pr-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                Can We Edit The Block Source?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                Every block ships as source your team owns. Swap demo data, adjust the layout, and wire it to your product model.
              </p>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 md:pl-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                Will It Fit Our shadcn Stack?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                Blocks compose from shadcn, Base UI, and NeUI primitives, with portable React boundaries and no Next runtime imports in the source.
              </p>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 md:border-r md:pr-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                Are Layouts Already Responsive?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                Every finished block is reviewed across core breakpoints, with mobile stacking, text wrapping, and overflow handled before release.
              </p>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 md:pl-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                What Comes With A Pro License?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                The full block catalog, source files, implementation notes, and ongoing updates your team can review before adopting.
              </p>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 md:border-r md:pr-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                Can We Use Our Own Theme?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                Theme-aware primitives and token-friendly classes keep brand color, radius, density, and dark mode under your control.
              </p>
            </div>
            <div className="border-b border-border/60 flex flex-col gap-2 md:pl-8 md:py-7 py-6">
              <h3 className="font-semibold text-base text-foreground">
                Where Do We Get Implementation Help?
              </h3>
              <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                Start with the docs and block notes. Support can point you to the right source files when integration gets tricky.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3 items-center">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col min-w-0">
                <p className="font-medium text-foreground text-sm">
                  Still have a question?
                </p>
                <p className="text-muted-foreground text-sm">
                  Reach the team or dig into the docs.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Button href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m4.93 4.93 4.24 4.24"></path>
                  <path d="m14.83 9.17 4.24-4.24"></path>
                  <path d="m14.83 14.83 4.24 4.24"></path>
                  <path d="m9.17 14.83-4.24 4.24"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                Support Desk
              </Button>
              <Button href="#" role="button" tabIndex="0">
                Read Docs
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
