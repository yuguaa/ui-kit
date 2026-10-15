import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:py-10 min-h-svh px-4 py-8 sm:px-6 w-full">
      <div className="max-w-6xl w-full">
        <section className="flex flex-col gap-5">
          <header className="flex flex-col gap-2">
            <span className="font-medium text-muted-foreground text-sm">
              {"Design Journal"}
            </span>
            <h1 className="font-semibold max-w-3xl sm:text-4xl text-3xl text-balance text-foreground tracking-tight">
              {"News & Insights"}
            </h1>
            <p className="leading-7 max-w-2xl text-base text-muted-foreground">
              {"Original notes on UX, launch systems, and no-code strategy for durable web products."}
            </p>
          </header>
          <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
            <Frame>
              <FramePanel className="aspect-[16/9] group/media grow-0 p-0">
                <img className="absolute duration-700 ease-out grayscale inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Hand sketching a user flow for a product interface" width="900" height="620" decoding="async" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&h=620&q=82" />
                <div className="absolute bg-[linear-gradient(180deg,transparent_58%,oklch(16%_0.016_80_/_48%))] inset-0 pointer-events-none" aria-hidden="true"></div>
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Read Prototype to Production"></a>
              </FramePanel>
              <FramePanel className="flex flex-1 flex-col gap-3">
                <div className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                  <a className="focus-visible:outline-none focus-visible:underline font-medium hover:underline min-w-0 text-primary transition-colors truncate underline-offset-2" href="#">
                    {"Product Design"}
                  </a>
                  <span className="shrink-0 tabular-nums">
                    {"May 21, 2026"}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-semibold leading-snug line-clamp-2 text-foreground text-lg">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"Prototype to Production"}
                    </a>
                  </h2>
                  <p className="leading-5 line-clamp-2 text-muted-foreground text-sm">
                    {"Hierarchy, states, copy, and handoff details that make UI ship."}
                  </p>
                </div>
              </FramePanel>
              <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      {"Mira Stone"}
                    </span>
                    <span className="text-muted-foreground text-xs truncate">
                      {"Product Lead"}
                    </span>
                  </div>
                </div>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read Prototype to Production">
                  {"Read"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </footer>
            </Frame>
            <Frame>
              <FramePanel className="aspect-[16/9] group/media grow-0 p-0">
                <img className="absolute duration-700 ease-out grayscale inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Color palette sheets and tablet sketches for a design system" width="900" height="620" decoding="async" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&h=620&q=82" />
                <div className="absolute bg-[linear-gradient(180deg,transparent_58%,oklch(16%_0.016_80_/_48%))] inset-0 pointer-events-none" aria-hidden="true"></div>
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Read Token Rhythm"></a>
              </FramePanel>
              <FramePanel className="flex flex-1 flex-col gap-3">
                <div className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                  <a className="focus-visible:outline-none focus-visible:underline font-medium hover:underline min-w-0 text-primary transition-colors truncate underline-offset-2" href="#">
                    {"Design Systems"}
                  </a>
                  <span className="shrink-0 tabular-nums">
                    {"May 14, 2026"}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-semibold leading-snug line-clamp-2 text-foreground text-lg">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"Token Rhythm"}
                    </a>
                  </h2>
                  <p className="leading-5 line-clamp-2 text-muted-foreground text-sm">
                    {"Spacing, color, and type work best as relationships."}
                  </p>
                </div>
              </FramePanel>
              <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      {"Nora Vale"}
                    </span>
                    <span className="text-muted-foreground text-xs truncate">
                      {"Design Systems"}
                    </span>
                  </div>
                </div>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read Token Rhythm">
                  {"Read"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </footer>
            </Frame>
            <Frame>
              <FramePanel className="aspect-[16/9] group/media grow-0 p-0">
                <img className="absolute duration-700 ease-out grayscale inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Designer reviewing interface components on a desktop screen" width="900" height="620" decoding="async" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&h=620&q=82" />
                <div className="absolute bg-[linear-gradient(180deg,transparent_58%,oklch(16%_0.016_80_/_48%))] inset-0 pointer-events-none" aria-hidden="true"></div>
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-10" href="#" aria-label="Read Critique Before Shipping"></a>
              </FramePanel>
              <FramePanel className="flex flex-1 flex-col gap-3">
                <div className="flex gap-2 items-center min-w-0 text-muted-foreground text-xs">
                  <a className="focus-visible:outline-none focus-visible:underline font-medium hover:underline min-w-0 text-primary transition-colors truncate underline-offset-2" href="#">
                    {"UX Review"}
                  </a>
                  <span className="shrink-0 tabular-nums">
                    {"May 7, 2026"}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-semibold leading-snug line-clamp-2 text-foreground text-lg">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"Critique Before Shipping"}
                    </a>
                  </h2>
                  <p className="leading-5 line-clamp-2 text-muted-foreground text-sm">
                    {"A compact review loop for hierarchy, copy, states, and mobile fit."}
                  </p>
                </div>
              </FramePanel>
              <footer className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                <div className="flex gap-2.5 items-center min-w-0">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-foreground text-sm truncate">
                      {"Leo Grant"}
                    </span>
                    <span className="text-muted-foreground text-xs truncate">
                      {"Interface Engineer"}
                    </span>
                  </div>
                </div>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read Critique Before Shipping">
                  {"Read"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </footer>
            </Frame>
          </div>
        </section>
      </div>
    </div>
  )
}
