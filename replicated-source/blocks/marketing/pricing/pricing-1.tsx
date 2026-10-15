import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry-neui/bases/base/neui/number-field"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="pricing-1-title">
        <div className="@4xl:py-16 @min-[40rem]:px-6 @min-[64rem]:px-8 flex flex-col gap-10 max-w-6xl mx-auto px-4 py-12 w-full">
          <div className="flex flex-col gap-11 items-center text-center">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance tracking-tight" id="pricing-1-title">
                {"Pricing"}
              </h2>
              <p className="@2xl:leading-6 @2xl:text-base leading-5 max-w-160 text-balance text-muted-foreground text-sm">
                <span className="@2xl:block">
                  {"Simple plans for growing teams. Start free, add seats"}
                </span>
                <span className="@2xl:block">
                  {"as you grow, and cancel whenever you need to."}
                </span>
              </p>
            </div>
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing period">
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_0_" extracted="1">
                  {"Monthly"}
                </TabsTrigger>
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                  {"Yearly"}
                  <Badge className="-mr-1 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Save 20%"}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Card className="@2xl:max-w-none max-w-md mx-auto py-0 w-full" size="default">
            <ul className="-ml-px -mt-px @2xl:grid-cols-2 @5xl:grid-cols-4 grid grid-cols-1" role="list">
              <li className="border-border border-l border-t gap-(--card-spacing) grid grid-rows-subgrid min-w-0 py-(--card-spacing) relative row-span-4">
                <CardHeader>
                  <CardTitle role="heading" aria-level="3">
                    {"Free"}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {"For side projects, learning and open source work."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="flex gap-1 items-baseline">
                    <span className="font-semibold tabular-nums text-3xl tracking-tight">
                      {"Free"}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {"Open source, MIT licensed"}
                  </p>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-2.5" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-layers shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        {"170 open primitives"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-square-terminal shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                          <path d="m7 11 2-2-2-2"></path>
                          <path d="M11 13h4"></path>
                          <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                        {"shadcn CLI install"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-git-branch shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
                          <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                          <circle cx={18} cy={6} r={3}></circle>
                          <circle cx={6} cy={18} r={3}></circle>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        {"Base UI and Radix"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-palette shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                          <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                          <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                          <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                          <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                        {"8 theme styles"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-message-square shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                        {"Community forum"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                  </ul>
                </CardContent>
                <CardContent className="flex flex-col gap-2 self-end">
                  <Button className="w-full" href="#" role="button" tabIndex={0}>
                    {"Start Free"}
                  </Button>
                </CardContent>
              </li>
              <li className="bg-muted border-border border-l border-t gap-(--card-spacing) grid grid-rows-subgrid min-w-0 py-(--card-spacing) relative row-span-4">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-linear-to-r/oklch bg-origin-border bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium from-green-500 gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-(--card-spacing) rounded-t-none! shadow-emerald-900/25 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs to-emerald-700 top-0 transition-shadow" aria-hidden="true">
                  {"Most Popular"}
                </Badge>
                <CardHeader>
                  <CardTitle role="heading" aria-level="3">
                    {"Pro"}
                    <span className="sr-only">
                      {", Most Popular"}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {"For one developer building production apps."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="flex gap-1 items-baseline">
                    <span className="font-semibold tabular-nums text-3xl tracking-tight">
                      {"$28"}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {"a month, billed yearly"}
                  </p>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    {"Free, plus"}
                  </p>
                  <ul className="flex flex-col gap-2.5" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-layout-grid shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                          <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                          <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                          <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                          <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                        {"485+ Pro blocks"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                        {"NeUI MCP server"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-workflow shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                          <rect width={8} height={8} x={3} y={3} rx={2}></rect>
                          <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                          <rect width={8} height={8} x={13} y={13} rx={2}></rect>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                        {"Agent Skills"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-refresh-cw shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                          <path d="M21 3v5h-5"></path>
                          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                          <path d="M8 16H3v5"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                        {"Future block updates"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-key-round shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                          <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                        {"Private registry token"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                  </ul>
                </CardContent>
                <CardContent className="flex flex-col gap-2 self-end">
                  <Button className="w-full" href="#" role="button" tabIndex={0}>
                    {"Get Pro"}
                  </Button>
                </CardContent>
              </li>
              <li className="border-border border-l border-t gap-(--card-spacing) grid grid-rows-subgrid min-w-0 py-(--card-spacing) relative row-span-4">
                <CardHeader>
                  <CardTitle role="heading" aria-level="3">
                    {"Team"}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {"For product teams sharing one block library."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="flex gap-1 items-baseline">
                    <span className="font-semibold tabular-nums text-3xl tracking-tight">
                      {"$100"}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {"a month, billed yearly"}
                  </p>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    {"Pro, plus"}
                  </p>
                  <ul className="flex flex-col gap-2.5" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx={9} cy={7} r={4}></circle>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                        {"5 team seats"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-user-round-cog shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                          <path d="m14.305 19.53.923-.382"></path>
                          <path d="m15.228 16.852-.923-.383"></path>
                          <path d="m16.852 15.228-.383-.923"></path>
                          <path d="m16.852 20.772-.383.924"></path>
                          <path d="m19.148 15.228.383-.923"></path>
                          <path d="m19.53 21.696-.382-.924"></path>
                          <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                          <path d="m20.772 16.852.924-.383"></path>
                          <path d="m20.772 19.148.924.383"></path>
                          <circle cx={10} cy={8} r={5}></circle>
                          <circle cx={18} cy={18} r={3}></circle>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                        {"Seat management"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                        {"Shared private registry"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-headphones shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                        {"Priority support"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                  </ul>
                </CardContent>
                <CardContent className="flex flex-col gap-2 self-end">
                  <NumberField className="flex-row items-center justify-between" size="default">
                    <NumberFieldScrubArea role="presentation" style={{touchAction: "none", userSelect: "none"}}>
                      <Label className="cursor-ew-resize" htmlFor="_r_u_">
                        {"Seats"}
                      </Label>
                    </NumberFieldScrubArea>
                    <NumberFieldGroup className="w-auto" role="group">
                      <NumberFieldDecrement type="button" tabIndex={-1} aria-disabled="false" aria-label="Decrease" aria-controls="_r_u_" style={{userSelect: "none"}}>
                        <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine">
                          <path d="M5 12h14"></path>
                        </svg>
                      </NumberFieldDecrement>
                      <NumberFieldInput className="w-10" id="_r_u_" inputmode="numeric" autoComplete="off" autocorrect="off" spellCheck="false" aria-roledescription="Number field" type="text" value="5"></NumberFieldInput>
                      <NumberFieldIncrement type="button" tabIndex={-1} aria-disabled="false" aria-label="Increase" aria-controls="_r_u_" style={{userSelect: "none"}}>
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </NumberFieldIncrement>
                    </NumberFieldGroup>
                  </NumberField>
                  <input min={2} max={20} step={1} aria-hidden="true" tabIndex={-1} type="number" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Button className="w-full" href="#" role="button" tabIndex={0}>
                    {"Get Team"}
                  </Button>
                </CardContent>
              </li>
              <li className="border-border border-l border-t gap-(--card-spacing) grid grid-rows-subgrid min-w-0 py-(--card-spacing) relative row-span-4">
                <CardHeader>
                  <CardTitle role="heading" aria-level="3">
                    {"Unlimited"}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {"For companies rolling out NeUI across every team."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="flex gap-1 items-baseline">
                    <span className="text-muted-foreground">
                      {"From"}
                    </span>
                    <span className="font-semibold tabular-nums text-3xl tracking-tight">
                      {"$750"}
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {"a month, yearly contract"}
                  </p>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    {"Team, plus"}
                  </p>
                  <ul className="flex flex-col gap-2.5" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-lock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                          <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                        {"Single sign-on"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                        {"Security review"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-history shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M12 7v5l4 2"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                        {"Audit log"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-receipt-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                          <path d="M13 16H8"></path>
                          <path d="M14 8H8"></path>
                          <path d="M16 12H8"></path>
                          <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                        {"Invoice billing"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-code shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                          <path d="m16 18 6-6-6-6"></path>
                          <path d="m8 6-6 6 6 6"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_19_" baseUiTooltipTrigger="">
                        {"Custom block requests"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-calendar shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="cursor-default focus-visible:ring-3 focus-visible:ring-ring/50 min-w-0 outline-none tabular-nums text-left" type="button" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                        {"Onboarding workshop"}
                      </TooltipTrigger>
                      </Tooltip>
                    </li>
                  </ul>
                </CardContent>
                <CardContent className="flex flex-col gap-2 self-end">
                  <Button className="w-full" href="#" role="button" tabIndex={0}>
                    {"Contact Us"}
                  </Button>
                </CardContent>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  )
}
