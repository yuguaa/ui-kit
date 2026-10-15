import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  MarkerContent,
  MarkerIcon,
} from "@/registry/bases/base/ui/marker"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Marker } from "@/registry/bases/radix/ui/marker"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 pt-16 w-full">
      <Frame className="max-w-xl w-full" spacing="default">
        <header className="flex flex-row gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="font-semibold text-sm truncate">
            Reproduce webhook failure
          </div>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
            Needs you
          </Badge>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run options" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </header>
        <FramePanel className="flex flex-col p-0">
          <Marker className="animate-in duration-300 ease-out fade-in-50 group/row items-start motion-reduce:animate-none px-(--frame-panel-px) py-2 slide-in-from-bottom-1" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-col gap-0.5 text-[13px]">
              <span className="flex flex-wrap gap-x-2 gap-y-1 items-center leading-5 min-h-5 min-w-0">
                <span className="text-foreground">
                  Traced the failing event
                </span>
                <span className="basis-full flex gap-1 items-center min-w-0 sm:basis-0 sm:flex-1">
                  <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
                    charge.refunded
                  </span>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy value" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </span>
            </MarkerContent>
            <span className="flex h-5 items-center self-start shrink-0 tabular-nums text-muted-foreground text-xs">
              0:08
            </span>
          </Marker>
          <Marker className="animate-in duration-300 ease-out fade-in-50 group/row items-start motion-reduce:animate-none px-(--frame-panel-px) py-2 slide-in-from-bottom-1" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-col gap-0.5 text-[13px]">
              <span className="flex flex-wrap gap-x-2 gap-y-1 items-center leading-5 min-h-5 min-w-0">
                <span className="text-foreground">
                  41 events queued
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  Check
                </Badge>
                <span className="basis-full flex gap-1 items-center min-w-0 sm:basis-0 sm:flex-1">
                  <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
                    events
                  </span>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy value" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </span>
              <span className="leading-5 min-w-0 text-muted-foreground text-xs">
                39 still pending, 2 already past the retry window
              </span>
            </MarkerContent>
            <span className="flex h-5 items-center self-start shrink-0 tabular-nums text-muted-foreground text-xs">
              0:03
            </span>
          </Marker>
          <Marker className="animate-in duration-300 ease-out fade-in-50 group/row items-start motion-reduce:animate-none px-(--frame-panel-px) py-2 slide-in-from-bottom-1" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-col gap-0.5 text-[13px]">
              <span className="flex flex-wrap gap-x-2 gap-y-1 items-center leading-5 min-h-5 min-w-0">
                <span className="text-foreground">
                  Read 4 pages
                </span>
                <span className="basis-full flex gap-1 items-center min-w-0 sm:basis-0 sm:flex-1">
                  <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
                    stripe.com/docs/webhooks
                  </span>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy link" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open link" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </span>
            </MarkerContent>
            <span className="flex h-5 items-center self-start shrink-0 tabular-nums text-muted-foreground text-xs">
              0:06
            </span>
          </Marker>
          <Marker className="animate-in duration-300 ease-out fade-in-50 group/row items-start motion-reduce:animate-none px-(--frame-panel-px) py-2 slide-in-from-bottom-1" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <svg className="lucide lucide-circle-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-col gap-0.5 text-[13px]">
              <span className="flex flex-wrap gap-x-2 gap-y-1 items-center leading-5 min-h-5 min-w-0">
                <span className="text-foreground">
                  Reproduced the 500
                </span>
                <span className="basis-full flex gap-1 items-center min-w-0 sm:basis-0 sm:flex-1">
                  <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
                    stripe-webhook.test.ts
                  </span>
                  <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy path" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open file" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </span>
                </span>
              </span>
            </MarkerContent>
            <span className="flex h-5 items-center self-start shrink-0 tabular-nums text-muted-foreground text-xs">
              0:12
            </span>
          </Marker>
          <div className="bg-muted/50 border-border border-y flex flex-col gap-2 px-(--frame-panel-px) py-2.5">
            <Marker className="group/row items-start" variant="default" role="status" aria-live="polite" aria-busy="false">
              <MarkerIcon className="flex h-5 items-center justify-center self-start text-success w-4" aria-hidden="true">
                <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </MarkerIcon>
              <MarkerContent className="animate-in duration-300 ease-out fade-in-50 flex flex-1 flex-col gap-0.5 motion-reduce:animate-none slide-in-from-bottom-2 text-[13px]">
                <span className="flex flex-wrap gap-x-2 gap-y-1 items-center leading-5 min-h-5 min-w-0">
                  <span className="font-medium text-foreground">
                    Needs your answer
                  </span>
                  <span className="basis-full flex gap-1 items-center min-w-0 sm:basis-0 sm:flex-1">
                    <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
                      src/api/stripe-webhook.ts
                    </span>
                    <span className="flex focus-within:opacity-100 focus-within:pointer-events-auto gap-0.5 group-hover/row:opacity-100 group-hover/row:pointer-events-auto h-5 items-center max-md:opacity-100 max-md:pointer-events-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:pointer-events-auto pointer-events-none shrink-0 transition-opacity">
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy path" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open file" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                  </span>
                </span>
                <span className="leading-5 text-muted-foreground text-sm">
                  The same guard covers disputes. Fix both branches, or refunds only?
                </span>
              </MarkerContent>
            </Marker>
            <div className="ps-6">
              <form className="pt-1">
                <InputGroup role="group">
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_t_" placeholder="Type your answer" aria-label="Answer the question" value="" />
                  <InputGroupAddon className="gap-1" role="group" data-align="inline-end">
                    <Button className="aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-input-group-button cn-input-group-button-size-xs flex shadow-none" type="submit" disabled="" tabIndex="0" aria-disabled="true" size="xs">
                      Send
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </div>
          </div>
          <Marker className="items-start px-(--frame-panel-px) py-2" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <span className="border border-current border-dashed rounded-full size-4"></span>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-wrap gap-x-2 gap-y-1 items-center min-h-5 text-[13px]">
              <span className="min-w-0 text-muted-foreground">
                Editing the refund branch
              </span>
              <span className="basis-full font-mono min-w-0 sm:basis-0 sm:flex-1 text-muted-foreground text-xs truncate">
                src/api/stripe-webhook.ts
              </span>
            </MarkerContent>
          </Marker>
          <Marker className="items-start px-(--frame-panel-px) py-2" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-destructive w-4" aria-hidden="true">
              <svg className="lucide lucide-shield size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-wrap gap-x-2 gap-y-1 items-center min-h-5 text-[13px]">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                fly
              </Badge>
              <span className="min-w-0 text-muted-foreground">
                Needs your approval
              </span>
              <span className="basis-full font-mono min-w-0 sm:basis-0 sm:flex-1 text-muted-foreground text-xs truncate">
                webhook-consumer
              </span>
            </MarkerContent>
            <span className="flex h-5 items-center self-start shrink-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                High impact
              </Badge>
            </span>
          </Marker>
          <Marker className="items-start px-(--frame-panel-px) py-2" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <span className="border border-current border-dashed rounded-full size-4"></span>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-wrap gap-x-2 gap-y-1 items-center min-h-5 text-[13px]">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                fly
              </Badge>
              <span className="min-w-0 text-muted-foreground">
                scale_app
              </span>
              <span className="basis-full font-mono min-w-0 sm:basis-0 sm:flex-1 text-muted-foreground text-xs truncate">
                webhook-consumer
              </span>
            </MarkerContent>
          </Marker>
          <Marker className="items-start px-(--frame-panel-px) py-2" variant="default">
            <MarkerIcon className="flex h-5 items-center justify-center self-start text-muted-foreground w-4" aria-hidden="true">
              <span className="border border-current border-dashed rounded-full size-4"></span>
            </MarkerIcon>
            <MarkerContent className="flex flex-1 flex-wrap gap-x-2 gap-y-1 items-center min-h-5 text-[13px]">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-mono font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                linear
              </Badge>
              <span className="min-w-0 text-muted-foreground">
                create_issue
              </span>
              <span className="basis-full font-mono min-w-0 sm:basis-0 sm:flex-1 text-muted-foreground text-xs truncate">
                engineering backlog
              </span>
            </MarkerContent>
          </Marker>
        </FramePanel>
        <footer className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <span className="flex gap-2 items-center text-muted-foreground text-xs">
            <span className="tabular-nums">
              Step 5 of 9
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="tabular-nums">
              0:29
            </span>
          </span>
        </footer>
      </Frame>
    </div>
  )
}
