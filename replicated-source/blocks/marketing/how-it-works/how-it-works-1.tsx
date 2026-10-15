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
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="how-it-works-1-title">
        <div className="@container max-w-7xl mx-auto w-full">
          <Card className="[--card-spacing:--spacing(6)] gap-0 pb-0" size="default">
            <CardHeader className="@3xl:grid-cols-[1fr_auto] @3xl:items-end gap-8 pb-(--card-spacing)">
              <div className="flex flex-col gap-4 items-start min-w-0">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5! bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-colors" href="#">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx={4} cy={20} r={2}></circle>
                  </svg>
                  {"How NeUI Works"}
                  <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Badge>
                <h2 className="@xl:text-4xl font-semibold text-3xl" id="how-it-works-1-title">
                  {"From Idea to Interface"}
                </h2>
                <p className="max-w-[40rem] text-base text-muted-foreground">
                  {"Discover production-ready components, install them through the NeUI registry, and customize every detail with tools designed for modern AI workflows."}
                </p>
              </div>
              <div className="@3xl:justify-end @3xl:w-80 flex flex-wrap gap-x-2.5 gap-y-2 items-center">
                <Button href="#" role="button" tabIndex={0}>
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  {"View Docs"}
                </Button>
                <Button href="#" role="button" tabIndex={0}>
                  <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" data-icon="inline-start" aria-hidden="true">
                    <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                    <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                  </svg>
                  {"Browse Registry"}
                </Button>
              </div>
            </CardHeader>
            <ol className="-mx-px @4xl:grid-cols-3 grid grid-cols-1" role="list">
              <li className="border-border border-l border-t min-w-0 p-3">
                <Item className="border-0" variant="default" size="default">
                  <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                    <span className="font-medium text-base" aria-hidden="true">
                      {"1"}
                    </span>
                  </IconTile>
                  <ItemContent className="gap-px">
                    <ItemTitle className="leading-5 line-clamp-none">
                      {"Browse the Registry"}
                    </ItemTitle>
                    <ItemDescription className="leading-5 line-clamp-none">
                      {"Explore curated components, templates, and production-ready blocks."}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </li>
              <li className="border-border border-l border-t min-w-0 p-3">
                <Item className="border-0" variant="default" size="default">
                  <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                    <span className="font-medium text-base" aria-hidden="true">
                      {"2"}
                    </span>
                  </IconTile>
                  <ItemContent className="gap-px">
                    <ItemTitle className="leading-5 line-clamp-none">
                      {"Install with CLI"}
                    </ItemTitle>
                    <ItemDescription className="leading-5 line-clamp-none">
                      {"Add components directly using the shadcn-compatible registry."}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </li>
              <li className="border-border border-l border-t min-w-0 p-3">
                <Item className="border-0" variant="default" size="default">
                  <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                    <span className="font-medium text-base" aria-hidden="true">
                      {"3"}
                    </span>
                  </IconTile>
                  <ItemContent className="gap-px">
                    <ItemTitle className="leading-5 line-clamp-none">
                      {"Customize Everything"}
                    </ItemTitle>
                    <ItemDescription className="leading-5 line-clamp-none">
                      {"Adapt styles, layouts, interactions, and behavior to match your product."}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </li>
            </ol>
          </Card>
        </div>
      </section>
    </div>
  )
}
