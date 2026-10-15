import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Card className="max-w-6xl overflow-hidden p-0 relative w-full" size="default">
        <div className="grid grid-cols-1 items-stretch md:grid-cols-[5fr_4fr]">
          <div className="flex flex-col gap-8 justify-center lg:p-14 md:p-12 p-8 relative sm:p-10">
            <div className="flex flex-col gap-4">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 outline-none px-1.5 py-0.5 relative self-start style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                Premium Blocks
              </Badge>
              <h2 className="font-semibold lg:text-4xl sm:text-3xl text-2xl text-balance text-foreground tracking-tight">
                NeUI Blocks. Ship 10x Faster.
              </h2>
              <p className="max-w-md text-base text-muted-foreground">
                Production-ready blocks with sane defaults and accessibility baked in. Skip the UI grind. Build what only your team can build.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 items-center">
                <Button href="#" role="button" tabIndex="0">
                  Browse Blocks
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  Read The Docs
                </Button>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-xs">
                <li className="flex gap-2 items-center">
                  Copy & paste ready
                </li>
                <li className="flex gap-2 items-center">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  Theme-aware tokens
                </li>
                <li className="flex gap-2 items-center">
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  TypeScript first
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden isolate lg:p-12 md:flex md:items-center md:justify-center md:p-10 overflow-hidden relative">
            <div className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] absolute bg-[radial-gradient(circle_at_1px_1px,_var(--color-border)_1px,_transparent_0)] bg-[size:18px_18px] inset-0 opacity-60 pointer-events-none" aria-hidden="true"></div>
            <Item className="aspect-[4/3] bg-muted/40 max-w-md overflow-hidden p-0 relative" variant="default" size="default">
              <img className="absolute inset-0 object-cover size-full" alt="Vibrant abstract gradient render with flowing light bands" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&h=900&q=82" />
            </Item>
          </div>
        </div>
      </Card>
    </div>
  )
}
