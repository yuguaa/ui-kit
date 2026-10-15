import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="compare-1-title">
        <div className="@container/block max-w-7xl mx-auto w-full">
          <Card className="[--card-spacing:--spacing(6)] gap-0 pb-0" size="default">
            <CardHeader className="@3xl/block:gap-8 @3xl/block:grid-cols-[1fr_auto] @3xl/block:items-end gap-5 pb-(--card-spacing)">
              <div className="flex flex-col gap-4 items-start min-w-0">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5! bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-colors" href="#">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  {"Upgrade Your AI Workflow"}
                  <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Badge>
                <h2 className="@xl/block:leading-11 @xl/block:text-4xl font-semibold leading-10 text-3xl" id="compare-1-title">
                  {"Increase your MCP speed"}
                  <span className="-my-1.5 [text-box:trim-both_cap_alphabetic] bg-lime-300 inline-block px-1.5 py-1.5 rounded-sm text-lime-950">
                    {"10x Faster"}
                  </span>
                </h2>
                <p className="text-base text-muted-foreground">
                  {"Use NeUI with MCP to search the registry, pick AI-ready blocks, inspect real APIs, and install each item with exact shadcn commands. Start from proven UI instead of raw prompts, then adapt the source to your app, check usage, and ship polished screens with far less back-and-forth."}
                </p>
              </div>
              <div className="@3xl/block:justify-end @3xl/block:w-80 flex flex-wrap gap-x-2.5 gap-y-2 items-center">
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  {"View Docs"}
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" data-icon="inline-start" aria-hidden="true">
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  {"Browse Registry"}
                </Button>
              </div>
            </CardHeader>
            <div className="-mx-px @3xl/block:grid-cols-[1fr_auto_1fr] @3xl/block:grid-rows-[auto_1fr_auto] @max-3xl/block:[&>*+*]:border-t border-t grid">
              <div className="@3xl/block:grid-rows-subgrid @3xl/block:row-span-3 border-l grid">
                <div className="px-6 py-4">
                  <h3 className="font-medium text-xl">
                    {"Traditional Prompting"}
                  </h3>
                </div>
                <ol className="border-t flex flex-col gap-6 px-5 py-6" role="list">
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0 self-start" variant="frame" size="default">
                        <span className="font-medium text-foreground text-sm" aria-hidden="true">
                          {"1"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Describe Every Detail"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Prompt each screen, state, and layout by hand."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0 self-start" variant="frame" size="default">
                        <span className="font-medium text-foreground text-sm" aria-hidden="true">
                          {"2"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Search Through Replies"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Read long outputs and pick usable ideas."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0 self-start" variant="frame" size="default">
                        <span className="font-medium text-foreground text-sm" aria-hidden="true">
                          {"3"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Rebuild Common Parts"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Create the same UI patterns again."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0 self-start" variant="frame" size="default">
                        <span className="font-medium text-foreground text-sm" aria-hidden="true">
                          {"4"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Fix Guessed Code"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Repair wrong props, imports, and weak structure."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0 self-start" variant="frame" size="default">
                        <span className="font-medium text-foreground text-sm" aria-hidden="true">
                          {"5"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Repeat the Prompt"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Ask again when the result misses."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                </ol>
                <div className="bg-muted border-t flex gap-2.5 items-center px-6 py-4">
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"175 hours of prompting, rebuilding, and fixes"}
                  </p>
                  <svg className="lucide lucide-calendar-off size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarOffIcon" tabler="IconCalendarOff" hugeicons="CalendarRemove01Icon" phosphor="CalendarXIcon" remixicon="RiCalendarCloseLine" aria-hidden="true">
                    <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                    <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                    <path d="M16 2v4"></path>
                    <path d="M3 10h7"></path>
                    <path d="M21 10h-5.5"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                </div>
              </div>
              <div className="@3xl/block:grid-rows-subgrid @3xl/block:row-span-3 @3xl/block:w-10 border-l grid isolate relative">
                <div className="-z-10 absolute bg-[repeating-linear-gradient(-45deg,currentColor_0_1.41px,transparent_1.41px_2.83px)] inset-0 opacity-5 pointer-events-none text-primary" aria-hidden="true"></div>
                <div className="flex items-center justify-center px-2 py-4">
                  <span className="font-medium text-sm">
                    {"VS"}
                  </span>
                </div>
                <div className="@max-3xl/block:hidden border-t"></div>
                <div className="@max-3xl/block:hidden border-t"></div>
              </div>
              <div className="@3xl/block:grid-rows-subgrid @3xl/block:row-span-3 border-l grid">
                <div className="px-6 py-4">
                  <h3 className="font-medium text-xl">
                    {"NeUI Agent Workflow"}
                  </h3>
                </div>
                <ol className="border-t flex flex-col gap-6 px-5 py-6" role="list">
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-lime-500 after:border-lime-950/10 bg-lime-200 border-0 dark:bg-lime-500/20 self-start" variant="frame" size="default">
                        <span className="font-medium text-lime-950 text-sm" aria-hidden="true">
                          {"1"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Search the Registry"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Get ranked parts, blocks, icons, and kits."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-lime-500 after:border-lime-950/10 bg-lime-200 border-0 dark:bg-lime-500/20 self-start" variant="frame" size="default">
                        <span className="font-medium text-lime-950 text-sm" aria-hidden="true">
                          {"2"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Pick Ready UI"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Start with ready UI for real use."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-lime-500 after:border-lime-950/10 bg-lime-200 border-0 dark:bg-lime-500/20 self-start" variant="frame" size="default">
                        <span className="font-medium text-lime-950 text-sm" aria-hidden="true">
                          {"3"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Install with shadcn"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Add each item with one exact command."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-lime-500 after:border-lime-950/10 bg-lime-200 border-0 dark:bg-lime-500/20 self-start" variant="frame" size="default">
                        <span className="font-medium text-lime-950 text-sm" aria-hidden="true">
                          {"4"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Read Real APIs"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Use true props and working demos."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                  <li>
                    <Item className="border-0 items-start p-0" variant="default" size="default">
                      <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-lime-500 after:border-lime-950/10 bg-lime-200 border-0 dark:bg-lime-500/20 self-start" variant="frame" size="default">
                        <span className="font-medium text-lime-950 text-sm" aria-hidden="true">
                          {"5"}
                        </span>
                      </IconTile>
                      <ItemContent className="gap-px min-w-0">
                        <ItemTitle className="leading-5 line-clamp-none">
                          {"Adapt and Check"}
                        </ItemTitle>
                        <ItemDescription className="leading-5 line-clamp-none">
                          {"Link data, match tokens, then check usage."}
                        </ItemDescription>
                      </ItemContent>
                    </Item>
                  </li>
                </ol>
                <div className="bg-lime-500 border-t flex gap-2.5 items-center px-6 py-4 text-lime-950">
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"9 minutes of collecting NeUI Blocks"}
                  </p>
                  <svg className="lucide lucide-calendar-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
