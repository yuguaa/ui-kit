import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:py-20 min-h-svh px-6 py-10 w-full">
      <Card className="@container max-w-3xl min-w-0 w-full" size="default">
        <CardHeader className="border-b">
          <CardTitle className="flex gap-2 items-center min-w-0">
            <span className="truncate">
              Pipeline Leakage
            </span>
          </CardTitle>
          <CardDescription className="col-start-1">
            Deals lost at each stage, by source
          </CardDescription>
          <CardAction className="@md/card-header:col-start-2 @md/card-header:justify-self-end @md/card-header:mt-0 @md/card-header:row-span-2 @md/card-header:row-start-1 col-start-1 justify-self-start mt-2 row-span-1 row-start-3">
            <div className="flex gap-2 items-center">
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Date range" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="30D, last 30 days" extracted="1">
                  30D
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="90D, last 90 days">
                  90D
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none tabular-nums text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="12M, last 12 months">
                  12M
                </ToggleGroupItem>
              </ToggleGroup>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chart options" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <dl className="@2xl:grid-cols-4 gap-x-6 gap-y-5 grid grid-cols-2">
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-2.5 min-w-0">
              <dt className="flex font-medium gap-1.5 h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                  Lead to Won
                </span>
              </dt>
              <dd className="flex flex-col gap-2.5 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  4.9%
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      +0.6 pts
                    </span>
                  </Badge>
                  <span className="@max-sm:sr-only [text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    vs prior 90D
                  </span>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-2.5 min-w-0">
              <dt className="flex font-medium gap-1.5 h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                  Leads
                </span>
              </dt>
              <dd className="flex flex-col gap-2.5 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  3,620
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      +1.7%
                    </span>
                  </Badge>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-2.5 min-w-0">
              <dt className="flex font-medium gap-1.5 h-4 items-center text-muted-foreground text-xs">
                <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                  Deals Won
                </span>
              </dt>
              <dd className="flex flex-col gap-2.5 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                  176
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    <span className="[text-box:trim-both_cap_alphabetic] tabular-nums">
                      +17%
                    </span>
                  </Badge>
                </span>
              </dd>
            </div>
            <div className="@2xl:not-first:border-s @2xl:not-first:ps-6 flex flex-col gap-2.5 min-w-0">
              <dt className="flex font-medium gap-1.5 h-4 items-center text-muted-foreground text-xs">
                <span className="bg-destructive h-3 rounded-full shrink-0 w-0.5" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis whitespace-nowrap">
                  Biggest Leak
                </span>
              </dt>
              <dd className="flex flex-col gap-2.5 min-w-0">
                <span className="font-semibold leading-none tabular-nums text-2xl text-destructive tracking-tight">
                  60%
                </span>
                <span className="flex gap-1.5 h-5 items-center min-w-0 text-xs">
                  <span className="[text-box:trim-both_cap_alphabetic] min-w-0 overflow-x-clip text-ellipsis text-muted-foreground whitespace-nowrap">
                    Proposal to Won
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </CardContent>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <CardContent>
          <div className="flex flex-col gap-2">
            <style>{`
@keyframes c53-leak {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
  16% { opacity: 0.9; }
  100% { opacity: 0; transform: translate(calc(-50% + var(--c53-dx)), calc(-50% + var(--c53-dy))) scale(1); }
}
@keyframes c53-appear { from { opacity: 0; } }
.c53-drops { animation: c53-appear 600ms ease-out backwards; }
.c53-drop { animation: c53-leak var(--c53-dur) cubic-bezier(0.4, 0, 1, 1) var(--c53-delay) infinite backwards; }
[data-c53-paused] .c53-drop { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .c53-drops { display: none; }
}
html[data-demo="frozen"] .c53-drops { display: none; }
`}</style>
            <ol className="grid" aria-hidden="true" style={{gridTemplateColumns: "repeat(6, minmax(0px, 1fr))"}}>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  Leads
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  100%
                </span>
              </li>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  MQL
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  50%
                </span>
              </li>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  SQL
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  30%
                </span>
              </li>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  Demo
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  21%
                </span>
              </li>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  Proposal
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  12%
                </span>
              </li>
              <li className="flex flex-col gap-0.5 items-center">
                <span className="duration-200 text-muted-foreground text-xs transition-colors whitespace-nowrap">
                  Won
                </span>
                <span className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] font-medium motion-reduce:transition-none opacity-100 tabular-nums text-sm transition-[opacity,translate,color]">
                  4.9%
                </span>
              </li>
            </ol>
            <div className="relative">
              <div className="absolute c53-drops inset-0 pointer-events-none" aria-hidden="true">
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "12.0604%", top: "16.0954px", "--c53-dx": "7.5200000000000005px", "--c53-dy": "-16.09543734583336px", "--c53-dur": "3.1s", "--c53-delay": "-0.37s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "12.4462%", top: "206.897px", "--c53-dx": "0.9599999999999982px", "--c53-dy": "17.10275329941925px", "--c53-dur": "2.3s", "--c53-delay": "-0.5469230769230768s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "14.3336%", top: "24.0546px", "--c53-dx": "10.400000000000002px", "--c53-dy": "-24.054567339447516px", "--c53-dur": "2.9s", "--c53-delay": "-0.8161538461538461s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "13.7868%", top: "202.316px", "--c53-dx": "3.8400000000000007px", "--c53-dy": "21.683524519064747px", "--c53-dur": "3.4s", "--c53-delay": "-1.1546153846153846s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "15.4701%", top: "29.8505px", "--c53-dx": "-2.7200000000000015px", "--c53-dy": "-29.850512519483758px", "--c53-dur": "2.7s", "--c53-delay": "-1.2007692307692308s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "15.7553%", top: "192.544px", "--c53-dx": "6.719999999999996px", "--c53-dy": "31.456286638094127px", "--c53-dur": "2.6s", "--c53-delay": "-1.37s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "16.5391%", top: "36.0477px", "--c53-dx": "0.16000000000000103px", "--c53-dy": "-25.26px", "--c53-dur": "3.1s", "--c53-delay": "-1.8007692307692307s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "16.8167%", top: "186.301px", "--c53-dx": "9.59999999999999px", "--c53-dy": "33.4px", "--c53-dur": "2.3s", "--c53-delay": "-1.6084615384615382s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "17.601%", top: "42.288px", "--c53-dx": "3.040000000000001px", "--c53-dy": "-19.54px", "--c53-dur": "2.9s", "--c53-delay": "-2.1546153846153846s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "17.8866%", top: "180.108px", "--c53-dx": "-3.5199999999999987px", "--c53-dy": "27.68px", "--c53-dur": "3.4s", "--c53-delay": "-2.7238461538461536s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "19.5733%", top: "52.0383px", "--c53-dx": "5.919999999999999px", "--c53-dy": "-35.82px", "--c53-dur": "2.7s", "--c53-delay": "-2.446923076923077s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "19.0252%", top: "174.325px", "--c53-dx": "-0.6399999999999997px", "--c53-dy": "21.96px", "--c53-dur": "2.6s", "--c53-delay": "-2.5700000000000003s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "20.9178%", top: "56.5956px", "--c53-dx": "8.800000000000008px", "--c53-dy": "-30.1px", "--c53-dur": "3.1s", "--c53-delay": "-3.2315384615384617s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "29.0733%", top: "63.64px", "--c53-dx": "3.8400000000000007px", "--c53-dy": "-22.84px", "--c53-dur": "2.3s", "--c53-delay": "-0.74s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "29.5908%", top: "159.733px", "--c53-dx": "-2.7200000000000015px", "--c53-dy": "30.979999999999997px", "--c53-dur": "2.9s", "--c53-delay": "-1.03s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "32.049%", top: "68.6625px", "--c53-dx": "6.719999999999996px", "--c53-dy": "-39.12px", "--c53-dur": "3.4s", "--c53-delay": "-1.42s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "31.3436%", top: "156.83px", "--c53-dx": "0.16000000000000103px", "--c53-dy": "25.26px", "--c53-dur": "2.7s", "--c53-delay": "-1.5500000000000003s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "33.5434%", top: "72.1896px", "--c53-dx": "9.59999999999999px", "--c53-dy": "-33.4px", "--c53-dur": "2.6s", "--c53-delay": "-1.78s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "32.881%", top: "153.407px", "--c53-dx": "3.040000000000001px", "--c53-dy": "19.54px", "--c53-dur": "3.1s", "--c53-delay": "-2.29s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "35.0613%", top: "75.6601px", "--c53-dx": "-3.5199999999999987px", "--c53-dy": "-27.68px", "--c53-dur": "2.3s", "--c53-delay": "-2.12s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "35.4851%", top: "147.486px", "--c53-dx": "5.919999999999999px", "--c53-dy": "35.82px", "--c53-dur": "2.9s", "--c53-delay": "-2.7700000000000005s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "36.7676%", top: "78.6752px", "--c53-dx": "-0.6399999999999997px", "--c53-dy": "-21.96px", "--c53-dur": "3.4s", "--c53-delay": "-3.46s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "37.2684%", top: "144.657px", "--c53-dx": "8.800000000000008px", "--c53-dy": "30.1px", "--c53-dur": "2.7s", "--c53-delay": "-3.17s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "46.1284%", top: "82.9254px", "--c53-dx": "0.16000000000000103px", "--c53-dy": "-25.26px", "--c53-dur": "2.9s", "--c53-delay": "-1.1099999999999999s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "46.7465%", top: "140.672px", "--c53-dx": "9.59999999999999px", "--c53-dy": "33.4px", "--c53-dur": "3.4s", "--c53-delay": "-1.535s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "48.303%", top: "84.6563px", "--c53-dx": "3.040000000000001px", "--c53-dy": "-19.54px", "--c53-dur": "2.7s", "--c53-delay": "-1.785s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "48.8137%", top: "138.819px", "--c53-dx": "-3.5199999999999987px", "--c53-dy": "27.68px", "--c53-dur": "2.6s", "--c53-delay": "-2.085s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "51.5295%", top: "88.1811px", "--c53-dx": "5.919999999999999px", "--c53-dy": "-35.82px", "--c53-dur": "3.1s", "--c53-delay": "-2.66s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "50.6764%", top: "136.732px", "--c53-dx": "-0.6399999999999997px", "--c53-dy": "21.96px", "--c53-dur": "2.3s", "--c53-delay": "-2.5475s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "53.6668%", top: "89.9545px", "--c53-dx": "8.800000000000008px", "--c53-dy": "-30.1px", "--c53-dur": "2.9s", "--c53-delay": "-3.2849999999999997s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "54.3129%", top: "133.675px", "--c53-dx": "2.2400000000000064px", "--c53-dy": "38.24px", "--c53-dur": "3.4s", "--c53-delay": "-4.085s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "62.5367%", top: "92.185px", "--c53-dx": "-3.5199999999999987px", "--c53-dy": "-27.68px", "--c53-dur": "3.4s", "--c53-delay": "-1.48s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "62.9642%", top: "131.587px", "--c53-dx": "5.919999999999999px", "--c53-dy": "35.82px", "--c53-dur": "2.7s", "--c53-delay": "-1.7254545454545456s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "64.071%", top: "93.1441px", "--c53-dx": "-0.6399999999999997px", "--c53-dy": "-21.96px", "--c53-dur": "2.6s", "--c53-delay": "-1.9527272727272726s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "64.4388%", top: "130.567px", "--c53-dx": "8.800000000000008px", "--c53-dy": "30.1px", "--c53-dur": "3.1s", "--c53-delay": "-2.3254545454545457s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "66.3046%", top: "95.1899px", "--c53-dx": "2.2400000000000064px", "--c53-dy": "-38.24px", "--c53-dur": "2.3s", "--c53-delay": "-2.3163636363636364s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "65.7473%", top: "129.374px", "--c53-dx": "-4.320000000000003px", "--c53-dy": "24.38px", "--c53-dur": "2.9s", "--c53-delay": "-2.798181818181818s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "67.5414%", top: "96.4567px", "--c53-dx": "5.120000000000002px", "--c53-dy": "-32.52px", "--c53-dur": "3.4s", "--c53-delay": "-3.3345454545454545s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "66.9849%", top: "128.108px", "--c53-dx": "-1.44px", "--c53-dy": "18.66px", "--c53-dur": "2.7s", "--c53-delay": "-3.1981818181818182s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "68.8457%", top: "97.6537px", "--c53-dx": "8.000000000000004px", "--c53-dy": "-26.8px", "--c53-dur": "2.6s", "--c53-delay": "-3.370909090909091s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "69.2119%", top: "126.055px", "--c53-dx": "1.4400000000000093px", "--c53-dy": "34.94px", "--c53-dur": "3.1s", "--c53-delay": "-4.016363636363637s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "70.3128%", top: "98.6823px", "--c53-dx": "10.880000000000003px", "--c53-dy": "-21.08px", "--c53-dur": "2.3s", "--c53-delay": "-3.570909090909091s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "79.0715%", top: "100.603px", "--c53-dx": "8.800000000000008px", "--c53-dy": "-30.1px", "--c53-dur": "2.7s", "--c53-delay": "-1.85s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "79.3983%", top: "123.258px", "--c53-dx": "2.2400000000000064px", "--c53-dy": "38.24px", "--c53-dur": "2.6s", "--c53-delay": "-2.0125s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "80.259%", top: "101.178px", "--c53-dx": "-4.320000000000003px", "--c53-dy": "-24.38px", "--c53-dur": "3.1s", "--c53-delay": "-2.2375000000000003s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "80.5488%", top: "122.652px", "--c53-dx": "5.120000000000002px", "--c53-dy": "32.52px", "--c53-dur": "2.3s", "--c53-delay": "-2.28125s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "81.3211%", top: "101.861px", "--c53-dx": "-1.44px", "--c53-dy": "-18.66px", "--c53-dur": "2.9s", "--c53-delay": "-2.575s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "81.5847%", top: "121.945px", "--c53-dx": "8.000000000000004px", "--c53-dy": "26.8px", "--c53-dur": "3.4s", "--c53-delay": "-2.9125s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "82.9632%", top: "103.184px", "--c53-dx": "1.4400000000000093px", "--c53-dy": "-34.94px", "--c53-dur": "2.7s", "--c53-delay": "-2.8625000000000003s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "82.5461%", top: "121.174px", "--c53-dx": "10.880000000000003px", "--c53-dy": "21.08px", "--c53-dur": "2.6s", "--c53-delay": "-2.9875s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "83.8882%", top: "103.987px", "--c53-dx": "4.320000000000005px", "--c53-dy": "-29.22px", "--c53-dur": "3.1s", "--c53-delay": "-3.4000000000000004s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "84.1339%", top: "119.804px", "--c53-dx": "-2.2399999999999975px", "--c53-dy": "37.36px", "--c53-dur": "2.3s", "--c53-delay": "-3.14375s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "84.8374%", top: "104.769px", "--c53-dx": "7.2px", "--c53-dy": "-23.5px", "--c53-dur": "2.9s", "--c53-delay": "-3.6625s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "85.0961%", top: "119.033px", "--c53-dx": "0.6399999999999979px", "--c53-dy": "31.64px", "--c53-dur": "3.4s", "--c53-delay": "-4.1875s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "86.6328%", top: "105.957px", "--c53-dx": "10.079999999999995px", "--c53-dy": "-39.78px", "--c53-dur": "2.7s", "--c53-delay": "-3.8750000000000004s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "86.1333%", top: "118.328px", "--c53-dx": "3.5200000000000005px", "--c53-dy": "25.92px", "--c53-dur": "2.6s", "--c53-delay": "-3.9625000000000004s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1.5" style={{left: "87.85%", top: "106.506px", "--c53-dx": "-3.040000000000009px", "--c53-dy": "-34.06px", "--c53-dur": "3.1s", "--c53-delay": "-4.5625s"}}></span>
                <span className="absolute bg-destructive c53-drop rounded-full size-1" style={{left: "87.2858%", top: "117.723px", "--c53-dx": "6.400000000000001px", "--c53-dy": "20.2px", "--c53-dur": "2.3s", "--c53-delay": "-4.00625s"}}></span>
              </div>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-56 justify-center text-xs w-full" data-chart="chart-_r_8_">
                <style>{`
 [data-chart=chart-_r_8_] {
  --color-inbound: var(--color-emerald-300);
  --color-outbound: var(--color-emerald-500);
  --color-partner: var(--color-emerald-700);
}


.dark [data-chart=chart-_r_8_] {
  --color-inbound: var(--color-emerald-300);
  --color-outbound: var(--color-emerald-500);
  --color-partner: var(--color-emerald-700);
}
`}</style>
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="736" height="224" style={{position: "relative", cursor: "default", width: "736px", height: "224px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="736" height="224" viewBox="0 0 736 224" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="0" height="224" width="736"></rect>
                          </clippath>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none recharts-area recharts-layer transition-opacity">
                            <defs>
                              <clippath id="clipPath-recharts-area-_r_c_">
                                <rect x="-368" y="0" width="1472" height="224"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-layer" clipPath="url(#clipPath-recharts-area-_r_c_)">
                              <path className="recharts-area-area recharts-curve" name="Partner" strokeWidth="1" fill="var(--color-partner)" fillOpacity="1" height="224" stroke="none" width="736" id="recharts-area-_r_c_" d="M0,181.061C30.667,181.061,30.667,181.061,61.333,181.061C122.667,181.061,122.667,139.514,184,139.514C245.333,139.514,245.333,126.227,306.667,126.227C368,126.227,368,121.199,429.333,121.199C490.667,121.199,490.667,118.823,552,118.823C613.333,118.823,613.333,114.099,674.667,114.099C705.333,114.099,705.333,114.099,736,114.099L736,116.862C705.333,116.862,705.333,116.862,674.667,116.862C613.333,116.862,613.333,124.127,552,124.127C490.667,124.127,490.667,132.746,429.333,132.746C368,132.746,368,142.249,306.667,142.249C245.333,142.249,245.333,162.387,184,162.387C122.667,162.387,122.667,212,61.333,212C30.667,212,30.667,212,0,212Z"></path>
                            </g>
                          </g>
                          <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none recharts-area recharts-layer transition-opacity">
                            <defs>
                              <clippath id="clipPath-recharts-area-_r_d_">
                                <rect x="-368" y="0" width="1472" height="224"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-layer" clipPath="url(#clipPath-recharts-area-_r_d_)">
                              <path className="recharts-area-area recharts-curve" name="Outbound" strokeWidth="1" fill="var(--color-outbound)" fillOpacity="1" height="224" stroke="none" width="736" id="recharts-area-_r_d_" d="M0,102.608C30.667,102.608,30.667,102.608,61.333,102.608C122.667,102.608,122.667,115.978,184,115.978C245.333,115.978,245.333,113.298,306.667,113.298C368,113.298,368,112.691,429.333,112.691C490.667,112.691,490.667,113.575,552,113.575C613.333,113.575,613.333,111.945,674.667,111.945C705.333,111.945,705.333,111.945,736,111.945L736,114.099C705.333,114.099,705.333,114.099,674.667,114.099C613.333,114.099,613.333,118.823,552,118.823C490.667,118.823,490.667,121.199,429.333,121.199C368,121.199,368,126.227,306.667,126.227C245.333,126.227,245.333,139.514,184,139.514C122.667,139.514,122.667,181.061,61.333,181.061C30.667,181.061,30.667,181.061,0,181.061Z"></path>
                            </g>
                          </g>
                          <g className="duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none recharts-area recharts-layer transition-opacity">
                            <defs>
                              <clippath id="clipPath-recharts-area-_r_e_">
                                <rect x="-368" y="0" width="1472" height="224"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-layer" clipPath="url(#clipPath-recharts-area-_r_e_)">
                              <path className="recharts-area-area recharts-curve" name="Inbound" strokeWidth="1" fill="var(--color-inbound)" fillOpacity="1" height="224" stroke="none" width="736" id="recharts-area-_r_e_" d="M0,12C30.667,12,30.667,12,61.333,12C122.667,12,122.667,61.613,184,61.613C245.333,61.613,245.333,81.751,306.667,81.751C368,81.751,368,91.254,429.333,91.254C490.667,91.254,490.667,99.873,552,99.873C613.333,99.873,613.333,107.138,674.667,107.138C705.333,107.138,705.333,107.138,736,107.138L736,111.945C705.333,111.945,705.333,111.945,674.667,111.945C613.333,111.945,613.333,113.575,552,113.575C490.667,113.575,490.667,112.691,429.333,112.691C368,112.691,368,113.298,306.667,113.298C245.333,113.298,245.333,115.978,184,115.978C122.667,115.978,122.667,102.608,61.333,102.608C30.667,102.608,30.667,102.608,0,102.608Z"></path>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="0.5" stroke="var(--card)" strokeWidth="3" fill="none" fillOpacity="1" x1="122.66666666666666" y1="224" x2="122.66666666666666" y2="0"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="1.5" stroke="var(--card)" strokeWidth="3" fill="none" fillOpacity="1" x1="245.33333333333331" y1="224" x2="245.33333333333331" y2="0"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="2.5" stroke="var(--card)" strokeWidth="3" fill="none" fillOpacity="1" x1="368" y1="224" x2="368" y2="0"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="3.5" stroke="var(--card)" strokeWidth="3" fill="none" fillOpacity="1" x1="490.66666666666663" y1="224" x2="490.66666666666663" y2="0"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" x="4.5" stroke="var(--card)" strokeWidth="3" fill="none" fillOpacity="1" x1="613.3333333333334" y1="224" x2="613.3333333333334" y2="0"></line>
                          </g>
                          <g className="recharts-layer recharts-reference-line">
                            <line className="recharts-reference-line-line" stroke="var(--destructive)" strokeWidth="2" fill="none" fillOpacity="1" x1="613.3333333333334" y1="120.49447513812153" x2="613.3333333333334" y2="103.50552486187844"></line>
                          </g>
                        </g>
                        <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-4 relative" aria-hidden="true">
              <span className="-translate-x-1/2 absolute duration-200 motion-reduce:transition-none opacity-100 tabular-nums text-muted-foreground text-xs top-0 transition-opacity whitespace-nowrap" style={{left: "16.6667%"}}>
                -50%
              </span>
              <span className="-translate-x-1/2 absolute duration-200 motion-reduce:transition-none opacity-100 tabular-nums text-muted-foreground text-xs top-0 transition-opacity whitespace-nowrap" style={{left: "33.3333%"}}>
                -40%
              </span>
              <span className="-translate-x-1/2 absolute duration-200 motion-reduce:transition-none opacity-100 tabular-nums text-muted-foreground text-xs top-0 transition-opacity whitespace-nowrap" style={{left: "50%"}}>
                -31%
              </span>
              <span className="-translate-x-1/2 absolute duration-200 motion-reduce:transition-none opacity-100 tabular-nums text-muted-foreground text-xs top-0 transition-opacity whitespace-nowrap" style={{left: "66.6667%"}}>
                -42%
              </span>
              <span className="-translate-x-1/2 absolute duration-200 font-medium motion-reduce:transition-none opacity-100 tabular-nums text-destructive text-xs top-0 transition-opacity whitespace-nowrap" style={{left: "83.3333%"}}>
                -60%
              </span>
            </div>
            <ol className="sr-only" aria-label="Deals by stage">
              <li>
                New Leads: 3,620 deals, 100% of leads
              </li>
              <li>
                Marketing Qualified: 1,824 deals, 50% of leads
              </li>
              <li>
                Sales Qualified: 1,095 deals, 30% of leads
              </li>
              <li>
                Demo Held: 751 deals, 21% of leads
              </li>
              <li>
                Proposal Sent: 439 deals, 12% of leads
              </li>
              <li>
                Closed Won: 176 deals, 4.9% of leads
              </li>
            </ol>
          </div>
        </CardContent>
        <CardFooter className="flex-wrap gap-x-4 gap-y-2 justify-between">
          <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" size="sm" spacing="2" aria-label="Focus a lead source" style={{"--gap": "2"}}>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="default" size="sm" spacing="2">
              <span className="bg-emerald-300 rounded-full shrink-0 size-2" aria-hidden="true"></span>
              Inbound
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="sm" spacing="2">
              <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
              Outbound
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-default data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="sm" spacing="2">
              <span className="bg-emerald-700 rounded-full shrink-0 size-2" aria-hidden="true"></span>
              Partner
            </ToggleGroupItem>
          </ToggleGroup>
          <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
            <span className="flex gap-1.5 items-center motion-reduce:hidden">
              <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
              Lost deals
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            </span>
            <span className="tabular-nums">
              Through Oct 12, 2026
            </span>
          </span>
        </CardFooter>
      </Card>
    </div>
  )
}
