import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"

export function Pattern() {
  return (
    <main className="bg-background lg:p-6 min-h-svh p-3 sm:p-4 w-full" aria-labelledby="page-heading">
      <div className="@container flex flex-col gap-4 max-w-7xl mx-auto text-foreground w-full">
        <h1 className="sr-only" id="page-heading">
          {"Edge Security Telemetry"}
        </h1>
        <header className="flex gap-2 items-center justify-between min-h-9 pb-1 shrink-0 w-full" aria-label="Security telemetry header">
          <Breadcrumb className="min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="hidden md:inline-flex">
                <BreadcrumbLink href="#">
                  {"Security"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:flex" role="presentation" aria-hidden="true">
                <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                  {"Telemetry"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2 items-center shrink-0">
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button group/pick-date inline-flex items-center justify-between leading-none max-w-full outline-none select-none shrink-0 tabular-nums transition-all w-[250px] whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
              <span className="truncate">
                {"May 12, 2026 - Jun 10, 2026"}
              </span>
              <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                <path d="M3 10h18"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <Button type="button" tabIndex={0} aria-label="Export report">
              <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span className="hidden sm:block">
                {"Export"}
              </span>
            </Button>
          </div>
        </header>
        <section className="@3xl:grid-cols-2 @6xl:grid-cols-4 gap-4 grid grid-cols-1" aria-label="Security Summary">
          <Card className="overflow-hidden p-0 relative" size="default">
            <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={296} height={140}></canvas>
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 justify-between min-h-[7.25rem] p-4 relative z-10">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold leading-4 text-foreground text-sm truncate">
                  {"Signal Risk"}
                </span>
                <span className="leading-4 text-muted-foreground text-xs truncate">
                  {"Threat Index"}
                </span>
              </div>
              <div className="flex gap-4 items-end justify-between">
                <div className="min-w-0 space-y-2.5">
                  <div className="font-semibold leading-none text-2xl text-foreground tracking-tight">
                    {"Elevated"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow">
                      {"+12.5%"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"5 cases"}
                    </span>
                  </div>
                </div>
                <svg className="h-9 opacity-95 shrink-0 w-24" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                  <path d="M 0.0,24.7 C 1.5,24.1 6.0,20.8 9.0,21.4 C 12.0,21.9 15.0,30.2 18.0,28.0 C 21.0,25.8 24.0,10.8 27.0,8.2 C 30.0,5.6 33.0,13.0 36.0,12.6 C 39.0,12.2 42.0,5.8 45.0,6.0 C 48.0,6.2 51.0,13.0 54.0,13.7 C 57.0,14.4 60.0,8.7 63.0,10.4 C 66.0,12.0 70.5,21.4 72.0,23.6" fill="none" stroke="var(--color-red-500)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0 relative" size="default">
            <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={296} height={140}></canvas>
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 justify-between min-h-[7.25rem] p-4 relative z-10">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold leading-4 text-foreground text-sm truncate">
                  {"Mesh Uptime"}
                </span>
                <span className="leading-4 text-muted-foreground text-xs truncate">
                  {"Service Health"}
                </span>
              </div>
              <div className="flex gap-4 items-end justify-between">
                <div className="min-w-0 space-y-2.5">
                  <div className="font-semibold leading-none text-2xl text-foreground tracking-tight">
                    {"99.98%"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                      {"+0.2%"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"58 zones"}
                    </span>
                  </div>
                </div>
                <svg className="h-9 opacity-95 shrink-0 w-24" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                  <path d="M 0.0,17.0 C 1.5,17.9 6.0,22.5 9.0,22.5 C 12.0,22.5 15.0,16.1 18.0,17.0 C 21.0,17.9 24.0,26.6 27.0,28.0 C 30.0,29.4 33.0,26.6 36.0,25.3 C 39.0,23.9 42.0,20.2 45.0,19.8 C 48.0,19.3 51.0,23.4 54.0,22.5 C 57.0,21.6 60.0,17.0 63.0,14.3 C 66.0,11.5 70.5,7.4 72.0,6.0" fill="none" stroke="var(--color-emerald-500)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0 relative" size="default">
            <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={296} height={140}></canvas>
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 justify-between min-h-[7.25rem] p-4 relative z-10">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold leading-4 text-foreground text-sm truncate">
                  {"Edge Traffic"}
                </span>
                <span className="leading-4 text-muted-foreground text-xs truncate">
                  {"Scrubbed Load"}
                </span>
              </div>
              <div className="flex gap-4 items-end justify-between">
                <div className="min-w-0 space-y-2.5">
                  <div className="font-semibold leading-none text-2xl text-foreground tracking-tight">
                    {"4.8 GB/s"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                      {"-3.1%"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"clean flow"}
                    </span>
                  </div>
                </div>
                <svg className="h-9 opacity-95 shrink-0 w-24" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                  <path d="M 0.0,28.0 C 1.5,26.4 6.0,20.4 9.0,18.6 C 12.0,16.7 15.0,18.8 18.0,17.0 C 21.0,15.2 24.0,8.6 27.0,7.6 C 30.0,6.5 33.0,11.0 36.0,10.7 C 39.0,10.5 42.0,6.3 45.0,6.0 C 48.0,5.7 51.0,8.1 54.0,9.1 C 57.0,10.2 60.0,12.5 63.0,12.3 C 66.0,12.0 70.5,8.4 72.0,7.6" fill="none" stroke="var(--color-amber-500)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0 relative" size="default">
            <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={296} height={140}></canvas>
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 justify-between min-h-[7.25rem] p-4 relative z-10">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold leading-4 text-foreground text-sm truncate">
                  {"Sensor Reach"}
                </span>
                <span className="leading-4 text-muted-foreground text-xs truncate">
                  {"Global Nodes"}
                </span>
              </div>
              <div className="flex gap-4 items-end justify-between">
                <div className="min-w-0 space-y-2.5">
                  <div className="font-semibold leading-none text-2xl text-foreground tracking-tight">
                    {"18,420"}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                      {"+6.8%"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"93 regions"}
                    </span>
                  </div>
                </div>
                <svg className="h-9 opacity-95 shrink-0 w-24" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                  <path d="M 0.0,22.5 C 1.5,23.4 6.0,29.8 9.0,28.0 C 12.0,26.2 15.0,13.8 18.0,11.5 C 21.0,9.2 24.0,12.9 27.0,14.3 C 30.0,15.6 33.0,21.1 36.0,19.8 C 39.0,18.4 42.0,6.5 45.0,6.0 C 48.0,5.5 51.0,16.5 54.0,17.0 C 57.0,17.5 60.0,9.7 63.0,8.8 C 66.0,7.8 70.5,11.0 72.0,11.5" fill="none" stroke="var(--color-emerald-500)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="@5xl:grid-cols-2 gap-4 grid grid-cols-1" aria-label="Security Flow">
          <Card className="overflow-hidden p-0 relative" size="default">
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-0.5">
                  <h2 className="font-semibold leading-4 text-sm">
                    {"Threat Vectors"}
                  </h2>
                  <p className="leading-4 text-muted-foreground text-xs">
                    {"Blocked Signals"}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 items-center shrink-0 sm:justify-end text-muted-foreground text-xs">
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-blue-600 rounded-full size-2" aria-hidden="true"></span>
                    {"Blocked"}
                  </span>
                  <span className="flex gap-1.5 items-center">
                    <span className="bg-sky-300 rounded-full size-2" aria-hidden="true"></span>
                    {"Watched"}
                  </span>
                </div>
              </div>
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_2_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2_] {\n  --color-blocked: var(--color-blue-600);\n  --color-watched: var(--color-sky-300);\n}\n\n\n.dark [data-chart=chart-_r_2_] {\n  --color-blocked: var(--color-blue-600);\n  --color-watched: var(--color-sky-300);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={576} height={224} style={{position: "relative", cursor: "default", width: "576px", height: "224px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={576} height={224} viewBox="0 0 576 224" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={4} y={8} width={568} height={186} x1={4} y1={194} x2={572} y2={194}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={4} y={8} width={568} height={186} x1={4} y1={146.3076923076923} x2={572} y2={146.3076923076923}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={4} y={8} width={568} height={186} x1={4} y1={98.61538461538463} x2={572} y2={98.61538461538463}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={4} y={8} width={568} height={186} x1={4} y1={50.92307692307691} x2={572} y2={50.92307692307691}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={4} y={8} width={568} height={186} x1={4} y1={8} x2={572} y2={8}></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x={4} y={8} height={186} width={568}></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="dashboard5-threat-blocked" patternUnits="userSpaceOnUse" width={8} height={8}>
                            <rect width={8} height={8} fill="var(--color-blocked)" opacity={0.1}></rect>
                            <path d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4" stroke="var(--color-blocked)" strokeWidth={1.5} opacity={0.55}></path>
                            <path d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2" stroke="var(--color-blocked)" strokeWidth={1} opacity={0.25}></path>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_4_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Bot" x={12} y={112.9231} width={22} height={81.0769} d={"M12,117.9231A 5,5,0,0,1,17,112.9231L 29,112.9231A 5,5,0,0,1,\n        34,117.9231L 34,189A 5,5,0,0,1,\n        29,194L 17,194A 5,5,0,0,1,\n        12,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Phish" x={75.1111} y={122.4615} width={22} height={71.5385} d={"M75.1111,127.4615A 5,5,0,0,1,80.1111,122.4615L 92.1111,122.4615A 5,5,0,0,1,\n        97.1111,127.4615L 97.1111,189A 5,5,0,0,1,\n        92.1111,194L 80.1111,194A 5,5,0,0,1,\n        75.1111,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="DDoS" x={138.2222} y={70} width={22} height={124} d={"M138.2222,75A 5,5,0,0,1,143.2222,70L 155.2222,70A 5,5,0,0,1,\n        160.2222,75L 160.2222,189A 5,5,0,0,1,\n        155.2222,194L 143.2222,194A 5,5,0,0,1,\n        138.2222,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Inject" x={201.3333} y={141.5385} width={22} height={52.4615} d={"M201.3333,146.5385A 5,5,0,0,1,206.3333,141.5385L 218.3333,141.5385A 5,5,0,0,1,\n        223.3333,146.5385L 223.3333,189A 5,5,0,0,1,\n        218.3333,194L 206.3333,194A 5,5,0,0,1,\n        201.3333,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Auth" x={264.4444} y={91.4615} width={22} height={102.5385} d={"M264.4444,96.4615A 5,5,0,0,1,269.4444,91.4615L 281.4444,91.4615A 5,5,0,0,1,\n        286.4444,96.4615L 286.4444,189A 5,5,0,0,1,\n        281.4444,194L 269.4444,194A 5,5,0,0,1,\n        264.4444,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Probe" x={327.5556} y={151.0769} width={22} height={42.9231} d={"M327.5556,156.0769A 5,5,0,0,1,332.5556,151.0769L 344.5556,151.0769A 5,5,0,0,1,\n        349.5556,156.0769L 349.5556,189A 5,5,0,0,1,\n        344.5556,194L 332.5556,194A 5,5,0,0,1,\n        327.5556,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Exfil" x={390.6667} y={60.4615} width={22} height={133.5385} d={"M390.6667,65.4615A 5,5,0,0,1,395.6667,60.4615L 407.6667,60.4615A 5,5,0,0,1,\n        412.6667,65.4615L 412.6667,189A 5,5,0,0,1,\n        407.6667,194L 395.6667,194A 5,5,0,0,1,\n        390.6667,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Beacon" x={453.7778} y={103.3846} width={22} height={90.6154} d={"M453.7778,108.3846A 5,5,0,0,1,458.7778,103.3846L 470.7778,103.3846A 5,5,0,0,1,\n        475.7778,108.3846L 475.7778,189A 5,5,0,0,1,\n        470.7778,194L 458.7778,194A 5,5,0,0,1,\n        453.7778,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth={1} name="Day0" x={516.8889} y={160.6154} width={22} height={33.3846} d={"M516.8889,165.6154A 5,5,0,0,1,521.8889,160.6154L 533.8889,160.6154A 5,5,0,0,1,\n        538.8889,165.6154L 538.8889,189A 5,5,0,0,1,\n        533.8889,194L 521.8889,194A 5,5,0,0,1,\n        516.8889,189Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_5_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Bot" x={37} y={46.1538} width={22} height={147.8462} d={"M37,51.1538A 5,5,0,0,1,42,46.1538L 54,46.1538A 5,5,0,0,1,\n        59,51.1538L 59,189A 5,5,0,0,1,\n        54,194L 42,194A 5,5,0,0,1,\n        37,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Phish" x={100.1111} y={17.5385} width={22} height={176.4615} d={"M100.1111,22.5385A 5,5,0,0,1,105.1111,17.5385L 117.1111,17.5385A 5,5,0,0,1,\n        122.1111,22.5385L 122.1111,189A 5,5,0,0,1,\n        117.1111,194L 105.1111,194A 5,5,0,0,1,\n        100.1111,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="DDoS" x={163.2222} y={115.3077} width={22} height={78.6923} d={"M163.2222,120.3077A 5,5,0,0,1,168.2222,115.3077L 180.2222,115.3077A 5,5,0,0,1,\n        185.2222,120.3077L 185.2222,189A 5,5,0,0,1,\n        180.2222,194L 168.2222,194A 5,5,0,0,1,\n        163.2222,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Inject" x={226.3333} y={79.5385} width={22} height={114.4615} d={"M226.3333,84.5385A 5,5,0,0,1,231.3333,79.5385L 243.3333,79.5385A 5,5,0,0,1,\n        248.3333,84.5385L 248.3333,189A 5,5,0,0,1,\n        243.3333,194L 231.3333,194A 5,5,0,0,1,\n        226.3333,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Auth" x={289.4444} y={31.8462} width={22} height={162.1538} d={"M289.4444,36.8462A 5,5,0,0,1,294.4444,31.8462L 306.4444,31.8462A 5,5,0,0,1,\n        311.4444,36.8462L 311.4444,189A 5,5,0,0,1,\n        306.4444,194L 294.4444,194A 5,5,0,0,1,\n        289.4444,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Probe" x={352.5556} y={55.6923} width={22} height={138.3077} d={"M352.5556,60.6923A 5,5,0,0,1,357.5556,55.6923L 369.5556,55.6923A 5,5,0,0,1,\n        374.5556,60.6923L 374.5556,189A 5,5,0,0,1,\n        369.5556,194L 357.5556,194A 5,5,0,0,1,\n        352.5556,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Exfil" x={415.6667} y={110.5385} width={22} height={83.4615} d={"M415.6667,115.5385A 5,5,0,0,1,420.6667,110.5385L 432.6667,110.5385A 5,5,0,0,1,\n        437.6667,115.5385L 437.6667,189A 5,5,0,0,1,\n        432.6667,194L 420.6667,194A 5,5,0,0,1,\n        415.6667,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Beacon" x={478.7778} y={41.3846} width={22} height={152.6154} d={"M478.7778,46.3846A 5,5,0,0,1,483.7778,41.3846L 495.7778,41.3846A 5,5,0,0,1,\n        500.7778,46.3846L 500.7778,189A 5,5,0,0,1,\n        495.7778,194L 483.7778,194A 5,5,0,0,1,\n        478.7778,189Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity={0.86} stroke="var(--color-watched)" strokeWidth={1} name="Day0" x={541.8889} y={127.2308} width={22} height={66.7692} d={"M541.8889,132.2308A 5,5,0,0,1,546.8889,127.2308L 558.8889,127.2308A 5,5,0,0,1,\n        563.8889,132.2308L 563.8889,189A 5,5,0,0,1,\n        558.8889,194L 546.8889,194A 5,5,0,0,1,\n        541.8889,189Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                              <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={35.55555555555556} y={210} textAnchor="middle" fill="#666">
                                <tspan x={35.55555555555556} dy="0.71em">
                                  {"Bot"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={98.66666666666667} y={210} textAnchor="middle" fill="#666">
                                <tspan x={98.66666666666667} dy="0.71em">
                                  {"Phish"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={161.77777777777777} y={210} textAnchor="middle" fill="#666">
                                <tspan x={161.77777777777777} dy="0.71em">
                                  {"DDoS"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={224.8888888888889} y={210} textAnchor="middle" fill="#666">
                                <tspan x={224.8888888888889} dy="0.71em">
                                  {"Inject"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={288} y={210} textAnchor="middle" fill="#666">
                                <tspan x={288} dy="0.71em">
                                  {"Auth"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={351.1111111111111} y={210} textAnchor="middle" fill="#666">
                                <tspan x={351.1111111111111} dy="0.71em">
                                  {"Probe"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={414.22222222222223} y={210} textAnchor="middle" fill="#666">
                                <tspan x={414.22222222222223} dy="0.71em">
                                  {"Exfil"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={477.33333333333337} y={210} textAnchor="middle" fill="#666">
                                <tspan x={477.33333333333337} dy="0.71em">
                                  {"Beacon"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={568} stroke="none" fontSize="10" x={540.4444444444445} y={210} textAnchor="middle" fill="#666">
                                <tspan x={540.4444444444445} dy="0.71em">
                                  {"Day0"}
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0 relative" size="default">
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col gap-5 p-4">
              <div className="flex gap-3 items-start justify-between">
                <div className="space-y-0.5">
                  <h2 className="font-semibold leading-4 text-sm">
                    {"Network Flow"}
                  </h2>
                  <p className="leading-4 text-muted-foreground text-xs">
                    {"Daily API and webhooks"}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-success-foreground text-xs transition-shadow">
                  {"+5.3%"}
                  <span className="sr-only">
                    {"versus the previous period"}
                  </span>
                </Badge>
              </div>
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video cn-chart flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_3_">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-api: var(--color-yellow-500);\n  --color-webhook: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-api: var(--color-yellow-500);\n  --color-webhook: var(--color-emerald-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={576} height={224} style={{position: "relative", cursor: "default", width: "576px", height: "224px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={576} height={224} viewBox="0 0 576 224" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={20} width={576} height={174} x1={0} y1={194} x2={576} y2={194}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={20} width={576} height={174} x1={0} y1={150.5} x2={576} y2={150.5}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={20} width={576} height={174} x1={0} y1={107} x2={576} y2={107}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={20} width={576} height={174} x1={0} y1={63.5} x2={576} y2={63.5}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={20} width={576} height={174} x1={0} y1={20} x2={576} y2={20}></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts2-clip">
                            <rect x={0} y={20} height={174} width={576}></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <pattern id="dashboard5-flow-crosshatch-api" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                            <path d="M0,8 L8,0" stroke="var(--color-yellow-500)" strokeWidth={0.8} opacity={0.4}></path>
                            <path d="M0,0 L8,8" stroke="var(--color-yellow-500)" strokeWidth={0.8} opacity={0.2}></path>
                          </pattern>
                          <pattern id="dashboard5-flow-crosshatch-webhook" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                            <path d="M0,8 L8,0" stroke="var(--color-emerald-500)" strokeWidth={0.8} opacity={0.4}></path>
                            <path d="M0,0 L8,8" stroke="var(--color-emerald-500)" strokeWidth={0.8} opacity={0.2}></path>
                          </pattern>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_6_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={1.25} fill="url(#dashboard5-flow-crosshatch-webhook)" fillOpacity={0.5} height={174} stroke="none" width={576} id="recharts-area-_r_6_" d="M0,126.055C6.621,121.606,13.241,117.157,19.862,116.472C26.483,115.788,33.103,118.867,39.724,117.918C46.345,116.968,52.966,111.989,59.586,115.799C66.207,119.608,72.828,132.205,79.448,136.057C86.069,139.909,92.69,135.017,99.31,131.325C105.931,127.634,112.552,125.144,119.172,123.842C125.793,122.541,132.414,122.429,139.034,122.09C145.655,121.751,152.276,121.185,158.897,120.82C165.517,120.455,172.138,120.291,178.759,120.643C185.379,120.994,192,121.862,198.621,123.846C205.241,125.83,211.862,128.929,218.483,132.273C225.103,135.616,231.724,139.204,238.345,138.225C244.966,137.246,251.586,131.7,258.207,129.015C264.828,126.329,271.448,126.504,278.069,126.563C284.69,126.623,291.31,126.567,297.931,126.22C304.552,125.874,311.172,125.236,317.793,124.876C324.414,124.515,331.034,124.43,337.655,126.434C344.276,128.438,350.897,132.53,357.517,136.317C364.138,140.104,370.759,143.587,377.379,142.887C384,142.186,390.621,137.303,397.241,133.336C403.862,129.369,410.483,126.319,417.103,126.619C423.724,126.918,430.345,130.566,436.966,131.427C443.586,132.288,450.207,130.361,456.828,127.696C463.448,125.031,470.069,121.628,476.69,123.842C483.31,126.057,489.931,133.889,496.552,139.466C503.172,145.044,509.793,148.365,516.414,143.911C523.034,139.457,529.655,127.227,536.276,124.18C542.897,121.132,549.517,127.267,556.138,130.253C562.759,133.24,569.379,133.079,576,132.917L576,194C569.379,194,562.759,194,556.138,194C549.517,194,542.897,194,536.276,194C529.655,194,523.034,194,516.414,194C509.793,194,503.172,194,496.552,194C489.931,194,483.31,194,476.69,194C470.069,194,463.448,194,456.828,194C450.207,194,443.586,194,436.966,194C430.345,194,423.724,194,417.103,194C410.483,194,403.862,194,397.241,194C390.621,194,384,194,377.379,194C370.759,194,364.138,194,357.517,194C350.897,194,344.276,194,337.655,194C331.034,194,324.414,194,317.793,194C311.172,194,304.552,194,297.931,194C291.31,194,284.69,194,278.069,194C271.448,194,264.828,194,258.207,194C251.586,194,244.966,194,238.345,194C231.724,194,225.103,194,218.483,194C211.862,194,205.241,194,198.621,194C192,194,185.379,194,178.759,194C172.138,194,165.517,194,158.897,194C152.276,194,145.655,194,139.034,194C132.414,194,125.793,194,119.172,194C112.552,194,105.931,194,99.31,194C92.69,194,86.069,194,79.448,194C72.828,194,66.207,194,59.586,194C52.966,194,46.345,194,39.724,194C33.103,194,26.483,194,19.862,194C13.241,194,6.621,194,0,194Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={1.25} fill="none" fillOpacity={0.5} height={174} stroke="var(--color-webhook)" width={576} d="M0,126.055C6.621,121.606,13.241,117.157,19.862,116.472C26.483,115.788,33.103,118.867,39.724,117.918C46.345,116.968,52.966,111.989,59.586,115.799C66.207,119.608,72.828,132.205,79.448,136.057C86.069,139.909,92.69,135.017,99.31,131.325C105.931,127.634,112.552,125.144,119.172,123.842C125.793,122.541,132.414,122.429,139.034,122.09C145.655,121.751,152.276,121.185,158.897,120.82C165.517,120.455,172.138,120.291,178.759,120.643C185.379,120.994,192,121.862,198.621,123.846C205.241,125.83,211.862,128.929,218.483,132.273C225.103,135.616,231.724,139.204,238.345,138.225C244.966,137.246,251.586,131.7,258.207,129.015C264.828,126.329,271.448,126.504,278.069,126.563C284.69,126.623,291.31,126.567,297.931,126.22C304.552,125.874,311.172,125.236,317.793,124.876C324.414,124.515,331.034,124.43,337.655,126.434C344.276,128.438,350.897,132.53,357.517,136.317C364.138,140.104,370.759,143.587,377.379,142.887C384,142.186,390.621,137.303,397.241,133.336C403.862,129.369,410.483,126.319,417.103,126.619C423.724,126.918,430.345,130.566,436.966,131.427C443.586,132.288,450.207,130.361,456.828,127.696C463.448,125.031,470.069,121.628,476.69,123.842C483.31,126.057,489.931,133.889,496.552,139.466C503.172,145.044,509.793,148.365,516.414,143.911C523.034,139.457,529.655,127.227,536.276,124.18C542.897,121.132,549.517,127.267,556.138,130.253C562.759,133.24,569.379,133.079,576,132.917"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_7_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={1.25} fill="url(#dashboard5-flow-crosshatch-api)" fillOpacity={0.5} height={174} stroke="none" width={576} id="recharts-area-_r_7_" d="M0,47.117C6.621,40.583,13.241,34.048,19.862,32.568C26.483,31.087,33.103,34.66,39.724,33.02C46.345,31.38,52.966,24.528,59.586,32.351C66.207,40.174,72.828,62.671,79.448,69.649C86.069,76.627,92.69,68.085,99.31,60.528C105.931,52.97,112.552,46.397,119.172,44.115C125.793,41.834,132.414,43.845,139.034,43.203C145.655,42.56,152.276,39.264,158.897,38.454C165.517,37.643,172.138,39.318,178.759,40.683C185.379,42.048,192,43.103,198.621,47.321C205.241,51.539,211.862,58.92,218.483,65.772C225.103,72.623,231.724,78.946,238.345,75.721C244.966,72.496,251.586,59.723,258.207,54.945C264.828,50.167,271.448,53.383,278.069,52.852C284.69,52.321,291.31,48.042,297.931,47.775C304.552,47.509,311.172,51.255,317.793,50.988C324.414,50.722,331.034,46.444,337.655,49.45C344.276,52.457,350.897,62.748,357.517,71.033C364.138,79.318,370.759,85.597,377.379,83.86C384,82.123,390.621,72.37,397.241,65.391C403.862,58.411,410.483,54.205,417.103,54.809C423.724,55.413,430.345,60.828,436.966,62.18C443.586,63.531,450.207,60.82,456.828,56.097C463.448,51.375,470.069,44.641,476.69,49.069C483.31,53.497,489.931,69.087,496.552,79.663C503.172,90.239,509.793,95.8,516.414,87.103C523.034,78.406,529.655,55.449,536.276,48.851C542.897,42.253,549.517,52.013,556.138,57.517C562.759,63.021,569.379,64.269,576,65.516L576,132.917C569.379,133.079,562.759,133.24,556.138,130.253C549.517,127.267,542.897,121.132,536.276,124.18C529.655,127.227,523.034,139.457,516.414,143.911C509.793,148.365,503.172,145.044,496.552,139.466C489.931,133.889,483.31,126.057,476.69,123.842C470.069,121.628,463.448,125.031,456.828,127.696C450.207,130.361,443.586,132.288,436.966,131.427C430.345,130.566,423.724,126.918,417.103,126.619C410.483,126.319,403.862,129.369,397.241,133.336C390.621,137.303,384,142.186,377.379,142.887C370.759,143.587,364.138,140.104,357.517,136.317C350.897,132.53,344.276,128.438,337.655,126.434C331.034,124.43,324.414,124.515,317.793,124.876C311.172,125.236,304.552,125.874,297.931,126.22C291.31,126.567,284.69,126.623,278.069,126.563C271.448,126.504,264.828,126.329,258.207,129.015C251.586,131.7,244.966,137.246,238.345,138.225C231.724,139.204,225.103,135.616,218.483,132.273C211.862,128.929,205.241,125.83,198.621,123.846C192,121.862,185.379,120.994,178.759,120.643C172.138,120.291,165.517,120.455,158.897,120.82C152.276,121.185,145.655,121.751,139.034,122.09C132.414,122.429,125.793,122.541,119.172,123.842C112.552,125.144,105.931,127.634,99.31,131.325C92.69,135.017,86.069,139.909,79.448,136.057C72.828,132.205,66.207,119.608,59.586,115.799C52.966,111.989,46.345,116.968,39.724,117.918C33.103,118.867,26.483,115.788,19.862,116.472C13.241,117.157,6.621,121.606,0,126.055Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={1.25} fill="none" fillOpacity={0.5} height={174} stroke="var(--color-api)" width={576} d="M0,47.117C6.621,40.583,13.241,34.048,19.862,32.568C26.483,31.087,33.103,34.66,39.724,33.02C46.345,31.38,52.966,24.528,59.586,32.351C66.207,40.174,72.828,62.671,79.448,69.649C86.069,76.627,92.69,68.085,99.31,60.528C105.931,52.97,112.552,46.397,119.172,44.115C125.793,41.834,132.414,43.845,139.034,43.203C145.655,42.56,152.276,39.264,158.897,38.454C165.517,37.643,172.138,39.318,178.759,40.683C185.379,42.048,192,43.103,198.621,47.321C205.241,51.539,211.862,58.92,218.483,65.772C225.103,72.623,231.724,78.946,238.345,75.721C244.966,72.496,251.586,59.723,258.207,54.945C264.828,50.167,271.448,53.383,278.069,52.852C284.69,52.321,291.31,48.042,297.931,47.775C304.552,47.509,311.172,51.255,317.793,50.988C324.414,50.722,331.034,46.444,337.655,49.45C344.276,52.457,350.897,62.748,357.517,71.033C364.138,79.318,370.759,85.597,377.379,83.86C384,82.123,390.621,72.37,397.241,65.391C403.862,58.411,410.483,54.205,417.103,54.809C423.724,55.413,430.345,60.828,436.966,62.18C443.586,63.531,450.207,60.82,456.828,56.097C463.448,51.375,470.069,44.641,476.69,49.069C483.31,53.497,489.931,69.087,496.552,79.663C503.172,90.239,509.793,95.8,516.414,87.103C523.034,78.406,529.655,55.449,536.276,48.851C542.897,42.253,549.517,52.013,556.138,57.517C562.759,63.021,569.379,64.269,576,65.516"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                              <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={79.44827586206897} y={208} textAnchor="middle" fill="#666">
                                <tspan x={79.44827586206897} dy="0.71em">
                                  {"May 16"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={139.0344827586207} y={208} textAnchor="middle" fill="#666">
                                <tspan x={139.0344827586207} dy="0.71em">
                                  {"May 19"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={198.6206896551724} y={208} textAnchor="middle" fill="#666">
                                <tspan x={198.6206896551724} dy="0.71em">
                                  {"May 22"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={258.2068965517241} y={208} textAnchor="middle" fill="#666">
                                <tspan x={258.2068965517241} dy="0.71em">
                                  {"May 25"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={317.7931034482759} y={208} textAnchor="middle" fill="#666">
                                <tspan x={317.7931034482759} dy="0.71em">
                                  {"May 28"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={377.3793103448276} y={208} textAnchor="middle" fill="#666">
                                <tspan x={377.3793103448276} dy="0.71em">
                                  {"May 31"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={436.9655172413793} y={208} textAnchor="middle" fill="#666">
                                <tspan x={436.9655172413793} dy="0.71em">
                                  {"Jun 3"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={496.55172413793105} y={208} textAnchor="middle" fill="#666">
                                <tspan x={496.55172413793105} dy="0.71em">
                                  {"Jun 6"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={576} stroke="none" x={557.5625} y={208} textAnchor="middle" fill="#666">
                                <tspan x={557.5625} dy="0.71em">
                                  {"Jun 10"}
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>
        <section className="@5xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] gap-4 grid grid-cols-1" aria-label="Security Load">
          <Card className="h-full overflow-hidden p-0 relative" size="default">
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="flex flex-col h-full p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-0.5">
                  <h2 className="font-semibold leading-4 text-sm">
                    {"Cluster Load"}
                  </h2>
                  <div className="flex flex-wrap gap-3 items-center leading-4 text-muted-foreground text-xs">
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-zinc-300 rounded-full size-2" aria-hidden="true"></span>
                      {"Normal"}
                    </span>
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-amber-500 rounded-full size-2" aria-hidden="true"></span>
                      {"Warm"}
                    </span>
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-red-500 rounded-full size-2" aria-hidden="true"></span>
                      {"Critical"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center sm:justify-end">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                    <span className="font-semibold tabular-nums">
                      {"52"}
                    </span>
                    <span>
                      {"Nodes"}
                    </span>
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                    <span className="font-semibold tabular-nums">
                      {"2"}
                    </span>
                    <span>
                      {"Warm"}
                    </span>
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow">
                    <span className="font-semibold tabular-nums">
                      {"2"}
                    </span>
                    <span>
                      {"Critical"}
                    </span>
                  </Badge>
                </div>
              </div>
              <div className="h-60 mt-auto pt-5">
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width={779} height={220} style={{position: "relative", cursor: "default", width: "779px", height: "220px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex={0} width={779} height={220} viewBox="0 0 779 220" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                          <g className="recharts-cartesian-grid">
                            <g className="recharts-cartesian-grid-horizontal">
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={10} width={779} height={180} x1={0} y1={190} x2={779} y2={190}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={10} width={779} height={180} x1={0} y1={145} x2={779} y2={145}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={10} width={779} height={180} x1={0} y1={100} x2={779} y2={100}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={10} width={779} height={180} x1={0} y1={55} x2={779} y2={55}></line>
                              <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} fill="none" x={0} y={10} width={779} height={180} x1={0} y1={10} x2={779} y2={10}></line>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                        <defs>
                          <clippath id="recharts27-clip">
                            <rect x={0} y={10} height={180} width={779}></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                          <g className="recharts-bar recharts-layer" id="recharts-bar-_r_8_">
                            <g className="recharts-bar-rectangles recharts-layer">
                              <g className="recharts-layer">
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={2} y={60.4} width={10} height={129.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M2,65.4A 5,5,0,0,1,7,60.4L 7,60.4A 5,5,0,0,1,\n        12,65.4L 12,185A 5,5,0,0,1,\n        7,190L 7,190A 5,5,0,0,1,\n        2,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={16.9808} y={67.6} width={10} height={122.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M16.9808,72.6A 5,5,0,0,1,21.9808,67.6L 21.9808,67.6A 5,5,0,0,1,\n        26.9808,72.6L 26.9808,185A 5,5,0,0,1,\n        21.9808,190L 21.9808,190A 5,5,0,0,1,\n        16.9808,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={31.9615} y={150.4} width={10} height={39.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M31.9615,155.4A 5,5,0,0,1,36.9615,150.4L 36.9615,150.4A 5,5,0,0,1,\n        41.9615,155.4L 41.9615,185A 5,5,0,0,1,\n        36.9615,190L 36.9615,190A 5,5,0,0,1,\n        31.9615,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={46.9423} y={157.6} width={10} height={32.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M46.9423,162.6A 5,5,0,0,1,51.9423,157.6L 51.9423,157.6A 5,5,0,0,1,\n        56.9423,162.6L 56.9423,185A 5,5,0,0,1,\n        51.9423,190L 51.9423,190A 5,5,0,0,1,\n        46.9423,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={61.9231} y={80.2} width={10} height={109.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M61.9231,85.2A 5,5,0,0,1,66.9231,80.2L 66.9231,80.2A 5,5,0,0,1,\n        71.9231,85.2L 71.9231,185A 5,5,0,0,1,\n        66.9231,190L 66.9231,190A 5,5,0,0,1,\n        61.9231,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={76.9038} y={62.2} width={10} height={127.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M76.9038,67.2A 5,5,0,0,1,81.9038,62.2L 81.9038,62.2A 5,5,0,0,1,\n        86.9038,67.2L 86.9038,185A 5,5,0,0,1,\n        81.9038,190L 81.9038,190A 5,5,0,0,1,\n        76.9038,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={91.8846} y={154} width={10} height={36} fill="var(--color-zinc-300)" opacity={0.62} d={"M91.8846,159A 5,5,0,0,1,96.8846,154L 96.8846,154A 5,5,0,0,1,\n        101.8846,159L 101.8846,185A 5,5,0,0,1,\n        96.8846,190L 96.8846,190A 5,5,0,0,1,\n        91.8846,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={106.8654} y={143.2} width={10} height={46.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M106.8654,148.2A 5,5,0,0,1,111.8654,143.2L 111.8654,143.2A 5,5,0,0,1,\n        116.8654,148.2L 116.8654,185A 5,5,0,0,1,\n        111.8654,190L 111.8654,190A 5,5,0,0,1,\n        106.8654,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={121.8462} y={134.2} width={10} height={55.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M121.8462,139.2A 5,5,0,0,1,126.8462,134.2L 126.8462,134.2A 5,5,0,0,1,\n        131.8462,139.2L 131.8462,185A 5,5,0,0,1,\n        126.8462,190L 126.8462,190A 5,5,0,0,1,\n        121.8462,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={136.8269} y={64} width={10} height={126} fill="var(--color-zinc-300)" opacity={0.62} d={"M136.8269,69A 5,5,0,0,1,141.8269,64L 141.8269,64A 5,5,0,0,1,\n        146.8269,69L 146.8269,185A 5,5,0,0,1,\n        141.8269,190L 141.8269,190A 5,5,0,0,1,\n        136.8269,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={151.8077} y={107.2} width={10} height={82.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M151.8077,112.2A 5,5,0,0,1,156.8077,107.2L 156.8077,107.2A 5,5,0,0,1,\n        161.8077,112.2L 161.8077,185A 5,5,0,0,1,\n        156.8077,190L 156.8077,190A 5,5,0,0,1,\n        151.8077,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={166.7885} y={31.6} width={10} height={158.4} fill="var(--color-red-500)" opacity={1} d={"M166.7885,36.6A 5,5,0,0,1,171.7885,31.6L 171.7885,31.6A 5,5,0,0,1,\n        176.7885,36.6L 176.7885,185A 5,5,0,0,1,\n        171.7885,190L 171.7885,190A 5,5,0,0,1,\n        166.7885,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={181.7692} y={119.8} width={10} height={70.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M181.7692,124.8A 5,5,0,0,1,186.7692,119.8L 186.7692,119.8A 5,5,0,0,1,\n        191.7692,124.8L 191.7692,185A 5,5,0,0,1,\n        186.7692,190L 186.7692,190A 5,5,0,0,1,\n        181.7692,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={196.75} y={145} width={10} height={45} fill="var(--color-zinc-300)" opacity={0.62} d={"M196.75,150A 5,5,0,0,1,201.75,145L 201.75,145A 5,5,0,0,1,\n        206.75,150L 206.75,185A 5,5,0,0,1,\n        201.75,190L 201.75,190A 5,5,0,0,1,\n        196.75,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={211.7308} y={168.4} width={10} height={21.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M211.7308,173.4A 5,5,0,0,1,216.7308,168.4L 216.7308,168.4A 5,5,0,0,1,\n        221.7308,173.4L 221.7308,185A 5,5,0,0,1,\n        216.7308,190L 216.7308,190A 5,5,0,0,1,\n        211.7308,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={226.7115} y={130.6} width={10} height={59.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M226.7115,135.6A 5,5,0,0,1,231.7115,130.6L 231.7115,130.6A 5,5,0,0,1,\n        236.7115,135.6L 236.7115,185A 5,5,0,0,1,\n        231.7115,190L 231.7115,190A 5,5,0,0,1,\n        226.7115,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={241.6923} y={157.6} width={10} height={32.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M241.6923,162.6A 5,5,0,0,1,246.6923,157.6L 246.6923,157.6A 5,5,0,0,1,\n        251.6923,162.6L 251.6923,185A 5,5,0,0,1,\n        246.6923,190L 246.6923,190A 5,5,0,0,1,\n        241.6923,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={256.6731} y={139.6} width={10} height={50.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M256.6731,144.6A 5,5,0,0,1,261.6731,139.6L 261.6731,139.6A 5,5,0,0,1,\n        266.6731,144.6L 266.6731,185A 5,5,0,0,1,\n        261.6731,190L 261.6731,190A 5,5,0,0,1,\n        256.6731,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={271.6538} y={114.4} width={10} height={75.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M271.6538,119.4A 5,5,0,0,1,276.6538,114.4L 276.6538,114.4A 5,5,0,0,1,\n        281.6538,119.4L 281.6538,185A 5,5,0,0,1,\n        276.6538,190L 276.6538,190A 5,5,0,0,1,\n        271.6538,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={286.6346} y={125.2} width={10} height={64.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M286.6346,130.2A 5,5,0,0,1,291.6346,125.2L 291.6346,125.2A 5,5,0,0,1,\n        296.6346,130.2L 296.6346,185A 5,5,0,0,1,\n        291.6346,190L 291.6346,190A 5,5,0,0,1,\n        286.6346,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={301.6154} y={80.2} width={10} height={109.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M301.6154,85.2A 5,5,0,0,1,306.6154,80.2L 306.6154,80.2A 5,5,0,0,1,\n        311.6154,85.2L 311.6154,185A 5,5,0,0,1,\n        306.6154,190L 306.6154,190A 5,5,0,0,1,\n        301.6154,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={316.5962} y={67.6} width={10} height={122.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M316.5962,72.6A 5,5,0,0,1,321.5962,67.6L 321.5962,67.6A 5,5,0,0,1,\n        326.5962,72.6L 326.5962,185A 5,5,0,0,1,\n        321.5962,190L 321.5962,190A 5,5,0,0,1,\n        316.5962,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={331.5769} y={56.8} width={10} height={133.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M331.5769,61.8A 5,5,0,0,1,336.5769,56.8L 336.5769,56.8A 5,5,0,0,1,\n        341.5769,61.8L 341.5769,185A 5,5,0,0,1,\n        336.5769,190L 336.5769,190A 5,5,0,0,1,\n        331.5769,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={346.5577} y={64} width={10} height={126} fill="var(--color-zinc-300)" opacity={0.62} d={"M346.5577,69A 5,5,0,0,1,351.5577,64L 351.5577,64A 5,5,0,0,1,\n        356.5577,69L 356.5577,185A 5,5,0,0,1,\n        351.5577,190L 351.5577,190A 5,5,0,0,1,\n        346.5577,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={361.5385} y={26.2} width={10} height={163.8} fill="var(--color-red-500)" opacity={1} d={"M361.5385,31.2A 5,5,0,0,1,366.5385,26.2L 366.5385,26.2A 5,5,0,0,1,\n        371.5385,31.2L 371.5385,185A 5,5,0,0,1,\n        366.5385,190L 366.5385,190A 5,5,0,0,1,\n        361.5385,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={376.5192} y={132.4} width={10} height={57.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M376.5192,137.4A 5,5,0,0,1,381.5192,132.4L 381.5192,132.4A 5,5,0,0,1,\n        386.5192,137.4L 386.5192,185A 5,5,0,0,1,\n        381.5192,190L 381.5192,190A 5,5,0,0,1,\n        376.5192,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={391.5} y={42.4} width={10} height={147.6} fill="var(--color-amber-500)" opacity={1} d={"M391.5,47.4A 5,5,0,0,1,396.5,42.4L 396.5,42.4A 5,5,0,0,1,\n        401.5,47.4L 401.5,185A 5,5,0,0,1,\n        396.5,190L 396.5,190A 5,5,0,0,1,\n        391.5,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={406.4808} y={71.2} width={10} height={118.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M406.4808,76.2A 5,5,0,0,1,411.4808,71.2L 411.4808,71.2A 5,5,0,0,1,\n        416.4808,76.2L 416.4808,185A 5,5,0,0,1,\n        411.4808,190L 411.4808,190A 5,5,0,0,1,\n        406.4808,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={421.4615} y={96.4} width={10} height={93.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M421.4615,101.4A 5,5,0,0,1,426.4615,96.4L 426.4615,96.4A 5,5,0,0,1,\n        431.4615,101.4L 431.4615,185A 5,5,0,0,1,\n        426.4615,190L 426.4615,190A 5,5,0,0,1,\n        421.4615,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={436.4423} y={53.2} width={10} height={136.8} fill="var(--color-amber-500)" opacity={1} d={"M436.4423,58.2A 5,5,0,0,1,441.4423,53.2L 441.4423,53.2A 5,5,0,0,1,\n        446.4423,58.2L 446.4423,185A 5,5,0,0,1,\n        441.4423,190L 441.4423,190A 5,5,0,0,1,\n        436.4423,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={451.4231} y={103.6} width={10} height={86.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M451.4231,108.6A 5,5,0,0,1,456.4231,103.6L 456.4231,103.6A 5,5,0,0,1,\n        461.4231,108.6L 461.4231,185A 5,5,0,0,1,\n        456.4231,190L 456.4231,190A 5,5,0,0,1,\n        451.4231,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={466.4038} y={127} width={10} height={63} fill="var(--color-zinc-300)" opacity={0.62} d={"M466.4038,132A 5,5,0,0,1,471.4038,127L 471.4038,127A 5,5,0,0,1,\n        476.4038,132L 476.4038,185A 5,5,0,0,1,\n        471.4038,190L 471.4038,190A 5,5,0,0,1,\n        466.4038,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={481.3846} y={64} width={10} height={126} fill="var(--color-zinc-300)" opacity={0.62} d={"M481.3846,69A 5,5,0,0,1,486.3846,64L 486.3846,64A 5,5,0,0,1,\n        491.3846,69L 491.3846,185A 5,5,0,0,1,\n        486.3846,190L 486.3846,190A 5,5,0,0,1,\n        481.3846,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={496.3654} y={78.4} width={10} height={111.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M496.3654,83.4A 5,5,0,0,1,501.3654,78.4L 501.3654,78.4A 5,5,0,0,1,\n        506.3654,83.4L 506.3654,185A 5,5,0,0,1,\n        501.3654,190L 501.3654,190A 5,5,0,0,1,\n        496.3654,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={511.3462} y={87.4} width={10} height={102.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M511.3462,92.4A 5,5,0,0,1,516.3462,87.4L 516.3462,87.4A 5,5,0,0,1,\n        521.3462,92.4L 521.3462,185A 5,5,0,0,1,\n        516.3462,190L 516.3462,190A 5,5,0,0,1,\n        511.3462,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={526.3269} y={101.8} width={10} height={88.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M526.3269,106.8A 5,5,0,0,1,531.3269,101.8L 531.3269,101.8A 5,5,0,0,1,\n        536.3269,106.8L 536.3269,185A 5,5,0,0,1,\n        531.3269,190L 531.3269,190A 5,5,0,0,1,\n        526.3269,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={541.3077} y={123.4} width={10} height={66.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M541.3077,128.4A 5,5,0,0,1,546.3077,123.4L 546.3077,123.4A 5,5,0,0,1,\n        551.3077,128.4L 551.3077,185A 5,5,0,0,1,\n        546.3077,190L 546.3077,190A 5,5,0,0,1,\n        541.3077,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={556.2885} y={85.6} width={10} height={104.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M556.2885,90.6A 5,5,0,0,1,561.2885,85.6L 561.2885,85.6A 5,5,0,0,1,\n        566.2885,90.6L 566.2885,185A 5,5,0,0,1,\n        561.2885,190L 561.2885,190A 5,5,0,0,1,\n        556.2885,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={571.2692} y={62.2} width={10} height={127.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M571.2692,67.2A 5,5,0,0,1,576.2692,62.2L 576.2692,62.2A 5,5,0,0,1,\n        581.2692,67.2L 581.2692,185A 5,5,0,0,1,\n        576.2692,190L 576.2692,190A 5,5,0,0,1,\n        571.2692,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={586.25} y={177.4} width={10} height={12.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M586.25,182.4A 5,5,0,0,1,591.25,177.4L 591.25,177.4A 5,5,0,0,1,\n        596.25,182.4L 596.25,185A 5,5,0,0,1,\n        591.25,190L 591.25,190A 5,5,0,0,1,\n        586.25,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={601.2308} y={170.2} width={10} height={19.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M601.2308,175.2A 5,5,0,0,1,606.2308,170.2L 606.2308,170.2A 5,5,0,0,1,\n        611.2308,175.2L 611.2308,185A 5,5,0,0,1,\n        606.2308,190L 606.2308,190A 5,5,0,0,1,\n        601.2308,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={616.2115} y={65.8} width={10} height={124.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M616.2115,70.8A 5,5,0,0,1,621.2115,65.8L 621.2115,65.8A 5,5,0,0,1,\n        626.2115,70.8L 626.2115,185A 5,5,0,0,1,\n        621.2115,190L 621.2115,190A 5,5,0,0,1,\n        616.2115,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={631.1923} y={128.8} width={10} height={61.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M631.1923,133.8A 5,5,0,0,1,636.1923,128.8L 636.1923,128.8A 5,5,0,0,1,\n        641.1923,133.8L 641.1923,185A 5,5,0,0,1,\n        636.1923,190L 636.1923,190A 5,5,0,0,1,\n        631.1923,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={646.1731} y={139.6} width={10} height={50.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M646.1731,144.6A 5,5,0,0,1,651.1731,139.6L 651.1731,139.6A 5,5,0,0,1,\n        656.1731,144.6L 656.1731,185A 5,5,0,0,1,\n        651.1731,190L 651.1731,190A 5,5,0,0,1,\n        646.1731,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={661.1538} y={118} width={10} height={72} fill="var(--color-zinc-300)" opacity={0.62} d={"M661.1538,123A 5,5,0,0,1,666.1538,118L 666.1538,118A 5,5,0,0,1,\n        671.1538,123L 671.1538,185A 5,5,0,0,1,\n        666.1538,190L 666.1538,190A 5,5,0,0,1,\n        661.1538,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={676.1346} y={80.2} width={10} height={109.8} fill="var(--color-zinc-300)" opacity={0.62} d={"M676.1346,85.2A 5,5,0,0,1,681.1346,80.2L 681.1346,80.2A 5,5,0,0,1,\n        686.1346,85.2L 686.1346,185A 5,5,0,0,1,\n        681.1346,190L 681.1346,190A 5,5,0,0,1,\n        676.1346,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={691.1154} y={159.4} width={10} height={30.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M691.1154,164.4A 5,5,0,0,1,696.1154,159.4L 696.1154,159.4A 5,5,0,0,1,\n        701.1154,164.4L 701.1154,185A 5,5,0,0,1,\n        696.1154,190L 696.1154,190A 5,5,0,0,1,\n        691.1154,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={706.0962} y={91} width={10} height={99} fill="var(--color-zinc-300)" opacity={0.62} d={"M706.0962,96A 5,5,0,0,1,711.0962,91L 711.0962,91A 5,5,0,0,1,\n        716.0962,96L 716.0962,185A 5,5,0,0,1,\n        711.0962,190L 711.0962,190A 5,5,0,0,1,\n        706.0962,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={721.0769} y={74.8} width={10} height={115.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M721.0769,79.8A 5,5,0,0,1,726.0769,74.8L 726.0769,74.8A 5,5,0,0,1,\n        731.0769,79.8L 731.0769,185A 5,5,0,0,1,\n        726.0769,190L 726.0769,190A 5,5,0,0,1,\n        721.0769,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={736.0577} y={155.8} width={10} height={34.2} fill="var(--color-zinc-300)" opacity={0.62} d={"M736.0577,160.8A 5,5,0,0,1,741.0577,155.8L 741.0577,155.8A 5,5,0,0,1,\n        746.0577,160.8L 746.0577,185A 5,5,0,0,1,\n        741.0577,190L 741.0577,190A 5,5,0,0,1,\n        736.0577,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={751.0385} y={76.6} width={10} height={113.4} fill="var(--color-zinc-300)" opacity={0.62} d={"M751.0385,81.6A 5,5,0,0,1,756.0385,76.6L 756.0385,76.6A 5,5,0,0,1,\n        761.0385,81.6L 761.0385,185A 5,5,0,0,1,\n        756.0385,190L 756.0385,190A 5,5,0,0,1,\n        751.0385,185Z"}></path>
                                  </g>
                                </g>
                                <g className="recharts-bar-rectangle recharts-layer">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-rectangle" name="Load" x={766.0192} y={69.4} width={10} height={120.6} fill="var(--color-zinc-300)" opacity={0.62} d={"M766.0192,74.4A 5,5,0,0,1,771.0192,69.4L 771.0192,69.4A 5,5,0,0,1,\n        776.0192,74.4L 776.0192,185A 5,5,0,0,1,\n        771.0192,190L 771.0192,190A 5,5,0,0,1,\n        766.0192,185Z"}></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                          <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                            <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                              <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                          <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={779} stroke="none" fontSize="10" x={7.490384615384615} y={206} textAnchor="middle" fill="#666">
                                <tspan x={7.490384615384615} dy="0.71em">
                                  {"N00"}
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-cartesian-axis-tick-label recharts-layer">
                              <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={779} stroke="none" fontSize="10" x={396.99038461538464} y={206} textAnchor="middle" fill="#666">
                                <tspan x={396.99038461538464} dy="0.71em">
                                  {"N26"}
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0 relative" size="default">
            <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
            <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
            <CardContent className="p-4 space-y-5">
              <div className="space-y-0.5">
                <h2 className="font-semibold leading-4 text-sm">
                  {"Active Lanes"}
                </h2>
                <p className="leading-4 text-muted-foreground text-xs">
                  {"Threat Queue"}
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2.5">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="min-w-0 space-y-1">
                      <div className="flex gap-2 items-center min-w-0">
                        <span className="bg-red-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <span className="font-medium text-sm truncate">
                          {"[00] API Flood"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                        <span>
                          {"Edge WAF"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          {"Mitigating"}
                        </span>
                      </div>
                    </div>
                    <div className="font-semibold tabular-nums text-right text-sm">
                      {"4,521"}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                      <div className="bg-red-500 h-full rounded-full" style={{width: "92%"}}></div>
                    </div>
                    <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                      {"92%"}
                    </span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="min-w-0 space-y-1">
                      <div className="flex gap-2 items-center min-w-0">
                        <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <span className="font-medium text-sm truncate">
                          {"[01] Mail Spoof"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                        <span>
                          {"Mail Relay"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          {"Reviewing"}
                        </span>
                      </div>
                    </div>
                    <div className="font-semibold tabular-nums text-right text-sm">
                      {"3,102"}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                      <div className="bg-amber-500 h-full rounded-full" style={{width: "64%"}}></div>
                    </div>
                    <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                      {"64%"}
                    </span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="min-w-0 space-y-1">
                      <div className="flex gap-2 items-center min-w-0">
                        <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <span className="font-medium text-sm truncate">
                          {"[02] Cloud Probe"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                        <span>
                          {"Cloud API"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          {"Queued"}
                        </span>
                      </div>
                    </div>
                    <div className="font-semibold tabular-nums text-right text-sm">
                      {"1,250"}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                      <div className="bg-blue-500 h-full rounded-full" style={{width: "26%"}}></div>
                    </div>
                    <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                      {"26%"}
                    </span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="min-w-0 space-y-1">
                      <div className="flex gap-2 items-center min-w-0">
                        <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                        <span className="font-medium text-sm truncate">
                          {"[03] Mesh Beacon"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                        <span>
                          {"Int Node"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          {"Watching"}
                        </span>
                      </div>
                    </div>
                    <div className="font-semibold tabular-nums text-right text-sm">
                      {"420"}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                      <div className="bg-emerald-500 h-full rounded-full" style={{width: "9%"}}></div>
                    </div>
                    <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                      {"9%"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
