import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="cta-12-title">
        <div className="flex justify-center max-w-[90rem] mx-auto px-[clamp(1rem,5.56cqw,5rem)] py-12 w-full">
          <Card className="@container bg-indigo-950 dark isolate max-w-7xl py-0 relative ring-0 shadow-2xl text-base w-full" size="default">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'3'%20height%3D'3'%20shape-rendering%3D'crispEdges'%3E%3Crect%20x%3D'1'%20width%3D'1'%20height%3D'1'%20fill%3D'white'%20fill-opacity%3D'0.07'%2F%3E%3C%2Fsvg%3E\")", backgroundSize: "3px 3px"}}></div>
            <div className="-left-25 -top-25 absolute bg-sky-500/8 blur-[100px] pointer-events-none rounded-full size-100" aria-hidden="true"></div>
            <div className="@min-[640px]:bottom-[-42.42cqw] @min-[640px]:right-[-16.33cqw] @min-[640px]:w-[70.31cqw] absolute aspect-[95/97] bottom-[-44.49cqw] overflow-hidden pointer-events-none right-[-16.59cqw] w-[88.58cqw]" aria-hidden="true" style={{maskImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20950%20970'%20preserveAspectRatio%3D'none'%3E%3Cfilter%20id%3D'f'%20x%3D'-2%25'%20y%3D'-2%25'%20width%3D'104%25'%20height%3D'104%25'%3E%3CfeGaussianBlur%20stdDeviation%3D'0.9'%2F%3E%3C%2Ffilter%3E%3Ccircle%20cx%3D'472.5'%20cy%3D'448.5'%20r%3D'395.8'%20fill%3D'white'%20filter%3D'url(%23f)'%2F%3E%3C%2Fsvg%3E\")", maskSize: "100% 100%", maskRepeat: "no-repeat"}}>
              <img className="-scale-x-100 [transform:scale(1.06)] absolute h-[136.73%] left-[-54.84%] max-w-none top-[-21.67%] w-[209.41%]" crossOrigin="anonymous" alt="" width="2000" height="1333" decoding="async" fetchpriority="high" srcSet="https://images.unsplash.com/photo-1770723963970-ace02c7db50e?w=2000&q=80&auto=format&fit=crop 1x, https://images.unsplash.com/photo-1770723963970-ace02c7db50e?w=3600&q=80&auto=format&fit=crop 2x" src="https://images.unsplash.com/photo-1770723963970-ace02c7db50e?w=2000&q=80&auto=format&fit=crop" />
              <canvas className="-scale-x-100 [transform:scale(1.06)] absolute duration-300 h-[82.72%] left-[7.75%] opacity-0 pointer-events-none top-[4.87%] transition-opacity w-[84.48%]" aria-hidden="true" width="676" height="676" style={{opacity: "1"}}></canvas>
            </div>
            <div className="@min-[640px]:max-w-none @min-[640px]:p-[3.75cqw] @min-[640px]:w-[48.75cqw] flex flex-col gap-6 items-start max-w-md pb-[48cqw] pt-8 px-6 relative">
              <h2 className="@min-[1120px]:text-4xl font-semibold text-3xl text-balance text-white" id="cta-12-title">
                Build Modern Apps
                <span className="font-bold">
                  Faster
                </span>
                <span className="block">
                  With NeUI Blocks
                </span>
              </h2>
              <p className="text-white/60">
                Install production-ready components and templates from the NeUI registry, then customize them for your product.
              </p>
              <div className="[--secondary-foreground:var(--color-white)] [--secondary:#ffffff1a] flex flex-wrap gap-x-4 gap-y-2 items-center">
                <Button href="#" role="button" tabIndex="0">
                  Start Building
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  Read Docs
                </Button>
              </div>
              <Separator className="[--border:#ffffff1a] max-w-md" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
                <style>{`
@keyframes cta12-proof-ring {
  0%, 100% { transform: scale(0.9); opacity: 0; }
  12% { opacity: 0.5; }
  70%, 99% { transform: scale(2.2); opacity: 0; }
}

.cta12-proof-ring {
  animation-name: cta12-proof-ring;
  animation-duration: 5.4s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-delay: var(--cta12-ring-delay, 0s);
}

@media (prefers-reduced-motion: reduce) {
  .cta12-proof-ring {
    animation: none;
  }
}
`}</style>
                <div className="flex gap-1.5 items-center">
                  <span className="flex items-center justify-center relative shrink-0 size-4">
                    <span className="absolute border border-indigo-500 cta12-proof-ring inset-0 opacity-0 rounded-full" aria-hidden="true" style={{"--cta12-ring-delay": "0s"}}></span>
                    <svg className="lucide lucide-circle-check relative shrink-0 size-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </span>
                  <span className="text-sm">
                    Live integrations
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="flex items-center justify-center relative shrink-0 size-4">
                    <span className="absolute border border-indigo-500 cta12-proof-ring inset-0 opacity-0 rounded-full" aria-hidden="true" style={{"--cta12-ring-delay": "1.8s"}}></span>
                    <svg className="lucide lucide-circle-check relative shrink-0 size-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </span>
                  <span className="text-sm">
                    Agent ready
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="flex items-center justify-center relative shrink-0 size-4">
                    <span className="absolute border border-indigo-500 cta12-proof-ring inset-0 opacity-0 rounded-full" aria-hidden="true" style={{"--cta12-ring-delay": "3.6s"}}></span>
                    <svg className="lucide lucide-circle-check relative shrink-0 size-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </span>
                  <span className="text-sm">
                    Open standards
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
