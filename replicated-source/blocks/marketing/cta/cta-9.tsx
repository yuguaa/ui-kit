import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background w-full" aria-labelledby="cta-9-title">
        <div className="@container bg-black dark isolate max-w-[90rem] mx-auto overflow-hidden relative rounded-[var(--radius-xl)] w-full">
          <div className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.13)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="@3xl:bottom-auto @3xl:right-[24.44cqw] @3xl:size-[8.33cqw] @3xl:top-[1.39cqw] absolute bg-orange-400 bottom-[32.4cqw] right-[54.5cqw] rounded-full size-[11cqw]"></div>
            <div className="-scale-x-100 @3xl:bottom-auto @3xl:right-[-25cqw] @3xl:size-[62.5cqw] @3xl:top-[1.25cqw] absolute bottom-[-60cqw] mix-blend-screen right-[-30cqw] size-[105cqw]">
              <div className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] absolute inset-0">
                <img className="block brightness-90 contrast-150 max-w-none size-full" sizes="(min-width: 1440px) 900px, (min-width: 768px) 62.5vw, 105vw" width="1024" height="1024" loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=512&q=80 512w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=768&q=80 768w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80" />
                <canvas className="absolute duration-300 left-[11.06%] opacity-0 pointer-events-none size-[75.68%] top-[12.16%] transition-opacity" aria-hidden="true" width="605" height="605" style={{opacity: "1"}}></canvas>
              </div>
              <img className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] absolute block brightness-90 contrast-150 inset-0 max-w-none size-full" sizes="(min-width: 1440px) 900px, (min-width: 768px) 62.5vw, 105vw" width="1024" height="1024" loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=512&q=80 512w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=768&q=80 768w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80" />
            </div>
          </div>
          <div className="@3xl:py-12 px-[max(1rem,5.56cqw)] py-8 relative">
            <Card className="backdrop-blur-sm bg-[oklch(0.145_0_0)]/20 inset-ring-4 inset-ring-white/5 items-start max-w-7xl mx-auto p-0 relative ring-0 w-full" size="default">
              <div className="-left-[164px] -top-[174px] absolute bg-white/12 blur-[150px] pointer-events-none rounded-full size-[400px]" aria-hidden="true"></div>
              <div className="[border-radius:inherit] absolute border-r-white/31 border-white/22 border-x inset-0 pointer-events-none" aria-hidden="true"></div>
              <div className="@3xl:p-12 @max-3xl:pb-[40cqw] @max-sm:min-w-0 flex flex-col gap-6 items-start justify-center max-w-full min-w-72 p-6 relative w-[624px]">
                <h2 className="@xl:text-4xl @xl:text-balance font-semibold leading-10 text-3xl" id="cta-9-title" style={{color: "oklch(0.928 0.006 264.5)"}}>
                  Build Modern Apps
                  <span className="font-bold">
                    Faster
                  </span>
                  <span className="@xl:block">
                    With NeUI Blocks
                  </span>
                </h2>
                <p className="leading-6 text-base text-muted-foreground">
                  Install production-ready components and templates from the NeUI registry, then customize them for your product.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                  <Button href="#" role="button" tabIndex="0">
                    Get Started
                  </Button>
                  <Button href="#" role="button" tabIndex="0">
                    Read Docs
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
