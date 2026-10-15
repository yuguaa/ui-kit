import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="max-w-6xl w-full">
        <Frame className="min-w-0" spacing="default">
          <header className="flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="basis-60 flex gap-3 grow items-center min-w-0">
              <IconTile variant="frame" size="sm" aria-hidden="true">
                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
              </IconTile>
              <div className="flex flex-col gap-px min-w-0">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                  <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                    {"Webhook delivery success"}
                  </div>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    {"Paging"}
                  </Badge>
                </div>
                <div className="text-muted-foreground text-sm truncate">
                  {"99.9% target over 28 days"}
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Chart range" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={0} aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Last 24h" extracted="1">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"24h"}
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={-1} aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="Last 72h">
                  <span className="[text-box:trim-both_cap_alphabetic]">
                    {"72h"}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-bell-off" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellOffIcon" tabler="IconBellOff" hugeicons="NotificationOff03Icon" phosphor="BellSlashIcon" remixicon="RiNotificationOffLine" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"></path>
                  <path d="m2 2 20 20"></path>
                  <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"></path>
                </svg>
                {"Mute"}
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </header>
          <FramePanel className="@container/summary">
            <div className="@2xl/summary:grid-cols-2 @4xl/summary:divide-x @4xl/summary:gap-0 @4xl/summary:grid-cols-[15rem_minmax(0,1fr)_minmax(0,1.3fr)] gap-6 grid">
              <section className="@4xl/summary:pe-6 flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Last Hour"}
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold tabular-nums text-4xl text-destructive tracking-tight">
                    {"18×"}
                  </p>
                  <p className="text-muted-foreground text-pretty text-sm">
                    {"Over the page line this hour."}
                  </p>
                </div>
                <dl className="border-t gap-3 grid grid-cols-2 mt-auto pt-3">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <dt className="text-muted-foreground text-xs">
                      {"Budget left"}
                    </dt>
                    <dd className="font-medium tabular-nums text-sm">
                      {"74%"}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <dt className="text-muted-foreground text-xs">
                      {"Runs out in"}
                    </dt>
                    <dd className="font-medium tabular-nums text-sm">
                      {"1d 2h"}
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="@4xl/summary:px-6 flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Windows"}
                  </h4>
                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                    {"Log scale, 0.1× to 100×"}
                  </span>
                </div>
                <ul className="@4xl/summary:flex-1 @4xl/summary:justify-between flex flex-col gap-2.5">
                  <li className="gap-3 grid grid-cols-[2.5rem_minmax(0,1fr)_3rem] items-center text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">
                      {"5m"}
                    </span>
                    <svg className="block h-3.5 overflow-visible" width="100%" role="img" aria-label="5 minutes: 29×, over the page line">
                      <line x1={0} x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.12} strokeWidth={2} strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--muted-foreground)" strokeOpacity={0.45} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <svg x="71.94541640317499%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--destructive)" strokeOpacity={0.6} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <mask id="lollipop-r8" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="82.31542635123816%" cy="50%" r={6.25} fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="82.31542635123816%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.4} strokeWidth={2} mask="url(#lollipop-r8)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="82.31542635123816%" cy="50%" r={4.25} fill="var(--destructive)" stroke="var(--card)" strokeWidth={2} paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="font-medium tabular-nums text-right" aria-hidden="true">
                      {"29×"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[2.5rem_minmax(0,1fr)_3rem] items-center text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">
                      {"30m"}
                    </span>
                    <svg className="block h-3.5 overflow-visible" width="100%" role="img" aria-label="30 minutes: 25×, over the page line">
                      <line x1={0} x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.12} strokeWidth={2} strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--muted-foreground)" strokeOpacity={0.45} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <svg x="59.27170834612146%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--destructive)" strokeOpacity={0.6} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <mask id="lollipop-r9" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="79.64560399188706%" cy="50%" r={6.25} fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="79.64560399188706%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.4} strokeWidth={2} mask="url(#lollipop-r9)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="79.64560399188706%" cy="50%" r={4.25} fill="var(--destructive)" stroke="var(--card)" strokeWidth={2} paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="font-medium tabular-nums text-right" aria-hidden="true">
                      {"25×"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[2.5rem_minmax(0,1fr)_3rem] items-center text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">
                      {"1h"}
                    </span>
                    <svg className="block h-3.5 overflow-visible" width="100%" role="img" aria-label="1 hour: 18×, over the page line">
                      <line x1={0} x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.12} strokeWidth={2} strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--muted-foreground)" strokeOpacity={0.45} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <svg x="71.94541640317499%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--destructive)" strokeOpacity={0.6} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <mask id="lollipop-ra" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="75.52126929257219%" cy="50%" r={6.25} fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="75.52126929257219%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.4} strokeWidth={2} mask="url(#lollipop-ra)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="75.52126929257219%" cy="50%" r={4.25} fill="var(--destructive)" stroke="var(--card)" strokeWidth={2} paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="font-medium tabular-nums text-right" aria-hidden="true">
                      {"18×"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[2.5rem_minmax(0,1fr)_3rem] items-center text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">
                      {"6h"}
                    </span>
                    <svg className="block h-3.5 overflow-visible" width="100%" role="img" aria-label="6 hours: 3.4×, over 1×">
                      <line x1={0} x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.12} strokeWidth={2} strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--muted-foreground)" strokeOpacity={0.45} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <svg x="59.27170834612146%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--destructive)" strokeOpacity={0.6} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <mask id="lollipop-rb" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="50.940889998644934%" cy="50%" r={6.25} fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="50.940889998644934%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.4} strokeWidth={2} mask="url(#lollipop-rb)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="50.940889998644934%" cy="50%" r={4.25} fill="var(--warning)" stroke="var(--card)" strokeWidth={2} paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="font-medium tabular-nums text-right" aria-hidden="true">
                      {"3.4×"}
                    </span>
                  </li>
                  <li className="gap-3 grid grid-cols-[2.5rem_minmax(0,1fr)_3rem] items-center text-sm">
                    <span className="text-muted-foreground" aria-hidden="true">
                      {"3d"}
                    </span>
                    <svg className="block h-3.5 overflow-visible" width="100%" role="img" aria-label="3 days: 0.70×, under 1×">
                      <line x1={0} x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity={0.12} strokeWidth={2} strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1={-5} y2={5} stroke="var(--muted-foreground)" strokeOpacity={0.45} strokeWidth={1.25} strokeDasharray="2 2"></line>
                      </svg>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="28.150608114071886%" cy="50%" r={4.25} fill="var(--muted-foreground)" stroke="var(--card)" strokeWidth={2} paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="font-medium tabular-nums text-right" aria-hidden="true">
                      {"0.70×"}
                    </span>
                  </li>
                </ul>
              </section>
              <section className="@2xl/summary:col-span-2 @4xl/summary:col-span-1 @4xl/summary:ps-6 @container/rules flex flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-center justify-between min-w-0">
                  <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                    {"Alert Rules"}
                  </h4>
                  <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                    {"Notifies #sre-oncall"}
                  </span>
                </div>
                <ItemGroup role="list">
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Fast Burn"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="@md/rules:shrink-0 min-w-0 truncate">
                          {"Pages when 1h and 5m pass 14.4×"}
                        </span>
                        <span className="@md/rules:block bg-muted-foreground/40 hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="@md/rules:inline hidden min-w-0 truncate">
                          {"spends 2.1% in 1h"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Firing"}
                      </Badge>
                    </ItemActions>
                  </Item>
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Medium Burn"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="@md/rules:shrink-0 min-w-0 truncate">
                          {"Pages when 6h and 30m pass 6×"}
                        </span>
                        <span className="@md/rules:block bg-muted-foreground/40 hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="@md/rules:inline hidden min-w-0 truncate">
                          {"spends 5.4% in 6h"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Clear"}
                      </Badge>
                    </ItemActions>
                  </Item>
                  <Item variant="outline" size="xs">
                    <ItemContent className="min-w-0">
                      <ItemTitle className="max-w-full min-w-0">
                        <span className="min-w-0 truncate">
                          {"Slow Burn"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="flex gap-1.5 items-center min-w-0 tabular-nums">
                        <span className="@md/rules:shrink-0 min-w-0 truncate">
                          {"Tickets when 3d and 6h pass 1×"}
                        </span>
                        <span className="@md/rules:block bg-muted-foreground/40 hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="@md/rules:inline hidden min-w-0 truncate">
                          {"spends 11% in 3d"}
                        </span>
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Clear"}
                      </Badge>
                    </ItemActions>
                  </Item>
                </ItemGroup>
              </section>
            </div>
          </FramePanel>
          <FramePanel>
            <section className="flex flex-col gap-3 min-w-0">
              <div className="flex gap-3 items-center justify-between min-w-0">
                <h4 className="font-medium shrink-0 text-muted-foreground text-xs">
                  {"Hourly Burn"}
                </h4>
                <span className="flex gap-1.5 items-center min-w-0 tabular-nums text-muted-foreground text-xs truncate">
                  <span className="shrink-0">
                    {"Last 72 hours"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"1 hour over the page line"}
                  </span>
                </span>
              </div>
              <div className="min-w-0" style={{opacity: "1"}}>
                <div className="flex flex-col h-60 min-w-0 relative">
                  <div className="-bottom-1.5 absolute bg-linear-to-b from-foreground/2 left-0 pointer-events-none to-foreground/8 top-3.5" aria-hidden="true" style={{width: "28px", borderRadius: "14px", transform: "translateX(1084.4px)"}}></div>
                  <div className="h-8 shrink-0" aria-hidden="true"></div>
                  <div className="flex-1 min-h-0 relative">
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden [&_.recharts-surface]:overflow-visible [&_[class*=recharts-zIndex-layer]]:outline-hidden absolute aspect-auto cn-chart flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring/50 focus-visible:outline-solid h-auto inset-0 justify-center min-w-0 outline-hidden text-xs" data-chart="chart-_r_d_" role="group" aria-label="Webhook delivery success burn rate by hour, last 72 hours: peak 18×, 1 hour over the 14.4× page line. Arrow keys move by hour." tabIndex={0}>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width={1118} height={176} style={{position: "relative", cursor: "default", width: "1118px", height: "176px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" width={1118} height={176} viewBox="0 0 1118 176" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                              <defs>
                                <clippath id="recharts1-clip">
                                  <rect x={12} y={4} height={168} width={1094}></rect>
                                </clippath>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_200" tabIndex={-1}>
                                <g className="recharts-layer recharts-reference-line">
                                  <line className="recharts-reference-line-line" y={1.1583624920952498} stroke="var(--destructive)" strokeOpacity={0.6} strokeDasharray="4 4" fill="none" fillOpacity={1} strokeWidth={1} x1={12} y1={26.658182018862796} x2={1106} y2={26.658182018862796}></line>
                                </g>
                                <g className="recharts-layer recharts-reference-line">
                                  <line className="recharts-reference-line-line" y={0} stroke="var(--foreground)" strokeOpacity={0.2} fill="none" fillOpacity={1} strokeWidth={1} x1={12} y1={155.20000000000002} x2={1106} y2={155.20000000000002}></line>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_e_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={19.519444444444446} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={34.71388888888889} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={49.90833333333333} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={65.10277777777779} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={80.29722222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={95.49166666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={110.68611111111112} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={125.88055555555556} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={141.075} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={156.26944444444445} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={171.4638888888889} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={186.65833333333333} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={201.8527777777778} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={217.04722222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={232.24166666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={247.4361111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={262.63055555555553} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={277.825} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={293.01944444444445} x2={293.01944444444445} y1={155.20000000000002} y2={86.25436604753236} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={293.01944444444445} cy={79.25436604753236} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={308.2138888888889} x2={308.2138888888889} y1={155.20000000000002} y2={128.0839725262113} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={308.2138888888889} cy={121.0839725262113} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={323.40833333333336} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={338.60277777777776} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={353.7972222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={368.9916666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={384.18611111111113} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={399.3805555555556} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={414.575} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={429.76944444444445} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={444.9638888888889} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={460.15833333333336} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={475.35277777777776} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={490.5472222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={505.7416666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={520.9361111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={536.1305555555555} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={551.3249999999999} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={566.5194444444444} x2={566.5194444444444} y1={155.20000000000002} y2={130.7081705347912} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={566.5194444444444} cy={123.70817053479121} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={581.7138888888888} x2={581.7138888888888} y1={155.20000000000002} y2={129.79631242629188} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={581.7138888888888} cy={122.79631242629189} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={596.9083333333333} x2={596.9083333333333} y1={155.20000000000002} y2={134.06884861430632} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={596.9083333333333} cy={127.06884861430632} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={612.1027777777778} x2={612.1027777777778} y1={155.20000000000002} y2={129.3881545547191} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={612.1027777777778} cy={122.38815455471912} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={627.2972222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={642.4916666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={657.686111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={672.8805555555555} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={688.0749999999999} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={703.2694444444444} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={718.4638888888888} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={733.6583333333333} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={748.8527777777778} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={764.0472222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={779.2416666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={794.436111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={809.6305555555555} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={824.8249999999999} x2={824.8249999999999} y1={155.20000000000002} y2={105.68478959264375} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={824.8249999999999} cy={98.68478959264375} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <circle cx={840.0194444444444} cy={154.49728225002778} r={4} fill="var(--warning)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={855.2138888888888} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={870.4083333333333} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={885.6027777777778} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={900.7972222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={915.9916666666667} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={931.186111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={946.3805555555555} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={961.5749999999999} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={976.7694444444444} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={991.9638888888888} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1007.1583333333333} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1022.3527777777778} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1037.5472222222222} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1052.7416666666666} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1067.9361111111111} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <circle aria-hidden="true" cx={1083.1305555555555} cy={155.20000000000002} r={1.5} fill="var(--muted-foreground)" fillOpacity={0.5}></circle>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <g aria-hidden="true">
                                            <line x1={1098.325} x2={1098.325} y1={155.20000000000002} y2={22.753964616118527} stroke="var(--muted-foreground)" strokeOpacity={0.32} strokeWidth={1.5} strokeLinecap="round"></line>
                                            <circle cx={1098.325} cy={14.753964616118527} r={10} fill="var(--destructive)" fillOpacity={0.18}></circle>
                                            <circle cx={1098.325} cy={14.753964616118527} r={7} fill="var(--card)"></circle>
                                            <circle cx={1098.325} cy={14.753964616118527} r={5} fill="var(--destructive)"></circle>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                <text className="fill-destructive font-medium text-xs" aria-hidden="true" x={12} y={20.658182018862796} textAnchor="start" stroke="var(--card)" strokeWidth={4} strokeLinejoin="round" paint-order="stroke">
                                  {"Page 14.4×"}
                                </text>
                                <text className="fill-muted-foreground font-medium text-xs" aria-hidden="true" x={12} y={149.20000000000002} textAnchor="start" stroke="var(--card)" strokeWidth={4} strokeLinejoin="round" paint-order="stroke">
                                  {"Pace 1×"}
                                </text>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    </ChartContainer>
                  </div>
                  <div className="@container h-6 mt-2 relative shrink-0" aria-hidden="true">
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "65.1806px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "247.514px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "338.681px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "429.847px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "612.181px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "703.347px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "794.514px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "976.847px"}}></span>
                    <span className="-translate-1/2 absolute bg-muted-foreground/25 h-1.5 rounded-full top-1/2 w-px" style={{left: "1068.01px"}}></span>
                    <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-2 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 156.347px, -100% + 100cqw))"}}>
                      {"Sep 27"}
                    </span>
                    <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 521.014px, -100% + 100cqw))"}}>
                      {"28"}
                    </span>
                    <span className="absolute bg-muted flex font-medium h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-muted-foreground text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 885.681px, -100% + 100cqw))"}}>
                      {"29"}
                    </span>
                    <span className="absolute bg-foreground flex font-semibold h-6 items-center justify-center left-0 min-w-6 px-1 rounded-full tabular-nums text-background text-xs top-0 whitespace-nowrap" style={{transform: "translateX(clamp(0px, -50% + 1098.4px, -100% + 100cqw))"}}>
                      <span className="bg-background rounded-full size-1.5"></span>
                      <span className="sr-only">
                        {"Now"}
                      </span>
                    </span>
                  </div>
                  <div className="@container absolute h-7 inset-x-0 pointer-events-none top-1" aria-hidden="true">
                    <div className="absolute flex left-0 top-0" style={{transform: "translateX(clamp(0px, -50% + 1098.4px, -100% + 100cqw))"}}>
                      <span className="bg-foreground font-semibold gap-1.5 h-7 inline-flex items-center px-3 rounded-full tabular-nums text-background text-xs whitespace-nowrap" aria-hidden="true">
                        {"18×"}
                        <span className="bg-background/40 rounded-full size-1"></span>
                        <span className="font-medium text-background/65">
                          {"Now"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="sr-only" aria-live="polite"></p>
            </section>
          </FramePanel>
          <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-4 gap-y-1 items-center justify-between min-h-10 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) tabular-nums text-muted-foreground text-xs">
            <div className="flex flex-wrap gap-x-4 gap-y-1 items-center" aria-hidden="true">
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0" aria-hidden="true" width={12} height={12} viewBox="0 0 12 12">
                  <circle cx={6} cy={6} r={3} fill="var(--destructive)"></circle>
                </svg>
                {"Over page"}
              </span>
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0" aria-hidden="true" width={12} height={12} viewBox="0 0 12 12">
                  <circle cx={6} cy={6} r={3} fill="var(--warning)"></circle>
                </svg>
                {"Over pace"}
              </span>
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0" aria-hidden="true" width={12} height={12} viewBox="0 0 12 12">
                  <circle cx={6} cy={6} r={3} fill="var(--muted-foreground)"></circle>
                </svg>
                {"Under pace"}
              </span>
              <span className="flex gap-1.5 items-center">
                <svg className="shrink-0" aria-hidden="true" width={12} height={12} viewBox="0 0 12 12">
                  <line x1={0} x2={12} y1={6} y2={6} stroke="var(--destructive)" strokeWidth={1.5} strokeDasharray="3 1.5"></line>
                </svg>
                {"Page line"}
              </span>
            </div>
            <div className="flex gap-1.5 items-center min-w-0 sm:ms-auto">
              <span className="font-medium shrink-0 text-foreground">
                {"Sep 29, 14:20"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="min-w-0 truncate">
                <span className="font-mono text-foreground">
                  {"INC-2209"}
                </span>
                {"Webhook retry storm"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="shrink-0">
                {"2.7% of budget"}
              </span>
            </div>
          </footer>
        </Frame>
      </div>
    </div>
  )
}
