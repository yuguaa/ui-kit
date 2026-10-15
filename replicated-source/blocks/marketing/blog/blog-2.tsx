import {
  Card,
  CardContent,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:py-16 min-h-svh px-6 py-12 w-full">
      <div className="max-w-7xl w-full">
        <section className="flex flex-col gap-10">
          <header className="gap-6 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.72fr)] lg:items-end">
            <div className="flex flex-col gap-4 max-w-3xl">
              <span className="font-semibold text-foreground text-xs tracking-[0.12em] uppercase">
                {"Field Journal"}
              </span>
              <h1 className="font-semibold leading-none max-w-[14ch] sm:text-5xl text-4xl text-balance text-foreground tracking-tight">
                {"Insights & Field Notes."}
              </h1>
            </div>
            <p className="leading-7 max-w-xl md:text-lg text-base text-foreground">
              {"Original notes on UX, launch systems, and no-code strategy for durable web products."}
            </p>
          </header>
          <div className="gap-6 grid md:grid-cols-3 sm:grid-cols-2">
            <Card className="cursor-pointer group h-full isolate lg:min-h-[27rem] min-h-[20rem] overflow-hidden p-0 relative shadow-none sm:min-h-[23.5rem]" size="default">
              <a className="absolute block cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-30" href="#" aria-label="Read Interface Signals"></a>
              <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="" width={1200} height={1200} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&h=1200&q=82" />
              <div className="absolute bg-gradient-to-b from-black/10 inset-0 to-black/88 via-black/15" aria-hidden="true"></div>
              <div className="absolute bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.2),transparent_24%)] inset-0 opacity-80" aria-hidden="true"></div>
              <CardContent className="flex flex-col h-full justify-between lg:min-h-[27rem] min-h-[20rem] p-6 relative sm:min-h-[23.5rem] z-20">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/95 border border-transparent dark:bg-white/95 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hover:bg-white min-w-5 outline-none px-3 py-1 relative rounded-full shadow-black/10 shadow-sm text-foreground text-sm transition-shadow">
                  <span className="bg-foreground rounded-full size-2" aria-hidden="true"></span>
                  {"Experience Signals"}
                </Badge>
                <div className="flex flex-col gap-3 min-w-0">
                  <span className="font-medium text-white/72 text-xs tracking-[0.12em] uppercase">
                    {"Clarity Layer"}
                  </span>
                  <CardTitle className="font-semibold leading-tight sm:text-2xl text-white text-xl truncate">
                    {"Interface Signals"}
                  </CardTitle>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer group h-full isolate lg:min-h-[27rem] min-h-[20rem] overflow-hidden p-0 relative shadow-none sm:min-h-[23.5rem]" size="default">
              <a className="absolute block cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-30" href="#" aria-label="Read Shipping Rituals"></a>
              <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="" width={1200} height={1200} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=1200&q=82" />
              <div className="absolute bg-gradient-to-b from-black/10 inset-0 to-black/88 via-black/15" aria-hidden="true"></div>
              <div className="absolute bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.2),transparent_24%)] inset-0 opacity-80" aria-hidden="true"></div>
              <CardContent className="flex flex-col h-full justify-between lg:min-h-[27rem] min-h-[20rem] p-6 relative sm:min-h-[23.5rem] z-20">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/95 border border-transparent dark:bg-white/95 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hover:bg-white min-w-5 outline-none px-3 py-1 relative rounded-full shadow-black/10 shadow-sm text-foreground text-sm transition-shadow">
                  <span className="bg-foreground rounded-full size-2" aria-hidden="true"></span>
                  {"Launch Systems"}
                </Badge>
                <div className="flex flex-col gap-3 min-w-0">
                  <span className="font-medium text-white/72 text-xs tracking-[0.12em] uppercase">
                    {"Build Room"}
                  </span>
                  <CardTitle className="font-semibold leading-tight sm:text-2xl text-white text-xl truncate">
                    {"Shipping Rituals"}
                  </CardTitle>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer group h-full isolate lg:min-h-[27rem] min-h-[20rem] overflow-hidden p-0 relative shadow-none sm:min-h-[23.5rem]" size="default">
              <a className="absolute block cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none z-30" href="#" aria-label="Read No-Code Loops"></a>
              <img className="absolute duration-700 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover:scale-105 object-cover size-full transition-transform" alt="" width={1200} height={1200} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=1200&q=82" />
              <div className="absolute bg-gradient-to-b from-black/10 inset-0 to-black/88 via-black/15" aria-hidden="true"></div>
              <div className="absolute bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.2),transparent_24%)] inset-0 opacity-80" aria-hidden="true"></div>
              <CardContent className="flex flex-col h-full justify-between lg:min-h-[27rem] min-h-[20rem] p-6 relative sm:min-h-[23.5rem] z-20">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/95 border border-transparent dark:bg-white/95 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hover:bg-white min-w-5 outline-none px-3 py-1 relative rounded-full shadow-black/10 shadow-sm text-foreground text-sm transition-shadow">
                  <span className="bg-foreground rounded-full size-2" aria-hidden="true"></span>
                  {"Growth Loops"}
                </Badge>
                <div className="flex flex-col gap-3 min-w-0">
                  <span className="font-medium text-white/72 text-xs tracking-[0.12em] uppercase">
                    {"Scale Map"}
                  </span>
                  <CardTitle className="font-semibold leading-tight sm:text-2xl text-white text-xl truncate">
                    {"No-Code Loops"}
                  </CardTitle>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
