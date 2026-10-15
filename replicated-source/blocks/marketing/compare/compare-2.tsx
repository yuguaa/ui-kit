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
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="compare-2-title">
        <div className="@container/block flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 items-center px-6 text-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5! bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-6 outline-none px-2 py-0.75 relative rounded-full text-foreground text-sm transition-colors" href="#">
              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx={4} cy={20} r={2}></circle>
              </svg>
              {"NeUI for AI Agents"}
              <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Badge>
            <h2 className="@xl/block:text-4xl font-semibold max-w-[27ch] text-3xl text-pretty" id="compare-2-title">
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
          <div className="flex flex-col gap-4">
            <div className="@xl/block:grid-cols-[minmax(0,1fr)_25%_35%] grid grid-cols-[minmax(0,1fr)_minmax(4.5rem,16%)_42%]">
              <p className="@xl/block:pr-4 @xl/block:text-start font-medium pr-2 text-center text-muted-foreground text-sm">
                {"Workflow"}
                <span className="@xl/block:inline block">
                  {"Features"}
                </span>
              </p>
              <p className="font-medium text-center text-muted-foreground text-sm">
                {"NeUI"}
                <span className="@xl/block:inline block">
                  {"Approach"}
                </span>
              </p>
              <p className="@xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] @xl/block:text-start font-medium pl-2 text-center text-muted-foreground text-sm">
                {"Prompt-Only"}
                <span className="@xl/block:inline block">
                  {"Approach"}
                </span>
              </p>
            </div>
            <div className="@xl/block:grid-cols-[minmax(0,1fr)_25%_35%] grid grid-cols-[minmax(0,1fr)_minmax(4.5rem,16%)_42%] isolate relative">
              <Card className="-z-10 @max-xl/block:hidden absolute bg-emerald-900 col-end-3 col-start-2 inset-0 ring-0 shadow-lg" size="default" aria-hidden="true">
                <span className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(255,255,255,0.07)_0.5px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></span>
                <span className="-left-20 -top-25 absolute bg-lime-400/14 blur-[100px] pointer-events-none rounded-full size-[250px]" aria-hidden="true"></span>
              </Card>
              <div className="@xl/block:gap-2.5 @xl/block:pr-4 @xl/block:pt-6 flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Intent-Based Registry"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Search"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" aria-label="About Intent-Based Registry Search" extracted="1">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="@xl/block:pt-6 flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="@xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] @xl/block:pt-6 [&_svg]:size-3.5 flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Search and compare every item by hand"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                    <path d="M13 5h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 19h8"></path>
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Ranked Matches with Clear"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Context"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" aria-label="About Ranked Matches with Clear Context">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Pick results without enough useful context"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-layout-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                    <rect width={7} height={18} x={3} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Full-Page UI Planning"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Support"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" aria-label="About Full-Page UI Planning Support">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Plan every page section from scratch"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-code-xml" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeXmlIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Verified Component API"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Access"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" aria-label="About Verified Component API Access">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Guess props, states, and API details"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-file-code-corner" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileCode2Icon" tabler="IconFileCode" hugeicons="FileCodeIcon" phosphor="FileCodeIcon" remixicon="RiFileCodeLine" aria-hidden="true">
                    <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="m5 16-3 3 3 3"></path>
                    <path d="m9 22 3-3-3-3"></path>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Real Working UI"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Examples"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" aria-label="About Real Working UI Examples">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Build and test each example yourself"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-square-terminal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2}></rect>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Exact shadcn Install"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Commands"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" aria-label="About Exact shadcn Install Commands">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Find, check, and copy each command"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-circle-check-big" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckBigIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Props and Usage"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Validation"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" aria-label="About Props and Usage Validation">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Spot broken usage after writing code"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-blocks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BlocksIcon" tabler="IconComponents" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiApps2Line" aria-hidden="true">
                    <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path>
                    <rect x={14} y={2} width={8} height={8} rx={1}></rect>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Reuse-First Block"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Selection"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" aria-label="About Reuse-First Block Selection">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Rebuild the same common UI patterns"}
                  </p>
                </span>
              </div>
              <div className="-mt-px @xl/block:gap-2.5 @xl/block:pb-6 @xl/block:pr-4 border-t flex gap-2 items-start min-w-0 pr-2 py-4">
                <IconTile className="[--icon-tile-size:--spacing(8.5)] bg-primary/5 border-0" variant="frame" size="default">
                  <svg className="lucide lucide-clipboard-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardCheckIcon" tabler="IconClipboardCheck" hugeicons="TaskDone02Icon" phosphor="ClipboardTextIcon" remixicon="RiClipboardLine" aria-hidden="true">
                    <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </IconTile>
                <p className="@4xl/block:mt-1.75 [overflow-wrap:anywhere] font-medium min-w-0 text-sm">
                  {"Final Post-Install UI"}
                  <span className="flex-wrap gap-x-1 inline-flex items-center max-w-full">
                    {"Audit"}
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:size-3.5 after:-inset-2 after:absolute focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-full shrink-0 size-3.5 text-muted-foreground transition-colors" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" aria-label="About Final Post-Install UI Audit">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </p>
              </div>
              <div className="-mt-px @xl/block:border-white/10 @xl/block:pb-6 border-t flex items-start justify-center py-4">
                <IconTile className="@xl/block:bg-black/10 [--icon-tile-size:--spacing(8.5)] after:bg-linear-to-b after:border-white/10 after:from-emerald-800 after:shadow-md after:to-emerald-900 bg-emerald-900/10 border-0" variant="frame" size="default">
                  <span className="sr-only">
                    {"Covered by the NeUI approach"}
                  </span>
                  <svg className="lucide lucide-check text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </IconTile>
              </div>
              <div className="-mt-px @xl/block:pb-6 @xl/block:pl-[clamp(1rem,35cqw_-_320px,3rem)] [&_svg]:size-3.5 border-t flex items-start pl-2 py-4">
                <span className="@4xl/block:mt-1.75 @xl/block:gap-2.5 flex gap-2 items-start min-w-0">
                  <span className="flex h-5 items-center shrink-0 text-foreground/20">
                    <svg className="lucide lucide-circle-minus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="M8 12h8"></path>
                    </svg>
                  </span>
                  <p className="font-medium min-w-0 text-muted-foreground text-sm">
                    <span className="sr-only">
                      {"Prompt-only approach:"}
                    </span>
                    {"Review every screen and detail manually"}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
