import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="lg:py-16 md:py-14 min-h-svh px-6 py-10 w-full">
      <article className="flex flex-col gap-5 max-w-3xl md:gap-6 mx-auto w-full">
        <header className="flex flex-col gap-4 min-w-0 w-full">
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList className="gap-1.5 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  {"Blog"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Product Update"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="font-semibold leading-tight md:text-5xl text-4xl text-balance text-foreground tracking-tight">
            {"What's New in Cadence 3.2"}
          </h1>
          <p className="leading-7 max-w-[64ch] text-base text-muted-foreground text-pretty">
            {"A rebuilt board engine and saved views that remember how your team actually works."}
          </p>
          <Item className="gap-3 max-w-full w-fit" variant="muted" size="default">
            <Avatar className="size-9" size="default">
              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <ItemContent className="gap-0.5">
              <ItemTitle className="font-medium text-foreground text-sm">
                {"Mira Stone"}
              </ItemTitle>
              <ItemDescription className="flex flex-wrap gap-x-2 gap-y-0.5 items-center text-muted-foreground text-xs">
                <span>
                  {"Product Lead"}
                </span>
                <span className="bg-border h-3 self-center shrink-0 w-px" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"May 30, 2026"}
                </span>
                <span className="bg-border h-3 self-center shrink-0 w-px" aria-hidden="true"></span>
                <span>
                  {"6 min read"}
                </span>
              </ItemDescription>
            </ItemContent>
          </Item>
        </header>
        <Card className="overflow-hidden p-0 shadow-none w-full" size="default">
          <CardContent className="overflow-hidden p-0">
            <img className="aspect-[16/10] object-cover w-full" alt="Abstract blue fluid render" width="1600" height="1000" decoding="async" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1600&h=1000&q=82" />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-6 min-w-0 w-full">
          <p className="font-medium leading-8 text-foreground text-lg text-pretty">
            {"Cadence 3.2 focuses on the everyday planning details that make large boards feel faster, clearer, and easier to review with a team."}
          </p>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <section className="scroll-mt-8" id="board-engine">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold leading-tight text-2xl text-foreground tracking-tight">
                {"A Faster Board Engine"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 text-base text-muted-foreground text-pretty">
                <p>
                  {"The new board engine keeps large product workspaces responsive when teams add more lanes, owners, filters, and linked tasks. Dragging a card now updates the immediate surface first, then reconciles the deeper workspace state in the background."}
                </p>
                <p>
                  {"That change removes the pause teams felt on heavier boards without hiding important status changes. Cards still show their owner, due date, and priority signals, but the board no longer makes every movement feel expensive."}
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-mt-8" id="saved-views">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold leading-tight text-2xl text-foreground tracking-tight">
                {"Saved Views That Stay Useful"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 text-base text-muted-foreground text-pretty">
                <p>
                  {"Saved views now remember grouping, visible fields, sort order, and filter combinations. A launch lead can keep a risk-first view, while an engineering lead can preserve a dependency view against the same board."}
                </p>
                <p>
                  {"Each view also stores a short description, so teammates know why it exists before they switch into it. The result is less setup at the start of a weekly review and fewer duplicate boards created for one-off meetings."}
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-mt-8" id="release-quality">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold leading-tight text-2xl text-foreground tracking-tight">
                {"Release Quality Work"}
              </h2>
              <div className="flex flex-col gap-4 leading-7 text-base text-muted-foreground text-pretty">
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
        <footer className="border-border border-t flex flex-col gap-8 min-w-0 pt-8 w-full">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium mr-1 text-muted-foreground text-xs tracking-wide uppercase">
              {"Topics"}
            </span>
            <Badge className="font-normal" variant="secondary">
              {"Release Notes"}
            </Badge>
            <Badge className="font-normal" variant="secondary">
              {"Boards"}
            </Badge>
            <Badge className="font-normal" variant="secondary">
              {"Saved Views"}
            </Badge>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 sm:items-start">
            <Avatar className="size-12" size="default">
              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <div className="flex flex-col gap-2 min-w-0">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  {"Written By"}
                </span>
                <span className="font-semibold text-base text-foreground">
                  {"Mira Stone"}
                </span>
              </div>
              <p className="leading-6 max-w-[62ch] text-muted-foreground text-pretty text-sm">
                {"Mira writes product updates for teams using Cadence to plan launches, review boards, and keep release work moving."}
              </p>
              <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group/more hover:underline inline-flex items-center mt-0.5 text-primary text-sm transition-colors underline-offset-4 w-fit" href="#" aria-label="More articles by Mira Stone">
                {"More from Mira Stone"}
                <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover/more:translate-x-0.5 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <section className="flex flex-col gap-4 min-w-0 w-full">
            <h2 className="font-semibold text-foreground text-xl tracking-tight">
              {"Read Next"}
            </h2>
            <div className="gap-4 grid sm:grid-cols-2">
              <a className="block focus-visible:outline-none group/card h-full" href="#" aria-label="Read Cutting Cold Start Latency">
                <Card className="group-focus-visible/card:ring-foreground/30 group-hover/card:ring-foreground/20 h-full p-0 shadow-none transition-shadow" size="default">
                  <CardContent className="flex flex-col gap-2 h-full p-5">
                    <span className="flex flex-wrap font-medium gap-2 items-center min-w-0 text-muted-foreground text-xs">
                      <span>
                        {"Engineering"}
                      </span>
                      <span className="bg-border h-3 self-center shrink-0 w-px" aria-hidden="true"></span>
                      <span>
                        {"8 min read"}
                      </span>
                    </span>
                    <span className="font-semibold group-focus-visible/card:text-primary group-hover/card:text-primary leading-snug text-base text-foreground tracking-tight transition-colors">
                      {"Cutting Cold Start Latency"}
                    </span>
                    <span className="flex-1 leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      {"How the platform team tightened startup paths for larger workspaces."}
                    </span>
                    <span className="font-medium gap-1 inline-flex items-center mt-1 text-primary text-sm">
                      {"Read article"}
                      <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/card:-translate-y-0.5 motion-safe:group-hover/card:translate-x-0.5 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </a>
              <a className="block focus-visible:outline-none group/card h-full" href="#" aria-label="Read Rethinking Our Color System">
                <Card className="group-focus-visible/card:ring-foreground/30 group-hover/card:ring-foreground/20 h-full p-0 shadow-none transition-shadow" size="default">
                  <CardContent className="flex flex-col gap-2 h-full p-5">
                    <span className="flex flex-wrap font-medium gap-2 items-center min-w-0 text-muted-foreground text-xs">
                      <span>
                        {"Design Systems"}
                      </span>
                      <span className="bg-border h-3 self-center shrink-0 w-px" aria-hidden="true"></span>
                      <span>
                        {"6 min read"}
                      </span>
                    </span>
                    <span className="font-semibold group-focus-visible/card:text-primary group-hover/card:text-primary leading-snug text-base text-foreground tracking-tight transition-colors">
                      {"Rethinking Our Color System"}
                    </span>
                    <span className="flex-1 leading-6 line-clamp-2 text-muted-foreground text-pretty text-sm">
                      {"A compact contrast pass for badges, boards, and status-heavy views."}
                    </span>
                    <span className="font-medium gap-1 inline-flex items-center mt-1 text-primary text-sm">
                      {"Read article"}
                      <svg className="duration-200 ease-out lucide lucide-arrow-up-right motion-safe:group-hover/card:-translate-y-0.5 motion-safe:group-hover/card:translate-x-0.5 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </section>
        </footer>
      </article>
    </div>
  )
}
