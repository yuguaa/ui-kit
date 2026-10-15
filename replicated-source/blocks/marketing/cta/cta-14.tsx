import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background w-full" aria-labelledby="cta-14-title">
        <div className="flex justify-center max-w-[90rem] mx-auto px-[clamp(1rem,5.56cqw,5rem)] py-12 w-full">
          <Card className="@container bg-black dark gap-0 max-w-7xl overflow-clip p-0 relative ring-0 rounded-[calc(var(--radius)+6px)] shadow-2xl w-full" size="default">
            <style>{`
@keyframes cta14-bloom {
  0%, 25% { opacity: 1; }
  50% { opacity: 0.45; }
  75%, 100% { opacity: 1; }
}

.cta14-bloom {
  will-change: opacity;
  animation: cta14-bloom 12s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cta14-bloom {
    animation: none;
    will-change: auto;
  }
}
`}</style>
            <div className="-left-[100px] -top-[100px] absolute bg-[oklch(0.701_0.170_243.4)]/8 blur-[100px] cta14-bloom pointer-events-none rounded-full size-[400px]" aria-hidden="true"></div>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'3'%20height%3D'3'%20shape-rendering%3D'crispEdges'%3E%3Crect%20x%3D'1'%20y%3D'1'%20width%3D'1'%20height%3D'1'%20fill%3D'white'%20fill-opacity%3D'0.1'%2F%3E%3C%2Fsvg%3E\")", backgroundSize: "3px 3px"}}></div>
            <div className="@min-[560px]:h-[32cqw] @min-[860px]:[-webkit-mask-image:none] @min-[860px]:[mask-image:none] @min-[860px]:absolute @min-[860px]:h-[61.02cqw] @min-[860px]:right-[-14.14cqw] @min-[860px]:top-[-3.28cqw] @min-[860px]:w-[61.02cqw] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_25%)] [mask-image:linear-gradient(to_bottom,transparent,#000_25%)] h-[40cqw] mix-blend-screen order-last overflow-clip pointer-events-none relative w-full" aria-hidden="true">
              <div className="-scale-x-100 @min-[860px]:right-0 @min-[860px]:size-full @min-[860px]:top-0 absolute opacity-80 right-[-34cqw] size-[106cqw] top-[-13cqw]">
                <div className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] absolute inset-0">
                  <img className="block brightness-90 contrast-150 max-w-none size-full" sizes="(min-width: 860px) 61cqw, 106cqw" width="1024" height="1024" loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2048&q=80 2048w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2560&q=80 2560w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80" />
                  <canvas className="absolute duration-300 left-[11.06%] opacity-0 pointer-events-none size-[75.68%] top-[12.16%] transition-opacity" aria-hidden="true" width="525" height="525" style={{opacity: "1"}}></canvas>
                </div>
                <img className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] absolute block brightness-90 contrast-150 inset-0 max-w-none size-full" sizes="(min-width: 860px) 61cqw, 106cqw" width="1024" height="1024" loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2048&q=80 2048w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2560&q=80 2560w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80" />
              </div>
            </div>
            <div className="@min-[560px]:p-10 @min-[860px]:p-[3.75cqw] @min-[860px]:w-[48.75cqw] flex flex-col gap-7 items-start justify-center min-w-72 p-6 relative w-full">
              <h2 className="@min-[860px]:text-4xl font-semibold text-3xl" id="cta-14-title">
                Stay Updated
              </h2>
              <p className="max-w-md text-muted-foreground text-sm">
                New blocks, registry changes and the occasional teardown, in one short email sent only when there is something worth shipping.
              </p>
              <div className="w-full" aria-live="polite">
                <form className="flex flex-wrap gap-2 items-center">
                  <InputGroup className="@min-[420px]:w-60" role="group">
                    <InputGroupAddon className="ml-px" role="group" data-align="inline-start">
                      <span aria-hidden="true">
                        @
                      </span>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" required autoComplete="email" placeholder="Email" aria-label="Email address" type="email" />
                  </InputGroup>
                  <Button className="leading-none" type="submit" tabIndex="0" extracted="1">
                    Join
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
