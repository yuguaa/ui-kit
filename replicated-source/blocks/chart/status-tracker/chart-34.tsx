import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="@container max-w-6xl w-full">
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-1 gap-3 items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M12 7v5l4 2"></path>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                  {"Run History"}
                </div>
                <div className="text-muted-foreground text-sm truncate">
                  <span className="gap-1.5 inline-flex items-center tabular-nums whitespace-nowrap">
                    {"7 cron jobs"}
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    {"As of Sep 29, 14:20 UTC"}
                  </span>
                </div>
              </div>
            </div>
          </header>
          <FramePanel className="@container/summary">
            <div className="@2xl/summary:grid-cols-2 @4xl/summary:divide-x @4xl/summary:gap-0 @4xl/summary:grid-cols-[14rem_minmax(0,1fr)_minmax(0,1.3fr)] gap-6 grid">
              <section className="@4xl/summary:pe-6 flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Success Rate"}
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold tabular-nums text-3xl tracking-tight">
                    {"93.5%"}
                  </p>
                  <p className="tabular-nums text-muted-foreground text-pretty text-sm">
                    {"130 of 139 timed runs succeeded across 7 jobs."}
                  </p>
                </div>
                <p className="mt-auto tabular-nums text-muted-foreground text-pretty text-xs">
                  <span className="font-medium text-foreground">
                    {"88.6%"}
                  </span>
                  {"over each job's newest 10 runs, down from 98.6%"}
                </p>
              </section>
              <section className="@4xl/summary:px-6 flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Outcomes"}
                  </h4>
                  <span className="min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                    {"140 runs"}
                  </span>
                </div>
                <div className="flex gap-0.5 h-2" aria-hidden="true">
                  <span className="basis-0 bg-success/40 min-w-1" style={{flexGrow: "130"}}></span>
                  <span className="basis-0 bg-destructive min-w-1" style={{flexGrow: "7"}}></span>
                  <span className="basis-0 bg-warning min-w-1" style={{flexGrow: "2"}}></span>
                  <span className="basis-0 bg-info/40 dark:bg-info/70 min-w-1" style={{flexGrow: "1"}}></span>
                </div>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-3 items-center justify-between text-sm">
                    <span className="flex gap-2 items-center min-w-0">
                      <span className="bg-success/40 shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="text-muted-foreground truncate">
                        {"Succeeded"}
                      </span>
                    </span>
                    <span className="font-medium tabular-nums">
                      {"130"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-center justify-between text-sm">
                    <span className="flex gap-2 items-center min-w-0">
                      <span className="bg-destructive shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="text-muted-foreground truncate">
                        {"Failed"}
                      </span>
                    </span>
                    <span className="font-medium tabular-nums">
                      {"7"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-center justify-between text-sm">
                    <span className="flex gap-2 items-center min-w-0">
                      <span className="bg-warning shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="text-muted-foreground truncate">
                        {"Timed Out"}
                      </span>
                    </span>
                    <span className="font-medium tabular-nums">
                      {"2"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-center justify-between text-sm">
                    <span className="flex gap-2 items-center min-w-0">
                      <span className="bg-info/40 dark:bg-info/70 shrink-0 size-2.5" aria-hidden="true"></span>
                      <span className="text-muted-foreground truncate">
                        {"Skipped"}
                      </span>
                    </span>
                    <span className="font-medium tabular-nums">
                      {"1"}
                    </span>
                  </li>
                </ul>
              </section>
              <section className="@2xl/summary:col-span-2 @4xl/summary:col-span-1 @4xl/summary:ps-6 flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Failing Jobs"}
                  </h4>
                  <span className="min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                    {"3 of 7 jobs"}
                  </span>
                </div>
                <ItemGroup className="gap-2" role="list">
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Import bank settlement files"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="shrink-0">
                          {"4 in a row"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"exit 137"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Failed"}
                      </Badge>
                    </ItemActions>
                  </Item>
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Drain webhook retry queue"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="shrink-0">
                          {"2 in a row"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"exit 1"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Failed"}
                      </Badge>
                    </ItemActions>
                  </Item>
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Rebuild merchant search index"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="shrink-0">
                          {"2 in a row"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"killed at 1h 00m"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"Timed Out"}
                      </Badge>
                    </ItemActions>
                  </Item>
                </ItemGroup>
              </section>
            </div>
          </FramePanel>
          <FramePanel className="@container/runs p-0">
            <Item className="@3xl/runs:flex font-medium hidden px-(--frame-panel-px) text-muted-foreground text-xs" variant="default" size="sm" aria-hidden="true">
              <span className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 flex-1">
                {"Job"}
              </span>
              <span className="shrink-0 w-36">
                {"Last Run"}
              </span>
              <span className="@3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full flex gap-3 justify-between min-w-0 order-last">
                <span>
                  {"Last 20 Runs"}
                </span>
                <span className="font-normal">
                  {"Oldest to newest"}
                </span>
              </span>
              <span className="ms-auto shrink-0 text-right w-20">
                {"Success"}
              </span>
            </Item>
            <ItemSeparator className="@3xl/runs:block bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px hidden my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <ItemGroup className="gap-0" role="list">
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Drain webhook retry queue"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"retries:drain --max=5000"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      {"Failed"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"5m ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"52s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Drain webhook retry queue, last 20 runs, oldest first: 90.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:40 UTC, Succeeded" id="base-ui-_r_1_" style={{gridColumnStart: "1"}} extracted="1">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "91.8033%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:45 UTC, Succeeded" id="base-ui-_r_3_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "72.1311%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:50 UTC, Succeeded" id="base-ui-_r_5_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.9672%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:55 UTC, Succeeded" id="base-ui-_r_7_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "93.4426%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:00 UTC, Succeeded" id="base-ui-_r_9_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "73.7705%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:05 UTC, Succeeded" id="base-ui-_r_b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "83.6066%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:10 UTC, Succeeded" id="base-ui-_r_d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.082%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:15 UTC, Succeeded" id="base-ui-_r_f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "75.4098%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:20 UTC, Succeeded" id="base-ui-_r_h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "86.8852%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:25 UTC, Succeeded" id="base-ui-_r_j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "96.7213%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:30 UTC, Succeeded" id="base-ui-_r_l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.0492%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:35 UTC, Succeeded" id="base-ui-_r_n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "88.5246%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:40 UTC, Succeeded" id="base-ui-_r_p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "98.3607%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:45 UTC, Succeeded" id="base-ui-_r_r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "78.6885%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:50 UTC, Succeeded" id="base-ui-_r_t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.1639%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:55 UTC, Succeeded" id="base-ui-_r_v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 14:00 UTC, Succeeded" id="base-ui-_r_11_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "80.3279%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 14:05 UTC, Succeeded" id="base-ui-_r_13_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "91.8033%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 14:10 UTC, Failed" id="base-ui-_r_15_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "85.2459%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 29, 14:15 UTC, Failed" id="base-ui-_r_17_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "85.2459%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"90.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 1m 00s"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Import bank settlement files"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"settlements:import --banks=all"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      {"Failed"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"50m ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"4m 12s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Import bank settlement files, last 20 runs, oldest first: 80.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 19:30 UTC, Succeeded" id="base-ui-_r_19_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "94.9495%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 20:30 UTC, Succeeded" id="base-ui-_r_1b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "74.7475%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 21:30 UTC, Succeeded" id="base-ui-_r_1d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.8586%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 22:30 UTC, Succeeded" id="base-ui-_r_1f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "96.633%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 23:30 UTC, Succeeded" id="base-ui-_r_1h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "76.431%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 00:30 UTC, Succeeded" id="base-ui-_r_1j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "87.5421%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 01:30 UTC, Succeeded" id="base-ui-_r_1l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "98.3165%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 02:30 UTC, Succeeded" id="base-ui-_r_1n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "78.1145%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 03:30 UTC, Succeeded" id="base-ui-_r_1p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "89.2256%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 04:30 UTC, Succeeded" id="base-ui-_r_1r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 05:30 UTC, Succeeded" id="base-ui-_r_1t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "79.798%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 06:30 UTC, Succeeded" id="base-ui-_r_1v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.9091%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 07:30 UTC, Succeeded" id="base-ui-_r_21_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.3704%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 08:30 UTC, Succeeded" id="base-ui-_r_23_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.4815%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 09:30 UTC, Succeeded" id="base-ui-_r_25_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "92.5926%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:30 UTC, Succeeded" id="base-ui-_r_27_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "72.0539%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:30 UTC, Failed" id="base-ui-_r_29_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "84.8485%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:05 UTC, Failed" id="base-ui-_r_2b_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "84.8485%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:30 UTC, Failed" id="base-ui-_r_2d_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "84.8485%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 29, 13:30 UTC, Failed" id="base-ui-_r_2f_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "84.8485%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"80.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 4m 52s"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Rebuild merchant search index"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"reindex merchants --shards=12"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                      {"Timed Out"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"10h 50m ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"1h 00m"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Rebuild merchant search index, last 20 runs, oldest first: 90.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 10, 03:30 UTC, Succeeded" id="base-ui-_r_2h_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "74.6667%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 11, 03:30 UTC, Succeeded" id="base-ui-_r_2j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 12, 03:30 UTC, Succeeded" id="base-ui-_r_2l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "65.9444%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 13, 03:30 UTC, Succeeded" id="base-ui-_r_2n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "76.2778%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 14, 03:30 UTC, Succeeded" id="base-ui-_r_2p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "86.5833%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 15, 03:30 UTC, Succeeded" id="base-ui-_r_2r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "67.5278%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 16, 03:30 UTC, Succeeded" id="base-ui-_r_2t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.8611%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 17, 03:30 UTC, Succeeded" id="base-ui-_r_2v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "88.1944%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 18, 03:30 UTC, Succeeded" id="base-ui-_r_31_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "69.1111%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 19, 03:30 UTC, Succeeded" id="base-ui-_r_33_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "79.4444%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 20, 03:30 UTC, Succeeded" id="base-ui-_r_35_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "89.7778%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 21, 03:30 UTC, Succeeded" id="base-ui-_r_37_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.6944%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 22, 03:30 UTC, Succeeded" id="base-ui-_r_39_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.0278%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 23, 03:30 UTC, Succeeded" id="base-ui-_r_3b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "91.3611%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 24, 03:30 UTC, Succeeded" id="base-ui-_r_3d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "72.3056%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 25, 03:30 UTC, Succeeded" id="base-ui-_r_3f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "82.6111%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 26, 03:30 UTC, Succeeded" id="base-ui-_r_3h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "92.9444%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 27, 03:30 UTC, Succeeded" id="base-ui-_r_3j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "73.8889%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 28, 03:30 UTC, Timed Out" id="base-ui-_r_3l_">
                    <span className="bg-warning w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 29, 03:30 UTC, Timed Out" id="base-ui-_r_3n_">
                    <span className="bg-warning w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"90.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 1h 00m"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Expire stale payout holds"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"holds:expire --older-than=72h"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Succeeded"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"5m ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"20s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Expire stale payout holds, last 20 runs, oldest first: 100.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 09:30 UTC, Succeeded" id="base-ui-_r_3p_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "71.4286%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 09:45 UTC, Succeeded" id="base-ui-_r_3r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.7143%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:00 UTC, Succeeded" id="base-ui-_r_3t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.2381%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:15 UTC, Succeeded" id="base-ui-_r_3v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "76.1905%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:30 UTC, Succeeded" id="base-ui-_r_41_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.7143%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:45 UTC, Succeeded" id="base-ui-_r_43_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.2381%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:00 UTC, Succeeded" id="base-ui-_r_45_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "76.1905%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:15 UTC, Succeeded" id="base-ui-_r_47_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.7143%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:30 UTC, Succeeded" id="base-ui-_r_49_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:45 UTC, Skipped" id="base-ui-_r_4b_">
                    <span className="bg-info/40 dark:bg-info/70 w-full" aria-hidden="true" style={{height: "12%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:00 UTC, Succeeded" id="base-ui-_r_4d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.4762%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:15 UTC, Succeeded" id="base-ui-_r_4f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:30 UTC, Succeeded" id="base-ui-_r_4h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "80.9524%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:45 UTC, Succeeded" id="base-ui-_r_4j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.4762%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:00 UTC, Succeeded" id="base-ui-_r_4l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "71.4286%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:15 UTC, Succeeded" id="base-ui-_r_4n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "80.9524%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:30 UTC, Succeeded" id="base-ui-_r_4p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.4762%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:45 UTC, Succeeded" id="base-ui-_r_4r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "71.4286%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 14:00 UTC, Succeeded" id="base-ui-_r_4t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "80.9524%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 29, 14:15 UTC, Succeeded" id="base-ui-_r_4v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.2381%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"100.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 21s"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Retry failed payouts"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"payouts:retry --max-attempts=3"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Succeeded"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"20m ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"1m 57s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Retry failed payouts, last 20 runs, oldest first: 95.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 04:30 UTC, Succeeded" id="base-ui-_r_51_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.9661%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 05:00 UTC, Succeeded" id="base-ui-_r_53_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "88.9831%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 05:30 UTC, Succeeded" id="base-ui-_r_55_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 06:00 UTC, Succeeded" id="base-ui-_r_57_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "79.661%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 06:30 UTC, Succeeded" id="base-ui-_r_59_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.678%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 07:00 UTC, Succeeded" id="base-ui-_r_5b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.339%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 07:30 UTC, Succeeded" id="base-ui-_r_5d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.3559%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 08:00 UTC, Succeeded" id="base-ui-_r_5f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "92.3729%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 08:30 UTC, Failed" id="base-ui-_r_5h_">
                    <span className="bg-destructive w-full" aria-hidden="true" style={{height: "84.7458%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 09:00 UTC, Succeeded" id="base-ui-_r_5j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "83.0508%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 09:30 UTC, Succeeded" id="base-ui-_r_5l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "94.0678%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:00 UTC, Succeeded" id="base-ui-_r_5n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "73.7288%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 10:30 UTC, Succeeded" id="base-ui-_r_5p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "84.7458%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:00 UTC, Succeeded" id="base-ui-_r_5r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.7627%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 11:30 UTC, Succeeded" id="base-ui-_r_5t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "75.4237%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:00 UTC, Succeeded" id="base-ui-_r_5v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "86.4407%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 12:30 UTC, Succeeded" id="base-ui-_r_61_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "97.4576%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:00 UTC, Succeeded" id="base-ui-_r_63_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.1186%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 29, 13:30 UTC, Succeeded" id="base-ui-_r_65_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "88.1356%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 29, 14:00 UTC, Succeeded" id="base-ui-_r_67_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "99.1525%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"95.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 1m 57s"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="opacity-55 px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Compact ledger partitions"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      {"Paused"}
                    </Badge>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"partitions:compact --keep=90d"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Succeeded"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"9d ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"47m 28s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Compact ledger partitions, last 20 runs, oldest first: 100.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 10, 03:00 UTC, Succeeded" id="base-ui-_r_69_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "96.605%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 17, 03:00 UTC, Succeeded" id="base-ui-_r_6b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "76.0837%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 24, 03:00 UTC, Succeeded" id="base-ui-_r_6d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "87.1779%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 31, 03:00 UTC, Succeeded" id="base-ui-_r_6f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "98.3025%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 7, 03:00 UTC, Succeeded" id="base-ui-_r_6h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.7811%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 14, 03:00 UTC, Succeeded" id="base-ui-_r_6j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "88.9057%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 21, 03:00 UTC, Succeeded" id="base-ui-_r_6l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 28, 03:00 UTC, Succeeded" id="base-ui-_r_6n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "79.5089%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 5, 03:00 UTC, Succeeded" id="base-ui-_r_6p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "90.6032%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 12, 03:00 UTC, Succeeded" id="base-ui-_r_6r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.0818%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 19, 03:00 UTC, Succeeded" id="base-ui-_r_6t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.2064%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 26, 03:00 UTC, Succeeded" id="base-ui-_r_6v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "92.331%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 2, 03:00 UTC, Succeeded" id="base-ui-_r_71_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "71.8096%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 9, 03:00 UTC, Succeeded" id="base-ui-_r_73_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "82.9039%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 16, 03:00 UTC, Succeeded" id="base-ui-_r_75_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "94.0285%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 23, 03:00 UTC, Succeeded" id="base-ui-_r_77_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "73.5071%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 30, 03:00 UTC, Succeeded" id="base-ui-_r_79_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "84.6317%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 6, 03:00 UTC, Succeeded" id="base-ui-_r_7b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.726%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 13, 03:00 UTC, Succeeded" id="base-ui-_r_7d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "75.2349%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 20, 03:00 UTC, Succeeded" id="base-ui-_r_7f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "86.3292%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"100.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 54m 03s"}
                    </span>
                  </div>
                </div>
              </Item>
              <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
                <ItemContent className="@3xl/runs:basis-auto @3xl/runs:flex-none @3xl/runs:w-60 basis-full gap-0.5 min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="min-w-0 truncate">
                      {"Rotate webhook signing keys"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="font-mono text-xs truncate">
                    {"keys:rotate --grace=48h"}
                  </ItemDescription>
                </ItemContent>
                <div className="shrink-0 w-36">
                  <div className="flex flex-col gap-0.5 items-start min-w-0">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Succeeded"}
                    </Badge>
                    <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs whitespace-nowrap">
                      {"1d ago"}
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      {"46s"}
                    </span>
                  </div>
                </div>
                <div className="-mx-0.5 @3xl/runs:-mx-0.75 @3xl/runs:basis-0 @3xl/runs:flex-1 @3xl/runs:order-none basis-full grid grid-cols-20 group/strip h-10 min-w-0 order-last" role="group" aria-label="Rotate webhook signing keys, last 20 runs, oldest first: 100.0% succeeded">
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 18, 04:00 UTC, Succeeded" id="base-ui-_r_7h_" style={{gridColumnStart: "1"}}>
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "75%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="May 25, 04:00 UTC, Succeeded" id="base-ui-_r_7j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.4167%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 1, 04:00 UTC, Succeeded" id="base-ui-_r_7l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.8333%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 8, 04:00 UTC, Succeeded" id="base-ui-_r_7n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "75%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 15, 04:00 UTC, Succeeded" id="base-ui-_r_7p_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "87.5%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 22, 04:00 UTC, Succeeded" id="base-ui-_r_7r_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "97.9167%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jun 29, 04:00 UTC, Succeeded" id="base-ui-_r_7t_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "77.0833%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 6, 04:00 UTC, Succeeded" id="base-ui-_r_7v_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "89.5833%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 13, 04:00 UTC, Succeeded" id="base-ui-_r_81_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "100%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 20, 04:00 UTC, Succeeded" id="base-ui-_r_83_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "79.1667%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Jul 27, 04:00 UTC, Succeeded" id="base-ui-_r_85_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "89.5833%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 3, 04:00 UTC, Succeeded" id="base-ui-_r_87_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.8333%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 10, 04:00 UTC, Succeeded" id="base-ui-_r_89_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "81.25%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 17, 04:00 UTC, Succeeded" id="base-ui-_r_8b_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "91.6667%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 24, 04:00 UTC, Succeeded" id="base-ui-_r_8d_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "70.8333%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Aug 31, 04:00 UTC, Succeeded" id="base-ui-_r_8f_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "83.3333%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 7, 04:00 UTC, Succeeded" id="base-ui-_r_8h_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "93.75%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 14, 04:00 UTC, Succeeded" id="base-ui-_r_8j_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "72.9167%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="-1" aria-label="Sep 21, 04:00 UTC, Succeeded" id="base-ui-_r_8l_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "85.4167%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                  <HoverCard>
                  <HoverCardTrigger className="@3xl/runs:px-0.75 duration-150 flex focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring/50 group-hover/strip:opacity-40 h-full hover:opacity-100 items-end min-w-0 motion-reduce:transition-none px-0.5 transition-opacity" type="button" tabIndex="0" aria-label="Sep 28, 04:00 UTC, Succeeded" id="base-ui-_r_8n_">
                    <span className="bg-success/40 w-full" aria-hidden="true" style={{height: "95.8333%"}}></span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
                <div className="ms-auto shrink-0 text-right w-20">
                  <div className="flex flex-col gap-0.5 items-end tabular-nums">
                    <span className="font-medium text-sm">
                      {"100.0%"}
                    </span>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"p95 47s"}
                    </span>
                  </div>
                </div>
              </Item>
            </ItemGroup>
          </FramePanel>
          <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 items-center" aria-label="Bar tones">
              <li className="flex gap-1.5 items-center">
                <span className="bg-success/40 shrink-0 size-2.5" aria-hidden="true"></span>
                {"Succeeded"}
              </li>
              <li className="flex gap-1.5 items-center">
                <span className="bg-destructive shrink-0 size-2.5" aria-hidden="true"></span>
                {"Failed"}
              </li>
              <li className="flex gap-1.5 items-center">
                <span className="bg-warning shrink-0 size-2.5" aria-hidden="true"></span>
                {"Timed Out"}
              </li>
              <li className="flex gap-1.5 items-center">
                <span className="bg-info/40 dark:bg-info/70 shrink-0 size-2.5" aria-hidden="true"></span>
                {"Skipped"}
              </li>
            </ul>
            <span>
              {"Bar height is run duration"}
            </span>
          </footer>
        </Frame>
      </div>
    </div>
  )
}
