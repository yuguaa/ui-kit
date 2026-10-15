import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 w-full" aria-labelledby="cta-8-title">
        <Card className="@container border-0 gap-0 items-start max-w-7xl mx-auto overflow-clip p-0 relative shadow-2xl shadow-black/25 w-full" size="default" style={{background: "oklch(0.145 0 0)"}}>
          <style dangerouslySetInnerHTML={{ __html: "\n@keyframes cta8-bloom {\n  0%, 25% { opacity: 1; }\n  50% { opacity: 0.45; }\n  75%, 100% { opacity: 1; }\n}\n\n.cta8-bloom {\n  will-change: opacity;\n  animation: cta8-bloom 12s ease-in-out infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cta8-bloom {\n    animation: none;\n    will-change: auto;\n  }\n}\n" }} />
          <div className="-left-[100px] -top-[100px] absolute bg-[oklch(0.701_0.170_243.4)]/8 blur-[100px] cta8-bloom pointer-events-none rounded-full size-[400px]" aria-hidden="true"></div>
          <div className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.07)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></div>
          <div className="@max-3xl:pb-6 flex flex-col gap-6 items-start justify-center max-w-full min-w-72 p-12 relative w-[624px]">
            <h2 className="@xl:text-4xl font-semibold leading-10 text-3xl text-balance" id="cta-8-title" style={{color: "oklch(0.928 0.006 264.5)"}}>
              {"Build Modern Apps"}
              <span className="font-bold">
                {"Faster"}
              </span>
              <span className="@xl:block">
                {"With NeUI Blocks"}
              </span>
            </h2>
            <p className="leading-6 text-base" style={{color: "oklch(0.709 0 0)"}}>
              {"Install production-ready components and templates from the NeUI registry, then customize them for your product."}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              <Button className="bg-[oklch(0.922_0_0)] hover:bg-[oklch(0.870_0_0)] hover:text-[oklch(0.205_0_0)] shadow-2xs text-[oklch(0.205_0_0)]" href="#" role="button" tabIndex={0}>
                {"Get Started"}
              </Button>
              <Button className="bg-white/5 border-white/15 hover:bg-white/10 hover:text-[oklch(0.985_0_0)] shadow-xs text-[oklch(0.985_0_0)]" href="#" role="button" tabIndex={0}>
                {"Read Docs"}
              </Button>
            </div>
          </div>
          <div className="@3xl:absolute @3xl:h-[70cqw] @3xl:overflow-visible @3xl:right-[-30cqw] @3xl:top-[-2.3cqw] @3xl:w-[70cqw] @5xl:h-[70.3cqw] @5xl:right-[-19.5cqw] @5xl:w-[70.3cqw] @max-3xl:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_26%)] @max-3xl:[mask-image:linear-gradient(to_bottom,transparent_0%,#000_26%)] h-[40cqw] mix-blend-screen overflow-hidden pointer-events-none relative w-full" aria-hidden="true">
            <div className="-scale-x-100 @3xl:inset-0 @3xl:right-auto @3xl:top-auto @3xl:w-full absolute opacity-80 right-[-34cqw] top-[-13cqw] w-[106cqw]">
              <div className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,#000_0_93.5%,transparent_95.5%)] absolute inset-0">
                <img className="block brightness-90 contrast-150 max-w-none w-full" sizes="(min-width: 1344px) 900px, (min-width: 816px) 70vw, 106vw" width={1024} height={1024} loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2048&q=80 2048w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2560&q=80 2560w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80" />
                <canvas className="absolute duration-300 left-[11.06%] opacity-0 pointer-events-none size-[75.68%] top-[12.16%] transition-opacity" aria-hidden="true" width={647} height={647} style={{opacity: "1"}}></canvas>
              </div>
              <img className="[-webkit-mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] [mask-image:radial-gradient(ellipse_37.8%_37.8%_at_48.9%_50%,transparent_0_91%,#000_92.5%)] block brightness-90 contrast-150 max-w-none relative w-full" sizes="(min-width: 1344px) 900px, (min-width: 816px) 70vw, 106vw" width={1024} height={1024} loading="lazy" decoding="async" crossOrigin="anonymous" alt="" srcSet="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1024&q=80 1024w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80 1600w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2048&q=80 2048w, https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=2560&q=80 2560w" src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=1600&q=80" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
