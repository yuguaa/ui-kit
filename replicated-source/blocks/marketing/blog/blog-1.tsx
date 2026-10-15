import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="bg-background flex justify-center md:py-16 min-h-svh px-6 py-12 w-full">
      <div className="max-w-6xl w-full">
        <section className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-muted-foreground text-xs">
                {"Blog"}
              </span>
              <h1 className="font-semibold sm:text-3xl text-2xl text-balance text-foreground tracking-tight">
                {"News, Insights, Field Notes"}
              </h1>
            </div>
            <p className="max-w-2xl text-muted-foreground text-sm">
              {"Product updates, engineering write-ups, and design notes from the Cadence team."}
            </p>
          </header>
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
            <Card className="h-full overflow-hidden p-0" size="default">
              <a className="aspect-[16/10] bg-muted block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring overflow-hidden relative w-full" href="#" aria-label="Read What's new in Cadence 3.2">
                <img className="absolute inset-0 object-cover size-full" alt="Abstract blue fluid render" width={640} height={400} decoding="async" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=640&h=440&q=80" />
              </a>
              <CardContent className="flex flex-1 flex-col gap-2 pb-4 pt-2 px-4">
                <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    {"May 28, 2026"}
                  </span>
                  <span aria-hidden="true">
                    {"·"}
                  </span>
                  <span>
                    {"5 min read"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold leading-snug line-clamp-1 text-base text-foreground">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"What's new in Cadence 3.2"}
                    </a>
                  </h2>
                  <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                    {"A rebuilt board engine and saved views that remember how you work."}
                  </p>
                </div>
                <div className="border-border/60 border-t flex gap-3 items-center justify-between mt-auto pt-3">
                  <div className="flex gap-2 items-center min-w-0">
                    <Avatar className="size-7" size="default">
                      <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-col leading-tight min-w-0">
                      <span className="font-medium text-[0.8125rem] text-foreground truncate">
                        {"Mira Stone"}
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        {"Product Lead"}
                      </span>
                    </div>
                  </div>
                  <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read What's new in Cadence 3.2">
                    {"Read"}
                    <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full overflow-hidden p-0" size="default">
              <a className="aspect-[16/10] bg-muted block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring overflow-hidden relative w-full" href="#" aria-label="Read Cutting cold start latency">
                <img className="absolute inset-0 object-cover size-full" alt="Vibrant abstract gradient render" width={640} height={400} decoding="async" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=640&h=440&q=80" />
              </a>
              <CardContent className="flex flex-1 flex-col gap-2 pb-4 pt-2 px-4">
                <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    {"May 21, 2026"}
                  </span>
                  <span aria-hidden="true">
                    {"·"}
                  </span>
                  <span>
                    {"8 min read"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold leading-snug line-clamp-1 text-base text-foreground">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"Cutting cold start latency"}
                    </a>
                  </h2>
                  <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                    {"How we traced the cost and brought it down without a rewrite."}
                  </p>
                </div>
                <div className="border-border/60 border-t flex gap-3 items-center justify-between mt-auto pt-3">
                  <div className="flex gap-2 items-center min-w-0">
                    <Avatar className="size-7" size="default">
                      <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-col leading-tight min-w-0">
                      <span className="font-medium text-[0.8125rem] text-foreground truncate">
                        {"Leo Grant"}
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        {"Platform Engineer"}
                      </span>
                    </div>
                  </div>
                  <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read Cutting cold start latency">
                    {"Read"}
                    <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full overflow-hidden p-0" size="default">
              <a className="aspect-[16/10] bg-muted block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring overflow-hidden relative w-full" href="#" aria-label="Read Rethinking our color system">
                <img className="absolute inset-0 object-cover size-full" alt="Abstract cyan and orange fluid render" width={640} height={400} decoding="async" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=640&h=440&q=80" />
              </a>
              <CardContent className="flex flex-1 flex-col gap-2 pb-4 pt-2 px-4">
                <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    {"May 14, 2026"}
                  </span>
                  <span aria-hidden="true">
                    {"·"}
                  </span>
                  <span>
                    {"6 min read"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold leading-snug line-clamp-1 text-base text-foreground">
                    <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline hover:text-primary hover:underline transition-colors underline-offset-2" href="#">
                      {"Rethinking our color system"}
                    </a>
                  </h2>
                  <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                    {"Why we rebuilt the palette around contrast ratios, not hex values."}
                  </p>
                </div>
                <div className="border-border/60 border-t flex gap-3 items-center justify-between mt-auto pt-3">
                  <div className="flex gap-2 items-center min-w-0">
                    <Avatar className="size-7" size="default">
                      <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-col leading-tight min-w-0">
                      <span className="font-medium text-[0.8125rem] text-foreground truncate">
                        {"Nora Vale"}
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        {"Design Systems"}
                      </span>
                    </div>
                  </div>
                  <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/read hover:underline inline-flex items-center shrink-0 text-primary text-sm transition-colors underline-offset-2" href="#" aria-label="Read Rethinking our color system">
                    {"Read"}
                    <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/read:-translate-y-0.5 motion-safe:group-hover/read:translate-x-0.5 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
