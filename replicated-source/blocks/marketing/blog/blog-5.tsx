import { AspectRatio } from "@/registry/bases/base/ui/aspect-ratio"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background lg:py-16 md:py-14 min-h-svh px-6 py-10 w-full">
      <article className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
        <header className="flex flex-col gap-4 min-w-0 w-full">
          <Card className="min-w-0 overflow-hidden p-0 shadow-none w-full" size="default">
            <AspectRatio className="bg-muted min-h-[32rem] min-w-0 overflow-hidden sm:min-h-0 w-full" style={{"--ratio": "1.7777777777777777"}}>
              <img className="absolute inset-0 object-cover size-full" alt="Abstract blue fluid render" width="1200" height="675" decoding="async" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1200&h=675&q=82" />
              <div className="absolute bg-[linear-gradient(180deg,oklch(16%_0.018_260_/_8%)_0%,oklch(16%_0.018_260_/_34%)_42%,oklch(16%_0.018_260_/_88%)_100%)] inset-0" aria-hidden="true"></div>
              <CardContent className="absolute bottom-0 flex flex-col gap-4 inset-x-0 md:p-8 p-5 sm:gap-5 sm:p-7">
                <a className="focus-visible:outline-none focus-visible:text-[oklch(98%_0.006_260)] focus-visible:underline font-medium hover:text-[oklch(98%_0.006_260)] hover:underline text-[oklch(94%_0.012_260_/_82%)] text-sm transition-colors underline-offset-2 w-fit" href="#">
                  {"Blog"}
                </a>
                <div className="flex flex-wrap gap-2 items-center text-[oklch(94%_0.012_260_/_82%)] text-sm">
                  <Badge variant="secondary">
                    {"Product Update"}
                  </Badge>
                </div>
                <h1 className="font-semibold leading-tight md:text-5xl text-4xl text-[oklch(98%_0.006_260)] text-balance tracking-tight">
                  {"What's New in Cadence 3.2"}
                </h1>
              </CardContent>
            </AspectRatio>
          </Card>
          <Item className="max-w-full w-fit" variant="muted" size="default">
            <ItemMedia variant="image">
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </ItemMedia>
            <ItemContent className="gap-0.5">
              <ItemTitle className="font-medium text-foreground text-sm">
                {"Mira Stone"}
              </ItemTitle>
              <ItemDescription className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                <span>
                  {"Product Lead"}
                </span>
                <span className="bg-border h-3 shrink-0 w-px" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"May 30, 2026"}
                </span>
                <span className="bg-border h-3 shrink-0 w-px" aria-hidden="true"></span>
                <span>
                  {"6 min read"}
                </span>
              </ItemDescription>
            </ItemContent>
          </Item>
        </header>
        <div className="flex flex-col gap-7 max-w-none min-w-0 w-full">
          <section className="min-w-0 scroll-mt-8 w-full" id="board-engine">
            <div className="flex flex-col gap-3 min-w-0 w-full">
              <h2 className="font-semibold leading-snug text-2xl text-foreground tracking-tight">
                {"A Faster Board Engine"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 min-w-0 text-base text-muted-foreground text-pretty w-full">
                <p>
                  {"The new board engine keeps large product workspaces responsive when teams add more lanes, owners, filters, and linked tasks. Dragging a card now updates the immediate surface first, then reconciles the deeper workspace state in the background."}
                </p>
                <p>
                  {"That change removes the pause teams felt on heavier boards without hiding important status changes. Cards still show their owner, due date, and priority signals, but the board no longer makes every movement feel expensive."}
                </p>
              </div>
            </div>
          </section>
          <section className="min-w-0 scroll-mt-8 w-full" id="saved-views">
            <div className="flex flex-col gap-3 min-w-0 w-full">
              <h2 className="font-semibold leading-snug text-2xl text-foreground tracking-tight">
                {"Saved Views That Stay Useful"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 min-w-0 text-base text-muted-foreground text-pretty w-full">
                <p>
                  {"Saved views now remember grouping, visible fields, sort order, and filter combinations. A launch lead can keep a risk-first view, while an engineering lead can preserve a dependency view against the same board."}
                </p>
                <p>
                  {"Each view also stores a short description, so teammates know why it exists before they switch into it. The result is less setup at the start of a weekly review and fewer duplicate boards created for one-off meetings."}
                </p>
              </div>
            </div>
          </section>
          <section className="min-w-0 scroll-mt-8 w-full" id="release-quality">
            <div className="flex flex-col gap-3 min-w-0 w-full">
              <h2 className="font-semibold leading-snug text-2xl text-foreground tracking-tight">
                {"Release Quality Work"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 min-w-0 text-base text-muted-foreground text-pretty w-full">
                <p>
                  {"Cadence 3.2 also includes smaller fixes around keyboard focus, card density, and activity timestamps. These are not headline features, but they make the product feel steadier during daily planning."}
                </p>
                <p>
                  {"We focused on changes that compound over a week of real use: fewer waits, fewer resets, clearer views, and less time explaining where the important work lives."}
                </p>
              </div>
            </div>
          </section>
        </div>
        <footer className="flex flex-col gap-8 min-w-0 pt-2 w-full">
          <blockquote className="border-border border-y font-medium leading-8 md:leading-9 md:text-xl py-5 text-foreground text-lg text-pretty">
            {"The most credible interface is rarely the loudest one. It is the one that keeps answering the user's next question."}
          </blockquote>
          <div className="flex flex-wrap gap-2 items-center min-w-0">
            <span className="font-medium mr-1 text-muted-foreground text-xs tracking-wide uppercase">
              {"Topics"}
            </span>
            <Badge className="font-normal" variant="secondary">
              {"UX"}
            </Badge>
            <Badge className="font-normal" variant="secondary">
              {"Strategy"}
            </Badge>
            <Badge className="font-normal" variant="secondary">
              {"Web Systems"}
            </Badge>
          </div>
          <div className="border-border border-t flex gap-4 items-start pt-6">
            <Avatar className="size-11" size="default">
              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <div className="flex flex-col gap-1 min-w-0">
              <p className="font-semibold text-foreground text-sm">
                {"Written by Mira Stone"}
              </p>
              <p className="leading-6 max-w-[68ch] text-muted-foreground text-pretty text-sm">
                {"Mira writes about interface judgment, launch systems, and the small product details that make web experiences easier to trust."}
              </p>
            </div>
          </div>
          <section className="flex flex-col gap-4 min-w-0 w-full" aria-labelledby="more-from-blog-title">
            <h2 className="font-semibold leading-snug text-2xl text-foreground tracking-tight" id="more-from-blog-title">
              {"More From The Blog"}
            </h2>
            <div className="border-border border-y divide-border divide-y flex flex-col min-w-0 w-full">
              <a className="flex gap-5 group items-center justify-between min-w-0 outline-none py-4" href="#" aria-label="Read Launch Plans Without Drift">
                <span className="flex flex-col gap-1 min-w-0">
                  <span className="flex flex-wrap font-medium gap-2 items-center min-w-0 text-muted-foreground text-xs">
                    <span>
                      {"Product Strategy"}
                    </span>
                    <span className="bg-border h-3 shrink-0 w-px" aria-hidden="true"></span>
                    <span>
                      {"5 min read"}
                    </span>
                  </span>
                  <span className="font-medium group-focus-visible:text-primary group-focus-visible:underline group-hover:text-primary group-hover:underline leading-snug line-clamp-2 text-base text-foreground underline-offset-4">
                    {"Launch Plans Without Drift"}
                  </span>
                  <span className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                    {"A practical note on turning rough launch intent into a stable execution rhythm."}
                  </span>
                </span>
                <span className="flex group-focus-visible:text-primary group-hover:text-primary items-center self-center shrink-0 text-muted-foreground">
                  <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover:translate-x-1 size-5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
              <a className="flex gap-5 group items-center justify-between min-w-0 outline-none py-4" href="#" aria-label="Read No-Code Systems That Scale">
                <span className="flex flex-col gap-1 min-w-0">
                  <span className="flex flex-wrap font-medium gap-2 items-center min-w-0 text-muted-foreground text-xs">
                    <span>
                      {"No-Code Systems"}
                    </span>
                    <span className="bg-border h-3 shrink-0 w-px" aria-hidden="true"></span>
                    <span>
                      {"8 min read"}
                    </span>
                  </span>
                  <span className="font-medium group-focus-visible:text-primary group-focus-visible:underline group-hover:text-primary group-hover:underline leading-snug line-clamp-2 text-base text-foreground underline-offset-4">
                    {"No-Code Systems That Scale"}
                  </span>
                  <span className="leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                    {"How teams keep visual builders maintainable as product surfaces grow."}
                  </span>
                </span>
                <span className="flex group-focus-visible:text-primary group-hover:text-primary items-center self-center shrink-0 text-muted-foreground">
                  <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover:translate-x-1 size-5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </div>
          </section>
        </footer>
      </article>
    </div>
  )
}
