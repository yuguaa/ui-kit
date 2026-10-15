import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="compare-3-title">
        <div className="@container/block flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 items-center px-6 text-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5! bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-colors" href="#">
              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
              {"NeUI for AI Agents"}
              <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Badge>
            <h2 className="@xl/block:text-4xl font-semibold max-w-[27ch] text-3xl text-pretty tracking-tight" id="compare-3-title">
              {"Build Truly Production-Ready UI"}
              <span className="-my-1.5 [text-box:trim-both_cap_alphabetic] bg-amber-300 inline-block px-1.5 py-1.5 rounded-sm text-neutral-950">
                {"10x Faster"}
              </span>
              {"with NeUI MCP"}
            </h2>
            <p className="max-w-160 text-muted-foreground text-sm">
              {"Give your coding agent registry search, real APIs, exact install steps, and ready-made blocks, so you can build polished UI with less prompting and rework."}
            </p>
          </div>
          <div className="@2xl/block:gap-0 @2xl/block:grid-cols-2 @2xl/block:max-w-192 gap-8 grid max-w-96 mx-auto w-full" style={{"--compare-rows": "7", "--compare-tracks": "8"}}>
            <Card className="@2xl/block:grid @2xl/block:grid-rows-subgrid @2xl/block:row-span-(--compare-tracks) bg-emerald-900 dark gap-0 isolate overflow-clip py-0 relative ring-0 shadow-2xl" size="default">
              <span className="-z-10 absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.07)_0.5px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
              <span className="-left-20 -top-25 -z-10 absolute bg-lime-400/14 blur-[100px] pointer-events-none rounded-full size-[250px]" aria-hidden="true"></span>
              <h3 className="font-medium pb-4 pt-6 px-6 text-center text-lg">
                {"NeUI Approach"}
              </h3>
              <ul className="@2xl/block:grid @2xl/block:grid-rows-subgrid @2xl/block:row-span-(--compare-rows)" role="list">
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Intent-Based Registry"}
                    <span className="whitespace-nowrap">
                      {"Search"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" aria-label="About Intent-Based Registry Search" extracted="1">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                      <path d="M13 5h8"></path>
                      <path d="M13 12h8"></path>
                      <path d="M13 19h8"></path>
                      <path d="m3 17 2 2 4-4"></path>
                      <path d="m3 7 2 2 4-4"></path>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Ranked Matches with"}
                    <span className="whitespace-nowrap">
                      {"Context"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" aria-label="About Ranked Matches with Context">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-layout-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                      <rect width="7" height="18" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Whole-Page UI"}
                    <span className="whitespace-nowrap">
                      {"Planning"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" aria-label="About Whole-Page UI Planning">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-code-xml" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeXmlIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                      <path d="m18 16 4-4-4-4"></path>
                      <path d="m6 8-4 4 4 4"></path>
                      <path d="m14.5 4-5 16"></path>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Real Component API"}
                    <span className="whitespace-nowrap">
                      {"Access"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" aria-label="About Real Component API Access">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-file-code-corner" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileCode2Icon" tabler="IconFileCode" hugeicons="FileCodeIcon" phosphor="FileCodeIcon" remixicon="RiFileCodeLine" aria-hidden="true">
                      <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="m5 16-3 3 3 3"></path>
                      <path d="m9 22 3-3-3-3"></path>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Working UI"}
                    <span className="whitespace-nowrap">
                      {"Examples"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" aria-label="About Working UI Examples">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-circle-check-big" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckBigIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Exact Install"}
                    <span className="whitespace-nowrap">
                      {"Commands"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" aria-label="About Exact Install Commands">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
                <li className="border-t flex gap-2.5 items-center last:pb-6 px-6 py-4">
                  <IconTile className="[--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-black/10 border-0 text-white/60" variant="frame" size="default">
                    <svg className="lucide lucide-blocks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BlocksIcon" tabler="IconComponents" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiApps2Line" aria-hidden="true">
                      <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path>
                      <rect x="14" y="2" width="8" height="8" rx="1"></rect>
                    </svg>
                  </IconTile>
                  <p className="flex-1 font-medium min-w-0 text-sm">
                    {"Props and Usage"}
                    <span className="whitespace-nowrap">
                      {"Checks"}
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute align-middle focus-visible:ring-2 focus-visible:ring-foreground hover:text-white inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-white/50 transition-colors" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" aria-label="About Props and Usage Checks">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </p>
                </li>
              </ul>
            </Card>
            <div className="@2xl/block:grid @2xl/block:grid-rows-subgrid @2xl/block:row-span-(--compare-tracks)">
              <h3 className="font-medium pb-4 pt-6 px-6 text-center text-lg">
                {"Prompt-Only Approach"}
              </h3>
              <ul className="@2xl/block:grid @2xl/block:grid-rows-subgrid @2xl/block:row-span-(--compare-rows)" role="list">
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Search and compare items by hand"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Pick results with little context"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Plan each page from scratch"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Guess props, states, and APIs"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Build and test examples yourself"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Find and copy each command"}
                  </p>
                </li>
                <li className="@2xl/block:px-[clamp(1.5rem,50cqw_-_336px,3rem)] border-t flex gap-2.5 items-center last:pb-6 px-10.5 py-4">
                  <span className="[&_svg]:size-3.5 flex h-8.5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="flex-1 font-medium min-w-0 text-muted-foreground text-sm">
                    {"Spot issues after writing code"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
