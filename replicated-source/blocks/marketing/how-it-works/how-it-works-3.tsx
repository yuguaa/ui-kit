import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ItemContent,
  ItemDescription,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="how-it-works-3-title">
        <div className="@container @min-[40rem]:px-6 @min-[64rem]:px-8 box-content flex flex-col gap-8 max-w-7xl mx-auto px-4 py-12">
          <div className="@2xl:flex-row @2xl:items-end flex flex-col gap-8">
            <div className="flex flex-1 flex-col gap-4 items-start min-w-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-secondary-foreground text-sm transition-shadow">
                How It Works
              </Badge>
              <h2 className="@xl:text-4xl font-semibold text-3xl" id="how-it-works-3-title">
                Five Steps to Ship
              </h2>
              <p className="max-w-[40rem] text-base text-muted-foreground">
                Set up the registry, pick your parts, wire them to real data, and take a polished interface to production.
              </p>
              <div className="flex flex-wrap gap-x-2.5 gap-y-2 items-center">
                <Button className="bg-amber-300 border-amber-400 focus-visible:border-ring hover:bg-amber-400 hover:border-amber-500 text-amber-950" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" data-icon="inline-start" aria-hidden="true">
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  Browse Registry
                </Button>
                <Button href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  View Docs
                </Button>
              </div>
            </div>
            <div className="@2xl:flex-1 @2xl:max-w-96 w-full">
              <ul className="flex flex-col" role="list">
                <li>
                  <Item variant="default" size="default">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <svg className="lucide lucide-layout-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                        <rect width="7" height="18" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                      </svg>
                    </IconTile>
                    <ItemContent className="gap-px">
                      <ItemTitle className="leading-5 line-clamp-none">
                        Ready-Made Blocks
                      </ItemTitle>
                      <ItemDescription className="leading-5 line-clamp-none">
                        Start from polished screen patterns with consistent shadcn/ui styling.
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item variant="default" size="default">
                    <IconTile className="bg-primary/5 border-0 self-start" variant="frame" size="default">
                      <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                        <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                        <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                      </svg>
                    </IconTile>
                    <ItemContent className="gap-px">
                      <ItemTitle className="leading-5 line-clamp-none">
                        Build with MCP
                      </ItemTitle>
                      <ItemDescription className="leading-5 line-clamp-none">
                        Search components, inspect APIs, and get commands inside your agent.
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </li>
              </ul>
            </div>
          </div>
          <ol className="flex flex-wrap gap-6" role="list">
            <li className="@2xl:basis-[calc((100%-3rem)/3)] @6xl:basis-[calc((100%-6rem)/5)] basis-full flex">
              <Card className="[--card-spacing:--spacing(5)] bg-emerald-900 dark overflow-clip relative ring-emerald-600 w-full" size="default">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.055)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/12 blur-2xl pointer-events-none rounded-full size-50" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-4 items-start relative">
                  <IconTile className="after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 overflow-clip" variant="frame" size="default">
                    <span className="font-medium text-lg" aria-hidden="true">
                      1
                    </span>
                  </IconTile>
                  <CardTitle className="leading-6">
                    Install NeUI
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Add the NeUI registry to your app, then pick the style that fits your stack and get set up in minutes.
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
            <li className="@2xl:basis-[calc((100%-3rem)/3)] @6xl:basis-[calc((100%-6rem)/5)] basis-full flex">
              <Card className="[--card-spacing:--spacing(5)] bg-emerald-900 dark overflow-clip relative ring-emerald-600 w-full" size="default">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.055)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/12 blur-2xl pointer-events-none rounded-full size-50" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-4 items-start relative">
                  <IconTile className="after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 overflow-clip" variant="frame" size="default">
                    <span className="font-medium text-lg" aria-hidden="true">
                      2
                    </span>
                  </IconTile>
                  <CardTitle className="leading-6">
                    Find Components
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Browse UI parts, blocks, icons, and kits, then pick the pieces for each page for a clear and smooth flow.
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
            <li className="@2xl:basis-[calc((100%-3rem)/3)] @6xl:basis-[calc((100%-6rem)/5)] basis-full flex">
              <Card className="[--card-spacing:--spacing(5)] bg-emerald-900 dark overflow-clip relative ring-emerald-600 w-full" size="default">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.055)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/12 blur-2xl pointer-events-none rounded-full size-50" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-4 items-start relative">
                  <IconTile className="after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 overflow-clip" variant="frame" size="default">
                    <span className="font-medium text-lg" aria-hidden="true">
                      3
                    </span>
                  </IconTile>
                  <CardTitle className="leading-6">
                    Add to Project
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Run the shadcn command to add each item and all the files it needs to your app with no extra setup work.
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
            <li className="@2xl:basis-[calc((100%-3rem)/3)] @6xl:basis-[calc((100%-6rem)/5)] basis-full flex">
              <Card className="[--card-spacing:--spacing(5)] bg-emerald-900 dark overflow-clip relative ring-emerald-600 w-full" size="default">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.055)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/12 blur-2xl pointer-events-none rounded-full size-50" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-4 items-start relative">
                  <IconTile className="after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 overflow-clip" variant="frame" size="default">
                    <span className="font-medium text-lg" aria-hidden="true">
                      4
                    </span>
                  </IconTile>
                  <CardTitle className="leading-6">
                    Customize
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Edit the source, link your data, and align each part with your theme and brand so it feels made for you.
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
            <li className="@2xl:basis-[calc((100%-3rem)/3)] @6xl:basis-[calc((100%-6rem)/5)] basis-full flex">
              <Card className="[--card-spacing:--spacing(5)] bg-emerald-900 dark overflow-clip relative ring-emerald-600 w-full" size="default">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.055)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/12 blur-2xl pointer-events-none rounded-full size-50" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-4 items-start relative">
                  <IconTile className="after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 overflow-clip" variant="frame" size="default">
                    <span className="font-medium text-lg" aria-hidden="true">
                      5
                    </span>
                  </IconTile>
                  <CardTitle className="leading-6">
                    Ship Faster
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Check each API, fix bad props, and ship clean UI with less time from first build to final launch.
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
