import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 pt-16 w-full">
      <span className="sr-only" role="status" aria-live="polite">
        {"Completed with issues. 2 of 5 succeeded."}
      </span>
      <Frame className="max-w-2xl w-full" spacing="default" aria-busy="false">
        <header className="flex flex-row gap-3 h-9 items-center px-(--frame-panel-header-px) py-0">
          <div className="flex-1 font-semibold min-w-0 text-sm truncate">
            {"Reproduce webhook failure"}
          </div>
          <div className="flex gap-1 items-center ms-auto shrink-0">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 animate-in bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none duration-300 ease-out fade-in-50 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 motion-reduce:animate-none outline-none px-1.25 py-0.5 relative slide-in-from-bottom-1 style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
              {"Completed with issues"}
            </Badge>
            <DropdownMenu>
            <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run actions" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <FramePanel className="flex flex-col gap-0 p-1.5 shadow-none">
          <Item className="animate-in duration-300 ease-out fade-in-50 flex-nowrap gap-2.5 group/row items-start motion-reduce:animate-none px-2 py-1.5 slide-in-from-bottom-1 text-left" variant="default" size="xs">
            <ItemMedia className="h-5 self-start translate-y-0 w-4" variant="icon">
              <span className="text-success">
                <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
            </ItemMedia>
            <ItemContent className="gap-0.5 min-w-0">
              <ItemTitle className="flex-wrap font-normal gap-y-1 leading-5 min-w-0 overflow-visible text-[13px] w-full">
                <span className="min-w-0 text-foreground">
                  {"Reproduce the 500 on charge.refunded"}
                </span>
                <span className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Done"}
                  </Badge>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy this row" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </ItemTitle>
              <ItemDescription className="break-all font-mono min-w-0 text-xs">
                {"pnpm test src/api/__tests__/stripe-webhook.test.ts"}
              </ItemDescription>
            </ItemContent>
            <span className="leading-5 self-start shrink-0 tabular-nums text-end text-muted-foreground text-xs w-12">
              {"2m 28s"}
            </span>
          </Item>
          <Item className="animate-in duration-300 ease-out fade-in-50 flex-nowrap gap-2.5 group/row items-start motion-reduce:animate-none px-2 py-1.5 slide-in-from-bottom-1 text-left" variant="default" size="xs">
            <ItemMedia className="h-5 self-start translate-y-0 w-4" variant="icon">
              <span className="text-success">
                <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
            </ItemMedia>
            <ItemContent className="gap-0.5 min-w-0">
              <ItemTitle className="flex-wrap font-normal gap-y-1 leading-5 min-w-0 overflow-visible text-[13px] w-full">
                <span className="min-w-0 text-foreground">
                  {"Patch the refund branch in stripe-webhook.ts"}
                </span>
                <span className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Done"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Unsupported"}
                  </Badge>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy this row" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </ItemTitle>
              <ItemDescription className="min-w-0 text-xs">
                {"Nothing checked this"}
              </ItemDescription>
            </ItemContent>
            <span className="leading-5 self-start shrink-0 tabular-nums text-end text-muted-foreground text-xs w-12">
              {"1m 32s"}
            </span>
          </Item>
          <Item className="animate-in duration-300 ease-out fade-in-50 flex-nowrap gap-2.5 group/row items-start motion-reduce:animate-none px-2 py-1.5 slide-in-from-bottom-1 text-left" variant="default" size="xs">
            <ItemMedia className="h-5 self-start translate-y-0 w-4" variant="icon">
              <span className="text-destructive">
                <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span>
            </ItemMedia>
            <ItemContent className="gap-0.5 min-w-0">
              <ItemTitle className="flex-wrap font-normal gap-y-1 leading-5 min-w-0 overflow-visible text-[13px] w-full">
                <span className="min-w-0 text-foreground">
                  {"Drain the 41 queued events"}
                </span>
                <span className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    {"Failed"}
                  </Badge>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Retry this item" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy this row" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </ItemTitle>
              <ItemDescription className="min-w-0 text-xs">
                {"Stripe returned 429 on the replay endpoint. The limit resets in 60s"}
              </ItemDescription>
            </ItemContent>
            <span className="leading-5 self-start shrink-0 tabular-nums text-end text-muted-foreground text-xs w-12">
              {"31s"}
            </span>
          </Item>
          <Item className="animate-in duration-300 ease-out fade-in-50 flex-nowrap gap-2.5 group/row items-start motion-reduce:animate-none px-2 py-1.5 slide-in-from-bottom-1 text-left" variant="default" size="xs">
            <ItemMedia className="h-5 self-start translate-y-0 w-4" variant="icon">
              <span className="border border-dashed border-muted-foreground/40 rounded-full size-4" aria-hidden="true"></span>
            </ItemMedia>
            <ItemContent className="gap-0.5 min-w-0">
              <ItemTitle className="flex-wrap font-normal gap-y-1 leading-5 min-w-0 overflow-visible text-[13px] w-full">
                <span className="min-w-0 text-foreground">
                  {"Restart the events worker"}
                </span>
                <span className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Skipped"}
                  </Badge>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy this row" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </ItemTitle>
              <ItemDescription className="min-w-0 text-xs">
                {"Waiting on the queue drain above"}
              </ItemDescription>
            </ItemContent>
            <span className="leading-5 self-start shrink-0 tabular-nums text-end text-muted-foreground text-xs w-12">
              {"0s"}
            </span>
          </Item>
          <Item className="animate-in duration-300 ease-out fade-in-50 flex-nowrap gap-2.5 group/row items-start motion-reduce:animate-none px-2 py-1.5 slide-in-from-bottom-1 text-left" variant="default" size="xs">
            <ItemMedia className="h-5 self-start translate-y-0 w-4" variant="icon">
              <span className="text-destructive">
                <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span>
            </ItemMedia>
            <ItemContent className="gap-0.5 min-w-0">
              <ItemTitle className="flex-wrap font-normal gap-y-1 leading-5 min-w-0 overflow-visible text-[13px] w-full">
                <span className="min-w-0 text-foreground">
                  {"File the regression in Linear"}
                </span>
                <span className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    {"Failed"}
                  </Badge>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy this row" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </ItemTitle>
              <ItemDescription className="line-clamp-none min-w-0 text-sm">
                {"A workspace admin has to grant the scope. A retry alone will fail again."}
              </ItemDescription>
              <ItemActions className="mt-1 self-start">
                <Button type="button" tabIndex="0">
                  {"Grant issues:create"}
                </Button>
              </ItemActions>
            </ItemContent>
            <span className="leading-5 self-start shrink-0 tabular-nums text-end text-muted-foreground text-xs w-12">
              {"12s"}
            </span>
          </Item>
        </FramePanel>
        <footer className="flex flex-row flex-wrap gap-2 items-center px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <ButtonGroup role="group" aria-label="Retry decision">
            <Button type="button" tabIndex="0">
              {"Retry 1 failed"}
            </Button>
            <Button type="button" tabIndex="0">
              {"Keep what succeeded"}
            </Button>
          </ButtonGroup>
          <div className="flex gap-1.5 items-center ms-auto text-muted-foreground text-xs">
            <span className="tabular-nums">
              {"5 settled, 2 succeeded"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="shrink-0 tabular-nums">
              {"ran 4m 43s"}
            </span>
          </div>
        </footer>
      </Frame>
    </div>
  )
}
